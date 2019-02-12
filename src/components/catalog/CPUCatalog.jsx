import React from 'react'
import { getCatalog } from '../../utils/catalogRequests'
import toastr from 'toastr'

class CPUCatalog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cpus: []
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    let cpus
    try {
      cpus = await getCatalog('cpu')
      this.setState({ cpus })
    } catch (error) {
      toastr.error(cpus.description)
    }
  }

  render () {
    return (
      <React.Fragment>
        <h1>Catalog</h1>
        {this.state.cpus.map(cpu => (
          <div className='cardWrapper'>
            <div className='card-group'>
              <div className='card bg-primary text-black'>
                <img className='card-img-top' src={cpu.imageUrl} style={styles} alt='Card image cap' />
                <div className='card-body'>
                  <h5 className='card-title'>{cpu.name}</h5>
                  <p className='card-text'>Price: {cpu.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default CPUCatalog

const styles = {
  width: '128px',
  height: '128px'
}
