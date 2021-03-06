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
    const list = Object.keys(rest).filter(item => item !== '_id' && item !== '_acl' && item !== '_kmd').map(key => <p className='card-text' key={key}>{key} => {rest[key]}</p>)

    return (
      <div style={stylesForMainDiv} className='border border-primary'>
        <h1>Product card</h1>
        <div className='row'>
          <div className='col-md-4 offset-md-2'>
            <img className='card-img-top' style={styles} src={imageUrl} alt={imageUrl} />
            <p><h3>Технически характеристики</h3>
              {list}</p>
          </div>
          <div className='col-md-4'>
            <div className='card mb-3'>
              <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                {/* <h3>Описание</h3> */}
                <p>{description}</p>
                <h3>Цена: {price}</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CommentsForm type={this.props.type} productId={this.props.match.params.productId} />
        </div>
      </div>
    )
  }
}

export default DetailsPage

const styles = {
  width: '384px'
}

const stylesForMainDiv = {
  width: '80%',
  margin: '0 auto'
}
