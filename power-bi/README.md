# Fulfillment Power BI project

Open [Fulfillment.pbip](Fulfillment.pbip) with a current Power BI Desktop on Windows. Keep the `Fulfillment.Report` and `Fulfillment.SemanticModel` folders alongside the file. Select **Refresh** on first open to populate the model. The Power Query partitions contain typed, compressed synthetic CSV data. No external credentials or data-source paths are required.

The report contains a KPI band, weekly service trend, missed-unit ranking, SKU worklist, and warehouse and category slicers. The model includes 5 tables, 6 relationships and 11 DAX measures. The dashboard’s delivery and inventory facts have different grains, and measures use the applicable date role.

## Smoke check

With filters cleared, expect **11,218 matured lines**, **9,417 OTIF lines**, **14,921 missed units**, and **$486,809.92** in ending inventory value. The [DAX query](smoke-check.dax) checks these values alongside display metrics. The [SQL evidence](../projects/wholesale-fulfillment/results/evidence.json) provides the independent reference. Selecting West should show approximately **68.52% line OTIF** and **9,253 missed units**.

The TMDL is validated by the Microsoft Analysis Services serializer, and the PBIR JSON is validated against the published Microsoft schemas. Embedded data were decompressed and reconciled against the SQL-validated extract. A Windows Power BI Desktop render and its DAX engine were outside this macOS verification. The [browser dashboard](../docs/dashboard.html?case=wholesale-fulfillment) is a separate, verified rendering of the same analytical outputs.

[Microsoft Power BI Desktop project documentation](https://learn.microsoft.com/en-us/power-bi/developer/projects/projects-overview)
