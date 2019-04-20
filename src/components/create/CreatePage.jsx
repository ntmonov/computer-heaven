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
        <Link to='/create/mb'><img style={style} src={mb} alt={mb} /></Link>
        <div className='text-center'>
          <p>Дънни платки</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/create/cpu'><img style={style} src={cpu} alt={cpu} /></Link>
        <div className='text-center'>
          <p>Процесори</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/create/video'><img style={style} src={video} alt={video} /></Link>
        <div className='text-center'>
          <p>Видео карти</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/create/ssd'><img style={style} src={ssd} alt={ssd} /></Link>
        <div className='text-center'>
          <p>Дискове</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/create/desktop'><img style={style} src={desktop} alt={desktop} /></Link>
        <div className='text-center'>
          <p>Настолни компютри</p>
        </div>
      </div>

      <div className='createMenu'>
        <Link to='/create/laptop'><img style={style} src={laptop} alt={laptop} /></Link>
        <div className='text-center'>
          <p>Лаптопи</p>
        </div>
      </div>
    </React.Fragment>
  )
}

const style = {
  width: '240px'
}

export default CreatePage
