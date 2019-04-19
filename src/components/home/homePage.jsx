import React from 'react'
import homeImg from '../../images/home.webp'

function HomePage () {
  return (
    <div className='jumbotron jumbotron-fluid bg-primary mb-0'>
      <div className='container'>
        <h1 className='display-4'>Welcome to Computer Heaven</h1>
        <p className='lead'>This app is all about computers</p>
        <img src={homeImg} style={imgStyle} alt='logo' />
      </div>
    </div>
  )
}

const imgStyle = {
  width: '40%',
  height: '40%'
}

export default HomePage
