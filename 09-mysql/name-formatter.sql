SELECT 
  CONCAT(UPPER(lastname), firstname) AS formatted_name,
  CONCAT(firstname, '.', lastname, '@company.com') AS email,
  CONCAT(UPPER(LEFT(firstname, 1)), UPPER(LEFT(lastname, 1))) AS initials
FROM employees;
