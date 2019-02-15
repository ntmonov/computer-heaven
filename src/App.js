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
  }

  componentDidMount () {
    this.getCart()
  }

  componentDidUpdate () {
    this.getCart()
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
        <Navbar itemsLength={this.state.cart.length} />
        <MainRoute cart={this.state.cart} />
      </React.Fragment>
    )
  }
}

export default App
