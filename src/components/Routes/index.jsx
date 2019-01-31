import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Base from '../Base'
import Admin from '../Admin'

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
    return (
      <Switch>
        <Route path='/' exact component={Base} />
        <Route path='/admin' component={Admin} />
        {/* <PrivateRoute path='/admin/dashboard' component={Dashboard} /> */}
      </Switch>
    )
  }
}

export default Routes