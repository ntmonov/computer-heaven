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
  }

  componentDidMount () {
    this.getCart()
  }

  getTotal () {
    let total = 0
    for (let prod of this.state.cart) {
      total += +prod.product.price
    }
    return total
  }

  async getCart () {
    if (!isAuth()) {
      return
    }
    let cart = await getCart()
    this.setState({ cart })
  }

  render () {
    return (
      <React.Fragment>
        <Navbar itemsLength={this.state.cart.length} total={this.getTotal()} />
        <MainRoute cart={this.state.cart} />
      </React.Fragment>
    )
  }
}

export default App
