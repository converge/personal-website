import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './App.css';
import Routes from './components/Routes'
import Dashboard from './components/Dashboard'

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
