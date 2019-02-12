import React from 'react'
import CreateMainboardForm from '../forms/CreateMainboardForm'
import { create } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'

class CreateMainboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mainboard: {
        name: '',
        socket: '1151',
        memorySupported: 'DDR4',
        description: '',
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
    let mainboard = this.state.mainboard
    mainboard[name] = value
    this.setState({ mainboard })
  }

  async onSubmit (event) {
    event.preventDefault()
    let item
    try {
      this.setState({ isLoading: true })
      item = await create('mainboard', this.state.mainboard)
      toastr.success('Mainboard created')
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
        <CreateMainboardForm onChange={this.onChange} mb={this.state.mainboard} onSubmit={this.onSubmit} />
      </React.Fragment>
    )
  }
}
export default CreateMainboard
