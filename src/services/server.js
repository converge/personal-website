require("dotenv").config()
const blog = require('./routes/blog')
const bodyParser = require('body-parser')
const cors = require('cors')
const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()
const mongoDB = process.env.MONGODB;
// debug
// const mongoose = require('mongoose').set('debug', true)
const mongoose = require('mongoose')
const email = require('./routes/email')

const httpsOptions = {
  cert: fs.readFileSync('/etc/letsencrypt/live/joaovanzuita.me/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/joaovanzuita.me/privkey.pem'),
  // TODO: is CA necessary
  ca: fs.readFileSync('/etc/letsencrypt/live/joaovanzuita.me/chain.pem'),

}

mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

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
app.listen(process.env.API_PORT, () => console.log(`HTTP server listening on port ${process.env.API_PORT}`))
https.createServer(httpsOptions, app).listen(process.env.API_SSL_PORT, () => console.log(`HTTPS server listening on port ${process.env.API_SSL_PORT}`))

module.exports = app