import React from 'react'
const defaultCart = {
  cart: [],
  updateCart () {},
  addToCart () {}
}

let { Provider: CartProvider, Consumer: CartConsumer } = React.createContext(defaultCart)

export {
  CartProvider,
  CartConsumer
}
