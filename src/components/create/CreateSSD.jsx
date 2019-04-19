import React from 'react'
import { create } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'
import CreateSSDForm from '../forms/CreateSSDForm'

class CreateMainboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ssd: {
        name: '',
        capacity: '',
        interface: '',
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
    try {
      this.setState({ isLoading: true })
      item = await create('ssd', this.state.ssd)
      toastr.success('SSD created')
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
        <CreateSSDForm onChange={this.onChange} ssd={this.state.ssd} onSubmit={this.onSubmit} submitMsg='Създай диск' />
      </React.Fragment>
    )
  }
}
export default CreateMainboard
