import React, { Component } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import MainRoute from './components/routes/MainRoute'
import { getCart, addToCart, deleteFromCart, getCartProduct } from '../src/utils/cartRequests'
import { CartProvider } from './components/contexts/cart-context'
import Footer from './components/common/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: {
        cart: [],
        updateCart: this.updateCart.bind(this),
        getInitialCart: this.getInitialCart.bind(this),
        deleteFromCart: this.deleteFromCart.bind(this)
      }
    }
    this.getInitialCart()
  }

  async updateCart (data) {
    await addToCart(data)
    await this.getInitialCart()
  }

  async getInitialCart () {
    let initialCart = await getCart()
    let { cart } = this.state.cart
    cart = initialCart
    this.setState({ cart: { ...this.state.cart, cart } })
  }

  async deleteFromCart (productId) {
    let cartItem = await getCartProduct(productId)
    console.log(cartItem)
    await deleteFromCart(cartItem[0]._id)
    this.getInitialCart()
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
