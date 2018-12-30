import React, { Component } from 'react'
import contactMeBar from '../../imgs/contactme_bar.png'
import api from '../../services/api'
import { Formik, Field, Form, ErrorMessage } from 'formik'

export default class EmailForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fields: {}
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const response = await api.post('/send_email', {
      name: this.state.fields.name,
      email: this.state.fields.email,
      subject: this.state.fields.subject,
      msg: this.state.fields.msg,

    })
    console.log(response)
    console.log(this.state.fields)
  }

  handleChange = (e) => {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({
      fields
    })
  }

  render() {
    return (
      <div>
        <div className="content-block contact-me-area">
          <p className="title-bar">
            <img src={contactMeBar} alt="Contact Me" />
          </p>
          <div className="email-form">
            <form onSubmit={this.handleSubmit}>
              <div className="email-item">
                <input name='name' type='text' placeholder='Name' onChange={this.handleChange} />
              </div>
              <div className="email-item">
                <input name='email' type='text' placeholder='E-mail' onChange={this.handleChange} />
              </div>
              <div className="email-item">
                <input name='subject' type='text' placeholder='Subject' onChange={this.handleChange} />
              </div>
              <div className="email-item">
                <textarea name='msg' placeholder='Your message' onChange={this.handleChange} />
                <div className="email-item">
                  <input type='submit' value='Submit' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}