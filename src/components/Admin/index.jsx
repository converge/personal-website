import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import './index.css'
import createPost from '../Blog/createPost'
import { Switch, Route, Redirect, Link } from 'react-router-dom'


class SignInForm extends Component {
  handleSubmit = async (values, actions) => {
    actions.setSubmitting(false)
  
    const credentials = {
      email: values.user,
      password: values.passwd
    }
    this.props.signIn(credentials, () => this.props.history.push('/admin/dashboard'))
  }
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <p>
          <Link to="/admin/blog/createpost">Create Blog Post (link)</Link>
        </p>

        <Switch>
          <Route path='/admin/blog/createpost' component={createPost} />
          {/* <PrivateRoute path='/admin/dashboard' component={Dashboard} /> */}
        </Switch>

        <Formik
          initialValues={{
            user: '',
            passwd: '',
          }}

          validate={val => {
            let errors = {}
            if (!val.user) {
              errors.user = 'User is required'
            } else if (!val.passwd) {
              errors.passwd = 'Password is required'
            }
            return errors
          }}

          onSubmit={this.handleSubmit}

          render={x => (
            <div className='login-form'>
              <Form>
                <div className='login-item'>
                  <Field name='user' type='text' placeholder='Username' />
                </div>
                <div className='login-item'>
                  <Field name='passwd' type='password' placeholder='Password' />
                </div>
                <div className='login-item'>
                  <button type='submit' disabled={x.isSubmitting}>Login</button>
                </div>
                <div className="logi-item">
                  {x.status ? x.auth : ''}
                </div>
              </Form>
            </div>
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials, redirect) => dispatch(signIn(credentials, redirect))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
