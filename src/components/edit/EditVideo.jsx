import React from 'react'
import { getDetails, updateProduct } from '../../utils/catalogRequests'
import validate from '../../utils/formValidator.js'
import toastr from 'toastr'

import CreateVideoForm from '../forms/CreateVideoForm'

class EditVideo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      video: {},
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    let name = event.target.name
    let value = event.target.value
    let video = this.state.video
    video[name] = value
    this.setState({ video })
  }

  async onSubmit (event) {
    event.preventDefault()

    const { isValid, errors } = validate(this.state.video)

    if (!isValid) {
      this.setState({ errors })
      return
    }

    if (this.state.video.imageUrl.length === 0) {
      let video = this.state.video
      video.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      this.setState({ video })
    }
    let item
    let productId = this.props.match.params.productId
    try {
      this.setState({ isLoading: true })
      item = await updateProduct(productId, 'video', this.state.video)
      toastr.success('Video edited')
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
    let video = await getDetails(productId, 'video')
    this.setState({ video })
  }

  render () {
    return (
      <CreateVideoForm onChange={this.onChange} video={this.state.video} onSubmit={this.onSubmit} errors={this.state.errors} submitMsg='Редактирай' />
    )
  }
}

export default EditVideo
