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
    Tutorial.find({}, function(err, tutorials) {
      if(err){
        res.sendStatus(404);
      } else{
        res.send(tutorials)
      }
    });
  })
  .post(function(req, res){
    var tutorial = new Tutorial();

    tutorial.title = req.body.title;
    tutorial.category = req.body.category;
    tutorial.content = req.body.content;

    tutorial.save(function(err) {
      if(err){
        res.sendStatus(403);
      } else{
        res.sendStatus(200);
      }
    });
  });

app.route('/api/tutorials/:id')
  .get(function(req, res){
    Tutorial.findById(req.params.id, function(err, tutorial) {
      if(err){
        res.sendStatus(404);
      } else{
        res.send(tutorial);
      }
    });
  })
  .put(function(req, res) {
    Tutorial.findById(req.params.id, function(err, tutorial) {
      if(err){
        res.sendStatus(404);
      } else {
        tutorial.title = req.body.title;
        tutorial.content = req.body.content;
        tutorial.category = req.body.category;

        tutorial.save(function(err) {
          if(err){
            res.sendStatus(403);
          } else{
            res.sendStatus(200);
          }
        });
      }
    });
  })
  .delete(function(req, res) {
    Tutorial.remove({
        _id: req.params.id
    }, function(err, tutorial) {
      if (err){
        res.sendStatus(403);
      } else{
        res.sendStatus(200);
      }
    });
  });

app.listen(config.port, function () {
  console.log('Cleverfox tuts listening on port ' + config.port + '!');
});
