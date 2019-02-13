import React from 'react'
import { Link } from 'react-router-dom'
import { getCatalog, deleteProduct } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'

class Catalog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [],
      type: '',
      isLoading: false
    }
    this.delProduct = this.delProduct.bind(this)
    this.getData = this.getData.bind(this)
  }

  componentDidMount () {
    this.getData()
  }

  async delProduct (productId) {
    let type = this.state.type
    await deleteProduct(productId, type)
    this.getData()
  }

  async getData () {
    let products
    let type = this.props.match.params.type
    this.setState({ type })
    try {
      this.setState({ isLoading: true })
      products = await getCatalog(type)
      this.setState({ products })
      this.setState({ isLoading: false })
    } catch (error) {
      toastr.error(products.description)
      this.setState({ isLoading: false })
    }
  }

  render () {
    return (
      <React.Fragment>
        <h1>Catalog</h1>
        {this.state.isLoading && <div className='centerDiv'><Spinner className='text-center' size={80} spinnerColor={'#333'} spinnerWidth={2} visible /></div>}
        {this.state.products.map(prod => (
          <div key={prod._id} className='cardWrapper'>
            <div className='card-group'>
              <div className='card bg-primary text-black'>
                <img className='card-img-top' src={prod.imageUrl} style={styles} alt='Card image cap' />
                <div className='card-body'>
                  <h5 className='card-title'>{prod.name}</h5>
                  <p className='card-text'>Price: {prod.price}</p>
                </div>
              </div>
            </div>
            <Link to={'/details/' + this.state.type + '/' + prod._id}>Details</Link>
            <Link to={'/edit/' + this.state.type + '/' + prod._id}>Edit</Link>
            <button onClick={() => this.delProduct(prod._id)}>Delete</button>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default Catalog

const styles = {
  width: '128px',
  height: '128px'
}
