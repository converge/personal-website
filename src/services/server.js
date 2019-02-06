require("dotenv").config();
const blog = require('./routes/blog')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
const mongoDB = process.env.MONGODB;
const mongoose = require('mongoose').set('debug', true);
const email = require('./routes/email')

mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const OktaJwtVerifier = require('@okta/jwt-verifier');
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: process.env.OKTA_ISSUER,
  clientId: process.env.OKTA_CLIENT_ID,
  assertClaims: {
    aud: 'api://default',
  },
});

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

app.use('/email', email)
app.use('/blog', blog)

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: err,
    },
  })
})

const PORT = 3007

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))