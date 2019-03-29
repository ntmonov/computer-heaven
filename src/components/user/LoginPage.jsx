import React from 'react'
import toastr from 'toastr'
import LoginForm from '../forms/LoginForm'
import { login } from '../../utils/authRequests'
import { saveSession } from '../../utils/auth'
import Spinner from 'react-spinner-material'
import { withRouter } from 'react-router-dom'
import { CartConsumer } from '../contexts/cart-context'

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
      },
      isLoading: false
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
      this.setState({ isLoading: true })
      user = await login(this.state.user)
      let roleId = user._kmd.roles[0].roleId
      user.roleId = roleId
      saveSession(user)
      toastr.success('Login successful')
    } catch (error) {
      console.log(error)
      toastr.error(user.description)
      this.setState({ isLoading: false })
    }
    this.setState({ isLoading: false })
    this.props.getInitialCart()
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
        {this.state.isLoading && <div className='centerDiv'><Spinner className='text-center' size={80} spinnerColor={'#333'} spinnerWidth={2} visible /></div>}
        <LoginForm onChange={this.onChange} user={this.state.user} onSubmit={this.onSubmit} errors={this.state.errors} />
      </React.Fragment>
    )
  }
}

function LoginPageWithContext (props) {
  return (
    <CartConsumer>
      {
        (cart) => <LoginPage {...props} getInitialCart={cart.getInitialCart} />
      }
    </CartConsumer>
  )
}

export default withRouter(LoginPageWithContext)
