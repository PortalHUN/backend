const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST     || 'localhost',
    user: process.env.DB_USER     || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB      || 'application'
})

connection.connect((err)=>{
    if(err) return console.log(err);
    console.log(`[DB] Successfull connection...`);
})

module.exports = connection;