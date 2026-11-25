from .common import capture, chart, connect, execute_model, export, metric, rows, series, table, validate, value, write_evidence

SLUG = "federal-contracting"
GROUPS = {
    "HHS": "Department of Health and Human Services",
    "Treasury": "Department of the Treasury",
    "GSA": "General Services Administration",
}
COLUMNS = [
    ["Awarding organization", "text"], ["NAICS", "text"], ["Net obligations", "money"],
    ["Funded awards", "count"], ["Top supplier", "pct"], ["Priority score", "decimal"],
]


def build():
    con = connect()
    manifest = capture(con, SLUG)
    execute_model(con, SLUG)
    controls = validate(con, {
        "Every source row reaches the action-grain fact": "select abs((select count(*) from source)-(select count(*) from fact_action))",
        "Action IDs are present and unique": "select count(*)-count(distinct action_id) from fact_action",
        "Every action has its award key and signed amount": "select count(*) from fact_action where award_id is null or net_obligation is null",
        "Action fiscal year, agency and industry are within scope": """select count(*) from fact_action where
            fiscal_year not between 2023 and 2025 or agency not in ('Department of Health and Human Services',
            'Department of the Treasury','General Services Administration') or naics not in ('541511','541512')""",
        "Net equals positive actions plus deobligations at each segment": "select count(*) from segments where net != gross_positive + deobligation",
        "HHI, supplier share and coverage stay between zero and one": """select count(*) from segments where
            hhi not between 0 and 1 or top_supplier_share not between 0 and 1 or identity_coverage not between 0 and 1""",
    })
    export(con, SLUG, {
        "segments": "select * from segments order by score desc nulls last, net desc, agency, bureau, naics",
        "monthly": """select agency, fiscal_year, date_trunc('month', action_date)::date as month,
            count(*) as actions, sum(net_obligation) as net, sum(greatest(net_obligation,0)) as gross_positive,
            sum(least(net_obligation,0)) as deobligation from fact_action group by all order by all""",
        "rank_sensitivity": """select agency, bureau, naics, score as balanced_score,
            round(100*(0.55*cume_dist() over(order by net)+0.30*cume_dist() over(order by funded_awards)
            +0.15*cume_dist() over(order by -hhi)),1) as size_weighted_score,
            round(100*(0.20*cume_dist() over(order by net)+0.25*cume_dist() over(order by funded_awards)
            +0.55*cume_dist() over(order by -hhi)),1) as diversity_weighted_score
            from segments where eligible order by balanced_score desc, net desc, agency, bureau, naics"""
    })

    def make_view(agency):
        where, params = ("where agency = ?", [agency]) if agency else ("", [])
        eligible_where = where + (" and " if where else "where ") + "eligible"
        totals = rows(con, f"""select count(*) as actions, sum(net_obligation) as net,
                      sum(least(net_obligation,0)) as reductions,
                      count(distinct award_id) filter(where net_obligation > 0) as funded
                      from fact_action {where}""", params)[0]
        monthly = rows(con, f"""select fiscal_year, calendar_month, sum(net_obligation) as net
                            from fact_action {where} group by all order by all""", params)
        month_index = {(row["fiscal_year"], row["calendar_month"]): row["net"] for row in monthly}
        ranked = rows(con, f"""select agency,bureau,naics,net,funded_awards,top_supplier_share,score
                            from segments {eligible_where} order by score desc,net desc,bureau,naics""", params)
        best = ranked[0] if ranked else None
        largest = sorted(ranked, key=lambda row: (-row["net"], row["bureau"], row["naics"]))[:6]
        return {
            "metrics": [
                metric("Net obligations", totals["net"], "money", "Signed federal actions"),
                metric("Funded awards", totals["funded"], "count", "At least one positive action"),
                metric("Deobligations", totals["reductions"], "money", "Negative actions"),
                metric("Qualifying segments", len(ranked), "count", "Three years of activity and data checks"),
            ],
            "charts": [
                chart("Obligations by fiscal month", "Net obligations include negative adjustments. Fiscal year starts in October.",
                      "Oct Nov Dec Jan Feb Mar Apr May Jun Jul Aug Sep".split(),
                      [series(f"FY{year}", (month_index.get((year, month), 0) for month in (*range(10,13), *range(1,10))))
                       for year in (2023, 2024, 2025)], "money"),
                chart("Largest qualifying segments", "Net obligations by awarding subagency and NAICS, across three fiscal years.",
                      [f"{row['bureau']} · {row['naics']}" for row in largest],
                      [series("Net obligations", (row["net"] for row in largest))], "money", "bars"),
            ],
            "table": table("Buyer research shortlist", "Score combines spend, award activity and supplier diversity. Rankings use the full study scope.",
                           COLUMNS, [[r["bureau"], r["naics"], r["net"], r["funded_awards"], r["top_supplier_share"], r["score"]] for r in ranked]),
            "action": (f"Research {best['bureau']} / NAICS {best['naics']} first. Check current notices, acquisition forecasts and contract vehicles before assigning capture resources."
                       if best else "Widen the screen or keep this agency in monitoring until segment volume and identity coverage meet the thresholds."),
            "evidence": {"totals": totals, "top_segments": ranked[:5]},
        }

    views = {"All agencies": make_view(None)}
    views.update({label: make_view(agency) for label, agency in GROUPS.items()})
    write_evidence(SLUG, {"source": manifest, "controls": controls, "results": {key: item["evidence"] for key, item in views.items()}})
    return {
        "title": "Federal contracting intelligence", "short": "Federal contracting", "source": "Public USAspending data",
        "period": "FY 2023–2025", "filter": "Awarding agency", "views": views,
        "description": "Where should a small IT services capture team begin buyer research across three federal agencies?",
        "method": "Uses past prime award obligations in two NAICS codes. The screen supports market research and requires current notice and vehicle verification.",
        "accent": "ocean", "controls": controls,
    }
