import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAdmin } from '../../utils/auth'

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAdmin() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )
  } />
)

export default AdminRoute
