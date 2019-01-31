import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Base from '../Base'
import Admin from '../Admin'

class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route path='/' exact component={Base} />
        <Route path='/admin' component={Admin} />
      </Switch>
    )
  }
}

export default Routes