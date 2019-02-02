import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import api from '../../services/api'

class SignUpForm extends Component {

  handleSubmit = async (values, actions) => {
    actions.setSubmitting(false)
    const credentials = {
      name: values.name,
      email: values.email,
      password: values.password,
      password2: values.password2
    }

    let response = await api.post('/user/signup', credentials)
    if (response.status === 200) {
      // reset form
      values.name = ''
      values.email = ''
      values.password = ''
      values.password2 = ''
      actions.resetForm(values)
      actions.setStatus({
        success: 'New user created !',
        css: 'success'
      })
      
    } else {
      actions.setStatus({
        success: 'Something went wrong !',
        css: 'error'
      })
    }
  }

  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            password2: ''
          }}
          validate={val => {
            let errors = {}
            if (!val.name) {
              errors.name = 'Name is required'
            } else if (!val.email) {
              errors.email = 'E-Mail is required'
            } else if (!val.password) {
              errors.password = 'Password is required'
            } else if (val.password !== val.password2) {
              errors.password2 = "Password 1 and 2 doesn't match"
            }
            return errors
          }}
          onSubmit={this.handleSubmit}

          render={x => (
            <div className='login-form'>
              <Form>
                <div className='login-item'>
                  <Field name='name' type='text' placeholder='Name' />
                </div>
                <div className='login-item'>
                  <Field name='email' type='text' placeholder='E-Mail' />
                </div>
                <div className='login-item'>
                  <Field name='password' type='password' placeholder='Password' />
                </div>
                <div className='login-item'>
                  <Field name='password2' type='password' placeholder='Password 2' />
                </div>
                <div className='login-item'>
                  <button type='submit'>SignUp</button>
                </div>
                <ErrorMessage name='name' className='field-validation' component='div' />
                <ErrorMessage name='email' className='field-validation' component='div' />
                <ErrorMessage name='password' className='field-validation' component='div' />
                <ErrorMessage name='password2' className='field-validation' component='div' />
                <div className={`form-sending ${x.status ? x.status.css : ''}`}>
                  {x.status ? x.status.success : ''}
                </div>
              </Form>
            </div>
          )}
        />
      </div>
    )
  }
}

export default SignUpForm