const mysql = require('mysql');
const nreadlines = require('n-readlines');
const sqlLines = new nreadlines(`${__dirname}\\database.sql`);
const colors = require('cli-colors');
const red = colors.red;
const green = colors.green;


const connection = mysql.createConnection({
    host: process.env.DB_HOST     || 'localhost',
    user: process.env.DB_USER     || 'root',
    password: process.env.DB_PASS || '',
})

const startDB = ()=>{
    connection.connect((err)=>{
        if(err) return console.log(red(err));
        CheckDatabase();
    })
}

let line;
let lineNum = 0;

const CheckDatabase = ()=>{
    connection.query(`SHOW DATABASES LIKE '${process.env.DB || 'application'}';`,(err,res)=>{
        if(err) return console.log(red(err));
        else if(!res[0]) {
            //Doesn't have database
            while(line = sqlLines.next()){
                if(line!='' || line!=null){
                    console.log(`${green(" - "+line.toString('utf-8'))}`)
                    connection.query(line.toString('utf-8'))
                    lineNum++;
                }
            }
            console.log(green(`${lineNum} lines of query executed.`))
            connection.changeUser({database: process.env.DB || 'application'},(err)=>{
                if(err) return console.log(red(err));
            })
            console.log(`[DB] Switched connection to Database...`)
            //
        }else{
            //Have database
            connection.changeUser({database: process.env.DB || 'application'},(err)=>{
                if(err) return console.log(red(err));
            })
            console.log(`[DB] Connected to Database...`)
            //
        }
    })
}


startDB();

module.exports = connection;