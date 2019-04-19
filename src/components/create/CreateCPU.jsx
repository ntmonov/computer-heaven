import React from 'react'
import { create } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'
import CreateCPUForm from '../forms/CreateCPUForm'

class CreateMainboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cpu: {
        name: '',
        socket: '1151',
        frequency: 0,
        description: '',
        imageUrl: '',
        cores: 2,
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
    let cpu = this.state.cpu
    cpu[name] = value
    this.setState({ cpu })
  }

  async onSubmit (event) {
    event.preventDefault()
    if (this.state.cpu.imageUrl.length === 0) {
      let cpu = this.state.cpu
      cpu.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      this.setState({ cpu })
    }
    let item
    try {
      this.setState({ isLoading: true })
      item = await create('cpu', this.state.cpu)
      toastr.success('CPU created')
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
        <CreateCPUForm onChange={this.onChange} cpu={this.state.cpu} onSubmit={this.onSubmit} submitMsg='Създай процесор' />
      </React.Fragment>
    )
  }
}
export default CreateMainboard
