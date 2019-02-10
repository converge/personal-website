import React, { Component } from 'react'
import BlogPosts from './posts'


export default class ListPosts extends Component {
  render() {
    return (
      <div>
        <BlogPosts isAdmin={true} />
      </div>
    )
  }
}
