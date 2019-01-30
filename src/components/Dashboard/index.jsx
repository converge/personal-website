import React, { Component } from 'react'
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import createPost from '../Blog/createPost'
import { BrowserRouter } from 'react-router-dom'


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
    return (
      <div>
        <h1>Dashboard</h1>
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