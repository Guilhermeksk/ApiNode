//baixar essas dependencias ->
//npm i  express mysql dotenv cors bpody-parser
//npm i nodemon --save-dev

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`conectado ao banco de dados: ${process.env.DB_NAME}`);
});

module.exports = connection;