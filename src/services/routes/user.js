require('dotenv').config()
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Load User model
const User = require('../../models/User');

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
// router.get('/register', (req, res) => res.render('register'));

// Register
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }).then(user => {
    if (user) {
      console.log('ja existe')
      return res.status(401).json('Email already exists')
    } else {
      const newUser = new User({
        name,
        email,
        password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              return res.status(200).json('new user create!')
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
})

router.post('/signin', (req, res, redirect) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      console.log(err)
      return res.status(401).json(err);
    }
    if (user) {
      req.logIn(user, (err) => {
        redirect()
      });
      return res.status(200).json('logged in!')
    }
  })(req, res, redirect)
})

// Logout
router.get('/signout', (req, res, redirect) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  redirect()
  return res.send(200).json('logged out')
});

router.post('/send_email', (req, res) => {
  console.log(req.body)
  nodemailer.createTestAccount(
    (err, account) => {
      const htmlEmail = `
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>E-mail: ${req.body.email}</p>
        <p>Subject: ${req.body.subject}</p>
        <h3>Message</h3>
        <p>${req.body.msg}</p>
      `

      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SMTP,
        port: process.env.EMAIL_SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
      })
      let mailOptions = {
        from:  process.env.EMAIL_FROM,
        to: process.env.EMAIL_FROMEMAIL_TO,
        replyTo: `${req.body.email}`,
        subject: `${req.body.subject}`,
        html: htmlEmail
      }
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).send('Email sent')
        }
        console.log('Message sent: %s', info.messageId)
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        // return res.render('contact', {msg: 'Email has been sent'})
        return res.status(200).send('Email sent')
      })
    }
  )
})

module.exports = router;
