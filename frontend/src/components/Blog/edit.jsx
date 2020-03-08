import api from '../../services/api'
import React, { Component } from 'react'
import { BlogPostForm } from './blogPostForm'
import { withAuth } from '@okta/okta-react'
import {
  BlogPostEditContainer,
  LiveMarkdown,
  BlogPostWrapper,
  BlogTitle
} from './styles'
import Prism from 'prismjs'
import './prism.css'
import ReactMarkdown from 'react-markdown'
import './style.css'

class CreatePost extends Component {
  state = {
    title: '',
    category: '',
    content: ''
  }

  componentDidUpdate = () => {
    Prism.highlightAll()
  }

  componentDidMount = async () => {
    Prism.highlightAll()
    const { id } = this.props.match.params
    const response = await api.get('/blog/postbyid', {
      params: {
        id: id
      }
    })
    if (response.status === 200) {
      this.setState({
        title: response.data.title,
        category: response.data.category,
        content: response.data.content
      })
    }
  }

  handleSubmit = async (values, actions) => {
    const { id } = this.props.match.params
    const post = {
      id: id,
      title: values.title,
      category: values.category,
      content: values.content
    }
    actions.setSubmitting(false)
    const response = await api.put('/blog/editpost', post, {
      headers: {
        Authorization: 'Bearer ' + (await this.props.auth.getAccessToken())
      }
    })
    if (response.status === 200) {
    }
  }

  onInputChangeHandler = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <BlogPostWrapper>
        <BlogPostEditContainer>
          <BlogPostForm
            handleSubmit={this.handleSubmit}
            title={this.state.title}
            category={this.state.category}
            content={this.state.content}
            onTitleChange={this.onInputChangeHandler}
            onCategoryChange={this.onInputChangeHandler}
            onContentChange={this.onInputChangeHandler}
            action={'edit'}
          />
          <LiveMarkdown>
            <div className="blog-posts">
              <BlogTitle>{this.state.title}</BlogTitle>
              <ReactMarkdown
                className="markdown"
                source={this.state.content}
                escapeHtml={false}
              />
            </div>
          </LiveMarkdown>
        </BlogPostEditContainer>
      </BlogPostWrapper>
    )
  }
}

export default withAuth(CreatePost)
