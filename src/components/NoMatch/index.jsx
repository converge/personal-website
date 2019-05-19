import React, { useEffect } from 'react'
import { NoMatchTitle } from './styles'

function NoMatch() {
  useEffect(() => {
    document.title = '404 - Page Not Found'
  })

  return (
    <div>
      <NoMatchTitle>404</NoMatchTitle>
    </div>
  )
}

export default NoMatch
