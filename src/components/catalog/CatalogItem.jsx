import React from 'react'
import { Link } from 'react-router-dom'
import { isAdmin } from '../../utils/auth'

function CatalogItem (props) {
  return (
    <React.Fragment>
      <div key={props.prod._id} className='cardWrapper'>
        <div className='card-group'>
          <div className='card bg-primary text-black'>
            <img className='card-img-top' src={props.prod.imageUrl} style={styles} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>{props.prod.name}</h5>
              <p className='card-text'>Price: {props.prod.price}</p>
            </div>
          </div>
        </div>
        <Link className='btn btn-primary m-1' to={'/details/' + props.type + '/' + props.prod._id}>Details</Link>
        {isAdmin() && <Link className='btn btn-warning m-1' to={'/edit/' + props.type + '/' + props.prod._id}>Edit</Link>}
        {isAdmin() && <button className='btn btn-danger m-1' onClick={() => this.delProduct(props.prod._id)}>Delete</button>}
        <button onClick={props.addToCart}>Add to cart</button>
      </div>
    </React.Fragment>
  )
}

export default CatalogItem

const styles = {
  width: '128px',
  height: '128px'
}