create table rejected_new as
select n.*,
       case when x.student_id is null then 'Unmapped student'
            when d.instruction_date is null then 'Unexpected date'
            when a.new_code is null then 'Unknown attendance code' end as issue
from new_export n
left join student_crosswalk x using(new_id)
left join instruction_day d using(instruction_date)
left join code_crosswalk a on a.new_code = n.attendance_code
where x.student_id is null or d.instruction_date is null or a.new_code is null;

create view new_with_identity as
select n.*, x.student_id, a.canonical_status
from new_export n join student_crosswalk x using(new_id)
join instruction_day d using(instruction_date)
left join code_crosswalk a on a.new_code=n.attendance_code;

create table duplicate_review as
select student_id, instruction_date, count(*) as source_rows,
       count(distinct coalesce(canonical_status,'UNKNOWN:' || attendance_code)) as distinct_states
from new_with_identity group by all having count(*) > 1;

create view newest_event as
select * from new_with_identity
qualify row_number() over (partition by student_id,instruction_date
    order by updated_at desc, row_id desc) = 1;

create table fact_reconciliation as
select coalesce(o.student_id,n.student_id) as student_id,
       coalesce(o.instruction_date,n.instruction_date) as instruction_date,
       s.campus, s.grade,
       o.canonical_status as expected_status, n.canonical_status as observed_status,
       n.attendance_code as new_raw_code,
       coalesce(d.source_rows,case when n.row_id is not null then 1 else 0 end) as new_row_count,
       coalesce(d.distinct_states, 0) > 1 as conflicting_edits,
       case when o.student_id is null then 'Unexpected record'
            when n.student_id is null then 'Missing record'
            when n.canonical_status is null then 'Unknown code'
            when o.canonical_status != n.canonical_status then 'Status mismatch'
            else 'Matched' end as outcome
from legacy_export o full outer join newest_event n using(student_id,instruction_date)
join dim_student s on s.student_id=coalesce(o.student_id,n.student_id)
left join duplicate_review d on d.student_id=coalesce(o.student_id,n.student_id)
    and d.instruction_date=coalesce(o.instruction_date,n.instruction_date);

create view campus_metrics as
with metrics as (
    select campus,
       count(*) filter(where expected_status is not null) as baseline,
       count(*) filter(where outcome='Matched') as matches,
       count(*) filter(where outcome='Unknown code') as unknown_codes,
       count(*) filter(where outcome='Missing record') as missing_records,
       count(*) filter(where outcome='Status mismatch') as status_mismatches,
       count(*) filter(where outcome='Unexpected record') as unexpected_records,
       count(*) filter(where conflicting_edits) as conflicting_edits,
       avg((expected_status!='Absent')::integer) filter(where expected_status is not null) as baseline_rate,
       avg((observed_status!='Absent')::integer) filter(where observed_status is not null) as converted_rate
    from fact_reconciliation group by campus
)
select *, matches/nullif(baseline,0) as match_rate, converted_rate-baseline_rate as attendance_delta,
       matches/nullif(baseline,0) >= 0.995 and unknown_codes=0 and unexpected_records=0
          and abs(converted_rate-baseline_rate) <= 0.005 as campus_pass
from metrics;
