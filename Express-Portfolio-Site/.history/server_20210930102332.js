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

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: GMAIL_USER,
    subject: 'New message from contact form at tylerkrys.ca',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render('contact-failure') // Show a page indicating failure
    }
    else {
      res.render('contact-success') // Show a page indicating success
    }
  })
})

app.listen(3000);
console.log('Server is listening on port 3000');