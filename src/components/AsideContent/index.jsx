import React, { Component } from 'react'
import EmailForm from '../EmailForm';
import BlogPosts from '../Blog/posts'

class AsideContent extends Component {

  render() {
    return (
      <div>
        <BlogPosts/>
            <div className="content-block social-area">
              <section>
                <p className="title-bar">SOCIAL NETWORKS</p>
              </section>
              <div className="single-line">
                <ul>
                  <li>
                    <a href="https://github.com/converge">github.com/converge</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/joao-paulo-vanzuita/" >LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/joao_o">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
            <EmailForm/>
      </div>
    )
  }
}

export default AsideContent