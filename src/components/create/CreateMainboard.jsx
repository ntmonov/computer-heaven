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
        imageUrl: '',
        price: '',
        chipset: ''
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
    let mainboard = this.state.mainboard
    mainboard[name] = value
    this.setState({ mainboard })
  }

  async onSubmit (event) {
    event.preventDefault()

    if (!this.validateMainboard(this.state.mainboard)) {
      return
    }

    if (this.state.mainboard.imageUrl.length === 0) {
      let mainboard = this.state.mainboard
      mainboard.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      this.setState({ mainboard })
    }
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

  validateMainboard (mainboard) {
    let isValid = true
    let errors = {}
    if (!/^[A-Za-z0-9]{3,}$/.test(mainboard.name)) {
      isValid = false
      errors['name'] = 'Name must be at laest 3 letters or digits'
    }

    if (!/^[A-Za-z0-9]{3,}$/.test(mainboard.description)) {
      isValid = false
      errors['description'] = 'Description must be at laest 3 letters or digits'
    }

    if (!/^[A-Za-z0-9]{3,}$/.test(mainboard.chipset)) {
      isValid = false
      errors['chipset'] = 'Chipset must be at laest 3 letters or digits'
    }

    if (mainboard.price < 0) {
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
        <CreateMainboardForm onChange={this.onChange} mb={this.state.mainboard} onSubmit={this.onSubmit} errors={this.state.errors} submitMsg='Създай дънна платка' />
      </React.Fragment>
    )
  }
}
export default CreateMainboard
