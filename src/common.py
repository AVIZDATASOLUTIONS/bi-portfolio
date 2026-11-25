"""Shared extract verification and artifact writing."""
import csv
import hashlib
import json
from decimal import Decimal
from pathlib import Path
from tempfile import TemporaryDirectory

import duckdb

ROOT = Path(__file__).resolve().parents[1]


def project(slug):
    return ROOT / "projects" / slug


def connect():
    return duckdb.connect()


def sql_path(path):
    return "'" + str(path).replace("'", "''") + "'"


def capture(con, slug):
    folder = project(slug) / "data"
    source = folder / "source.csv.gz"
    manifest = json.loads((folder / "manifest.json").read_text())
    if hashlib.sha256(source.read_bytes()).hexdigest() != manifest["sha256"]:
        raise ValueError(f"{slug} source checksum does not match its manifest")
    con.execute(f"create table source as select * from read_csv({sql_path(source)}, all_varchar=true)")
    if value(con, "select count(*) from source") != manifest["rows"]:
        raise ValueError(f"{slug} source row count does not match its manifest")
    return manifest


def execute_model(con, slug):
    con.execute("begin")
    try:
        con.execute((project(slug) / "model.sql").read_text())
    except Exception:
        con.execute("rollback")
        raise
    con.execute("commit")


def rows(con, sql, params=()):
    cur = con.execute(sql, params)
    names = [desc[0] for desc in cur.description]
    return [dict(zip(names, row)) for row in cur.fetchall()]


def value(con, sql, params=()):
    return con.execute(sql, params).fetchone()[0]


def validate(con, controls):
    results = []
    for name, sql in controls.items():
        exceptions = int(value(con, sql))
        results.append({"control": name, "exceptions": exceptions, "status": "PASS" if exceptions == 0 else "FAIL"})
    failed = [item for item in results if item["status"] == "FAIL"]
    if failed:
        raise AssertionError(failed)
    return results


def export(con, slug, datasets):
    folder = project(slug) / "results"
    folder.mkdir(exist_ok=True)
    for name, sql in datasets.items():
        path = sql_path(folder / (name + ".csv"))
        con.execute(f"copy ({sql}) to {path} (format csv, header true)")


def plain(object_):
    if isinstance(object_, Decimal):
        return float(object_)
    if hasattr(object_, "isoformat"):
        return object_.isoformat()
    raise TypeError(f"Unsupported serialization: {type(object_)}")


def json_text(payload):
    return json.dumps(payload, indent=2, default=plain, ensure_ascii=False, allow_nan=False) + "\n"


def write_evidence(slug, payload):
    folder = project(slug) / "results"
    folder.mkdir(exist_ok=True)
    (folder / "evidence.json").write_text(json_text(payload), encoding="utf-8")


def insert_rows(con, name, columns, data):
    con.execute(f"create table {name} ({columns})")
    with TemporaryDirectory(prefix="bi-portfolio-") as folder:
        path = Path(folder) / "extract.csv"
        with path.open("w", encoding="utf-8", newline="") as stream:
            csv.writer(stream).writerows(data)
        con.execute(f"copy {name} from {sql_path(path)} (format csv, header false)")


def metric(label, number, unit="count", note=""):
    return dict(label=label, value=number, unit=unit, note=note)


def chart(title, subtitle, labels, series, unit="count", kind="columns"):
    return dict(title=title, subtitle=subtitle, labels=labels, series=series, unit=unit, kind=kind)


def series(label, values):
    return dict(label=label, values=list(values))


def table(title, subtitle, columns, data):
    return dict(title=title, subtitle=subtitle, columns=columns, rows=list(data))
