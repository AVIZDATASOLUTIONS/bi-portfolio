"""Seeded SIS export pair and migration acceptance audit."""
from datetime import date, datetime, time, timedelta
from random import Random

from .common import chart, connect, execute_model, export, insert_rows, metric, rows, series, table, validate, value, write_evidence

SLUG = "school-reporting"
SEED = 36481
CAMPUSES = ("Cedar", "Harbor", "Lakeside", "River")
CODES = {"P": "Present", "T": "Tardy", "A": "Absent", "EX": "Absent", "X": "Present"}


def make_exports(con):
    rng = Random(SEED)
    days = []
    d = date(2025, 8, 18)
    holidays = {date(2025, 9, 1), date(2025, 10, 13)}
    while len(days) < 60:
        if d.weekday() < 5 and d not in holidays:
            days.append(d)
        d += timedelta(days=1)

    students, crosswalk, old, new = [], [], [], []
    update_id = 0
    for i in range(1200):
        campus = CAMPUSES[i // 300]
        sid, nid = f"OLD{i+1:05}", f"SIS{(i*313+61)%1207:05}"
        students.append((sid, campus, 9 + (i % 4)))
        crosswalk.append((nid, sid))
        for index, d in enumerate(days):
            code = rng.choices(["P","T","A","EX","X"], [86,5,5,3,1])[0]
            old.append((sid,d,code,CODES[code]))
            if campus == "River" and rng.random() < 0.010:
                continue
            if campus == "Harbor" and index >= 20 and code == "EX" and rng.random() < 0.60:
                code = "EA2"  # unmapped inbound alias
            elif campus == "Lakeside" and code == "A" and rng.random() < 0.12:
                code = "P"  # observed conversion discrepancy
            if rng.random() < 0.004:
                update_id += 1
                new.append((update_id, nid, d, rng.choice(["A","P","T"]),datetime.combine(d,time(8))))
            update_id += 1
            new.append((update_id,nid,d,code,datetime.combine(d,time(16))))
    for i in range(8):
        update_id += 1
        new.append((update_id, f"UNMAPPED{i}", days[2*i], "P", datetime.combine(days[2*i],time(16))))

    inputs = [
        ("instruction_day","instruction_date date",[(day,) for day in days]),
        ("dim_student","student_id varchar, campus varchar, grade integer",students),
        ("student_crosswalk","new_id varchar, student_id varchar",crosswalk),
        ("code_crosswalk","new_code varchar, canonical_status varchar",list(CODES.items())),
        ("legacy_export","student_id varchar,instruction_date date, attendance_code varchar,canonical_status varchar",old),
        ("new_export","row_id integer,new_id varchar,instruction_date date,attendance_code varchar,updated_at timestamp",new),
    ]
    for name, columns, data in inputs:
        insert_rows(con, name, columns, data)
    return len(students), len(days)


def build():
    con = connect()
    student_count, day_count = make_exports(con)
    execute_model(con, SLUG)
    controls = validate(con, {
        "The legacy extract has exactly one row per student and scheduled day": """select abs(
              (select count(*) from dim_student)*(select count(*) from instruction_day)
              - (select count(distinct (student_id,instruction_date)) from legacy_export))""",
        "Student identifiers map one-to-one": """select count(*)-least(count(distinct new_id),count(distinct student_id))
              from student_crosswalk""",
        "Source event IDs are unique": "select count(*)-count(distinct row_id) from new_export",
        "Known rows plus unmapped or out-of-calendar rows exhaust the new source": """select abs((select count(*) from new_export)
            -(select count(*) from new_with_identity)-(select count(*) from rejected_new where issue!='Unknown attendance code'))""",
        "A student-day appears once in the reconciled fact": """select count(*)-count(distinct (student_id,instruction_date))
              from fact_reconciliation""",
        "Baseline exactly equals matched plus mismatched, missing and unknown rows": """select count(*) from campus_metrics
              where baseline!=matches+missing_records+status_mismatches+unknown_codes""",
        "The fixture exercises all three material discrepancy cases": """select
              case when count(distinct outcome)=3 then 0 else 1 end from fact_reconciliation
              where outcome in ('Missing record','Unknown code','Status mismatch')""",
    })
    unmapped = value(con, "select count(*) from rejected_new where issue='Unmapped student'")
    export(con, SLUG, {
        "campus_signoff": "select * from campus_metrics order by campus",
        "weekly_status": """select campus,date_trunc('week',instruction_date)::date as week,
            outcome,count(*) as records from fact_reconciliation group by all order by campus,week,outcome""",
        "exceptions": """select * from fact_reconciliation where outcome != 'Matched' or conflicting_edits
            order by campus,instruction_date,student_id""",
        "quarantine": "select * from rejected_new order by issue,instruction_date,row_id",
    })

    def make_view(campus):
        where, params = ("where campus = ?", [campus]) if campus else ("", [])
        schools = rows(con, f"select * from campus_metrics {where} order by campus", params)
        totals = rows(con, f"""select count(*) filter(where expected_status is not null) as baseline,
              count(*) filter(where outcome='Matched') as matches, count(*) filter(where outcome='Unknown code') as unknown,
              count(*) filter(where outcome='Missing record') as missing, count(*) filter(where outcome='Status mismatch') as mismatched,
              count(*) filter(where conflicting_edits) as conflicting,
              avg((expected_status!='Absent')::integer) filter(where expected_status is not null) as baseline_rate,
              avg((observed_status!='Absent')::integer) filter(where observed_status is not null) as converted_rate
              from fact_reconciliation {where}""", params)[0]
        by_week = rows(con, f"""select date_trunc('week',instruction_date)::date as week,outcome,count(*) as n
                                 from fact_reconciliation {where} group by all order by week,outcome""", params)
        weeks = sorted({row["week"] for row in by_week})
        index = {(row["week"], row["outcome"]): row["n"] for row in by_week}
        exception_types = ["Missing record", "Unknown code", "Status mismatch"]
        labels = exception_types + (["Unmapped student"] if not campus else [])
        counts = [totals["missing"], totals["unknown"], totals["mismatched"]] + ([unmapped] if not campus else [])
        passed_campuses = sum(row["campus_pass"] for row in schools)
        may_release = passed_campuses == len(schools) and (campus is not None or unmapped == 0)
        action = ("Retain this campus in the approved release group. Run the same checks after the final cutover extract."
                  if may_release else "Hold publication for this scope. Fix the code crosswalk and ID exceptions where present, recover missing rows, then rerun the campus-level release gates.")
        return {
            "metrics": [
                metric("Legacy student-days", totals["baseline"], "count", "Source denominator"),
                metric("Exact match", totals["matches"]/totals["baseline"], "pct", "99.5% minimum per campus"),
                metric("Attendance-rate change", totals["converted_rate"]-totals["baseline_rate"], "pp", "Converted minus baseline"),
                metric("Release gate", "PASS" if may_release else "HOLD", "text", "Campus checks and unassigned identity exceptions"),
            ],
            "charts": [
                chart("Reconciliation exceptions by week", "Reason counts reflect the latest converted record for each student-day.",
                      [w.strftime("%b %d") for w in weeks],
                      [series(reason, (index.get((w,reason),0) for w in weeks)) for reason in exception_types]),
                chart("Exceptions for remediation", "Unmapped students remain in district-level quarantine.",
                      labels, [series("Records", counts)], "count", "bars"),
            ],
            "table": table("Campus release checks", "Exact match ≥99.5%, zero unknown codes or unexpected records, and drift ≤0.50 pp.",
                [["Campus","text"],["Baseline rows","count"],["Exact match","pct"],["Unknown codes","count"],
                 ["Missing rows","count"],["Attendance drift","pp"],["Campus gate","text"]],
                [[r["campus"],r["baseline"],r["match_rate"],r["unknown_codes"],r["missing_records"],r["attendance_delta"],
                  "PASS" if r["campus_pass"] else "HOLD"] for r in schools]),
            "action": action,
            "evidence": {"totals": totals, "campuses": schools, "district_orphan_events": unmapped if not campus else None,
                         "may_release": may_release},
        }
    views = {"All campuses": make_view(None)}
    views.update({campus: make_view(campus) for campus in CAMPUSES})
    write_evidence(SLUG, {"seed": SEED, "students": student_count, "instruction_days": day_count,
                          "controls": controls, "results": {key: item["evidence"] for key,item in views.items()}})
    return {
        "title": "School reporting migration audit", "short":"School reporting", "source":"Synthetic data · simulated migration",
        "period":"60 instructional days", "filter":"Campus", "views":views, "accent":"copper", "controls":controls,
        "description":"Can school leadership release its attendance scorecard after a student information system migration?",
        "method":"Seeded fictional student IDs and exports. This independent case study reflects a migration workflow, with deliberately injected data problems.",
    }
