import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Base from '../Base'
import Admin from '../Admin'
import createPost from '../Blog/createPost'
import SignUp from '../Admin/SignUp'
import Dashboard from '../Dashboard'
import { connect } from 'react-redux'

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

class Routes extends Component {

  render() {
    console.log('is auth?? ', this.props.auth.isAuthenticated)
    return (
      <Switch>
        <Route path='/' exact component={Base} />
        <Route path='/admin' component={Admin} />
        {/* <Route path='/admin/signup' exact component={SignUp} /> */}
        <Route path='/admin/dashboard' component={Dashboard} />
        {/* <Route path='/admin/blog/createPost' exact component={createPost} /> */}
        {/* <PrivateRoute path='/admin/dashboard' component={Dashboard} /> */}
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Routes)