CREATE DATABASE application DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_unicode_ci;
USE application;
CREATE TABLE users( ID int UNSIGNED AUTO_INCREMENT PRIMARY KEY, Username varchar(255) UNIQUE NOT NULL, Email varchar(255) UNIQUE NOT NULL, Password varchar(255) NOT NULL, Role tinyint UNSIGNED DEFAULT 1);
CREATE TABLE roles(ID tinyint unsigned AUTO_INCREMENT PRIMARY KEY, Name varchar(255) UNIQUE NOT NULL);
INSERT INTO roles (Name) VALUES ("Not active"), ("User"), ("Admin");