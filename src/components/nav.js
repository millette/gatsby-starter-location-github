// npm
import React from 'react'
import { Link } from '../i18n'

// self
import tinylogo from '../assets/images/tinier-rollo-logo.png'

const Nav = props => (
  <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>
        <img src={tinylogo} alt='tiny logo RoLLodeQc' />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarText'
        aria-controls='navbarText'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarText'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/about/'>
              About <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact/'>
              Contact
            </Link>
          </li>
        </ul>
        <form className='form-inline'>
          <select className='custom-select custom-select-sm'>
            <option>Français</option>
            <option>English</option>
          </select>
        </form>
      </div>
    </div>
  </nav>
)

export default Nav
