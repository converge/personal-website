---
title: Sending email without server using JavaScript and EmailJs
category: general
created-at: 2019-03-29T23:24:58.674+00:00
---

I had a challenging project this week for a client, create a very basic website, responsive, with an email form, without Node.js, without PHP and without ssh access to the server.

I end up with this solution: HTML, CSS, JavaScript, and EmailJs.

EmailJs is a platform that acts as a middleware, to interface your HTML form and your Email Provider. No open SMTP setup on plain text files and no hidden fees (free for 200 emails/month).

1) Creare your HTML form, here is an example:

```html
<form id="contact-form">
  <input type="text" class="field-name" placeholder="Nome" name="user_name" id="user_name">
  <input type="text" class="field-email" placeholder="E-Mail" name="user_email" id="user_email">
<label>Message:</label>

<textarea name="user_msg" id="user_msg" class="field-textarea"/>

<input type="submit" value="Submit"></form>

```

2) Create an EmailJs account at [www.emailjs.com](http://www.emailjs.com)
3) On the Dashboard, go to **Email Service** and set your email credentials
4) Add the following snippet to your .html file

Remember to check if you’re using the latest version [here](https://www.emailjs.com/docs/sdk/installation/).

5) Set the service in the **sendForm function**
  
```js
emailjs.sendForm('yandex', 'template_UUtEEqVe', this);
```

**yandex** is the Service Email name **template_UUtEEqVe** is the template name we have at [template pages](https://dashboard.emailjs.com/templates).

*You can customize the template.*

6) That’s it!
