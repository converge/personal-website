import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Base from '../Base'
import Admin from '../Admin'
import NoMatch from '../NoMatch'
import BlogPost from '../AsideContent/blogPost'
import { Security, ImplicitCallback } from '@okta/okta-react'
require('dotenv').config()

const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID
}

class Routes extends Component {
  render() {
    return (
      <Security
        issuer={config.issuer}
        client_id={config.client_id}
        redirect_uri={config.redirect_uri}
      >
        <Switch>
          <Route path="/" exact component={Base} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/blog/:postTitle" component={BlogPost} />
          <Route path="/admin" component={Admin} />
          <Route component={NoMatch} />
        </Switch>
      </Security>
    )
  }
}

export default Routes
