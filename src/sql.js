const sqlQuery = 
   `CREATE DATABASE ${process.env.DB || 'application'};`
 + `USE ${process.env.DB || 'application'};` 
 + `CREATE TABLE users(ID int UNSIGNED AUTO_INCREMENT PRIMARY KEY, Username varchar(255) UNIQUE NOT NULL, Email varchar(255) UNIQUE NOT NULL, Password varchar(255) NOT NULL)`;

module.exports = sqlQuery;