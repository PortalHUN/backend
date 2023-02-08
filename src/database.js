const mysql = require('mysql');
const sqlQuery = require('./sql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST     || 'localhost',
    user: process.env.DB_USER     || 'root',
    password: process.env.DB_PASS || '',
})

const startDB = ()=>{
    connection.connect((err)=>{
        CheckDatabase();
    })
}

const CheckDatabase = ()=>{
    connection.query(`SHOW DATABASES LIKE '${process.env.DB || 'application'}';`,(err,res)=>{
        if(err) return console.log(err);
        else if(!res[0]) {
            connection.query(require('./sql'),(err)=>{
                if(err) return console.log(err);
                console.log(`[DB] Created database template.`);
                connection.changeUser({database: process.env.DB || 'application'},(err)=>{
                    if(err) return console.log(err);
                })
                console.log(`[DB] Connected to Database...`)
            });
        }else{
            connection.changeUser({database: process.env.DB || 'application'},(err)=>{
                if(err) return console.log(err);
            })
            console.log(`[DB] Connected to Database...`)
        }
    })
}


startDB();

module.exports = connection;