"""Rebuild all metrics, dashboard data, and repository case studies."""
import argparse
from src import federal, nyc, school, wholesale
from src.common import ROOT, json_text

PROJECTS = (federal, school, wholesale, nyc)


def build():
    dashboards = {}
    for pipeline in PROJECTS:
        payload = pipeline.build()
        dashboards[pipeline.SLUG] = payload
        print(f"{pipeline.SLUG}: {len(payload['controls'])} validation checks passed.", flush=True)
    (ROOT / "docs" / "dashboard-data.js").write_text("window.PORTFOLIO = " + json_text(dashboards).strip() + ";\n", encoding="utf-8")


if __name__ == "__main__":
    argparse.ArgumentParser(description=__doc__).parse_args()
    build()
