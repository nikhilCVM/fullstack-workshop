SELECT
department,
COUNT(*) AS employee_count,
round(avg(salary),2) AS avg_salary,
max(salary) AS max_salary
FROM employees
GROUP BY department
HAVING COUNT(*)>2;
