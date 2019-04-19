import React from 'react'
import { create } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'
import CreateLaptopForm from '../forms/CreateLaptopForm'

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

    if (!this.validateLaptop(this.state.laptop)) {
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

  validateLaptop (laptop) {
    let isValid = true
    let errors = {}
    if (!/^[A-Za-z0-9]{3,}$/.test(laptop.name)) {
      isValid = false
      errors['name'] = 'Name must be at laest 3 letters or digits'
    }

    if (!/^[A-Za-z0-9]{3,}$/.test(laptop.description)) {
      isValid = false
      errors['description'] = 'Description must be at laest 3 letters or digits'
    }

    if (!/^[A-Za-z0-9]{3,}$/.test(laptop.resolution)) {
      isValid = false
      errors['resolution'] = 'Resolution must be at laest 3 letters or digits'
    }

    if (!/^[A-Za-z0-9]{3,}$/.test(laptop.cpu)) {
      isValid = false
      errors['cpu'] = 'CPU must be at laest 3 letters or digits'
    }

    if (laptop.price < 0) {
      isValid = false
      errors['price'] = 'Price must be a positive number'
    }
    this.setState({ errors })
    return isValid
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
