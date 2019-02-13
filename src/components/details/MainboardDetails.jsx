import React from 'react'
import { getDetails } from '../../utils/catalogRequests'

class MainboardDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mainboard: {}
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    let productId = this.props.match.params.productId
    let mainboard = await getDetails(productId, 'mainboard')
    this.setState({ mainboard })
  }

  render () {
    let mb = this.state.mainboard
    return (
      <div style={stylesForMainDiv}>
        <h1>MB card</h1>
        <div class='card mb-3'>
          <img class='card-img-top' style={styles} src={mb.imageUrl} alt='Card image cap' />
          <div class='card-body'>
            <h5 class='card-title'>{mb.name}}</h5>
            <h3>Specfications</h3>
            <p class='card-text'>Socket: {mb.socket}}</p>
            <p class='card-text'>Memory supported: {mb.memorySupported}</p>
            <h3>Description</h3>
            <p>{mb.description}</p>
            <h3>Price: {mb.price}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default MainboardDetails

const styles = {
  width: '384px'
}

const stylesForMainDiv = {
  width: '400px',
  margin: '0 auto'
}
