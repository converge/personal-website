import React from 'react'
import api from '../../services/api'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const EmailForm = () => (
  <div>
    <div className="content-block contact-me-area">
      <section>
        <p className="title-bar">CONTACT ME</p>
      </section>
      <div className="form-main">

        <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            msg: '',
          }}

          validate={values => {
            let errors = {}
            if (!values.name) {
              errors.name = 'Name is required'
            } else if (!values.email) {
              errors.email = 'E-mail is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address'
            } else if (!values.subject) {
              errors.subject = 'Subject is required'
            } else if (!values.msg) {
              errors.msg = 'The email content is empty'
            }
            return errors
          }}

          onSubmit={async (values, actions) => {
            actions.setStatus({
              success: 'Sending email...',
              css: 'sending'
            })
            actions.setSubmitting(false)
            const response = await api.post('/send_email', {
              name: values.name,
              email: values.email,
              subject: values.subject,
              msg: values.msg
            })
            if (response.status === 200) {
              actions.setStatus({
                success: 'Email sent !',
                css: 'success'
              })
            } else {
              actions.setStatus({
                success: 'Something went wrong, email not sent !',
                css: 'error'
              })
            }
          }}
          render={x => (
            <Form>
              <div className="form-item">
                <Field name='name' type='text' placeholder='Name' />
              </div>
              <div className="form-item">
                <Field name='email' type='email' placeholder='E-mail' />
              </div>
              <div className="form-item">
                <Field name='subject' type='text' placeholder='Subject' />
              </div>
              <div className="form-item">
                <Field component='textarea' name='msg' placeholder='Your message' />
              </div>
              <ErrorMessage name='name' className='field-validation' component='div' />
              <ErrorMessage name='email' className='field-validation' component='div' />
              <ErrorMessage name='subject' className='field-validation' component='div' />
              <ErrorMessage name='msg' className='field-validation' component='div' />
              <div className={`form-sending ${x.status ? x.status.css : ''}`}>
                {x.status ? x.status.success : ''}
              </div>
              <div className="form-item">
                <button type='submit' disabled={x.isSubmitting}>Submit</button>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  </div >
)

export default EmailForm
