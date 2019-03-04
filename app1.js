var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a1111111',
    database: 'blog_web',
    multipleStatements: true
});

connection.connect();
let sql = `insert into blog_web.category (id, name)
                        values (100, 'aaa');
                        insert into blog_web.category (id, name)
                        values (100, 'bbb');
                        insert into blog_web.category (id, name)
                        values (101, 'ccc');`;
connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    // `results` is an array with one element for every statement in the query:
    console.log(results[0]); // [{1: 1}]
    console.log(results[1]); // [{2: 2}]
});

connection.end();
