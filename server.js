var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.route('/api/tutorials')
  .get(function(req, res){
    res.send('Hello');
  })
  .post(function(req, res){
    res.send(req.body);
  });


app.listen(config.port, function () {
  console.log('Cleverfox tuts listening on port ' + config.port + '!');
});
