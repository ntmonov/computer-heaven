import React from 'react'
import logo from '../../images/navbar.png'

function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <img src={logo} style={imgStyle} alt='logo' />
      <a className='navbar-brand' href='#'>Navbar</a>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Home</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Register</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Login</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Logout</a>
          </li>
          <li className='nav-item dropdown'>
            <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
               Catalog
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a className='dropdown-item' href='#'>Mainboards</a>
              <a className='dropdown-item' href='#'>CPU</a>
              <a className='dropdown-item' href='#'>Video Cards</a>
              <a className='dropdown-item' href='#'>SSD</a>
            </div>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Crreate</a>
          </li>
          <span className='navbar-text float: right' >
            Welcome niki
          </span>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

const imgStyle = {
  'borderRadius': '50%',
  'width': 64,
  'height': 64
}
