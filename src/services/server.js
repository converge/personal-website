require("dotenv").config();
const blog = require('./routes/blog')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
const mongoDB = process.env.MONGODB;
const mongoose = require('mongoose').set('debug', true);
const passport = require('passport')
const user = require('./routes/user')
const session = require('express-session');

require('./passportConfig')(passport);

mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
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

app.use('/user', user)
app.use('/blog', blog)

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

const PORT = 3007

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))