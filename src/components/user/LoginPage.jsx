import React from 'react'
import toastr from 'toastr'
import LoginForm from '../forms/LoginForm'
import { login } from '../../utils/authRequests'
import { saveSession } from '../../utils/auth'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        username: '',
        password: ''
      },
      errors: {
        username: '',
        password: ''
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    let name = event.target.name
    let value = event.target.value
    let user = this.state.user
    user[name] = value
    this.setState({ user })
  }

  async onSubmit (e) {
    e.preventDefault()
    if (!this.validateUser(this.state.user)) {
      return
    }
    let user
    try {
      user = await login(this.state.user)
      let roleId = user._kmd.roles[0].roleId
      user.roleId = roleId
      saveSession(user)
      toastr.success('Login successful')
    } catch (error) {
      toastr.error(user.description)
      return
    }
    this.props.history.push('/home')
  }

  validateUser (user) {
    let isValid = true
    let errors = {}
    if (!/^[A-Za-z]{3,}$/.test(user.username)) {
      isValid = false
      errors['username'] = 'Username must be at laest 3 letters'
    }

    if (!/^[A-Za-z0-9]{3,}$/.test(user.password)) {
      isValid = false
      errors['password'] = 'Password must be at laest 3 letters or digits'
    }

    this.setState({ errors })
    return isValid
  }

  render () {
    return (
      <React.Fragment>
        <h1>Login Page</h1>
        <LoginForm onChange={this.onChange} user={this.state.user} onSubmit={this.onSubmit} errors={this.state.errors} />
      </React.Fragment>
    )
  }
}

export default LoginPage
