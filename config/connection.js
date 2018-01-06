var mysql = require("mysql");
var connection;
// create the connection information for the sql database
 if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
 }
 else{
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "burger_db"
    });
 };

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readBurgers();
});

function readBurgers() {
  connection.query("SELECT burger_name FROM burgers", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

module.exports = connection;

