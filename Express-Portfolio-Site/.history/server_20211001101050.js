//////////////////////////////////////////////////////////
//server.js
//Victor Wheeler
//301167760
//10/1/2021
//////////////////////////////////////////////////////////

//declare variables and constants
var express = require('express');   
var app = express();                
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
const nodemailer = require('nodemailer')


// set the view engine to ejs
app.set('view engine', 'ejs');

//set public folder as static
app.use(express.static("public"));

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
app.get('/projects', function(req, res) {
    res.render('pages/projects');
  });

  // Services page
app.get('/services', function(req, res) {
    res.render('pages/services');
  });

  // Contact Me page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
  });

  // POST route from contact form
app.post('/contact', (req, res) => {
  })

  //set listening port and log to console
app.listen(3000);
console.log('Server is listening on port 3000');