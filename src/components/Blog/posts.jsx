import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import { withAuth } from '@okta/okta-react';
import { HashLoader } from 'react-spinners'
import './blog.css'

class Blog extends Component {

  state = {
    posts: [],
    loading: true,
    spinnerClass: {
      display: 'flex',
      alignSelf: 'center',
      marginTop: '80px'
    }
  }

  componentDidMount = async () => {
    const response = await api.get('/blog/posts', {
      headers: {
        Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
      }
    })
    if (response.status === 200) {
      this.setState({
        posts: response.data
      })
      this.setState({
        loading: false,
        spinnerClass: { display: 'none' }
      })
    }
  }

  handleDeletePost = async (id) => {
    const response = await api.delete(`/blog/deletepost/${id}`)
    if (response.status === 200) {
      const activePosts = this.state.posts.filter((posts) => {
        return (posts._id !== id)
      })
      this.setState({
        posts: activePosts
      })
    } else {
      console.log('unable to delete post!')
    }
  }

  render() {
    let blogPosts = this.state.posts.map(item => {
      const postLink = `/blog/${item.slug}`
      if (this.props.isAdmin) {
        return (
          <div key={item._id} className="action-buttons">
            <div className="action-title">
              <Link to={postLink}>{item.title}</Link>
            </div>
            <div className="action-edit-delete">
              <Link to={`/admin/blog/edit/${item._id}`}>
                <button className="edit-post">
                  Edit
                </button>
              </Link>
              <Link to='/admin/blog/list'>
                {/* arrow function prevent handler to be called on rendering */}
                <button onClick={() => { this.handleDeletePost(item._id) }} className="delete-post">
                  Delete
                </button>
              </Link>
            </div>
          </div>
        )
      }
      return (
        <ul key={item._id}>
          <li key={item._id}><Link to={postLink}>{item.title}</Link></li>
        </ul>
      )
    }
    )
    return (
      <div className="content-block blog-area" >
        <section>
          <p className="title-bar">BLOG</p>
        </section>
        <div style={this.state.spinnerClass}>
          <HashLoader
            className="override"
            sizeUnit={"px"}
            size={75}
            color={'#f2da34'}
            loading={this.state.loading}
          />
        </div>
        <div className="blog-posts">
          {blogPosts}
        </div>
      </div>
    )
  }
}

export default withAuth(Blog)