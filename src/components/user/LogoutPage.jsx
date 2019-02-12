import React from 'react'
import toastr from 'toastr'
import { logout } from '../../utils/authRequests'

class LogoutPage extends React.Component {
  componentDidMount () {
    this.logout()
  }

  async logout () {
    await logout
    window.sessionStorage.clear()
    toastr.success('Logout successful')
    this.props.history.push('/home')
  }

  render () {
    return null
  }
}

export default LogoutPage
