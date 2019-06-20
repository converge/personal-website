import React, { Component } from 'react'
import GAListener from './GAListener'
import Routes from './components/Routes'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faPlusCircle,
  faListOl,
  faTrashAlt,
  faEdit
} from '@fortawesome/free-solid-svg-icons'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>João Vanzuita - Full Stack Developer</title>
          <meta
            name="description"
            content="João Vanzuita is a experienced full stack software developer who loves to build things. Drived by passion and love to improve our world!"
          />
        </Helmet>
        <BrowserRouter>
          <GAListener trackingId="UA-134650724-1">
            <Routes />
          </GAListener>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

// add icons
library.add(fab, faPlusCircle, faListOl, faTrashAlt, faEdit)
