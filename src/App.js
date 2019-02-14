import React, { Component } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import MainRoute from './components/routes/MainRoute'
import { getCart } from '../src/utils/cartRequests'
import { isAuth } from './utils/auth';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: [],
      total: 0
    }
    this.getCart = this.getCart.bind(this)
    // this.getTotal = this.getTotal.bind(this)
  }

  componentDidMount () {
    this.getCart()
  }

  async getCart () {
    if (!isAuth()) {
      return
    }
    let cart = await getCart()
    this.setState({ cart })
  }

  // getTotal () {
  //   let total = 0
  //   for (let item of this.state.cart) {
  //     total += +item.product.price
  //   }
  //   return total
  // }

  render () {
    return (
      <React.Fragment>
        <Navbar itemsLength={this.state.cart.length} total={this.state.total} />
        <MainRoute cart={this.state.cart} />
      </React.Fragment>
    )
  }
}

export default App
