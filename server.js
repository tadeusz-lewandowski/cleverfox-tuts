var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
var mongoose = require('mongoose');

var Tutorial = require('./models/Tutorial.js');

mongoose.connect(config.db);

mongoose.connection.on('connected', function () {
  console.log('Connected');
});

mongoose.connection.on('error',function (err) {
  console.log('connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('disconnected');
});

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
