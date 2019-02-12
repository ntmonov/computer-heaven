import React from 'react'
import CreateMainboardForm from '../forms/CreateMainboardForm'

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

  onSubmit (event) {
    event.preventDefault()
    window.alert(JSON.stringify(this.state.mainboard))
  }

  render () {
    return (
      <CreateMainboardForm onChange={this.onChange} mb={this.state.mainboard} onSubmit={this.onSubmit} />
    )
  }
}
export default CreateMainboard
