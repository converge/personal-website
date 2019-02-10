import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import CreatePost from '../Blog/create';
import BlogPosts from '../Blog/posts';
import { withAuth } from '@okta/okta-react';

class Dashboard extends Component {

  state = {
    authenticated: null
  }

  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidMount = async () => {
    this.checkAuthentication();
  }

  componentDidUpdate = async () => {
    this.checkAuthentication();
  }

  login = async () => {
    this.props.auth.login('/');
  }

  logout = async () => {
    // Redirect to '/' after logout
    this.props.auth.logout('/');
  }

  render () {
    return (
      <div>
        <div id="top_bar">
          <ul>
            <button onClick={this.login}>Login</button>
            <button onClick={this.logout}>Logout</button>
          </ul>
        </div>
        <h1>Dashboard</h1>
        <p>Users</p>
        <p>Blog Posts</p>
        <BlogPosts />
        <Link to="/admin/blog/create">Create Blog Post</Link>
        <Switch>
          <Route path='/admin/blog/create' component={CreatePost} />
        </Switch>
      </div>
    )
  }
}

export default withAuth(Dashboard)