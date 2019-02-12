import React from 'react'
import { getCatalog } from '../../utils/catalogRequests'
import toastr from 'toastr'
import Spinner from 'react-spinner-material'

class VideoCatalog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      isLoading: false
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    let videos
    try {
      this.setState({ isLoading: true })
      videos = await getCatalog('video')
      this.setState({ videos })
      this.setState({ isLoading: false })
    } catch (error) {
      toastr.error(videos.description)
      this.setState({ isLoading: false })
    }
  }

  render () {
    return (
      <React.Fragment>
        <h1>Catalog</h1>
        {this.state.isLoading && <div className='centerDiv'><Spinner className='text-center' size={80} spinnerColor={'#333'} spinnerWidth={2} visible /></div>}
        {this.state.videos.map(vc => (
          <div className='cardWrapper'>
            <div className='card-group'>
              <div className='card bg-primary text-black'>
                <img className='card-img-top' src={vc.imageUrl} style={styles} alt='Card image cap' />
                <div className='card-body'>
                  <h5 className='card-title'>{vc.name}</h5>
                  <p className='card-text'>Price: {vc.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default VideoCatalog

const styles = {
  width: '128px',
  height: '128px'
}
