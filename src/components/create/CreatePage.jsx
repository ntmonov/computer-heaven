import React from 'react'
import { Link } from 'react-router-dom'
import mb from '../../images/mb.jpg'
import cpu from '../../images/cpu.jpg'
import video from '../../images/video.jpg'
import ssd from '../../images/ssd.jpg'
import desktop from '../../images/desktop1.jpg'
import laptop from '../../images/laptop.jpg'

function CreatePage (props) {
  return (
    <React.Fragment>
      <h1>Create page</h1>
      <div className='createMenu'>
        <Link to='/create/mb'><img src={mb} alt={mb} /></Link>
        <div className='text-center'>
          <p>Дънни платки</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/create/cpu'><img src={cpu} alt={cpu} /></Link>
        <div className='text-center'>
          <p>Процесори</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/create/video'><img src={video} alt={video} /></Link>
        <div className='text-center'>
          <p>Видео карти</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/create/ssd'><img src={ssd} alt={ssd} /></Link>
        <div className='text-center'>
          <p>Дискове</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/create/desktop'><img style={{ width: '300px' }} src={desktop} alt={desktop} /></Link>
        <div className='text-center'>
          <p>Настолни компютри</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/create/laptop'><img style={{ width: '300px' }} src={laptop} alt={laptop} /></Link>
        <div className='text-center'>
          <p>Лаптопи</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CreatePage
