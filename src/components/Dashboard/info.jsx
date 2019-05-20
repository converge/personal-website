import React, { Component } from 'react'
import api from '../../services/api'
import { DashboardInfo } from './styles'

export default class Info extends Component {
  state = {
    totalPosts: 'loading...'
  }

  componentDidMount = async () => {
    const response = await api.get('/blog/gettotalposts')
    console.log(response)
    if (response.status === 200) {
      this.setState({
        totalPosts: response.data
      })
    }
  }

  render() {
    return (
      <div>
        <div className="title-bar">Dashboard</div>
        <DashboardInfo>
          <p>
            Total posts: <strong>{this.state.totalPosts}</strong>
          </p>
        </DashboardInfo>
      </div>
    )
  }
}
