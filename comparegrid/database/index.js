var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 
  console.log('Connected to the MySQL server.');
});

var getAllInfo = function(cb) {
    connection.query('SELECT * FROM toys', (err, products) => {
        if (err) {
            cb(err, null)
        } else {
            cb(null, products)
        }
    })
}
 
module.exports.getAllInfo = getAllInfo;
