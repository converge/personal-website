import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import profilePic from '../../imgs/profile_pic.png'
import PostContent from '../Blog/postContent'
import { Link } from 'react-router-dom'

export default class BlogPost extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">
          <header>
            <div className="content-block profile-pic-area">
              <Link to='/'>
                <img src={profilePic} alt='Profile' />
              </Link>
            </div>
            <div className="content-block profile-info-area">
              <section>
                <p className="title-bar-noeffect">Working Here</p>
              </section>
              <p className="leftbar-text">
                will update it soon :)
            </p>
            </div>
            <div className="content-block projects-area">
              <section>
                <p className="title-bar-noeffect">SIDE PROJECTS</p>
              </section>
              <p className="single-line">
                github.com/converge
            </p>
            </div>
          </header>

          <aside>
            <Route component={PostContent} />
          </aside>
          <footer>
          </footer>
        </div>
      </Fragment >
    )
  }

}