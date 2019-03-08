import React from 'react'
import { getDetails } from '../../utils/catalogRequests'
import CommentsForm from '../comments/CommentsForm'

class SSDDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ssd: {}
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    let productId = this.props.match.params.productId
    let ssd = await getDetails(productId, 'ssd')
    this.setState({ ssd })
  }

  render () {
    let ssd = this.state.ssd
    return (
      <div style={stylesForMainDiv}>
        <h1>MB card</h1>
        <div className='card mb-3'>
          <img className='card-img-top' style={styles} src={ssd.imageUrl} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>{ssd.name}}</h5>
            <h3>Specfications</h3>
            <p className='card-text'>Capacity: {ssd.capacity} GB</p>
            <p className='card-text'>Interface: {ssd.interface}</p>
            <h3>Description</h3>
            <p>{ssd.description}</p>
            <h3>Price: {ssd.price}</h3>
          </div>
        </div>
        <CommentsForm type='ssd' productId={this.props.match.params.productId} />
      </div>
    )
  }
}

export default SSDDetails

const styles = {
  width: '384px'
}

const stylesForMainDiv = {
  width: '400px',
  margin: '0 auto'
}
