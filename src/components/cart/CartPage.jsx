import React from 'react'
import CartList from './CartList'
import { getCart } from '../../utils/cartRequests'

class CartPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: []
    }
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
      <CartList cart={this.state.cart} />
    )
  }
}

export default CartPage
