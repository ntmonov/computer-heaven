import React from 'react'
import { Link } from 'react-router-dom'
import mb from '../../images/mb.jpg'
import cpu from '../../images/cpu.jpg'
import video from '../../images/video.jpg'
import ssd from '../../images/ssd.jpg'
import desktop from '../../images/desktop1.jpg'
import laptop from '../../images/laptop.jpg'

function CatalogPage (props) {
  return (
    <React.Fragment>
      <h1>Catalog page</h1>
      <div className='createMenu'>
        <Link to='/catalog/mainboard/1'><img src={mb} alt={mb} /></Link>
        <div className='text-center'>
          <p>Mainboards</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/catalog/cpu/1'><img src={cpu} alt={cpu} /></Link>
        <div className='text-center'>
          <p>Processors</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/catalog/video/1'><img src={video} alt={video} /></Link>
        <div className='text-center'>
          <p>Video Cards</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/catalog/ssd/1'><img src={ssd} alt={ssd} /></Link>
        <div className='text-center'>
          <p>SSD</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/catalog/desktop/1'><img style={{ width: '300px' }} src={desktop} alt={desktop} /></Link>
        <div className='text-center'>
          <p>Desktop</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/catalog/laptop/1'><img style={{ width: '300px' }} src={laptop} alt={laptop} /></Link>
        <div className='text-center'>
          <p>Laptop</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CatalogPage
