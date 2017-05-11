-- Create the database
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table
CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean NOT NULL,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);