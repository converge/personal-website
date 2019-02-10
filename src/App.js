import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Routes from './components/Routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlusCircle, faListOl, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>João Vanzuita - Full Stack Developer</title>
        </Helmet>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

library.add(fab, faPlusCircle, faListOl, faTrashAlt, faEdit)
