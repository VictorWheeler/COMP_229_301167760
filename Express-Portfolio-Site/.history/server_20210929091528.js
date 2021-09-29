var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// Home page page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// About Me page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// Projects page
app.get('/about', function(req, res) {
    res.render('pages/projects');
  });

  // Services page
app.get('/about', function(req, res) {
    res.render('pages/services');
  });

  // Contact Me page
app.get('/about', function(req, res) {
    res.render('pages/contact');
  });

app.listen(3000);
console.log('Server is listening on port 3000');