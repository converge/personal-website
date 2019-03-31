import api from '../../services/api'
import React, { Component } from 'react'
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import './prism.css'
import { BlogTitle, BlogCategory } from './styles'

class PostContent extends Component {

  state = {
    posts: []
  }

  componentDidUpdate = () => {
    Prism.highlightAll();
  }

  componentDidMount = async () => {
    Prism.highlightAll();
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
          <BlogTitle>
            {this.state.posts.title}
          </BlogTitle>
          <BlogCategory>
            Category: {`${this.state.posts.category}`}
          </BlogCategory>
        </section>
        <div className="blog-posts">
          <ReactMarkdown className="markdown" source={this.state.posts.content} />
        </div>
      </div>
    )
  }
}

export default PostContent