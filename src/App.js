import React, { Component } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import MainRoute from './components/routes/MainRoute'
import { getCart } from '../src/utils/cartRequests'
import { isAuth } from './utils/auth'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: []
    }
    this.getCart = this.getCart.bind(this)
    this.getTotal = this.getTotal.bind(this)
    this.setUserId = this.setUserId.bind(this)
  }

  getTotal () {
    let total = 0
    for (let prod of this.state.cart) {
      total += +prod.product.price
    }
    return total
  }

  setUserId (id) {
    this.getCart(id)
  }

  async getCart (userId) {
    if (!isAuth()) {
      return
    }
    let cart = await getCart(userId)
    this.setState({ cart })
  }

  render () {
    return (
      <React.Fragment>
        <Navbar itemsLength={this.state.cart.length} total={this.getTotal()} />
        <MainRoute cart={this.state.cart} getUserId={this.setUserId} />
      </React.Fragment>
    )
  }
}

export default App
