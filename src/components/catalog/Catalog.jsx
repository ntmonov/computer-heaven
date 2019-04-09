import React from 'react'
import { Link } from 'react-router-dom'
import { getCatalog, deleteProduct, getFilteredCatalog, getCount } from '../../utils/catalogRequests'
import { getProductById } from '../../utils/cartRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'
import CatalogItem from './CatalogItem'
import Select from '../common/inputFields/Select'
import { CartConsumer } from '../contexts/cart-context'
import Search from '../search/Search'

class Catalog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [],
      type: '',
      isLoading: false,
      sortMethod: window.sessionStorage.getItem('sortMethod') || 'ASC',
      count: 0,
      countPerPage: 3,
      minPrice: 0,
      maxPrice: 9999,
      searchText: ''
    }
    this.delProduct = this.delProduct.bind(this)
    this.getData = this.getData.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.sortProducts = this.sortProducts.bind(this)
    this.filterProducts = this.filterProducts.bind(this)
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
      userId: window.sessionStorage.getItem('userId')
    }
    this.props.updateCart(data)
    toastr.success('Product added')
    this.props.history.push('/home')
  }

  async getData () {
    let products
    let type = this.props.match.params.type
    let page = Number(this.props.match.params.page)
    this.setState({ countPerPage: 3 })
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

  async filterProducts (id, value) {
    if (id === 'searchForName') {
      this.setState({ searchText: value })
    } else if (id === 'searchByPrice1') {
      this.setState({ minPrice: Number(value) })
    } else if (id === 'searchByPrice2') {
      this.setState({ maxPrice: Number(value) })
    }
    let filterProducts = await getFilteredCatalog(this.state.type, this.state.searchText, this.state.minPrice, this.state.maxPrice)
    let filteredProductsCount = filterProducts.length
    if (filteredProductsCount > 0) {
      this.setState({ products: filterProducts, count: filteredProductsCount, countPerPage: filteredProductsCount })
    } else {
      await this.getData()
      await this.getCount()
    }
  }

  render () {
    let page = Number(this.props.match.params.page)
    let type = this.props.match.params.type
    return (
      <React.Fragment>
        <h1>Catalog</h1>
        <Search search={this.filterProducts} />
        <div className='text-center'>
          <Select options={['-', 'ASC', 'DESC']} label='Sort by Price' multi={false} onChange={this.sortProducts} />
          {this.state.isLoading && <div className='centerDiv'><Spinner className='text-center' size={80} spinnerColor={'#333'} spinnerWidth={2} visible /></div>}
          {this.state.products.map(prod => (
            <CatalogItem key={prod._id} delProduct={this.delProduct} prod={prod} type={this.state.type} addToCart={() => { this.addToCart(prod._id) }} />
          ))}
        </div>
        <div className='text-center'>
          {page < (this.state.count / this.state.countPerPage) && <Link className='btn btn-primary' to={`/catalog/${type}/${page + 1}`} onClick={this.forceUpdate} >Next</Link>}
          { ' ' }
          {page > 1 && <Link className='btn btn-primary' to={`/catalog/${type}/${page - 1}`} onClick={this.forceUpdate} >Prev</Link>}
          <p>Page {page} of {Math.ceil(this.state.count / this.state.countPerPage)}</p>
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
