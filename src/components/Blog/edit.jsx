import api from '../../services/api';
import React, { Component } from 'react'
import '../Base/base.css'
import { BlogPostForm } from './blogPostForm'


class CreatePost extends Component {

  state = {
    title: '',
    category: '',
    content: ''
  }

  componentDidMount = async () => {
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
    console.log('edit')
    const { id } = this.props.match.params
    actions.setSubmitting(false)
    const response = await api.put('/blog/editpost', {
      params: {
        id: id,
        title: values.title,
        category: values.category,
        content: values.content
      }
    })
    if (response.status === 200) {
      console.log('updated')
    }
  }
  render() {
    return (
      <div>
        <h1>Edit Post</h1>
        <BlogPostForm
          handleSubmit={this.handleSubmit}
          title={this.state.title} 
          category={this.state.category} 
          content={this.state.content}
          action={'edit'}
        />
      </div>
    )
  }
}

export default CreatePost