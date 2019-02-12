import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../home/homePage'
import RegisterPage from '../user/RegisterPage'
import LoginPage from '../user/LoginPage'
import LogoutPage from '../user/LogoutPage'

function MainRoute () {
  return (
    <React.Fragment>
      <Route exact path='/home' component={HomePage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/logout' component={LogoutPage} />
    </React.Fragment>
  )
}

export default MainRoute
