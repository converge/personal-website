import React, { Component } from 'react'
import ListPosts from '../Blog/listPosts'
import EditPost from '../Blog/edit'
import createPost from '../Blog/create'
import DashBoardInfo from '../Dashboard/info'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Switch, Route } from 'react-router-dom'
import { withAuth } from '@okta/okta-react'
import { TopBar, ContainerDashboard, DashboardRightContent } from './styles'

class Dashboard extends Component {
  state = {
    authenticated: null,
    userName: ''
  }

  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated()
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated })
    }
  }

  componentDidMount = async () => {
    this.checkAuthentication()
    const accessToken = await this.props.auth.getAccessToken()
    const userInfo = await this.props.auth.getUser(accessToken)
    this.setState({
      userName: userInfo.name
    })
  }

  componentDidUpdate = async () => {
    this.checkAuthentication()
  }

  login = async () => {
    this.props.auth.login('/')
  }

  logout = async () => {
    // Redirect to '/' after logout
    this.props.auth.logout('/')
  }

  render() {
    const userName = this.state.userName
    return (
      <div>
        <TopBar>
          <ul>
            <li>Logged in as: {userName}</li>
            <li />
            <li>
              {this.state.authenticated ? (
                <button onClick={this.logout}>Logout</button>
              ) : (
                <button onClick={this.login}>Login</button>
              )}
            </li>
          </ul>
        </TopBar>
        <ContainerDashboard>
          <div className="left-content">
            <ul>
              <li>
                <Link to="/admin/blog/list">
                  <FontAwesomeIcon icon={'list-ol'} size="2x" />
                  <p>List Posts</p>
                </Link>
              </li>
              <li>
                <Link to="/admin/blog/create">
                  <FontAwesomeIcon icon={'plus-circle'} size="2x" />
                  <p>Create Post</p>
                </Link>
              </li>
            </ul>
          </div>
          <DashboardRightContent>
            <Switch>
              <Route path="/admin/blog/edit/:id" component={EditPost} />
              <Route path="/admin/blog/create" component={createPost} />
              <Route path="/admin/blog/list" component={ListPosts} />
              <Route component={DashBoardInfo} />
            </Switch>
          </DashboardRightContent>
        </ContainerDashboard>
      </div>
    )
  }
}

export default withAuth(Dashboard)
