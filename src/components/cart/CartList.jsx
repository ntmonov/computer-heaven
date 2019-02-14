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
    let CPUInCart = await getAllProducts('cpu')
    let CPU = []
    for (let c of CPUInCart) {
      let id = c.productId
      let cpu = await getProductById(id, 'cpu')
      CPU.push(cpu)
    }
    this.setState({ CPU })
  }

  async getVideo () {
    let VideoInCart = await getAllProducts('video')
    let Video = []
    for (let v of VideoInCart) {
      let id = v.productId
      let video = await getProductById(id, 'video')
      Video.push(video)
    }
    this.setState({ Video })
  }

  async getSSD () {
    let SSDInCart = await getAllProducts('ssd')
    let SSD = []
    for (let s of SSDInCart) {
      let id = s.productId
      let ssd = await getProductById(id, 'ssd')
      SSD.push(ssd)
    }
    this.setState({ SSD })
  }

  render () {
    return (
      <React.Fragment>
        <CartItem items={this.state.mainboards} />
        <CartItem items={this.state.CPU} />
        <CartItem items={this.state.Video} />
        <CartItem items={this.state.SSD} />
      </React.Fragment>
    )
  }
}

export default CartList
