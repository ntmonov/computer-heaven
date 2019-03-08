import React from 'react'
import { getDetails } from '../../utils/catalogRequests'
import CommentsForm from '../comments/CommentsForm'

class MainboardDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cpu: {}
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    let productId = this.props.match.params.productId
    let cpu = await getDetails(productId, 'cpu')
    this.setState({ cpu })
  }

  render () {
    let cpu = this.state.cpu
    return (
      <div style={stylesForMainDiv}>
        <h1>MB card</h1>
        <div className='card mb-3'>
          <img className='card-img-top' style={styles} src={cpu.imageUrl} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>{cpu.name}}</h5>
            <h3>Specfications</h3>
            <p className='card-text'>Socket: {cpu.socket}}</p>
            <p className='card-text'>Number of Cores: {cpu.cores}</p>
            <h3>Description</h3>
            <p>{cpu.description}</p>
            <h3>Price: {cpu.price}</h3>
          </div>
        </div>
        <CommentsForm type='cpu' productId={this.props.match.params.productId} />
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
