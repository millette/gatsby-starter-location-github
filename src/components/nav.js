// npm
import React, { Component } from 'react'
import { withPrefix } from 'gatsby'

// self
import { Link } from '../i18n'
import tinylogo from '../assets/images/tinier-rollo-logo.png'
import { getPageTitleID } from '../utils'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = { showLanguages: false }
    this.toggleLanguages = this.toggleLanguages.bind(this)
  }

  toggleLanguages (ev) {
    this.setState({ showLanguages: !this.state.showLanguages })
  }

  render () {
    const { pageContext } = this.props

    const pageTitleStr = getPageTitleID(pageContext)

    const languageSwitch =
      pageContext &&
      pageContext.languages &&
      pageContext.languages
        .filter(({ value }) => value !== pageContext.locale)
        .map(({ text, value }) => (
          <a
            className='dropdown-item'
            key={value}
            href={`${withPrefix(`${value}${pageContext.originalPath}`)}`}
          >
            {text}
          </a>
        ))

    return (
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
              <li
                className={`nav-item${
                  pageTitleStr === 'about' ? ' active' : ''
                }`}
              >
                <Link className='nav-link' to='/about/'>
                  About <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item${
                  pageTitleStr === 'contact' ? ' active' : ''
                }`}
              >
                <Link className='nav-link' to='/contact/'>
                  Contact
                </Link>
              </li>
            </ul>
            {languageSwitch && (
              <ul className='navbar-nav'>
                <li className='nav-item dropdown'>
                  <button
                    onClick={this.toggleLanguages}
                    type='button'
                    className='btn btn-primary nav-link dropdown-toggle'
                    id='navbarDropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Switch language
                  </button>
                  <div
                    className={`bg-primary dropdown-menu${
                      this.state.showLanguages ? ' show' : ''
                    }`}
                    aria-labelledby='navbarDropdown'
                  >
                    {languageSwitch}
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
