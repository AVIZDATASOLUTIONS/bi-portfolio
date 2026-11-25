create table fact_order_line as
with shipments as (
    select o.line_id, sum(s.units) as units_shipped,
           sum(s.units) filter(where s.delivered_on <= o.promised_on and s.delivered_on <= date '2025-12-28') as units_on_time
    from raw_order o left join raw_shipment s using(line_id)
    group by o.line_id
)
select o.*, o.promised_on <= date '2025-12-28' as matured,
       coalesce(s.units_shipped,0)::integer as shipped_units,
       coalesce(s.units_on_time,0)::integer as on_time_units,
       o.promised_on <= date '2025-12-28' and s.units_on_time=o.ordered_units as otif,
       case when o.promised_on <= date '2025-12-28' then o.ordered_units-coalesce(s.units_on_time,0)
            else null end::integer as missed_units
from raw_order o join shipments s using(line_id);

create table fact_inventory as
select l.*, l.closing_units*p.unit_cost as closing_inventory_value
from raw_inventory l join dim_product p using(sku);

create view site_service as
select site, count(*) as matured_lines, sum(otif::integer) as complete_on_time,
       avg(coalesce(otif,false)::integer) as otif, sum(ordered_units) as ordered_units,
       sum(on_time_units) as on_time_units, sum(missed_units) as missed_units
from fact_order_line where matured group by all;

create view sku_service as
with demand as (
    select site,sku,count(*) as matured_lines,sum(ordered_units) as ordered_units,
           sum(on_time_units) as on_time_units,sum(missed_units) as missed_units,
           avg(coalesce(otif,false)::integer) as otif
    from fact_order_line where matured group by all
)
select d.*,p.category,i.closing_units as ending_stock,p.unit_cost,
       missed_units*p.unit_cost as missed_order_cost_basis
from demand d join dim_product p using(sku)
join fact_inventory i on i.sku=d.sku and i.site=d.site and i.inventory_date=date '2025-12-28';
