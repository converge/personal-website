import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import './App.css';
import Base from './components/Base'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>João Vanzuita - Full Stack Developer</title>
        </Helmet>
        <Base />
      </div>
    );
  }
}

export default App;
