import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './blog.css'


const data = [
  { id: 1, title: 'teste1', author: 'jp', createdAt: '2019-01-01', content: 'abc abc' },
  { id: 2, title: 'teste2', author: 'jp', createdAt: '2019-01-02', content: 'abc abwwwc' },
  { id: 3, title: 'teste3', author: 'jp', createdAt: '2019-01-02', content: 'awwwbc abwwwc' },
]

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
      return (
        <ul key={item._id}>
        <li key={item._id}><Link to={item.slug}>{item.title}</Link></li>
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