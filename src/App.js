import React, { Component } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import MainRoute from './components/routes/MainRoute'
import { getCart, addToCart } from '../src/utils/cartRequests'
import { isAuth } from './utils/auth'
import { CartProvider } from './components/contexts/cart-context'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: {
        cart: [],
        updateCart: this.updateCart.bind(this),
        getInitialCart: this.getInitialCart.bind(this)
      }
    }
  }

  async updateCart (data) {
    let product = await addToCart(data)
    let { cart } = this.state.cart
    cart.push(product)
    this.setState({ cart: { ...this.state.cart, cart } })
  }

  async getInitialCart () {
    let initialCart = await getCart()
    let { cart } = this.state.cart
    cart = initialCart
    this.setState({ cart: { ...this.state.cart, cart } })

  }

  render () {
    return (
      <React.Fragment>
        <CartProvider value={this.state.cart}>
          <Navbar />
          <MainRoute />
        </CartProvider>
      </React.Fragment>
    )
  }
}

export default App
