import React from 'react'
import { getDetails, updateProduct } from '../../utils/catalogRequests'
import toastr from 'toastr'
import validate from '../../utils/formValidator.js'

import CreateCPUForm from '../forms/CreateCPUForm'

class EditCPU extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cpu: {},
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    let name = event.target.name
    let value = event.target.value
    let cpu = this.state.cpu
    cpu[name] = value
    this.setState({ cpu })
  }

  async onSubmit (event) {
    event.preventDefault()

    const { isValid, errors } = validate(this.state.cpu)
    if (!isValid) {
      this.setState({ errors })
      return
    }

    if (this.state.cpu.imageUrl.length === 0) {
      let cpu = this.state.cpu
      cpu.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      this.setState({ cpu })
    }
    let item
    let productId = this.props.match.params.productId
    try {
      this.setState({ isLoading: true })
      item = await updateProduct(productId, 'cpu', this.state.cpu)
      toastr.success('CPU edited')
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
    let cpu = await getDetails(productId, 'cpu')
    this.setState({ cpu })
  }

  render () {
    return (
      <CreateCPUForm onChange={this.onChange} cpu={this.state.cpu} errors={this.state.errors} onSubmit={this.onSubmit} submitMsg='Редактирай' />
    )
  }
}

export default EditCPU
