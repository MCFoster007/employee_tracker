INSERT INTO department(department_name)VALUES
('Sales'),
('Management'),
('Accounting'),
('Human Resources'),
('Marketing');


INSERT INTO role (title, salary, department_id) VALUES
( 'Salesperson', 80000, 1),
( 'Sales Manager', 90000, 1),
( 'Account Manager',75000, 3),
( 'Accountant', 65000, 3),
( 'Marketing Manager', 85000, 5);


-- Create Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
( 'Mike', 'Ross', 1, NULL),
( 'Harvey', 'Specter', 2, NULL),
( 'Rachel', 'Zane', 3, 2),
('Louis', 'Litt', 4, 2),
('Jessica', 'Pearson', 5, NULL),
('Robert', 'Zane', 2, 5),
('Jeff', 'Malone',  1, 2),
('Logan', 'Sanders', 3, 3),
('Zoe', 'Lawford', 4, 2);

       
