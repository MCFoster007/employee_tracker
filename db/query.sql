SELECT department.role_title AS , employee.title
FROM title
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;
