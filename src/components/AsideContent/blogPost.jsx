import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import '../Base/base.css'
import profilePic from '../../imgs/profile_pic.png'
import PostContent from '../Blog/postContent'

export default class BlogPost extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">
        <header>
            <div className="content-block profile-pic-area">
              <img src={profilePic} alt='Profile' />
            </div>
            <div className="content-block profile-info-area">
              <section>
                <p className="title-bar">PROFILE</p>
              </section>
              <p className="leftbar-text">
                (blog)I'm Brazilian, 35 years old, passionate about technology
                since my teenage years and curious about future developments.
            </p>
              <p className="leftbar-text">
                I have been a software developer for the past eleven years.
                Nowadays I work as Senior Full Stack Developer.
            </p>
            </div>
            <div className="content-block about-me-area">
              <section>
                <p className="title-bar">ABOUT ME</p>
              </section>
              <p className="leftbar-text">
                I see work as an activity to make the planet we live on better.
            </p>
              <p className="leftbar-text">
                To make the world a better place I want to create software that
                enables the digital opportunities of businesses.
            </p>
              <p className="leftbar-text">
                That’s why I’m passionate about road cycling and meditation,
                keeping mind, body and spirit healthy is the first step to be
                fine with ourselves and others.
            </p>
              <p className="leftbar-text">
                A balanced life is key to amazing software.
            </p>

            </div>
            <div className="content-block projects-area">
              <section>
                <p className="title-bar">SIDE PROJECTS</p>
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