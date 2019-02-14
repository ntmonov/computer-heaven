import React from 'react'

function CartItem (props) {
  return (
    props.items.map(item => (
      <div>
        <h2>Name: {item.name}</h2>
        <p>Price: {item.price}</p>
      </div>
    ))
  )
}

export default CartItem
