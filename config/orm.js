var connection = require("../config/connection.js");
    // here u can run queries 
    var orm = {
        all: function(tableInput, cb) {
          var queryString = "SELECT * FROM " + burgers + ";";
          connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
        },
        //vals name of burger
        create: function(burgers, cols, vals, cb) {
          var queryString = "INSERT INTO " + burgers;
      
          
            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += vals;
            queryString += ") ";
      
          console.log(queryString);
      
          connection.query(queryString, vals, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
        },
        // An example of objColVals would be {name: panther, sleepy: true}
        update: function(table, objColVals, condition, cb) {
          var queryString = "UPDATE " + table;
      
          queryString += " SET ";
          queryString += objToSql(objColVals);
          queryString += " WHERE ";
          queryString += condition;
      
          console.log(queryString);
          connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
        },
      };
      
     
      module.exports = orm;