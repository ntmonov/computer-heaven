import React from 'react'
import { getCatalog } from '../../utils/catalogRequests'
import toastr from 'toastr'

class MainboardCatalog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mainboards: []
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    let mainboards
    try {
      mainboards = await getCatalog('mainboard')
      this.setState({ mainboards })
    } catch (error) {
      toastr.error(mainboards.description)
    }
  }

  render () {
    return (
      <React.Fragment>
        <h1>Catalog</h1>
        {this.state.mainboards.map(mb => (
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
