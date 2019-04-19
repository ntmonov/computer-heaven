import React, { Component } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import MainRoute from './components/routes/MainRoute'
import { getCart, addToCart, updateCartWithQty, getCartProduct } from '../src/utils/cartRequests'
import { CartProvider } from './components/contexts/cart-context'
import Footer from './components/common/Footer'

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
    let cart = this.state.cart
    let cartItem = await getCartProduct(data.product._id)
    const cartItemId = cartItem.length === 0 ? undefined : cartItem[0]._id
    for (let prod of cart.cart) {
      if (prod.product._id === data.product._id) {
        data.quantity++
      }
    }

    if (cartItemId === undefined) {
      await addToCart(data)
    } else {
      await updateCartWithQty(data, cartItemId)
    }
    await this.getInitialCart()
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
          <Footer />
        </CartProvider>
      </React.Fragment>
    )
  }
}

export default App
