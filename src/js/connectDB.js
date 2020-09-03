const mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react_media',
    multipleStatements: true
});

conn.connect((err) => {
    if(err) {
        console.log("Database connection error" + JSON.stringify(err, undefined, 2));
    } else {
        console.log("Database connection successful");
    }
});

module.exports = conn;
