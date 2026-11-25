"""Generate orders, split shipments and stock movements, then reconcile service KPIs."""
from collections import defaultdict, deque
from datetime import date, timedelta
from decimal import Decimal
from random import Random

from .powerbi import build_native
from .common import chart, connect, execute_model, export, insert_rows, metric, rows, series, table, validate, value, write_evidence

SLUG = "wholesale-fulfillment"
SEED = 50918
START = date(2025, 8, 25)
END = date(2025, 12, 28)
SITES = ("Central", "Northeast", "Southeast", "West")
CATEGORIES = ("Fasteners", "Safety supplies", "Shop supplies", "Tooling")


def make_sources(con):
    rng = Random(SEED)
    skus = [f"SKU-{i+1:03}" for i in range(64)]
    categories = {sku: CATEGORIES[i // 16] for i, sku in enumerate(skus)}
    costs = {sku: Decimal(rng.randint(650, 14500)) / 100 for sku in skus}
    days = [START + timedelta(days=i) for i in range((END-START).days+1)]
    stocked = {(site,sku): rng.randint(14,48) for site in SITES for sku in skus}
    target = {(site,sku): (24 if site == "West" and i<16 else 38)+rng.randint(-5,12)
              for site in SITES for i,sku in enumerate(skus)}
    pending, arrivals, in_transit = defaultdict(deque), defaultdict(int), defaultdict(int)
    orders, shipments, inventory = [], [], []
    for day in days:
        for site in SITES:
            daily_lines = rng.randint(18,38) if day.weekday()<5 else rng.randint(5,14)
            popularity = [2 if i%5 == 0 else 1 for i in range(len(skus))]
            for sku in rng.choices(skus, weights=popularity, k=daily_lines):
                quantity = rng.randint(3, 12)
                if site == "West" and day.month in (10,11) and categories[sku]=="Fasteners":
                    quantity += rng.randint(6,18)
                line_id = len(orders)+1
                promised = day+timedelta(days=rng.choice((2,3,3,4)))
                orders.append((line_id,day,promised,site,sku,quantity))
                pending[(site,sku)].append([line_id,quantity])
            for sku in skus:
                key = (site,sku)
                opening = stocked[key]
                received = arrivals.pop((day,site,sku),0)
                in_transit[key] -= received
                available = opening+received
                shipped_today = 0
                while available and pending[key]:
                    line = pending[key][0]
                    shipped = min(available,line[1])
                    transit_days = rng.choices((1,2,3,4), (53,36,9,2) if site!="West" else (28,40,25,7))[0]
                    shipments.append((len(shipments)+1,line[0],day,day+timedelta(days=transit_days),shipped))
                    available -= shipped
                    line[1] -= shipped
                    shipped_today += shipped
                    if line[1]==0:
                        pending[key].popleft()
                stocked[key] = available
                inventory.append((day,site,sku,opening,received,shipped_today,available))
                position = available + in_transit[key] - sum(line[1] for line in pending[key])
                if position < target[key]*0.52:
                    lead_days = rng.randint(3,6) if site!="West" or categories[sku]!="Fasteners" else rng.randint(6,10)
                    replenishment = target[key] - position
                    arrivals[(day+timedelta(days=lead_days),site,sku)] += replenishment
                    in_transit[key] += replenishment
    data = [
        ("dim_product","sku varchar,category varchar,unit_cost decimal(9,2)", [(s,categories[s],costs[s]) for s in skus]),
        ("dim_site","site varchar",[(s,) for s in SITES]),
        ("raw_order","line_id integer, ordered_on date, promised_on date, site varchar, sku varchar, ordered_units integer",orders),
        ("raw_shipment","shipment_id integer, line_id integer, shipped_on date, delivered_on date, units integer",shipments),
        ("raw_inventory","inventory_date date, site varchar, sku varchar, opening_units integer, receipt_units integer, shipped_units integer, closing_units integer",inventory),
    ]
    for name, columns, records in data:
        insert_rows(con,name,columns,records)


def build():
    con = connect()
    make_sources(con)
    execute_model(con,SLUG)
    controls = validate(con, {
        "Order-line and shipment IDs are unique": """select (select count(*)-count(distinct line_id) from raw_order)
            +(select count(*)-count(distinct shipment_id) from raw_shipment)""",
        "Every shipment has an order line, positive units and valid event dates": """select count(*)
            from raw_shipment s left join raw_order o using(line_id) where o.line_id is null or s.units<=0
            or s.shipped_on<o.ordered_on or s.delivered_on<s.shipped_on""",
        "Order quantities reconcile with shipped, on-time and service deficit": """select count(*) from fact_order_line
            where shipped_units>ordered_units or on_time_units>shipped_units or (matured and missed_units!=ordered_units-on_time_units)""",
        "The model contains exactly one inventory row per expected day, site and SKU": """select abs(
            (select count(*) from fact_inventory)-(select count(*) from dim_product)*(select count(*) from dim_site)*126)
            + (select count(*)-count(distinct (inventory_date,site,sku)) from fact_inventory)""",
        "Stock closes to opening plus receipts minus shipments": """select count(*) from fact_inventory where closing_units<0
            or closing_units!=opening_units+receipt_units-shipped_units""",
        "Daily inventory opening agrees to previous close": """select count(*) from (
            select opening_units,lag(closing_units) over(partition by site,sku order by inventory_date) as previous from fact_inventory
            ) where previous is not null and opening_units!=previous""",
        "Inventory shipments reconcile to actual outbound lines by site, SKU and day": """select count(*)
            from fact_inventory l full outer join (
                select shipped_on as inventory_date,o.site,o.sku,sum(s.units) as shipped
                from raw_shipment s join raw_order o using(line_id) group by all
            ) s using(inventory_date,site,sku) where l.shipped_units is null or l.shipped_units!=coalesce(s.shipped,0)""",
        "Pending observation rows remain outside the OTIF denominator": """select count(*) from fact_order_line
            where (not matured and missed_units is not null) or (matured and coalesce(otif,false)!=(missed_units=0))""",
    })
    export(con, SLUG, {
        "site_service": "select * from site_service order by site",
        "sku_service": "select * from sku_service order by missed_units desc,site,sku",
        "weekly_service": """select site,date_trunc('week',promised_on)::date as week, count(*) as matured_lines,
            sum(coalesce(otif,false)::integer) as otif_lines, sum(on_time_units) as on_time_units,sum(ordered_units) as ordered_units
            from fact_order_line where matured group by all order by site,week""",
        "final_inventory": "select * from fact_inventory where inventory_date=date '2025-12-28' order by site,sku",
    })

    def make_view(site):
        where, params = ("where site = ?", [site]) if site else ("", [])
        and_site = " and site = ?" if site else ""
        totals = rows(con, f"""select sum(matured_lines)::integer as matured_lines,
            sum(complete_on_time)::integer/sum(matured_lines) as otif,
            sum(on_time_units)/sum(ordered_units) as unit_fill,
            sum(missed_units)::integer as missed_units from site_service {where}""", params)[0]
        totals["ending_value"] = value(con, "select sum(closing_inventory_value) from fact_inventory where inventory_date=?"+and_site,[END,*params])
        totals["open_lines"] = value(con, "select count(*) from fact_order_line where not matured"+and_site,params)
        by_week = rows(con, f"""select date_trunc('week',promised_on)::date as week,
            avg(coalesce(otif,false)::integer) as otif,sum(on_time_units)/sum(ordered_units) as unit_fill
            from fact_order_line where matured {and_site} group by all order by week""",params)
        ranking = rows(con, f"""select * from sku_service {where} order by missed_units desc,site,sku limit 15""",params)
        grouping = rows(con, f"""select site,category,sum(missed_units)::integer as missed_units
            from sku_service {where} group by all order by missed_units desc,site,category limit 6""",params)
        top = ranking[0]
        return {
            "metrics": [
                metric("Line OTIF",totals["otif"],"pct","Delivered complete by promised date"),
                metric("On-time unit fill",totals["unit_fill"],"pct","On-time units ÷ ordered units"),
                metric("Missed promise units",totals["missed_units"],"count","Matured order lines"),
                metric("Ending inventory at cost",totals["ending_value"],"money","Single cutoff-date stock balance"),
            ],
            "charts": [
                chart("Delivery performance by promise week","Percent of matured lines and units delivered on time.",
                    [row["week"].strftime("%b %d") for row in by_week],
                    [series("Line OTIF",(r["otif"] for r in by_week)),series("Unit fill",(r["unit_fill"] for r in by_week))],"pct","line"),
                chart("Largest service gaps","Missed promise units by site and product category.",
                    [f"{r['site']} · {r['category']}" for r in grouping],[series("Missed units",(r["missed_units"] for r in grouping))],"count","bars"),
            ],
            "table": table("SKU replenishment review","Top 15 SKU and warehouse pairs by missed units. Ending stock is shown for the cutoff date.",
                [["Warehouse","text"],["SKU","text"],["Category","text"],["Missed units","count"],
                 ["Line OTIF","pct"],["Ending stock","count"]],
                [[r["site"],r["sku"],r["category"],r["missed_units"],r["otif"],r["ending_stock"]] for r in ranking]),
            "action": f"Review {top['sku']} at the {top['site']} warehouse first. Compare stockout days and carrier transit before changing reorder points. Test revised lead-time assumptions on the affected category.",
            "evidence": {"totals":totals,"top_skus":ranking[:5],"site_category":grouping,
                "site_service":rows(con,f"select * from site_service {where} order by missed_units desc,site",params)},
        }

    views = {"All warehouses":make_view(None)}
    views.update({site:make_view(site) for site in SITES})
    write_evidence(SLUG, {"seed":SEED,"start":str(START),"cutoff":str(END),"controls":controls,
        "source_counts":{name:value(con,f"select count(*) from {name}") for name in ("raw_order","raw_shipment","raw_inventory")},
        "results":{key: data["evidence"] for key,data in views.items()}})
    build_native(con)
    return {
        "title":"Wholesale fulfillment performance","short":"Fulfillment","source":"Synthetic data · simulated distributor",
        "period":"Aug–Dec 2025","filter":"Warehouse","views":views,"accent":"forest","controls":controls,
        "description":"Which product and warehouse combinations deserve attention before the next replenishment cycle?",
        "method":"A seeded order, shipment and inventory simulation. The warehouse findings illustrate how to prioritize investigation under the stated demand and carrier assumptions.",
    }
