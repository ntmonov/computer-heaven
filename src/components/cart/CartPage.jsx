import React from 'react'
import CartList from './CartList'

class CartPage extends React.Component {

  render () {
    return (
      <CartList items={this.props.cart} />
    )
  }
}

export default CartPage
