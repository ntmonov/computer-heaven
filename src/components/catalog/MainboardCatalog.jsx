import React from 'react'
import { Link } from 'react-router-dom'
import { getCatalog } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'

class MainboardCatalog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mainboards: [],
      isLoading: false
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    let mainboards
    try {
      this.setState({ isLoading: true })
      mainboards = await getCatalog('mainboard')
      this.setState({ mainboards })
      this.setState({ isLoading: false })
    } catch (error) {
      toastr.error(mainboards.description)
      this.setState({ isLoading: false })
    }
  }

  render () {
    return (
      <React.Fragment>
        <h1>Catalog</h1>
        {this.state.isLoading && <div className='centerDiv'><Spinner className='text-center' size={80} spinnerColor={'#333'} spinnerWidth={2} visible /></div>}
        {this.state.mainboards.map(mb => (
          <Link key={mb._id} to={`/details/mainboard/${mb._id}`}>
            <div className='cardWrapper'>
              <div className='card-group'>
                <div className='card bg-primary text-black'>
                  <img className='card-img-top' src={mb.imageUrl} style={styles} alt='Card image cap' />
                  <div className='card-body'>
                    <h5 className='card-title'>{mb.name}</h5>
                    <p className='card-text'>Price: {mb.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </React.Fragment>
    )
  }
}

export default MainboardCatalog

const styles = {
  width: '128px',
  height: '128px'
}
