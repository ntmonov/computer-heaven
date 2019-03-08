import React from 'react'
import { getDetails } from '../../utils/catalogRequests'
import CommentsForm from '../comments/CommentsForm'

class VideoDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      video: {}
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    let productId = this.props.match.params.productId
    let video = await getDetails(productId, 'video')
    this.setState({ video })
  }

  render () {
    let video = this.state.video
    return (
      <div style={stylesForMainDiv}>
        <h1>Video card</h1>
        <div className='card mb-3'>
          <img className='card-img-top' style={styles} src={video.imageUrl} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>{video.name}}</h5>
            <h3>Specfications</h3>
            <p className='card-text'>Ports: {video.ports}}</p>
            <p className='card-text'>Memory Capacity: {video.memory}</p>
            <h3>Description</h3>
            <p>{video.description}</p>
            <h3>Price: {video.price}</h3>
          </div>
        </div>
        <CommentsForm type='video' productId={this.props.match.params.productId} />
      </div>
    )
  }
}

export default VideoDetails

const styles = {
  width: '384px'
}

const stylesForMainDiv = {
  width: '400px',
  margin: '0 auto'
}
