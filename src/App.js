import React, { Component } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import MainRoute from './components/routes/MainRoute'
import { getCart } from '../src/utils/cartRequests'

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

  async getCart () {
    let cart = await getCart()
    this.setState({ cart })
  }

  render () {
    return (
      <React.Fragment>
        <Navbar />
        <MainRoute cart={this.state.cart} />
      </React.Fragment>
    )
  }
}

export default App
