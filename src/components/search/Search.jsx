import React from 'react'
import toastr from 'toastr'
import SearchForm from '../forms/SearchForm'
import CatalogItem from '../catalog/CatalogItem'
import Spinner from 'react-spinner-material'
import { getProductById } from '../../utils/cartRequests'
import { getSearchCatalog } from '../../utils/searchRequests'
import { deleteProduct } from '../../utils/catalogRequests.js'
import { CartConsumer } from '../contexts/cart-context'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: {
        type: 'not-selected',
        searchName: '',
        minPrice: 0,
        maxPrice: 9999
      },
      products: [],
      isLoading: false
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onReset = this.onReset.bind(this)
    this.delProduct = this.delProduct.bind(this)
  }

  async delProduct (productId) {
    const { type, searchName, minPrice, maxPrice } = this.state.search
    await deleteProduct(productId, type)
    toastr.error('Item deleted')
    let products
    try {
      this.setState({ isLoading: true })
      products = await getSearchCatalog(type, searchName, minPrice, maxPrice)
      console.log(products)
      this.setState({ products })
      this.setState({ isLoading: false })
    } catch (error) {
      toastr.error(products.description)
      this.setState({ isLoading: false })
    }
  }

  onChange (event) {
    let name = event.target.name
    let value = event.target.value
    let search = this.state.search
    search[name] = value
    this.setState({ search })
  }

  async onSubmit (event) {
    event.preventDefault()
    let products
    const { type, searchName, minPrice, maxPrice } = this.state.search
    try {
      this.setState({ isLoading: true })
      products = await getSearchCatalog(type, searchName, Number(minPrice), Number(maxPrice))
      this.setState({ products })
      this.setState({ isLoading: false })
    } catch (error) {
      toastr.error(products.description)
      this.setState({ isLoading: false })
    }
  }

  onReset (event) {
    this.setState({
      search: {
        searchName: '',
        minPrice: 0,
        maxPrice: 9999,
        type: 'not-selected'
      },
      products: []
    })
  }

  async addToCart (productId) {
    let product = await getProductById(productId, this.state.search.type)
    let data = {
      product,
      userId: window.sessionStorage.getItem('userId')
    }
    this.props.updateCart(data)
    toastr.success('Product added')
    this.props.history.push('/home')
  }

  render () {
    return (
      <React.Fragment>
        <SearchForm search={this.state.search} onChange={this.onChange} onSubmit={this.onSubmit} onReset={this.onReset} />
        <h1 className='text-center'>Search results</h1>
        <div className='text-center'>
          { this.state.products.length === 0 ? <h3 className='bg-warning'>No results found</h3> : null }
        </div>
        <div className='text-center'>
          {this.state.isLoading && <div className='centerDiv'><Spinner className='text-center' size={80} spinnerColor={'#333'} spinnerWidth={2} visible /></div>}
          {this.state.products.map(prod => (
            <CatalogItem key={prod._id} delProduct={this.delProduct} prod={prod} type={this.state.search.type} addToCart={() => { this.addToCart(prod._id) }} />
          ))}
        </div>

      </React.Fragment>
    )
  }
}

function SearchWithContext (props) {
  return (
    <CartConsumer>
      {
        (cart) => (<Search {...props} updateCart={cart.updateCart} />)
      }
    </CartConsumer>
  )
}

export default SearchWithContext
