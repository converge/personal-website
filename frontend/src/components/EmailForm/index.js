import React, {useState} from "react"
import {useForm} from "react-hook-form";

const encode = (data) => {
  return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
}

const EmailForm = () => {
  const {handleSubmit, register, errors} = useForm();
  const [msgSent, setMsgSent] = useState(false);

  const onSubmit = (values) => {
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({"form-name": "personal-site-email-contact", ...values})
    })
      .then(setMsgSent(true))
      .catch(error => alert(error));
  }
  return (
    <>
      <form
        className="form-item"
        name="personal-site-email-contact"
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field">

        <input type="hidden" name="form-name" value="personal-site-email-contact"/>
        <input type="text" name="name" placeholder="Name" ref={register({
          required: "Required",
        })}/>
        {errors.name && errors.name.message}
        <input name="email" type="email" placeholder="E-mail" ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}/>
        {errors.email && errors.email.message}
        <input name="subject" type="text" placeholder="Subject" ref={register({
          required: "Required"
        })}/>
        {errors.subject && errors.subject.message}
        <textarea className="textarea-field" name="msg" placeholder="Your message" ref={register({
          required: "Required"
        })}/>
        {errors.msg && errors.msg.message}
        <br/>
        <button type="submit">Submit</button>
      </form>
      {msgSent && (
        <div className="form-sending success">
          Your email was sent!<br/>
          I'll return it as soon as possible.
        </div>)}
    </>
  )
}

export default EmailForm;

