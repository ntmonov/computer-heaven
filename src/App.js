import React, { Component } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import MainRoute from './components/routes/MainRoute'
import { getCart, addToCart, updateCartWithQty } from '../src/utils/cartRequests'
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
    let { cart } = this.state.cart
    let quantity = Number(cart.quantity) || 1
    let cartId
    for (let prod of cart) {
      if (prod.product._id === data.product._id) {
        quantity++
      }
    }
    data['quantity'] = quantity
    cart['quantity'] = quantity
    cart.push(data)
    this.setState({ cart: { ...this.state.cart, cart } })
    if (quantity > 1) {
      await updateCartWithQty(data, cartId)
    } else {
      await addToCart(data)
    }
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
