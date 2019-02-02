import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import Dashboard from '../Dashboard'
import SignIn from './signIn';
import SignUp from './signUp';
import './index.css'


class Admin extends Component {

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
        <Switch>
          <Route path='/admin/signin' component={SignIn} />
          <Route path='/admin/signup' component={SignUp} />
          <Route component={Dashboard}/>
        </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
