create table fact_action as
select contract_transaction_unique_key as action_id, contract_award_unique_key as award_id,
       award_id_piid as piid, modification_number as mod_number,
       cast(action_date as date) as action_date,
       year(cast(action_date as date) + interval '3 months')::integer as fiscal_year,
       extract(month from cast(action_date as date))::integer as calendar_month,
       cast(federal_action_obligation as decimal(20,2)) as net_obligation,
       awarding_agency_name as agency,
       coalesce(nullif(trim(awarding_sub_agency_name), ''), 'Unspecified office') as bureau,
       case when nullif(trim(recipient_uei), '') is not null then 'UEI:' || upper(trim(recipient_uei))
            when nullif(trim(recipient_name), '') is not null then 'NAME:' ||
                 regexp_replace(upper(trim(recipient_name)), '\s+', ' ', 'g')
            else null end as supplier,
       recipient_uei, recipient_name, naics_code as naics, extent_competed, type_of_set_aside
from source;

create view supplier_gross as
select agency, bureau, naics, supplier, sum(net_obligation) as gross_positive
from fact_action where net_obligation > 0 and supplier is not null
group by all;

create view concentration as
select agency, bureau, naics, count(*) as supplier_count,
       max(gross_positive) / sum(gross_positive) as top_supplier_share,
       sum(gross_positive * gross_positive) / power(sum(gross_positive), 2) as hhi,
       sum(gross_positive) as known_supplier_gross
from supplier_gross group by all;

create view segments as
with rollup as (
    select agency, bureau, naics, sum(net_obligation) as net,
           sum(greatest(net_obligation, 0)) as gross_positive,
           sum(least(net_obligation, 0)) as deobligation,
           count(distinct award_id) filter (where net_obligation > 0) as funded_awards,
           count(distinct fiscal_year) filter (where net_obligation > 0) as active_years
    from fact_action group by all
), eligible as (
    select a.*, c.supplier_count, c.top_supplier_share, c.hhi,
           c.known_supplier_gross / nullif(a.gross_positive, 0) as identity_coverage,
           a.funded_awards >= 10 and a.active_years = 3 and a.net > 0
               and c.known_supplier_gross >= 0.95 * a.gross_positive as eligible
    from rollup a left join concentration c using (agency, bureau, naics)
), ranked as (
    select agency, bureau, naics, round(100 * (
        0.35 * cume_dist() over (order by net)
        + 0.35 * cume_dist() over (order by funded_awards)
        + 0.30 * cume_dist() over (order by -hhi)), 1) as score
    from eligible where eligible
)
select * from eligible left join ranked using (agency, bureau, naics);
