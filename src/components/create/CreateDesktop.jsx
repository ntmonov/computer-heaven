import React from 'react'
import CreateDesktopForm from '../forms/CreateDesktopForm'
import { create } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'

class CreateDesktop extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      desktop: {
        name: '',
        description: '',
        imageUrl: '',
        price: '',
        cpu: '',
        memory: '',
        video: '',
        psu: '400W'
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
    let desktop = this.state.desktop
    desktop[name] = value
    this.setState({ desktop })
  }

  async onSubmit (event) {
    event.preventDefault()

    if (!this.validateDesktop(this.state.desktop)) {
      return
    }

    if (this.state.desktop.imageUrl.length === 0) {
      let desktop = this.state.desktop
      desktop.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      this.setState({ desktop })
    }
    let item
    try {
      this.setState({ isLoading: true })
      item = await create('desktop', this.state.desktop)
      toastr.success('Desktop created')
      this.setState({ isLoading: false })
      this.props.history.push('/home')
    } catch (error) {
      toastr.error(item.description)
      this.setState({ isLoading: false })
    }
  }

  validateDesktop (desktop) {
    let isValid = true
    let errors = {}
    if (!/^[A-Za-z0-9]{3,}$/.test(desktop.name)) {
      isValid = false
      errors['name'] = 'Name must be at laest 3 letters or digits'
    }

    if (!/^[A-Za-z0-9]{3,}$/.test(desktop.description)) {
      isValid = false
      errors['description'] = 'Description must be at laest 3 letters or digits'
    }

    if (!/^[A-Za-z0-9]{3,}$/.test(desktop.cpu)) {
      isValid = false
      errors['cpu'] = 'CPU must be at laest 3 letters or digits'
    }

    if (!/^[A-Za-z0-9]{3,}$/.test(desktop.video)) {
      isValid = false
      errors['video'] = 'Video card must be at laest 3 letters or digits'
    }

    if (desktop.price < 0) {
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
        <CreateDesktopForm onChange={this.onChange} desktop={this.state.desktop} onSubmit={this.onSubmit} errors={this.state.errors} submitMsg='Създай компютър' />
      </React.Fragment>
    )
  }
}
export default CreateDesktop
