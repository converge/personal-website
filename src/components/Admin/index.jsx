import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Dashboard'
import SignIn from './signIn';
import SignUp from './signUp';
import { withAuth, SecureRoute } from '@okta/okta-react';
import './style.css'


class Admin extends Component {

  state = {
    authenticated: null,
    userinfo: null
  }

  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async () => {
    this.props.auth.login('/');
  }

  logout = async () => {
    // Redirect to '/' after logout
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null
    return (
      <div>
        <Switch>
          <Route path='/admin/signin' component={SignIn} />
          <Route path='/admin/signup' component={SignUp} />
          <SecureRoute component={Dashboard}/>
        </Switch>
      </div>
    )
  }
}

export default withAuth(Admin)
