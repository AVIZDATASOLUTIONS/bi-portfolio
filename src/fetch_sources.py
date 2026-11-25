"""Capture scoped public extracts. Existing snapshots stay intact until a full refresh succeeds."""
import argparse
import csv
import gzip
import hashlib
import io
import json
import os
import time
import zipfile
from concurrent.futures import ThreadPoolExecutor
from datetime import date, datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, urljoin
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
USA = "https://api.usaspending.gov"
NYC = "https://data.cityofnewyork.us/resource/erm2-nwe9"
AGENCIES = ("Department of Health and Human Services", "Department of the Treasury", "General Services Administration")
NAICS = ("541511", "541512")
FED_FIELDS = (
    "contract_transaction_unique_key", "contract_award_unique_key", "award_id_piid",
    "modification_number", "action_date", "federal_action_obligation", "awarding_agency_name",
    "awarding_sub_agency_name", "recipient_uei", "recipient_name", "naics_code",
    "extent_competed", "type_of_set_aside",
)
NYC_FIELDS = ("unique_key", "created_date", "closed_date", "status", "borough", "descriptor")


def request(url, body=None):
    for attempt in range(4):
        try:
            req = Request(url, data=json.dumps(body).encode() if body is not None else None,
                          headers={"Content-Type": "application/json", "User-Agent": "BI-Portfolio-Analysis/1.0"})
            with urlopen(req, timeout=90) as response:
                return response.read()
        except (HTTPError, URLError, TimeoutError) as error:
            if isinstance(error, HTTPError) and error.code not in {408, 429, 500, 502, 503, 504}:
                raise RuntimeError(f"{url}: {error.code} {error.read().decode(errors='replace')}") from error
            if attempt == 3:
                raise
            time.sleep(2 ** attempt)


def write_snapshot(slug, records, fields, metadata):
    folder = ROOT / "projects" / slug / "data"
    folder.mkdir(exist_ok=True)
    target = folder / "source.csv.gz"
    draft = target.with_suffix(".tmp")
    rows = 0
    try:
        with draft.open("wb") as raw, gzip.GzipFile(fileobj=raw, mode="wb", filename="", mtime=0) as archive:
            with io.TextIOWrapper(archive, encoding="utf-8", newline="") as stream:
                writer = csv.DictWriter(stream, fieldnames=fields, extrasaction="ignore", lineterminator="\n")
                writer.writeheader()
                for row in records:
                    writer.writerow(row)
                    rows += 1
        if not rows:
            raise ValueError(f"Empty extract for {slug}")
        metadata.update(rows=rows, retrieved_utc=datetime.now(timezone.utc).isoformat(timespec="seconds"),
                        sha256=hashlib.sha256(draft.read_bytes()).hexdigest())
        os.replace(draft, target)
        (folder / "manifest.json").write_text(json.dumps(metadata, indent=2) + "\n")
    finally:
        draft.unlink(missing_ok=True)
    print(f"{slug}: {rows:,} records", flush=True)


def fetch_nyc():
    start, end = date(2024, 1, 1), date(2026, 1, 1)

    def month_rows(index):
        year, month = 2024 + index // 12, index % 12 + 1
        begin = date(year, month, 1)
        finish = date(year + (month == 12), month % 12 + 1, 1)
        where = (
            "agency = 'DOT' AND complaint_type = 'Street Condition' AND descriptor = 'Pothole'"
            f" AND created_date >= '{begin.isoformat()}T00:00:00' AND created_date < '{finish.isoformat()}T00:00:00'"
        )
        rows = []
        while True:
            params = {"$select": ",".join(NYC_FIELDS), "$where": where, "$limit": 20000, "$offset": len(rows),
                      "$order": "created_date,unique_key"}
            page = json.loads(request(NYC + ".json?" + urlencode(params)))
            rows.extend(page)
            if len(page) < 20000:
                break
        count = json.loads(request(NYC + ".json?" + urlencode({"$select": "count(*) AS n", "$where": where})))
        if len(rows) != int(count[0]["n"]):
            raise RuntimeError(f"NYC portal count changed during {begin}: {len(rows)} vs {count[0]['n']}")
        return rows

    with ThreadPoolExecutor(max_workers=4) as executor:
        rows = [row for month in executor.map(month_rows, range(24)) for row in month]
    if len({row["unique_key"] for row in rows}) != len(rows):
        raise ValueError("Source pagination returned duplicate NYC request IDs")
    write_snapshot("nyc-311", rows, NYC_FIELDS, {
        "source": NYC, "created_inclusive": str(start), "created_before": str(end),
        "filters": {"agency": "DOT", "complaint_type": "Street Condition", "descriptor": "Pothole"},
        "pagination_reconciliation": "Every monthly page total matched its independent Socrata count query",
    })


def fetch_federal():
    url = USA + "/api/v2/download/transactions/"
    filters = {
        "time_period": [{"start_date": "2022-10-01", "end_date": "2025-09-30", "date_type": "action_date"}],
        "agencies": [{"type": "awarding", "tier": "toptier", "name": agency} for agency in AGENCIES],
        "naics_codes": {"require": list(NAICS)}, "award_type_codes": ["A", "B", "C", "D"],
    }
    job = json.loads(request(url, {"filters": filters, "columns": list(FED_FIELDS), "file_format": "csv"}))
    status_url = urljoin(USA, job["status_url"])
    for _ in range(48):
        status = json.loads(request(status_url))
        state = status.get("status")
        if state in {"finished", "finished_with_warnings"}:
            break
        if state in {"failed", "invalid"}:
            raise RuntimeError(f"USAspending reported {status}")
        time.sleep(5)
    else:
        raise TimeoutError(f"USAspending download is still pending: {status_url}")
    with zipfile.ZipFile(io.BytesIO(request(urljoin(USA, status.get("file_url") or job["file_url"])))) as archive:
        candidates = []
        for name in archive.namelist():
            if not name.lower().endswith(".csv"):
                continue
            with archive.open(name) as stream:
                reader = csv.DictReader(io.TextIOWrapper(stream, encoding="utf-8-sig"))
                if not set(FED_FIELDS).issubset(reader.fieldnames or ()):
                    continue
                candidates.extend(reader)
    if len(candidates) >= job.get("download_request", {}).get("limit", 500000):
        raise RuntimeError("USAspending result reached the extraction limit")
    for row in candidates:
        if row["naics_code"] not in NAICS or row["awarding_agency_name"] not in AGENCIES:
            raise ValueError("USAspending returned a row outside the requested scope")
    write_snapshot("federal-contracting", candidates, FED_FIELDS, {
        "source": url, "filters": filters, "authority": "USAspending.gov Treasury contract prime transactions",
        "source_file": job["file_name"], "status": state,
    })


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", choices=("nyc", "federal"))
    args = parser.parse_args()
    {"nyc": fetch_nyc, "federal": fetch_federal}[args.source]()
