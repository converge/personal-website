import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EmailForm from '../EmailForm';
import BlogPosts from '../Blog/posts'
import './style.css'

class AsideContent extends Component {

  render() {
    return (
      <div>
        <BlogPosts />
        <div className="content-block social-area">
          <section>
            <p className="title-bar">SOCIAL NETWORKS</p>
          </section>
          <div className="social-networks">
            <ul>
              <li>
                <a href="https://github.com/converge">
                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/joao-paulo-vanzuita/" >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/joao_o">
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <EmailForm />
      </div>
    )
  }
}

export default AsideContent