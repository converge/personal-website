require("dotenv").config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// to generate random string
const routes = require('./routes')

const passport = require('passport')
const bodyParser = require('body-parser')
const session = require('express-session');
const mongoDB = process.env.MONGODB;

const app = express()

require('./passportConfig')(passport);

mongoose.connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// parse form into json
// necessary because we re working with JSON objects,
// and Express need to know how to parse/work with JSON files
app.use(bodyParser.json())
// returns key/value object where the value can
// be a string or array (when extended is false)
app.use(bodyParser.urlencoded({
  extended: false
}))

// enable all cors requests
app.use(cors())

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// passport
app.use(passport.initialize())
app.use(passport.session())

app.use('/', routes)
// app.use('/signin', routes)

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

const PORT = 3007

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))