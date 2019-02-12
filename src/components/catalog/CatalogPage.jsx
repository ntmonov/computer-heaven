import React from 'react'
import { Link } from 'react-router-dom'
import mb from '../../images/mb.jpg'
import cpu from '../../images/cpu.jpg'
import video from '../../images/video.jpg'
import ssd from '../../images/ssd.jpg'

function CatalogPage (props) {
  return (
    <React.Fragment>
      <h1>Catalog page</h1>
      <div className='createMenu'>
        <Link to='/catalog/mb'><img src={mb} /></Link>
        <div className='text-center'>
          <p>Mainboards</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/catalog/cpu'><img src={cpu} /></Link>
        <div className='text-center'>
          <p>Processors</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/catalog/video'><img src={video} /></Link>
        <div className='text-center'>
          <p>Video Cards</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/catalog/ssd'><img src={ssd} /></Link>
        <div className='text-center'>
          <p>SSD</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CatalogPage
