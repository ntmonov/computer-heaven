import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../home/homePage'
import RegisterPage from '../user/RegisterPage'
import LoginPage from '../user/LoginPage'
import LogoutPage from '../user/LogoutPage'
import CreatePage from '../create/CreatePage'
import CreateMainboard from '../create/CreateMainboard'

function MainRoute () {
  return (
    <React.Fragment>
      <Route exact path='/home' component={HomePage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/logout' component={LogoutPage} />
      <Route exact path='/create' component={CreatePage} />

      <Route exact path='/create/mb' component={CreateMainboard} />
      <Route path='/create/cpu' component={CreateMainboard} />
      <Route path='/create/video' component={CreateMainboard} />
      <Route path='/create/ssd' component={CreateMainboard} />

    </React.Fragment>
  )
}

export default MainRoute
