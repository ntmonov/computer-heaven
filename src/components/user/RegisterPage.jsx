import React from 'react'
import RegisterForm from '../forms/RegisterForm'
import { register, assignRole } from '../../utils/authRequests.js'
import { saveSession } from '../../utils/auth.js'
import toastr from 'toastr'

class RegisterPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        username: '',
        password: '',
        repeatPass: '',
        email: '',
        address: ''
      },
      errors: {
        username: '',
        password: '',
        repeatPass: '',
        address: ''
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

  async onSubmit (event) {
    event.preventDefault()
    if (!this.validateUser(this.state.user)) {
      return
    }
    let user
    try {
      user = await register(this.state.user)
      let roleResponse = await assignRole(user._id)
      user['roleId'] = roleResponse.roleId
      saveSession(user)
    } catch (e) {
      toastr.error(user.description)
      return
    }
    toastr.success('Register successful')
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

    if (user.password !== user.repeatPass) {
      isValid = false
      errors['repeatPass'] = 'Passwords do not match'
    }

    if (user.address.length < 10) {
      isValid = false
      errors['address'] = 'Address must be at least 10 symbols'
    }
    this.setState({ errors })
    return isValid
  }

  render () {
    return (
      <React.Fragment>
        <h1>Register Page</h1>
        <RegisterForm onChange={this.onChange} user={this.state.user} onSubmit={this.onSubmit} errors={this.state.errors} />
      </React.Fragment>
    )
  }
}

export default RegisterPage
