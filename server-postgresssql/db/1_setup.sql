DROP TABLE IF EXISTS plants;

CREATE TABLE plants (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    light varchar(255) NOT NULL,
    weeks_kept_alive int NOT NULL
);

DROP TABLE IF EXISTS plantsowner;

CREATE TABLE plantsowner (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    owner varchar(255) NOT NULL
);




