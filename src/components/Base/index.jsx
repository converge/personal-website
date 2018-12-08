import React, { Component, Fragment } from 'react'
import './base.css'
import profilePic from '../../imgs/profile_pic.png'
import profileBar from '../../imgs/profile_bar.png'
import aboutMeBar from '../../imgs/aboutme_bar.png'
import sideProjectsBar from '../../imgs/sideprojects_bar.png'
import experienceBar from '../../imgs/workexperience_bar.png'
import blogBar from '../../imgs/blog_bar.png'
import languagesBar from '../../imgs/languages_bar.png'
import ptBrCircle from '../../imgs/portuguese_circle.png'
import enCircle from '../../imgs/english_circle.png'
import skillsBar from '../../imgs/skills_bar.png'
import socialBar from '../../imgs/social_bar.png'
import contactMeBar from '../../imgs/contactme_bar.png'
import skillShadow from '../../imgs/skill_shadow.png'


export default class Base extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">
          <header>
            <div className="content-block profile-pic-area">
              <img src={profilePic} alt='Profile' />
            </div>
            <div className="content-block profile-info-area">
              <p className="title-bar">
                <img src={profileBar} alt='Profile Bar' />
              </p>
              <p className="leftbar-text">
                I'm Brazilian, 35 years old, passionate about technology since my teenage years.
            </p>
              <p className="leftbar-text">
                I have been a software developer for the past eleven years.
            </p>
            </div>
            <div className="content-block about-me-area">
              <p className="title-bar">
                <img src={aboutMeBar} alt='About Me' />
              </p>
              <p className="leftbar-text">
                I see work as an activity to make the planet we live on better.
            </p>
              <p className="leftbar-text">
                I believe that when we’re feeling good, everything around us becomes good. That’s why I’m passionate about road cycling and meditation, keeping mind body and spirit healthy is the first step to be fine with ourselfs and others.
            </p>
            </div>
            <div className="content-block projects-area">
              <p className="title-bar">
                <img src={sideProjectsBar} alt="Side Projects" />
              </p>
              <p className="single-line">
                github.com/converge
            </p>
            </div>
            <div className="content-block blog-area">
              <p className="title-bar">
                <img src={blogBar} alt="Blog" />
              </p>
              <div className="blog-posts">
                <ul>
                  <li>
                    blog post #111222
                </li>
                  <li>
                    blog post #1112223
                </li>
                  <li>
                    blog post #1112224
                </li>
                  <li>
                    blog post #111222
                </li>
                  <li>
                    blog post #1112223
                </li>
                  <li>
                    more...
                </li>
                </ul>
              </div>
            </div>
          </header>

          <aside>
            <div className="content-block experience-area">
              <p className="title-bar-experience">
                <img src={experienceBar} alt='Work Experience' />
              </p>
              <div className="work-experience">
                <ul>
                  <li>
                    2007 - 2008
              </li>
                  <li>
                    Datainfo Soluções em TI
              </li>
                  <li>
                    Company Website: www.datainfo.inf.br
              </li>
                  <li>
                    Job title: Developer.
              </li>
                  <li>
                    Worked with: Java, Oracle Reports. After I took a SAP course I was qualified as 2 of the best developers and started working with SAP/ABAP.
              </li>
                </ul>
              </div>

              <div className="work-experience">
                <ul>
                  <li>
                    2008 - 2009
                </li>
                  <li>
                    Dynamix Desenvolvimento de Software Company Website: www.dynamix.com.br
                </li>
                  <li>
                    Job title: Developer.
                </li>
                  <li>
                    Worked specially for www.unimed.coop.br with Java, JSF, HTML, CSS.
              </li>
                </ul>
              </div>

              <div className="work-experience">
                <ul>
                  <li>
                    2009-2010
                </li>
                  <li>
                    Freelancer Web Developer
                </li>
                </ul>
              </div>

              <div className="work-experience">
                <ul>
                  <li>
                    2003 - 2006 and 2010-2018
              </li>
                  <li>
                    Fortunata Indústria e Comércio de Confecções Ltda
              </li>
                  <li>
                    Job title 2003-2006: General Tech Supervisor
              </li>
                  <li>
                    Job title 2010-2018: General Business Director
              </li>
                  <li>
                    Worked on all sides: Technology, Marketing, Finances, Strategy, and gave support for every area.
              </li>
                  <li>
                    Technology Projects: 2 eCommerces (Magento), B2C eCommerce (CakePHP/MySQL). Installation, customization and maintenance of OpenERP (Odoo).
              </li>
                </ul>
              </div>

            </div>
            <div className="content-block languages-area">
              <p className="title-bar">
                <img src={languagesBar} alt='Languages' />
              </p>
              <div className="language-skills">
                <ul>
                  <li>
                    <img src={ptBrCircle} alt="Portuguese Skill" />
                  </li>
                  <li>
                    <img src={enCircle} alt="English Skill" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="content-block skills-area">
              <p className="title-bar">
                <img src={skillsBar} alt='Main Skills' />
              </p>
              <div className="studying-title">
                STUDYING AND FOCUSED ON
            </div>

              <div className="main-skill">
                <div className="skill-name">
                  <ul>
                    <li>Python</li>
                    <li>
                      <img src={skillShadow} alt="Shadow" />
                    </li>
                  </ul>
                </div>
                <div className="skill-circles">
                  <ul>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="main-skill">
                <div className="skill-name">
                  <ul>
                    <li>JavaScript</li>
                    <li>
                      <img src={skillShadow} alt="Shadow" />
                    </li>
                  </ul>
                </div>
                <div className="skill-circles">
                  <ul>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="grey-skill-dot"></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="main-skill">
                <div className="skill-name">
                  <ul>
                    <li>Selenium</li>
                    <li>
                      <img src={skillShadow} alt="Shadow" />
                    </li>
                  </ul>
                </div>
                <div className="skill-circles">
                  <ul>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="main-skill">
                <div className="skill-name">
                  <ul>
                    <li>ReactJS</li>
                    <li>
                      <img src={skillShadow} alt="Shadow" />
                    </li>
                  </ul>
                </div>
                <div className="skill-circles">
                  <ul>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="grey-skill-dot"></div>
                    </li>
                    <li>
                      <div className="grey-skill-dot"></div>
                    </li>
                    <li>
                      <div className="grey-skill-dot"></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="main-skill">
                <div className="skill-name">
                  <ul>
                    <li>Linux</li>
                    <li>
                      <img src={skillShadow} alt="Shadow" />
                    </li>
                  </ul>
                </div>
                <div className="skill-circles">
                  <ul>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="main-skill">
                <div className="skill-name">
                  <ul>
                    <li>Git</li>
                    <li>
                      <img src={skillShadow} alt="Shadow" />
                    </li>
                  </ul>
                </div>
                <div className="skill-circles">
                  <ul>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="grey-skill-dot"></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="main-skill">
                <div className="skill-name">
                  <ul>
                    <li>Machine Learning</li>
                    <li>
                      <img src={skillShadow} alt="Shadow" />
                    </li>
                  </ul>
                </div>
                <div className="skill-circles">
                  <ul>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="yellow-skill-dot"></div>
                    </li>
                    <li>
                      <div className="grey-skill-dot"></div>
                    </li>
                    <li>
                      <div className="grey-skill-dot"></div>
                    </li>
                    <li>
                      <div className="grey-skill-dot"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>



          <footer>
            <div className="content-block social-area">
              <p className="title-bar">
                <img src={socialBar} alt="Social Networks" />
              </p>
              <div className="single-line">
                <ul>
                  <li>
                    github.com/converge
              </li>
                  <li>
                    LinkedIn
              </li>
                  <li>
                    Twitter
              </li>
                </ul>
              </div>
            </div>
            <div className="content-block contact-me-area">
              <p className="title-bar">
                <img src={contactMeBar} alt="Contact Me" />
              </p>
              <p className="single-line-email">
                email@here.com
              </p>
            </div>
          </footer>
        </div>
      </Fragment >
    )
  }

}