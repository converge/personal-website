import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './blog.css'

export default class Blog extends Component {

  state = {
    posts: []
  }

  componentDidMount = async () => {
    const response = await api.get('/blog/posts')
    if (response.status === 200) {
      this.setState({
        posts: response.data
      })
    }
  }

  render() {
    let blogPosts = this.state.posts.map(item => {
      const postLink = `/blog/${item.slug}`
      return (
        <ul key={item._id}>
        <li key={item._id}><Link to={postLink}>{item.title}</Link></li>
        </ul>
      )}
    )
  return(
      <div className = "content-block blog-area" >
      <section>
        <p className="title-bar">BLOG</p>
      </section>
      <div className="blog-posts">
          {blogPosts}
      </div>
      </div>
    )
  }
}