import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
require('dotenv').config()

function sendPageView(location) {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
}

function GAListener({ children, trackingId, history }) {
  useEffect(() => {
    ReactGA.initialize(trackingId, {
      testMode: process.env.REACT_APP_GOOGLE_ANALYTICS_TESTMODE
    })
    sendPageView(history.location)
    history.listen(sendPageView)
  })

  return children
}

GAListener.propTypes = {
  children: PropTypes.node,
  trackingId: PropTypes.string,
  history: PropTypes.shape({
    listen: PropTypes.func
  })
}

export default withRouter(GAListener)
