import React from 'react'
import { getAllProducts, getProductById } from '../../utils/cartRequests'
import CartItem from './CartItem'

class CartList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mainboards: [],
      CPU: [],
      Video: [],
      SSD: []
    }
  }

  componentDidMount () {
    this.getMainboards()
    this.getCPU()
    this.getVideo()
    this.getSSD()
  }

  async getMainboards () {
    let mainboardsInCart = await getAllProducts('mainboard')
    let mainboards = []
    for (let mb of mainboardsInCart) {
      let id = mb.productId
      let mainboard = await getProductById(id, 'mainboard')
      mainboards.push(mainboard)
    }
    this.setState({ mainboards })
  }

  async getCPU () {
    let CPU = await getAllProducts('cpu')
    this.setState({ CPU })
  }

  async getVideo () {
    let Video = await getAllProducts('video')
    this.setState({ Video })
  }

  async getSSD () {
    let SSD = await getAllProducts('ssd')
    this.setState({ SSD })
  }

  render () {
    return <CartItem items={this.state.mainboards} />
  }
}

export default CartList
