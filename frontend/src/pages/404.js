import React from 'react';
import {Helmet} from 'react-helmet';

const error404 = () => (
  <>
    <Helmet>
      <title>404 - Page Not Found</title>
    </Helmet>
    <div className="wrapper-404">
      <h1>
        404 page
      </h1>
    </div>
  </>
)

export default error404;
