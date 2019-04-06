import React from 'react'
import { getDetails } from '../../utils/catalogRequests'
import CommentsForm from '../comments/CommentsForm'

class DetailsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product: {}
    }
    this.getData = this.getData.bind(this)
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    const type = this.props.match.params.type
    let productId = this.props.match.params.productId
    let product = await getDetails(productId, type)
    this.setState({ product })
  }

  render () {
    const { name, price, imageUrl, description, ...rest } = this.state.product
    console.log(rest)
    const list = Object.keys(rest).filter(item => item !== '_id' && item !== '_acl' && item !== '_kmd').map(key => <p className='card-text'>{key} => {rest[key]}</p>)

    return (
      <div style={stylesForMainDiv}>
        <h1>MB card</h1>
        <div className='card mb-3'>
          <img className='card-img-top' style={styles} src={imageUrl} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>{name}}</h5>
            <h3>Specfications</h3>
            {list}
            <h3>Description</h3>
            <p>{description}</p>
            <h3>Price: {price}</h3>
          </div>
        </div>
        <CommentsForm type={this.props.type} productId={this.props.match.params.type} />
      </div>
    )
  }
}

export default DetailsPage

const styles = {
  width: '384px'
}

const stylesForMainDiv = {
  width: '400px',
  margin: '0 auto'
}
