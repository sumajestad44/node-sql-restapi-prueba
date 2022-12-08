CREATE DATABASE IF NOT EXISTS enterprisedb;

USE enterprisedb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee VALUES
    (1, 'Joe', '2000'),
    (2, 'Mamma', '3000'),
    (3, 'Ligma', '4000'),
    (4, 'Balls', '5000');