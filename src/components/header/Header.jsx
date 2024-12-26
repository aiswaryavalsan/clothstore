import React from 'react'
import { Link } from 'react-router-dom'
import './Header.style.scss'
const Header = () => {
  return (
    <>
    <div className='header'>
      <Link className='logo-container' to='/'>
      <span className="material-symbols-outlined">crown</span>
      </Link>
      <div className="options">
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/contact' className='option'>CONTACT</Link>
      </div>
    </div>
    </>
  )
}

export default Header