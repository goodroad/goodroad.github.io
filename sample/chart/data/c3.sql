
select  substr(write_date,1,6),count(*)
from report
where substr(write_date,1,4) = '2014'
group by substr(write_date,1,6)
order by substr(write_date,1,6) asc
