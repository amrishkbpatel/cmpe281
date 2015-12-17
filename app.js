var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database : 'cmpe'
});
var app = express();

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

app.get("/",function(req,res){
    connection.query('SELECT count_gumballs from gumball', function(err, rows, fields) {
        connection.end();
        if (!err)
            console.log('total gumballs: ', rows);
        else
            console.log('Error while performing Query.');
    });
});
connection.query('SELECT machine_model from gumball', function(err, rows, fields) {
    connection.end();
    if (!err)
        console.log('Machine Model:: ', rows);
    else
        console.log('Error while performing Query.');
});
});
connection.query('SELECT machine_Serial from gumball', function(err, rows, fields) {
    connection.end();
    if (!err)
        console.log('Machine Serial: ', rows);
    else
        console.log('Error while performing Query.');
});
});
app.listen(3000);