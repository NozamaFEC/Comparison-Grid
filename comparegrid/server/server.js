var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
var app = express();
var db = require('../database');


app.use(express.static(path.join(__dirname, "../client/dist")));
// app.use( bodyParser.json() );



app.get('/products', (req, res) => {
  db.getAllInfo((err, info) => {
    if(err) {
      res.status(401).send(err)
    }
    res.send(info);
  })  
})

app.listen(4000, function() {
  console.log('listening on port 4000!');
});

