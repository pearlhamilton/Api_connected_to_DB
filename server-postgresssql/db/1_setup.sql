DROP TABLE IF EXISTS plants;

CREATE TABLE plants (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    lightNeeds varchar(255) NOT NULL
);

