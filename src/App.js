import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Routes from './components/Routes'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { PropTypes } from 'prop-types';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlusCircle, faListOl, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './App.css';


ReactGA.initialize('UA-134650724-1', { testMode: false })
ReactGA.pageview('/');
// ReactGA.testModeAPI.calls

class GAListener extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }

  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>João Vanzuita - Full Stack Developer</title>
          <meta name="description" content="João Vanzuita is a experienced full stack software developer who loves to build things. Drived by passion and love to improve our world!" />
        </Helmet>
        <BrowserRouter>
          <GAListener>
            <Routes />
          </GAListener>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

library.add(fab, faPlusCircle, faListOl, faTrashAlt, faEdit)
