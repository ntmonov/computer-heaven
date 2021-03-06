import React from 'react'
import RegisterForm from '../forms/RegisterForm'
import { register, assignRole } from '../../utils/authRequests.js'
import { saveSession } from '../../utils/auth.js'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'
import { CartConsumer } from '../contexts/cart-context'

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

  async onSubmit (event) {
    event.preventDefault()
    if (!this.validateUser(this.state.user)) {
      return
    }
    let user
    try {
      this.setState({ isLoading: true })
      user = await register(this.state.user)
      console.log(user)
      let roleResponse = await assignRole(user._id)
      user['roleId'] = roleResponse.roleId
      saveSession(user)
    } catch (e) {
      toastr.error(user.description)
      this.setState({ isLoading: false })
      return
    }
    toastr.success('Register successful')
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
        {this.state.isLoading && <div className='centerDiv'><Spinner className='text-center' size={80} spinnerColor={'#333'} spinnerWidth={2} visible /></div>}
        <RegisterForm onChange={this.onChange} user={this.state.user} onSubmit={this.onSubmit} errors={this.state.errors} />
      </React.Fragment>
    )
  }
}

function RegisterPageWithContext (props) {
  return (
    <CartConsumer>
      {
        (cart) => <RegisterPage {...props} getInitialCart={cart.getInitialCart} />
      }
    </CartConsumer>
  )
}

export default RegisterPageWithContext
