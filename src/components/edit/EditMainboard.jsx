import React from 'react'
import { getDetails, updateProduct } from '../../utils/catalogRequests'
import toastr from 'toastr'
import validate from '../../utils/formValidator.js'
import CreateMainboardForm from '../forms/CreateMainboardForm'

class EditMainboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mainboard: {},
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    let name = event.target.name
    let value = event.target.value
    let mainboard = this.state.mainboard
    mainboard[name] = value
    this.setState({ mainboard })
  }

  async onSubmit (event) {
    event.preventDefault()
    if (this.state.mainboard.imageUrl.length === 0) {
      let mainboard = this.state.mainboard
      mainboard.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      this.setState({ mainboard })
    }
    const { isValid, errors } = validate(this.state.mainboard)

    if (!isValid) {
      this.setState({ errors })
      return
    }
    let item
    let productId = this.props.match.params.productId
    try {
      this.setState({ isLoading: true })
      item = await updateProduct(productId, 'mainboard', this.state.mainboard)
      toastr.success('Mainboard edited')
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
    let mainboard = await getDetails(productId, 'mainboard')
    this.setState({ mainboard })
  }

  render () {
    return (
      <CreateMainboardForm onChange={this.onChange} mb={this.state.mainboard} errors={this.state.errors} onSubmit={this.onSubmit} submitMsg='Редактирай' />
    )
  }
}

export default EditMainboard
