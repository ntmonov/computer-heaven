import React from 'react'
import { getDetails, updateProduct } from '../../utils/catalogRequests'
import toastr from 'toastr'
import CreateDesktopForm from '../forms/CreateDesktopForm'

class EditDesktop extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      desktop: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    let name = event.target.name
    let value = event.target.value
    let desktop = this.state.desktop
    desktop[name] = value
    this.setState({ desktop })
  }

  async onSubmit (event) {
    event.preventDefault()
    if (this.state.desktop.imageUrl.length === 0) {
      let desktop = this.state.desktop
      desktop.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      this.setState({ desktop })
    }
    let item
    let productId = this.props.match.params.productId
    try {
      this.setState({ isLoading: true })
      item = await updateProduct(productId, 'desktop', this.state.desktop)
      toastr.success('Desktop edited')
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
    let desktop = await getDetails(productId, 'desktop')
    this.setState({ desktop })
  }

  render () {
    return (
      <CreateDesktopForm onChange={this.onChange} desktop={this.state.desktop} onSubmit={this.onSubmit} submitMsg='Edit desktop' />
    )
  }
}

export default EditDesktop
