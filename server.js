var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');

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

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({ secret: 'topsecret',resave: true, saveUninitialized: true, cookie:{_expires : 60000 * 10} })); // session secret
app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
    console.log(req.user);
    if (req.isAuthenticated())
        return next();

    res.send('Authorize yourself');
}

app.post('/api/comments', function(req, res){
  Tutorial.findById(req.body.id, function(err, tutorial) {
    if(err){
      res.sendStatus(404);
    } else{
      tutorial.comments.push({ content: req.body.content, username: req.body.username});

      tutorial.save(function(err) {
        if(err){
          res.sendStatus(403);
        } else{
          res.sendStatus(200);
        }
      });
    }
  });
});

app.get('/api/user', isLoggedIn, function(req, res){
  res.json({ username: req.user.username});
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
/*app.post('/api/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.send(user);
      });
    })(req, res, next);
  });*/


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
