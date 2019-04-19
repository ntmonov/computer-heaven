import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../home/homePage'
import RegisterPage from '../user/RegisterPage'
import LoginPage from '../user/LoginPage'
import LogoutPage from '../user/LogoutPage'
import CreatePage from '../create/CreatePage'
import CreateMainboard from '../create/CreateMainboard'
import CreateSSD from '../create/CreateSSD'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'
import CatalogPage from '../catalog/CatalogPage'
import CreateCPU from '../create/CreateCPU'
import CreateVideo from '../create/CreateVideo'
import EditMainboard from '../edit/EditMainboard'
import EditCPU from '../edit/EditCPU'
import EditVideo from '../edit/EditVideo'
import EditSSD from '../edit/EditSSD'
import Catalog from '../catalog/Catalog'
import DetailsPage from '../details/DetailsPage'
import CartPage from '../cart/CartPage'
import Search from '../search/Search'
import ContactPage from '../contact/ContactPage'
import CreateDesktop from '../create/CreateDesktop'
import EditDesktop from '../edit/EditDesktop'
import CreateLaptop from '../create/CreateLaptop'
import EditLaptop from '../edit/EditLaptop'

function MainRoute (props) {
  return (
    <React.Fragment>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/home' component={HomePage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/login' component={() => <LoginPage getUserId={props.getUserId} />} />
      <PrivateRoute path='/logout' component={LogoutPage} />

      <PrivateRoute exact path='/catalog' component={CatalogPage} />
      <PrivateRoute path='/catalog/:type/:page' component={Catalog} />

      <AdminRoute exact path='/create' component={CreatePage} />
      <AdminRoute path='/create/mb' component={CreateMainboard} />
      <AdminRoute path='/create/cpu' component={CreateCPU} />
      <AdminRoute path='/create/video' component={CreateVideo} />
      <AdminRoute path='/create/ssd' component={CreateSSD} />
      <AdminRoute path='/create/desktop' component={CreateDesktop} />
      <AdminRoute path='/create/laptop' component={CreateLaptop} />

      <PrivateRoute path='/details/:type/:productId' component={DetailsPage} />

      <AdminRoute path='/edit/mainboard/:productId' component={EditMainboard} />
      <AdminRoute path='/edit/cpu/:productId' component={EditCPU} />
      <AdminRoute path='/edit/video/:productId' component={EditVideo} />
      <AdminRoute path='/edit/ssd/:productId' component={EditSSD} />
      <AdminRoute path='/edit/desktop/:productId' component={EditDesktop} />
      <AdminRoute path='/edit/laptop/:productId' component={EditLaptop} />

      <PrivateRoute path='/search' component={Search} />

      <PrivateRoute path='/cart' component={() => <CartPage cart={props.cart} />} />

      <Route path='/contact' component={ContactPage} />

    </React.Fragment>
  )
}

export default MainRoute
