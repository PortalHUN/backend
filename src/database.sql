CREATE DATABASE application;
USE application;
CREATE TABLE users( ID int UNSIGNED AUTO_INCREMENT PRIMARY KEY, Username varchar(255) UNIQUE NOT NULL, Email varchar(255) UNIQUE NOT NULL, Password varchar(255) NOT NULL);