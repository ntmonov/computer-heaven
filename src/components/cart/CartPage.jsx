import React from 'react'

class CartPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.cart.map(item => (
          <div key={item._id}>
            <h2>Name: {item.product.name}</h2>
            <p>Price: {item.product.price}</p>
          </div>
        ))}
        <h3>Total: {this.props.getTotal}</h3>
      </React.Fragment>
    )
  }
}

export default CartPage
