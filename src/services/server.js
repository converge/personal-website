const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()
const cors = require('cors')

// parse form into json
app.use(bodyParser.json())
// returns key/value object where the value can
// be a string or array (when extended is false)
app.use(bodyParser.urlencoded({
  extended: false
}))

// enable all cors requests
app.use(cors())

// send email
app.post('/send_email', (req, res) => {
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
        host: '',
        port: 587,
        secure: false,
        auth: {
          user: '',
          pass: ''
        }
      })
      let mailOptions = {
        from: '',
        to: '',
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

const PORT = 3001

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))