import React, { Component } from 'react'
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    true === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/admin',
        state: { from: props.location }
      }} />
  )} />
)

class Dashboard extends Component {

  render() {
    console.log('authenticated ? ', this.props.auth.isAuthenticated)
    return (
      <div>
        <p>
          <span onClick={() => this.props.signOut(() => this.props.history.push('/admin'))}>
            Logout
          </span>
        </p>
        <p>Users:</p>
        <p>Blog Posts:</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (redirect) => dispatch(signOut(redirect)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)