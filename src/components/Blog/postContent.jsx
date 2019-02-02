import React, { Component } from 'react'
import api from '../../services/api'

class PostContent extends Component {

  state = {
    posts: []
  }

  componentDidMount = async () => {
    const postTitle = this.props.match.params.postTitle
    const response = await api.get('/blog/post', {
      params: {
        slug: postTitle
      }
    })
    if (response.status === 200) {
      this.setState({
        posts: response.data
      })
    }
  }

  render() {
    return (
      <div className="content-blog-block blog-area" >
        <section>
          <p className="blog-title">{this.state.posts.title}</p>
          <p>{`Category: ${this.state.posts.category}`}</p>
        </section>
        <div className="blog-posts">
          {this.state.posts.content}
        </div>
      </div>
    )
  }
}

export default PostContent