create table fact_request as
with cleaned as (
    select unique_key as request_id, try_cast(created_date as timestamp) as created_at,
           try_cast(closed_date as timestamp) as closed_at,
           closed_date is not null as has_closure_value,
           upper(trim(status)) as status,
           case when upper(trim(borough)) in ('MANHATTAN','QUEENS','BROOKLYN','BRONX','STATEN ISLAND')
                then upper(trim(borough)) else 'UNSPECIFIED' end as borough
    from source
)
select *, date_trunc('month', created_at)::date as intake_month,
       year(created_at) as intake_year,
       case when isodow(created_at) in (6,7) then 'Weekend' else 'Weekday' end as day_group,
       case when created_at is null then 'Invalid creation'
            when has_closure_value and closed_at is null then 'Malformed closure'
            when closed_at < created_at then 'Closure before intake'
            when closed_at is null and status in ('CLOSED','RESOLVED') then 'Closed without timestamp'
            else 'Analyzable' end as timing_status,
       coalesce(closed_at <= created_at + interval '7 days' and closed_at >= created_at, false) as closed_7d,
       coalesce(closed_at <= created_at + interval '30 days' and closed_at >= created_at, false) as closed_30d
from cleaned;

create view cohort as
select * from fact_request where timing_status = 'Analyzable';

create view borough_year as
select borough, intake_year, count(*) as eligible_requests,
       avg(closed_7d::integer) as closure_7d,
       avg((not closed_30d)::integer) as unresolved_30d,
       count(*) filter (where not closed_30d) as unresolved_count
from cohort group by all;

create view strata as
select borough, intake_month, count(*) as weight,
       count(*) filter (where day_group='Weekend') as n_weekend,
       count(*) filter (where day_group='Weekday') as n_weekday,
       avg(closed_7d::integer) filter (where day_group='Weekend') as rate_weekend,
       avg(closed_7d::integer) filter (where day_group='Weekday') as rate_weekday
from cohort where borough != 'UNSPECIFIED'
group by all;
