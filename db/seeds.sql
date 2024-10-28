INSERT INTO roles (id, role_name) VALUES
(1, 'Salesperson'),
(2, 'Sales Manger'),
(3, 'Account Manager'),
(4, 'Accountant'),
(5, 'Marketing Manager');

-- Create Salaries
INSERT INTO salaries (id, role_id, salary_amount) VALUES
(1, 1, 90000),
(2, 2, 95000),
(3, 3, 60000),
(4, 4, 80000),
(5, 5, 85000);

-- Create Employees
INSERT INTO employees (id, name, role_id, salary_id) VALUES
(1, 'Mike Ross', 1, 1),
(2, 'Harvey Specter', 2, 2),
(3, 'Rachel Zane', 3, 3),
(4, 'Louis Litt', 4, 4),
(5, 'Jessica Pearson', 5, 5);

-- Insert Managers
INSERT INTO employees (name, position, salary, manager_id) VALUES
('Donna Paulsen', 'Senior Manager', 720000, NULL),
('Dana Scott', 'Senior Manager', 83000, NULL),
('Sheila Saza', 'Senior Manager', 70000, NULL);

-- Insert Employees under Managers
INSERT INTO employees (name, position, salary, manager_id) VALUES
('Robert Zane', 'Software Engineer', 55000, 1),
('Jeff Malone', 'Software Engineer', 75000, 1),
('Logan Sanders', 'QA Engineer', 85000, 1),
('Zoe Lawford', 'Data Analyst', 65000, 2),
('Sean Cahill', 'Software Engineer', 85000, 2),
('Charles Forstman', 'Project Coordinator', 50000, 3),
('Daniel Hartman', 'HR Specialist', 45000, 3),
('Travis Tanner', 'Marketing Manager', 90000, 3);
       
