import React from 'react'
import { create } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'
import CreateVideoForm from '../forms/CreateVideoForm'

class CreateVideo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      video: {
        name: '',
        memory: '2GB',
        ports: 'VGA',
        description: '',
        imageUrl: '',
        price: ''
      },
      isLoading: false
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
    if (this.state.video.imageUrl.length === 0) {
      let video = this.state.video
      video.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      this.setState({ video })
    }
    let item
    try {
      this.setState({ isLoading: true })
      item = await create('video', this.state.video)
      toastr.success('Video Card created')
      this.setState({ isLoading: false })
      this.props.history.push('/home')
    } catch (error) {
      toastr.error(item.description)
      this.setState({ isLoading: false })
    }
  }

  render () {
    return (
      <React.Fragment>
        {this.state.isLoading && <div className='centerDiv'><Spinner className='text-center' size={80} spinnerColor={'#333'} spinnerWidth={2} visible /></div>}
        <CreateVideoForm onChange={this.onChange} video={this.state.video} onSubmit={this.onSubmit} submitMsg='Create video card' />
      </React.Fragment>
    )
  }
}
export default CreateVideo
