import React from 'react'
import { Link } from 'react-router-dom'
import { isAdmin } from '../../utils/auth'
import { CartConsumer } from '../contexts/cart-context'

function CatalogItem (props) {
  return (
    <React.Fragment>
      <div key={props.prod._id} className='cardWrapper'>
        <div className='card-group'>
          <div className='card bg-primary text-black'>
            <img className='card-img-top' src={props.prod.imageUrl} style={styles} alt={props.prod.imageUrl} />
            <div className='card-body'>
              <h5 className='card-title'>{props.prod.name}</h5>
              <p className='card-text'>Price: {props.prod.price}</p>
            </div>
          </div>
        </div>
        <Link className='btn btn-primary m-1' to={'/details/' + props.type + '/' + props.prod._id}>Детайли</Link>
        {isAdmin() && <Link className='btn btn-warning m-1' to={'/edit/' + props.type + '/' + props.prod._id}>Редакция</Link>}
        {isAdmin() && <button className='btn btn-danger m-1' onClick={() => props.delProduct(props.prod._id)}>Изтриване</button>}
        <button onClick={props.addToCart} className='btn btn-secondary'>Добави в количката</button>
      </div>
    </React.Fragment>
  )
}

function CatalogItemConsumer (props) {
  return (
    <CartConsumer>
      {
        (cart) => <CatalogItem {...props} />
      }
    </CartConsumer>
  )
}

export default CatalogItemConsumer

const styles = {
  width: '128px',
  height: '128px'
}
