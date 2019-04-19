import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/navbar.png'
import { isAuth, isAdmin } from '../../utils/auth.js'
import { CartConsumer } from '../contexts/cart-context'

function Navbar (props) {
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
            <NavLink className='nav-link' to='/create'>Create</NavLink>
          </li>}

          {isAuth() && <li className='nav-item'>
            <NavLink className='nav-link' to='/search'>Search</NavLink>
          </li>}

          {isAuth() && <li className='nav-item'>
            <NavLink className='nav-link' to='/cart'>Cart</NavLink>
          </li>}
          <li className='nav-item'>
            <NavLink className='nav-link' to='/contact'>Contact Us</NavLink>
          </li>
          {isAuth() && <span className='navbar-text float: right' >
            Welcome {window.sessionStorage.getItem('username')}
          </span>}
          {isAuth() && <span className='navbar-text float: right' >
            {/* Cart: {props.cart.length} items | Total: {getTotal(props.cart)} */}
          </span>}
        </ul>
      </div>
    </nav>
  )
}

// function getTotal (items) {
//   let sum = 0
//   console.log(items)
//   for (let p in items) {
//     sum += Number(items[p].product.price) * Number(items[p].quantity)
//   }
//   return sum
// }

function NavbarConsumer (props) {
  return (
    <CartConsumer>
      {
        (cart) => <Navbar {...props} cart={cart.cart} />
      }
    </CartConsumer>
  )
}

export default NavbarConsumer

const imgStyle = {
  'borderRadius': '50%',
  'width': 64,
  'height': 64
}
