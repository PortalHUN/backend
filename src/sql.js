const sqlQuery = 
   `CREATE DATABASE ${process.env.DB || 'application'};`
 + ``;

module.exports = sqlQuery;