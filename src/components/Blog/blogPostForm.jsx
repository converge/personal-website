import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const BlogPostForm = (props) => (

  <div className='form-main'>
    <Formik
      enableReinitialize
      initialValues={{
        title: props.title,
        category: props.category,
        content: props.content
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

      onSubmit={props.handleSubmit}
      render={x => (
        <Form>
          <div className='form-item'>
            <Field name='title' type='text' placeholder='Title' />
          </div>
          <div className='form-item'>
            <Field name='category' type='text' placeholder='Category' />
          </div>
          <div className='form-item'>
            <Field name='content' component='textarea' type='text' placeholder='Post Content' />
          </div>
          <ErrorMessage name='title' className='field-validation' component='div' />
          <ErrorMessage name='category' className='field-validation' component='div' />
          <ErrorMessage name='content' className='field-validation' component='div' />
          <div className='form-item'>
            <button type='submit' disabled={x.isSubmitting}>
              { (props.action === 'edit') ? 'Edit Post' : 'Create Post'}
            </button>
          </div>
        </Form>
      )}
    />
  </div>
)

export { BlogPostForm }