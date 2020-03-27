import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPlusCircle,
  faListOl,
  faTrashAlt,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import GAListener from './GAListener';
import './App.css';

const App = () => (
  <div className="App">
    <Helmet>
      <title>João Vanzuita - Full Stack Developer</title>
      <meta
        name="description"
        content="João Vanzuita is a experienced full stack software developer who loves to build things. Drived by passion and love to improve our world!"
      />
    </Helmet>
    <BrowserRouter>
      <GAListener trackingId="UA-134650724-1" />
    </BrowserRouter>
  </div>
);

export default App;

// add icons
library.add(fab, faPlusCircle, faListOl, faTrashAlt, faEdit);
