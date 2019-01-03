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
import skillShadow from '../../imgs/skill_shadow.png'
import EmailForm from '../EmailForm';

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
                I'm Brazilian, 35 years old, passionate about technology
                since my teenage years and curious about future developments.
            </p>
              <p className="leftbar-text">
                I have been a software developer for the past eleven years.
                Nowadays I work as Senior Full Stack Developer.
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
                    2003 - 2006 and 2010-2018
              </li>
                  <li>
                    Fortunata Indústria e Comércio de Confecções Ltda
              </li>
                  <li>
                    Job title 2003-2006: General Tech Supervisor
              </li>
                  <li>
                    Job title 2010-2018: General Business Director
              </li>
                  <li>
                    Worked on all sides, leading eleven employers: <b>Technology</b>, Marketing, Finances, Strategy, and gave support for every area leading 11 employees.
              </li>
                  <li>
                    <b>Technology Projects:</b>
                  </li>
                  <li className="job-desc">
                    2 eCommerces (using Magento)
                  </li>
                  <li className="job-desc">
                    B2C eCommerce platform to register B2C orders (PHP/CakePHP/MySQL)
                  </li>
                  <li className="job-desc">
                    Installation, customization and maintenance of OpenERP (Odoo/Python/PostgreSQL).
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
                <b>Main Skills</b>
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
                      <div className="yellow-skill-dot"></div>
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
                      <div className="yellow-skill-dot"></div>
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
                      <div className="yellow-skill-dot"></div>
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
          </footer>
        </div>
      </Fragment >
    )
  }

}