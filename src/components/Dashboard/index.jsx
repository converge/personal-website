import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import CreatePost from '../Blog/create';
import Blog from '../Blog';

class Dashboard extends Component {

  render() {
    console.log('authenticated ? ', this.props.auth.isAuthenticated)
    return (
      <div>
        <h1>Dashboard</h1>
        <p>
          <span onClick={() => this.props.signOut(() => this.props.history.push('/admin'))}>
            Logout
          </span>
        </p>
        <p>Users</p>
        <p>Blog Posts</p>
        <Blog/>
        <Link to="/admin/blog/create">Create Blog Post</Link>
        <Switch>
          <Route path='/admin/blog/create' component={CreatePost} />
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
    signOut: (redirect) => dispatch(signOut(redirect)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)