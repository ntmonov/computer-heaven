import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../home/homePage'

function MainRoute () {
  return (
    <React.Fragment>
      <Route exact path='/' component={HomePage} />
      <Route path='/register' component={HomePage} />
      <Route path='/login' component={HomePage} />
    </React.Fragment>
  )
}

export default MainRoute
