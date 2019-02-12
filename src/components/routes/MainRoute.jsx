import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../home/homePage'
import RegisterPage from '../user/RegisterPage'
import LoginPage from '../user/LoginPage'
import LogoutPage from '../user/LogoutPage'
import CreatePage from '../create/CreatePage'
import CreateMainboard from '../create/CreateMainboard'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'
import CatalogPage from '../catalog/CatalogPage'
import MainboardCatalog from '../catalog/MainboardCatalog'

function MainRoute () {
  return (
    <React.Fragment>
      <Route exact path='/home' component={HomePage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/login' component={LoginPage} />
      <PrivateRoute path='/logout' component={LogoutPage} />

      <PrivateRoute exact path='/catalog' component={CatalogPage} />
      <PrivateRoute path='/catalog/mb' component={MainboardCatalog} />

      <AdminRoute exact path='/create' component={CreatePage} />
      <AdminRoute path='/create/mb' component={CreateMainboard} />
      <AdminRoute path='/create/cpu' component={CreateMainboard} />
      <AdminRoute path='/create/video' component={CreateMainboard} />
      <AdminRoute path='/create/ssd' component={CreateMainboard} />

    </React.Fragment>
  )
}

export default MainRoute
