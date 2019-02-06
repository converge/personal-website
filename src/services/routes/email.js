require('dotenv').config()
// { router } ?
const router = require('express').Router();
const nodemailer = require('nodemailer')

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
        to: process.env.EMAIL_TO,
        replyTo: `${req.body.email}`,
        subject: `${req.body.subject}`,
        html: htmlEmail
      }
      transporter.sendMail(mailOptions, (error, info) => {
        console.log(process.env)
        if (error) {
          console.log('email send error: ', error)
          return res.status(500).send(`Error sending email ${error}`)
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
