import api from '../../services/api';
import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import '../Base/base.css'

class CreatePost extends Component {

  handleSubmit = async (values, actions) => {
    actions.setSubmitting(false)
    const postContent = {
      title: values.title,
      category: values.category,
      content: values.content
    }
    const response = await api.post('/blog/create', postContent)
    if (response.status === 200) {
      console.log('post criado')
    } else {
      console.log('erro criar post')
    }
  }
  render() {
    return(
      <div>
        <h1>create Post</h1>
        <Formik
          initialValues={{
            title: '',
            category: '',
            content: ''
          }}

          validate={val => {
            let errors = {}
            if (!val.title) {
              errors.title = 'Title is required'
            } else if (!val.category) {
              errors.category = 'Category is required'
            } else if (!val.content) {
              errors.content = 'Content is required'
            }
            return errors
          }}

          onSubmit={this.handleSubmit}

          render={x => (
            <div className='form-main'>
              <Form>
                <div className='form-item'>
                  <Field name='title' type='text' placeholder='Title'/>
                </div>
                <div className='form-item'>
                  <Field name='category' type='text' placeholder='Category'/>
                </div>
                <div className='form-item'>
                  <Field name='content' component='textarea' type='text' placeholder='Post Content'/>
                </div>
              <ErrorMessage name='title' className='field-validation' component='div' />
              <ErrorMessage name='category' className='field-validation' component='div' />
              <ErrorMessage name='content' className='field-validation' component='div' />
                <div className='form-item'>
                  <button type='submit' disabled={x.isSubmitting}>Create Post</button>
                </div>
              </Form>
            </div>
          )}
          />
      </div>
    )
  }
}

export default CreatePost