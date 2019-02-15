import React from 'react'

class CartPage extends React.Component {
  getTotal () {
    let total = 0
    for (let prod of this.props.cart) {
      total += +prod.product.price
    }
    return total
  }

  render () {
    return (
      <React.Fragment>
        {this.props.cart.map(item => (
          <div key={item._id}>
            <h2>Name: {item.product.name}</h2>
            <p>Price: {item.product.price}</p>
          </div>
        ))}
        <h3>Total: {this.getTotal.bind(this)()}</h3>
      </React.Fragment>
    )
  }
}

export default CartPage
