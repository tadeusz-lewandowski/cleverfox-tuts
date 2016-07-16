var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');

var Tutorial = require('./models/Tutorial.js');
var User = require('./models/User.js');
require('./passport-config')(passport);

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
var server = require('http').createServer(app);
var io = require("socket.io").listen(server)

app.use(cookieParser());

app.use(session(config.session));
app.use(passport.initialize());
app.use(passport.session());

/*app.all('/habanero/*', function(req, res, next) {
  console.log(req.user);
  if (req.isAuthenticated())
      return next();
  res.sendStatus(401);
});*/
app.use('/habanero/elczupakabra/nekoneko', express.static(path.join(__dirname, 'client-admin')));

app.use('/', express.static(path.join(__dirname, 'client')));

//app.use(express.static(__dirname + '/client'));
//app.use('/admin', express.static(__dirname + '/client-admin'));
//app.use('/', express.static(__dirname + '/client'));
//app.use('/admin', express.static(__dirname + '/client-admin'));

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());




function isLoggedIn(req, res, next) {
  console.log(req.user);
  if (req.isAuthenticated())
      return next();
  res.sendStatus(401);
  //res.send('Authorize yourself');
}

function isLoggedInAsAdmin(req, res, next) {
  console.log(req.user);
  if (req.isAuthenticated() && req.user.role === 'admin')
      return next();

  res.send('Authorize yourself');
}

/*app.get('/habanero/elczupakabra/nekoneko/*', isLoggedIn, function(req, res){
  res.json({ id: req.user.id, username: req.user.username });
});*/

app.get('/api/profile', isLoggedIn, function(req, res){
  res.json({ id: req.user.id, username: req.user.username });
});

app.get('/api/logout', function(req, res){
  req.logout();
  res.sendStatus(200);
});

app.post('/api/signup',
  passport.authenticate('local-signup'),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  }
);

app.post('/api/login',
  passport.authenticate('local-login'),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  }
);

app.post('/api/comments', isLoggedIn, function(req, res){
  Tutorial.findById(req.body.id, function(err, tutorial) {
    if(err){
      res.sendStatus(404);
    } else{
      tutorial.comments.push({ content: req.body.content, username: req.user.username});

      tutorial.save(function(err) {
        if(err){
          res.sendStatus(403);
        } else{
          io.emit('newComment ' + req.body.id, tutorial.comments);
          res.sendStatus(200);
        }
      });
    }
  });
});

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

        /*Tutorial.find({}, function(err, tutorials) {
          if(err){
            res.sendStatus(404);
          } else{
            io.emit('newTutorial', tutorials);
            res.sendStatus(200);
          }
        });*/

        io.emit('newTutorial', tutorial);
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
            io.emit('updateTutorial', tutorial);
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
        io.emit('deleteTutorial', {id: req.params.id});
        res.sendStatus(200);
      }
    });
  });



app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
});



server.listen(config.port, function () {
  console.log('Cleverfox tuts listening on port ' + config.port + '!');
});


io.on('connection', function(socket){
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
