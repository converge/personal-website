import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { BlogPostEdit } from './styles'

const BlogPostForm = props => (
  <BlogPostEdit>
    <h1>
      {/* first letter uppercase */}
      {`${props.action.charAt(0).toUpperCase()}${props.action.slice(1)}`} Post
    </h1>

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
      render={formikContext => (
        <Form>
          <div className="form-item">
            <Field
              name="title"
              type="text"
              placeholder="Title"
              onChange={e => {
                props.onTitleChange(e)
                formikContext.setFieldValue('title', e.target.value)
              }}
              value={props.title}
            />
          </div>
          <div className="form-item">
            <Field
              name="category"
              type="text"
              placeholder="Category"
              onChange={e => {
                props.onCategoryChange(e)
                formikContext.setFieldValue('category', e.target.value)
              }}
              value={props.category}
            />
          </div>
          <div className="form-item">
            <Field
              name="content"
              component="textarea"
              type="text"
              placeholder="Post Content"
              onChange={e => {
                // update content state
                props.onContentChange(e)
                // update formik field
                formikContext.setFieldValue('content', e.target.value)
              }}
              value={props.content}
            />
          </div>
          <ErrorMessage
            name="title"
            className="field-validation"
            component="div"
          />
          <ErrorMessage
            name="category"
            className="field-validation"
            component="div"
          />
          <ErrorMessage
            name="content"
            className="field-validation"
            component="div"
          />
          <div className="form-item">
            <button type="submit" disabled={formikContext.isSubmitting}>
              {props.action === 'edit' ? 'Edit Post' : 'Create Post'}
            </button>
          </div>
        </Form>
      )}
    />
  </BlogPostEdit>
)

export { BlogPostForm }