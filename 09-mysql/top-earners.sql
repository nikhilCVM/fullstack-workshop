select * from (select name,salary,department,
dense_rank() over(partition by department order by salary desc) 
as rank_in_dept
from employees) as req where rank_in_dept<4;



