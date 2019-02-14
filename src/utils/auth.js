import { ADMIN_ROLE_ID } from './config'

function saveSession (user) {
  window.sessionStorage.setItem('username', user.username)
  window.sessionStorage.setItem('authToken', user._kmd.authtoken)
  window.sessionStorage.setItem('roleId', user.roleId)
  window.sessionStorage.setItem('userId', user._id)
}

function isAuth () {
  return window.sessionStorage.getItem('authToken') !== null
}

function isAdmin () {
  return window.sessionStorage.getItem('roleId') === ADMIN_ROLE_ID
}

export { saveSession, isAuth, isAdmin }
