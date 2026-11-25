"""Emit an editable native Power BI Desktop Project from the validated fulfillment model."""
import base64
import csv
import hashlib
import io
import uuid
import zlib
from pathlib import Path

from .common import ROOT, json_text

FABRIC = "https://developer.microsoft.com/json-schemas/fabric/"
REPORT = "item/report/definition/"
NAME = "Fulfillment"
VERSIONS = {"report": "3.3.0", "page": "2.1.0", "visualContainer": "2.9.0"}
FORMATS = {"percent": "0.0%", "count": "#,0", "money": "$#,0"}
TYPES = {"string": "type text", "dateTime": "type date", "int64": "Int64.Type",
         "boolean": "type logical", "decimal": "Currency.Type"}
TABLES = {
    "Warehouse": ("select site from dim_site order by site", [("Warehouse", "string")]),
    "Product": (
        "select sku,category,unit_cost from dim_product order by sku",
        [("SKU","string"),("Category","string"),("Unit Cost","decimal")],
    ),
    "Calendar": (
        """select d::date,date_trunc('week',d)::date from
          generate_series(date '2025-08-25',date '2026-01-01',interval 1 day) t(d) order by d""",
        [("Date","dateTime"),("Week Beginning","dateTime")],
    ),
    "Order Lines": (
        """select line_id,ordered_on,promised_on,site,sku,ordered_units,shipped_units,on_time_units,
            coalesce(otif,false),matured,missed_units from fact_order_line order by line_id""",
        [("Line ID","int64"),("Order Date","dateTime"),("Promise Date","dateTime"),("Warehouse","string"),
         ("SKU","string"),("Ordered Units","int64"),("Shipped Units","int64"),("On Time Units","int64"),
         ("Is OTIF","boolean"),("Is Mature","boolean"),("Missed Units","int64")],
    ),
    "Inventory": (
        """select inventory_date,site,sku,opening_units,receipt_units,shipped_units,
            closing_units,closing_inventory_value from fact_inventory order by inventory_date,site,sku""",
        [("Inventory Date","dateTime"),("Warehouse","string"),("SKU","string"),("Opening Units","int64"),
         ("Received Units","int64"),("Shipped Units","int64"),("Closing Units","int64"),("Closing Value","decimal")],
    ),
}
MEASURES = {
    "Order Lines": [
        ("Matured Lines", "CALCULATE(COUNTROWS('Order Lines'), 'Order Lines'[Is Mature] = TRUE())", "count"),
        ("OTIF Lines", "CALCULATE(COUNTROWS('Order Lines'), 'Order Lines'[Is Mature] = TRUE(), 'Order Lines'[Is OTIF] = TRUE())", "count"),
        ("Line OTIF", "DIVIDE(COALESCE([OTIF Lines],0), [Matured Lines])", "percent"),
        ("Matured Demand Units", "CALCULATE(SUM('Order Lines'[Ordered Units]), 'Order Lines'[Is Mature] = TRUE())", "count"),
        ("Matured On Time Units", "CALCULATE(SUM('Order Lines'[On Time Units]), 'Order Lines'[Is Mature] = TRUE())", "count"),
        ("On Time Unit Fill", "DIVIDE([Matured On Time Units], [Matured Demand Units])", "percent"),
        ("Missed Promise Units", "SUM('Order Lines'[Missed Units])", "count"),
        ("OTIF Prior Week", "CALCULATE([Line OTIF], DATEADD('Calendar'[Date], -7, DAY))", "percent"),
        ("OTIF Week over Week", "[Line OTIF] - [OTIF Prior Week]", "percent"),
    ],
    "Inventory": [
        ("Ending Inventory Value", "VAR AsOfDate = MAX('Inventory'[Inventory Date]) RETURN CALCULATE(SUM('Inventory'[Closing Value]), KEEPFILTERS('Calendar'[Date] = AsOfDate))", "money"),
        ("Ending Stock Units", "VAR AsOfDate = MAX('Inventory'[Inventory Date]) RETURN CALCULATE(SUM('Inventory'[Closing Units]), KEEPFILTERS('Calendar'[Date] = AsOfDate))", "count"),
    ],
}
RELATIONSHIPS = [
    ("Order Lines","Promise Date","Calendar","Date"), ("Order Lines","Warehouse","Warehouse","Warehouse"),
    ("Order Lines","SKU","Product","SKU"), ("Inventory","Inventory Date","Calendar","Date"),
    ("Inventory","Warehouse","Warehouse","Warehouse"), ("Inventory","SKU","Product","SKU"),
]


def schema(path, version):
    return FABRIC + path + "/" + version + "/schema.json"


def save(path, contents):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(contents, encoding="utf-8")


def save_json(path, document):
    save(path, json_text(document))


def identifier(name):
    return "'" + name.replace("'", "''") + "'"


def token(*parts):
    return hashlib.sha256(":".join(parts).encode()).hexdigest()[:20]


def make_partition(con, sql, columns):
    stream = io.StringIO(newline="")
    writer = csv.writer(stream, lineterminator="\n")
    writer.writerow([name for name, _ in columns])
    for row in con.execute(sql).fetchall():
        writer.writerow([str(value).lower() if isinstance(value,bool) else value for value in row])
    compressor = zlib.compressobj(level=9, wbits=-15)
    material = stream.getvalue().encode()
    archive = base64.b64encode(compressor.compress(material)+compressor.flush()).decode()
    chunks = [archive[i:i+4000] for i in range(0,len(archive),4000)]
    rows = ",\n\t\t\t\t\t\t".join('"' + chunk + '"' for chunk in chunks)
    conversions = ", ".join('{"'+name+'", '+TYPES[typ]+"}" for name,typ in columns)
    return [
        "\t\t\tlet",
        "\t\t\t\tPayload = Text.Combine({",
        "\t\t\t\t\t\t" + rows,
        '\t\t\t\t}, ""),',
        "\t\t\t\tSource = Binary.Decompress(Binary.FromText(Payload, BinaryEncoding.Base64), Compression.Deflate),",
        '\t\t\t\tRows = Csv.Document(Source, [Delimiter=",", Encoding=65001, QuoteStyle=QuoteStyle.Csv]),',
        "\t\t\t\tHeaders = Table.PromoteHeaders(Rows, [PromoteAllScalars=true]),",
        '\t\t\t\tTyped = Table.TransformColumnTypes(Headers, {'+conversions+'}, "en-US")',
        "\t\t\tin",
        "\t\t\t\tTyped",
    ]


def make_model(con, base):
    root = base / (NAME+".SemanticModel")
    definition = root / "definition"
    save_json(root/"definition.pbism",{"$schema":schema("item/semanticModel/definitionProperties","1.0.0"),"version":"4.2","settings":{}})
    save(definition/"database.tmdl","database\n\tcompatibilityLevel: 1600\n")
    save(definition/"model.tmdl","model Model\n\tculture: en-US\n\tdefaultPowerBIDataSourceVersion: powerBI_V3\n"
         "\tsourceQueryCulture: en-US\n\n"+
         "\n".join("ref table "+identifier(table) for table in TABLES)+"\n")
    relation_text = []
    for source, column, end, key in RELATIONSHIPS:
        relation_text += [
            "relationship "+str(uuid.uuid5(uuid.NAMESPACE_URL,source+column+end+key)),
            "\tfromColumn: "+identifier(source)+"."+identifier(column),
            "\ttoColumn: "+identifier(end)+"."+identifier(key), "",
        ]
    save(definition/"relationships.tmdl","\n".join(relation_text))
    for table,(sql,cols) in TABLES.items():
        parts = ["table "+identifier(table), ""]
        for name,typ in cols:
            parts += [f"\tcolumn {identifier(name)}", f"\t\tdataType: {typ}", "\t\tsummarizeBy: none",
                      f"\t\tsourceColumn: {name}"]
            if typ == "dateTime":
                parts.append("\t\tformatString: yyyy-MM-dd")
            if table == "Calendar" and name == "Date":
                parts.append("\t\tisKey")
            parts.append("")
        for name,expr,fmt in MEASURES.get(table,[]):
            parts += [f"\tmeasure {identifier(name)} = {expr}", f"\t\tformatString: {FORMATS[fmt]}", ""]
        parts += ["\tpartition "+identifier(table)+" = m","\t\tmode: import","\t\tsource ="]
        parts += make_partition(con,sql,cols)
        save(definition/"tables"/(table+".tmdl"),"\n".join(parts)+"\n")


def field(table, prop, kind="Column"):
    return {kind: {"Expression":{"SourceRef":{"Entity":table}}, "Property":prop}}


def projection(table, prop, kind="Column"):
    return {"field":field(table,prop,kind), "queryRef":table+"."+prop, "nativeQueryRef":prop}


def literal(value):
    return {"expr":{"Literal":{"Value":value}}}


def format_title(title):
    return {"title":[{"properties":{"show":literal("true"),"text":literal("'"+title+"'")}}]}


def make_report(base):
    root = base/(NAME+".Report")
    definition = root/"definition"
    page_id = token(NAME,"overview")
    page = definition/"pages"/page_id
    save_json(base/(NAME+".pbip"),{"$schema":schema("pbip/pbipProperties","1.0.0"),"version":"1.0",
        "artifacts":[{"report":{"path":NAME+".Report"}}],"settings":{"enableAutoRecovery":True}})
    save_json(root/"definition.pbir",{"$schema":schema("item/report/definitionProperties","2.0.0"),"version":"4.0",
        "datasetReference":{"byPath":{"path":"../"+NAME+".SemanticModel"}}})
    save_json(definition/"version.json",{"$schema":schema(REPORT+"versionMetadata","1.0.0"),"version":"2.0.0"})
    save_json(definition/"report.json",{"$schema":schema(REPORT+"report",VERSIONS["report"]),
        "themeCollection":{"baseTheme":{"name":"CY24SU02","type":"SharedResources",
            "reportVersionAtImport":{"visual":"2.4.0","page":"2.0.0","report":"3.0.0"}}}})
    save_json(definition/"pages"/"pages.json",{"$schema":schema(REPORT+"pagesMetadata","1.1.0"),
        "pageOrder":[page_id],"activePageName":page_id})
    save_json(page/"page.json",{"$schema":schema(REPORT+"page",VERSIONS["page"]),"name":page_id,
        "displayName":"Fulfillment performance","displayOption":"FitToPage","width":1280,"height":800})

    def visual(tag,kind,rect,roles=None,title=None,objects=None,order_by=None):
        name = token(NAME,tag)
        x,y,width,height = rect
        visual_data = {"visualType":kind,"drillFilterOtherVisuals":True}
        if roles:
            visual_data["query"] = {"queryState":{role:{"projections":[projection(*item) for item in items]}
                for role,items in roles.items()}}
        if order_by:
            visual_data["query"]["sortDefinition"] = {"sort":[{"field":field(*order_by),"direction":"Descending"}]}
        if title:
            visual_data["visualContainerObjects"] = format_title(title)
        if objects:
            visual_data["objects"] = objects
        save_json(page/"visuals"/name/"visual.json",{
            "$schema":schema(REPORT+"visualContainer",VERSIONS["visualContainer"]),"name":name,
            "position":{"x":x,"y":y,"width":width,"height":height,"z":1000+y+x,"tabOrder":1000+y+x},
            "visual":visual_data,
        })

    personas = [
        ("Wholesale fulfillment performance",28,"#142133"),
        ("Synthetic data · Simulated distributor · Review the service and inventory trade-off",13,"#4D5C70"),
    ]
    paragraphs = [{"textRuns":[{"value":copy,"textStyle":{"fontFamily":"Segoe UI","fontSize":f"{size}px","color":color}}],
                   "horizontalTextAlignment":"left"} for copy,size,color in personas]
    visual("title","textbox",(26,14,750,76),objects={"general":[{"properties":{"paragraphs":paragraphs}}]})
    for tag,(table,prop,x) in {"site":("Warehouse","Warehouse",814),"category":("Product","Category",1040)}.items():
        visual(tag,"slicer",(x,19,208,72),{"Values":[(table,prop)]},
               objects={"data":[{"properties":{"mode":literal("'Dropdown'")}}]})
    m = lambda name,table="Order Lines":(table,name,"Measure")
    visual("kpis","cardVisual",(27,100,1225,102),{"Data":[m("Line OTIF"),m("On Time Unit Fill"),
        m("Missed Promise Units"),m("Ending Inventory Value","Inventory")]})
    visual("weekly","lineChart",(27,217,741,276),{
        "Category":[("Calendar","Week Beginning")],"Y":[m("Line OTIF"),m("On Time Unit Fill")]},
        "Delivery performance by promise week")
    visual("gaps","barChart",(782,217,470,276),{
        "Category":[("Warehouse","Warehouse")],"Y":[m("Missed Promise Units")]},
        "Missed promise units by warehouse",order_by=m("Missed Promise Units"))
    visual("worklist","tableEx",(27,508,1225,255),{"Values":[("Warehouse","Warehouse"),("Product","Category"),
        ("Product","SKU"),m("Missed Promise Units"),m("Line OTIF"),m("Ending Stock Units","Inventory")]},
        "SKU replenishment review",order_by=m("Missed Promise Units"))


def build_native(con, folder=None):
    base = Path(folder) if folder else ROOT/"power-bi"
    make_model(con,base)
    make_report(base)
