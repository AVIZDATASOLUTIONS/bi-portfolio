# Interview guide

## Opening

“My work centers on operational reporting, KPI definitions and data quality. In school data management I worked through imports, migrations and validation alongside executive reporting. In advisory and consulting settings I built and supported dashboards for business teams. I can show the technical decisions behind that work through these independent projects, including a public federal contracting analysis and a synthetic Power BI fulfillment model.”

## Choose a case by the question

| Interview question | Walkthrough | Evidence to have open |
|---|---|---|
| How do you turn several source systems into a governed BI model? | Wholesale fulfillment. Name the order-line and daily inventory grains, then draw the conformed dimensions. Show the slicers and last-snapshot measure. | [Fulfillment case study](projects/wholesale-fulfillment/) and [Power BI project](power-bi/Fulfillment.pbip) |
| Tell me about resolving a reporting discrepancy. | School reporting. Define what a student-day means and walk through Harbor’s unknown codes, River’s missing rows and the HOLD gate. For a behavioral question, pair the case study with a real migration detail you personally remember and can share. | [School case study](projects/school-reporting/) and [reconciliation SQL](projects/school-reporting/model.sql) |
| How have you used data to recommend a business action? | Federal contracting. Explain why the largest segment is not the highest-ranked segment and what a capture lead needs to verify next. | [Federal case study](projects/federal-contracting/) and [sensitivity results](projects/federal-contracting/results/rank_sensitivity.csv) |
| How do you handle a misleading operational comparison? | NYC 311. Explain fixed follow-up windows, invalid records and the difference between crude and within-stratum weekend comparisons. | [NYC case study](projects/nyc-311/) and [stratified results](projects/nyc-311/results/borough_month_day_group.csv) |

## Five-minute portfolio walkthrough

1. Start with the decision and the stakeholder who would use the result.
2. Show a single source record, its destination grain, and what is counted once.
3. Explain one failure mode that matters to the business and open the corresponding check.
4. Make one recommendation using a numerator, denominator, and period from the dashboard.
5. Name a limitation and specify the next data or approval you would need.

## Role alignment

- **BI Developer**. Lead with fulfillment, then the school audit. Show the semantic model and relationships, DAX filter context, Power Query types, source reconciliation, and how a validated rule becomes a release gate. [Representative Power BI Developer posting](https://job-boards.greenhouse.io/rectanglehealth/jobs/5478680008)
- **Data Analyst**. Lead with federal contracting or NYC 311. Show how you define an eligible population, analyze alternative explanations, communicate a recommendation, and specify what would change the decision. Use fulfillment for an operations or manufacturing posting. [Representative Data Analyst posting](https://job-boards.greenhouse.io/karmanspacedefense/jobs/4509766009)

The postings were used as role benchmarks. Use the posting attached to each application for the final order and emphasis.
