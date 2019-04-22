import React from 'react'
import { getDetails, updateProduct } from '../../utils/catalogRequests'
import toastr from 'toastr'
import CreateLaptopForm from '../forms/CreateLaptopForm'
import validate from '../../utils/formValidator.js'

class EditLaptop extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      laptop: {},
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    let name = event.target.name
    let value = event.target.value
    let laptop = this.state.laptop
    laptop[name] = value
    this.setState({ laptop })
  }

  async onSubmit (event) {
    event.preventDefault()

    const { isValid, errors } = validate(this.state.laptop)

    if (!isValid) {
      this.setState({ errors })
      return
    }
    if (this.state.laptop.imageUrl.length === 0) {
      let laptop = this.state.laptop
      laptop.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      this.setState({ laptop })
    }
    let item
    let productId = this.props.match.params.productId
    try {
      this.setState({ isLoading: true })
      item = await updateProduct(productId, 'laptop', this.state.laptop)
      toastr.success('Laptop edited')
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
    let laptop = await getDetails(productId, 'laptop')
    this.setState({ laptop })
  }

  render () {
    return (
      <CreateLaptopForm onChange={this.onChange} laptop={this.state.laptop} onSubmit={this.onSubmit} errors={this.state.errors} submitMsg='Редактирай' />
    )
  }
}

export default EditLaptop
