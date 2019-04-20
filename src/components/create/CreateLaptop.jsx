import React from 'react'
import { create } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'
import CreateLaptopForm from '../forms/CreateLaptopForm'
import validate from '../../utils/formValidator.js'

class CreateLaptop extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      laptop: {
        name: '',
        description: '',
        imageUrl: '',
        price: '',
        cpu: '',
        resolution: '',
        memory: '4GB',
        disk: '120GB'
      },
      isLoading: false,
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
    try {
      this.setState({ isLoading: true })
      item = await create('laptop', this.state.laptop)
      toastr.success('Laptop created')
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
        <CreateLaptopForm onChange={this.onChange} laptop={this.state.laptop} onSubmit={this.onSubmit} errors={this.state.errors} submitMsg='Създай лаптоп' />
      </React.Fragment>
    )
  }
}
export default CreateLaptop
