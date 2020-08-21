-- what our database and tables look like
DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE items (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    text VARCHAR(25) NOT NULL,
    isDone BOOL NOT NULL DEFAULT 0
);