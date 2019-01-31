import React, { Component } from 'react'
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

  componentDidMount = () => {
    this.setState({
      posts: data
    })
  }

  render() {
    let blogPosts = this.state.posts.map(item => {
      console.log('d ', item)
      return (
        <li key={item.id}>{item.title}</li>
      )}
    )
  return(
      <div className = "content-block blog-area" >
      <section>
        <p className="title-bar">BLOG</p>
      </section>
      <div className="blog-posts">
        <ul>
          {blogPosts}
        </ul>
      </div>
      </div>
    )
  }
}