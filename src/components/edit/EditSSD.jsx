import React from 'react'
import { getDetails, updateProduct } from '../../utils/catalogRequests'
import toastr from 'toastr'

import CreateSSDForm from '../forms/CreateSSDForm'

class EditSSD extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ssd: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    let name = event.target.name
    let value = event.target.value
    let ssd = this.state.ssd
    ssd[name] = value
    this.setState({ ssd })
  }

  async onSubmit (event) {
    event.preventDefault()
    if (this.state.ssd.imageUrl.length === 0) {
      let ssd = this.state.ssd
      ssd.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      this.setState({ ssd })
    }
    let item
    let productId = this.props.match.params.productId
    try {
      this.setState({ isLoading: true })
      item = await updateProduct(productId, 'ssd', this.state.ssd)
      toastr.success('SSD edited')
      this.setState({ isLoading: false })
      this.props.history.push('/home')
    } catch (error) {
      toastr.error(item.description)
      this.setState({ isLoading: false })
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
    return (
      <CreateSSDForm onChange={this.onChange} ssd={this.state.ssd} onSubmit={this.onSubmit} submitMsg='Edit SSD' />
    )
  }
}

export default EditSSD
