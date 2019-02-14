import React from 'react'

class CartList extends React.Component {

  constructor (props) {
    super(props)
    this.getTotal = this.getTotal.bind(this)
  }

  getTotal () {
    let total = 0
    for (let item of this.props.items) {
      total += +item.product.price
    }
    return total
  }

  render () {
    return (
      <React.Fragment>
        {this.props.items.map(item => (
          <div key={item._id}>
            <h2>Name: {item.product.name}</h2>
            <p>Price: {item.product.price}</p>
          </div>
        ))}
        <h3>Total: {this.getTotal()}</h3>
      </React.Fragment>
    )
  }
}

export default CartList
