import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'


class CreatePost extends Component {

  handleSubmit = async (values, actions) => {
    actions.setSubmitting(false)
    console.log('ook')
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
            <div className='post-general'>
              <Form>
                <div className='post-field'>
                  <Field name='title' type='text' placeholder='Title'/>
                </div>
                <div className='post-field'>
                  <Field name='category' type='text' placeholder='Category'/>
                </div>
                <div className='post-field'>
                  <textarea name='content'></textarea>
                </div>
                <div className='post-submit'>
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