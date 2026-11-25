from .common import capture, chart, connect, execute_model, export, metric, rows, series, table, validate, write_evidence

SLUG = "nyc-311"
BOROUGHS = ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"]
ORDER = "order by intake_year, intake_month"


def build():
    con = connect()
    manifest = capture(con, SLUG)
    execute_model(con, SLUG)
    controls = validate(con, {
        "Public request IDs are non-null and unique": "select count(*)-count(distinct request_id) from fact_request",
        "Every raw record is classified": """select abs((select count(*) from source) -
            (select count(*) from fact_request where timing_status is not null))""",
        "The published proxy has at least 30 days of opportunity": """select count(*) from cohort
            where created_at < date '2024-01-01' or created_at >= date '2026-01-01'
               or created_at + interval '30 days' > timestamp '2026-02-01 00:00:00'""",
        "Every 7-day closure is also a 30-day closure": "select count(*) from cohort where closed_7d and not closed_30d",
        "Rates and unresolved counts reconcile": """select count(*) from borough_year
            where closure_7d not between 0 and 1 or round(eligible_requests * unresolved_30d) != unresolved_count""",
    })
    export(con, SLUG, {
        "borough_year": "select * from borough_year order by borough,intake_year",
        "borough_month_day_group": "select * from strata order by borough,intake_month",
        "timing_quality": "select timing_status, count(*) as requests from fact_request group by all order by requests desc",
        "monthly": """select borough,intake_month,count(*) as eligible_requests,avg(closed_7d::integer) as closure_7d,
            avg((not closed_30d)::integer) as unresolved_30d from cohort group by all order by all"""
    })

    def make_view(borough):
        where, params = ("where borough = ?", [borough.upper()]) if borough else ("", [])
        basic = rows(con, f"""select count(*) as total, count(*) filter(where timing_status!='Analyzable') as excluded,
            avg(closed_7d::integer) filter(where timing_status='Analyzable') as rate7,
            avg((not closed_30d)::integer) filter(where timing_status='Analyzable') as aged from fact_request {where}""", params)[0]
        monthly = rows(con, f"""select intake_year,intake_month,avg(closed_7d::integer) as rate7
            from cohort {where} group by all {ORDER}""", params)
        index = {(r["intake_year"], r["intake_month"].month): r["rate7"] for r in monthly}
        strata_where = where + (" and " if where else "where ")
        comparison = rows(con, f"""select sum(weight) as represented,
              sum(weight*(rate_weekend-rate_weekday))/sum(weight) as adjusted_gap,
              sum(n_weekend*rate_weekend)/sum(n_weekend)-sum(n_weekday*rate_weekday)/sum(n_weekday) as crude_gap
              from strata {strata_where} n_weekend>=5 and n_weekday>=5""", params)[0]
        leaders = rows(con, f"""select title_borough, year24, year25, unresolved_25, volume_25
              from (select borough as title_borough, max(closure_7d) filter(where intake_year=2024) as year24,
              max(closure_7d) filter(where intake_year=2025) as year25,
              max(unresolved_count) filter(where intake_year=2025) as unresolved_25,
              max(eligible_requests) filter(where intake_year=2025) as volume_25
              from borough_year {where} group by borough)
              where title_borough != 'UNSPECIFIED' and year25 is not null order by unresolved_25 desc,title_borough""", params)
        top = leaders[0] if leaders else None
        quality = rows(con, f"""select timing_status,count(*) as requests from fact_request {where}
            group by all order by requests desc,timing_status""", params)
        return {
            "metrics": [
                metric("Requests filed", basic["total"], "count", "All in-scope reports"),
                metric("Closed within 7 days", basic["rate7"], "pct", "Analyzable requests"),
                metric("Unresolved at 30 days", basic["aged"], "pct", "Analyzable requests"),
                metric("Weekend gap", comparison["adjusted_gap"], "pp", "Weekend minus weekday, adjusted for borough and month"),
            ],
            "charts": [
                chart("Share closed within seven days", "Follow up begins at intake. Both years receive the same observation windows.",
                      "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(),
                      [series(str(year), (index.get((year, n)) for n in range(1,13))) for year in (2024,2025)], "pct"),
                chart("Requests unresolved at day 30", "Count by borough for the 2025 intake cohort.",
                      [r["title_borough"].title() for r in leaders], [series("2025", (r["unresolved_25"] for r in leaders))], "count","bars"),
            ],
            "table": table("Borough review", "Counts and closure rates focus triage while keeping volume differences visible.",
                           [["Borough","text"],["2024 7-day closure","pct"],["2025 7-day closure","pct"],
                            ["Change","pp"],["2025 eligible","count"],["2025 unresolved at 30 days","count"]],
                           [[r["title_borough"].title(),r["year24"],r["year25"],r["year25"]-r["year24"] if r["year24"] is not None else None,
                            r["volume_25"],r["unresolved_25"]] for r in leaders]),
            "action": (f"Start an aged-case review in {top['title_borough'].title()}. Sample long-open records and check closure coding, queue assignment, and crew capacity before changing staffing."
                       if top else "Check the completeness of the selected borough's request records before prioritizing a case review."),
            "evidence": {"totals": basic, "weekend_comparison": comparison, "boroughs": leaders, "timing_quality": quality},
        }
    views = {"All boroughs": make_view(None)}
    views.update({name: make_view(name) for name in BOROUGHS})
    write_evidence(SLUG, {"source": manifest, "controls": controls, "results": {key: x["evidence"] for key,x in views.items()}})
    return {
        "title": "NYC 311 pothole response", "short": "NYC 311", "source": "Public NYC Open Data",
        "period": "2024–2025 intake", "filter": "Borough", "views": views,
        "description": "Which borough should lead the next review of long-open pothole requests?",
        "method": "Measures administrative closure for reports submitted to 311. Requests can repeat the same incident, and public records lack staffing and inspection data.",
        "accent": "violet", "controls": controls,
    }
