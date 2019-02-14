import api from '../../services/api';
import React, { Component } from 'react'
import { BlogPostForm } from './blogPostForm'
import { withAuth } from '@okta/okta-react';
import '../Base/style.css'

class CreatePost extends Component {

  handleSubmit = async (values, actions) => {
    actions.setSubmitting(false)
    const postContent = {
      title: values.title,
      category: values.category,
      content: values.content
    }

    const response = await api.post('/blog/create', postContent, {
      headers: {
        Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
      }
    })
    if (response.status === 200) {
      console.log('post criado')
    } else {
      console.log('erro criar post')
    }
  }
  render() {
    return(
      <div>
        <h1>Create Post</h1>
        <BlogPostForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default withAuth(CreatePost)