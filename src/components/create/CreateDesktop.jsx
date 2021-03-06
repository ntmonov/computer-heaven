import React from 'react'
import CreateDesktopForm from '../forms/CreateDesktopForm'
import { create } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'
import validate from '../../utils/formValidator.js'

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
    const { isValid, errors } = validate(this.state.desktop)

    if (!isValid) {
      this.setState({ errors })
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
