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

  

  handleDeletePost = (id) => {
    console.log('delete', id)
  }

  render() {
    let blogPosts = this.state.posts.map(item => {
      const postLink = `/blog/${item.slug}`
      if (this.props.isAdmin) {
        return (
          <ul key={item._id}>
            <li key={item._id}>
              <Link to={postLink}>{item.title}</Link>
              <Link to={`/admin/blog/editcreate/${item}`}>--EDIT--</Link>
              <button onClick={() => this.handleEditPost(item._id)} className="edit-post">
                Edit
              </button>
              <button onClick={() => this.handleDeletePost(item._id)} className="delete-post">
                Delete
              </button>
            </li>
          </ul>
        )
      }
      return (
        <ul key={item._id}>
          <li key={item._id}><Link to={postLink}>{item.title}</Link></li>
        </ul>
      )
    }
    )
    // let spin = (this.state.loading === true) ? 'loading...' : ''
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