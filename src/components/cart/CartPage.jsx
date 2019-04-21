import React from 'react'
import { Link } from 'react-router-dom'
import { CartConsumer } from '../contexts/cart-context'

class CartPage extends React.Component {
  getTotal () {
    let total = 0
    for (let prod of this.props.cart.cart) {
      total += +prod.product.price
    }
    return total
  }

  render () {
    return (
      <React.Fragment>
        <table className='table table-bordered table-hover table-primary'>
          <thead>
            <tr>
              <th scope='col'>Продукт</th>
              <th scope='col'>Име/Описание</th>
              <th scope='col'>Цена(лв)</th>
              <th scope='col'>Изтрий</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.cart.map(item => (
              <tr key={item._id}>
                <td><Link to={`/details/${item.type}/${item.product._id}`}>
                  <img src={item.product.imageUrl} alt='product' style={{ width: '240px' }} />
                </Link></td>
                <td><h2>{item.product.name}</h2>
                  <p>{item.product.description}</p></td>
                <td><h3>{item.product.price} лв</h3></td>
                <td><button className='btn btn-danger' onClick={() => this.props.cart.deleteFromCart(item.product._id)}>X</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Всичко: {this.getTotal.bind(this)()} лв</h3>
      </React.Fragment>
    )
  }
}

function CartPageConsumer (props) {
  return (
    <CartConsumer>
      {
        (cart) => <CartPage {...props} cart={cart} />
      }
    </CartConsumer>
  )
}

export default CartPageConsumer
