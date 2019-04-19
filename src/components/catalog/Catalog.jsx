import React from 'react'
import { Link } from 'react-router-dom'
import { getCatalog, deleteProduct, getCount } from '../../utils/catalogRequests'
import { getProductById, getCartProduct, addToCart, updateCartWithQty } from '../../utils/cartRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'
import CatalogItem from './CatalogItem'
import Select from '../common/inputFields/Select'
import { CartConsumer } from '../contexts/cart-context'

class Catalog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [],
      type: '',
      isLoading: false,
      sortMethod: window.sessionStorage.getItem('sortMethod') || 'ASC',
      count: 0
    }
    this.delProduct = this.delProduct.bind(this)
    this.getData = this.getData.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.sortProducts = this.sortProducts.bind(this)
    this.getCount = this.getCount.bind(this)
  }

  componentDidMount () {
    this.getData()
    this.getCount()
  }

  sortProducts (event) {
    event.preventDefault()
    const sortMethod = event.target.value
    this.setState({ sortMethod }, () => {
      this.getData()
    })
    window.sessionStorage.setItem('sortMethod', sortMethod)
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
      userId: window.sessionStorage.getItem('userId'),
      quantity: 1
    }
    this.props.updateCart(data)
    toastr.success('Product added')
  }

  async getData () {
    let products
    let type = this.props.match.params.type
    let page = Number(this.props.match.params.page)
    this.setState({ type })
    try {
      this.setState({ isLoading: true })
      products = await getCatalog(type, this.state.sortMethod, page)
      this.setState({ products })
      this.setState({ isLoading: false })
    } catch (error) {
      toastr.error(products.description)
      this.setState({ isLoading: false })
    }
  }

  async getCount () {
    const { count } = await getCount(this.props.match.params.type)
    this.setState({ count })
  }

  render () {
    let page = Number(this.props.match.params.page)
    let type = this.props.match.params.type
    return (
      <React.Fragment>
        <h1>Catalog</h1>
        <div className='text-center'>
          <Select options={['-', 'ASC', 'DESC']} label='Sort by Price' multi={false} onChange={this.sortProducts} />
          {this.state.isLoading && <div className='centerDiv'><Spinner className='text-center' size={80} spinnerColor={'#333'} spinnerWidth={2} visible /></div>}
          {this.state.products.map(prod => (
            <CatalogItem key={prod._id} delProduct={this.delProduct} prod={prod} type={this.state.type} addToCart={() => { this.addToCart(prod._id) }} />
          ))}
        </div>
        <div className='text-center'>
          {page < (this.state.count / 3) && <Link className='btn btn-primary' to={`/catalog/${type}/${page + 1}`} onClick={this.forceUpdate} >Next</Link>}
          { ' ' }
          {page > 1 && <Link className='btn btn-primary' to={`/catalog/${type}/${page - 1}`} onClick={this.forceUpdate} >Prev</Link>}
          <p>Page {page} of {Math.ceil(this.state.count / 3)}</p>
        </div>
      </React.Fragment>
    )
  }
}

function CatalogConsumer (props) {
  return (
    <CartConsumer>
      {
        (cart) => (<Catalog {...props} updateCart={cart.updateCart} cart={cart} />)
      }
    </CartConsumer>
  )
}

export default CatalogConsumer
