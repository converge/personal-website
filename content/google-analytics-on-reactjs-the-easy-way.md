---
title: Google Analytics on ReactJs, the easy way
category: general
created-at: 2019-02-16T00:57:54.916+00:00
---

I spent some time until find a good example how to use React Google Analytics (React-GA) correctly.
It’s an amazing project, but we would improve the documentation a bit.
<br/><br/>
Here is an example how to use React-GA to handle all our React Routers:

```js
import ReactGA from 'react-ga';
import { PropTypes } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

ReactGA.initialize(GA_KEY);

class GAListener extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }
  
  sendPageView(location) {
    ReactGA.set({
      page: location.pathname
    });
    ReactGA.pageview(location.pathname);
  }
  render() {
    return this.props.children;
  }
}
  
  // then wrap GAListener one level inside
  //BrowserRouterconst App = ({ classes }) => (
  //  <BrowserRouter>
  //    <GAListener>
  //    </GAListener>
  //</BrowserRouter>
);
```

Thanks [pdonorio](https://github.com/pdonorio) for the contribution, this is an excellent solution.
