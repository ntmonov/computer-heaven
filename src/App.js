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
        updateCart: this.updateCart.bind(this)
      }
    }
  }

  async updateCart (data) {
    let cart = await getCart()
    console.log(cart)
    cart.push(data)
    this.setState({ cart: { cart } })
    await addToCart(data)
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
