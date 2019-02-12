import React from 'react'
import CreateMainboardForm from '../forms/CreateMainboardForm'
import { create } from '../../utils/catalogRequests'
import toastr from 'toastr'

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
      }
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
      item = await create('mainboard', this.state.mainboard)
      toastr.success('Mainboard created')
      this.props.history.push('/home')
    } catch (error) {
      toastr.error(item.description)
    }
  }

  render () {
    return (
      <CreateMainboardForm onChange={this.onChange} mb={this.state.mainboard} onSubmit={this.onSubmit} />
    )
  }
}
export default CreateMainboard
