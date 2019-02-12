import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/navbar.png'
import { isAuth, isAdmin } from '../../utils/auth.js'

function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <img src={logo} style={imgStyle} alt='logo' />
      <NavLink className='navbar-brand' to='/home'>Computer Heaven</NavLink>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/home'>Home</NavLink>
          </li>
          {!isAuth() && <li className='nav-item'>
            <NavLink className='nav-link' to='/register'>Register</NavLink>
          </li>}
          {!isAuth() && <li className='nav-item'>
            <NavLink className='nav-link' to='/login'>Login</NavLink>
          </li>}
          {isAuth() && <li className='nav-item'>
            <NavLink className='nav-link' to='/logout'>Logout</NavLink>
          </li>}
          {isAuth() && <li className='nav-item'>
            <NavLink className='nav-link' to='/catalog'>Catalog</NavLink>
          </li>}
          {isAdmin() && <li className='nav-item'>
            <NavLink className='nav-link' to='/create'>Crreate</NavLink>
          </li>}
          <span className='navbar-text float: right' >
            Welcome {window.sessionStorage.getItem('username')}
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
