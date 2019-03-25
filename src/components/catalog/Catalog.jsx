import React from 'react'
import { getCatalog, deleteProduct } from '../../utils/catalogRequests'
import { addToCart, getProductById } from '../../utils/cartRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'
import CatalogItem from './CatalogItem'
import Select from '../common/inputFields/Select'

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
    this.addToCart = this.addToCart.bind(this)
    this.sortProducts = this.sortProducts.bind(this)
  }

  componentDidMount () {
    this.getData()
  }

  sortProducts (event) {
    let type = event.target.value
    let products = this.state.products
    if (type === 'ASC') {
      products.sort((a, b) => a.price - b.price)
    } else {
      products.sort((a, b) => b.price - a.price)
    }
    this.setState({ products })
  }

  async delProduct (productId) {
    let type = this.state.type
    await deleteProduct(productId, type)
    toastr.success('Item deleted')
    this.getData()
  }

  async addToCart (productId) {
    let product = await getProductById(productId, this.state.type)
    let data = {
      product,
      userId: window.sessionStorage.getItem('userId')
    }
    await addToCart(data)
    toastr.success('Product added')
    this.props.history.push('/home')
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
        <Select options={['-', 'ASC', 'DESC']} label='Sort by Price' multi={false} onChange={this.sortProducts} />
        {this.state.isLoading && <div className='centerDiv'><Spinner className='text-center' size={80} spinnerColor={'#333'} spinnerWidth={2} visible /></div>}
        {this.state.products.map(prod => (
          <CatalogItem key={prod._id} delProduct={this.delProduct} prod={prod} type={this.state.type} addToCart={() => { this.addToCart(prod._id) }} />
        ))}
      </React.Fragment>
    )
  }
}

export default Catalog
