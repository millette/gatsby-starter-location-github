// npm
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

// self
import { Link } from '../i18n'
import tinylogo from '../assets/images/tinier-rollo-logo.png'
import { getPageTitleID } from '../utils'
import { LanguageSwitch } from '.'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showLanguages: false,
      showMenu: false
    }
    this.toggleLanguages = this.toggleLanguages.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({ showMenu: !this.state.showMenu })
  }

  toggleLanguages () {
    this.setState({ showLanguages: !this.state.showLanguages })
  }

  render () {
    const { pageContext } = this.props
    const pageTitleStr = getPageTitleID(pageContext)
    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={tinylogo} alt='tiny logo RoLLodeQc' />
          </Link>
          <button
            onClick={this.toggleMenu}
            className='navbar-toggler'
            type='button'
            aria-controls='navbarText'
            aria-expanded={this.state.showMenu ? 'true' : 'false'}
            aria-label='Toggle navigation'
          >
            {this.state.showMenu ? (
              <span className='p-2' aria-hidden='true'>
                &times;
              </span>
            ) : (
              <span className='navbar-toggler-icon' />
            )}
          </button>
          <div
            className={`collapse navbar-collapse${
              this.state.showMenu ? ' show' : ''
            }`}
            id='navbarText'
          >
            <ul className='navbar-nav mr-auto'>
              <li
                className={`nav-item${
                  pageTitleStr === 'about' ? ' active' : ''
                }`}
              >
                <Link className='nav-link' to='/about/'>
                  <FormattedMessage id='nav.about' />
                  {pageTitleStr === 'about' && (
                    <span className='sr-only'>
                      <FormattedMessage id='nav.current' />
                    </span>
                  )}
                </Link>
              </li>
              <li
                className={`nav-item${
                  pageTitleStr === 'contact' ? ' active' : ''
                }`}
              >
                <Link className='nav-link' to='/contact/'>
                  <FormattedMessage id='nav.contact' />
                  {pageTitleStr === 'contact' && (
                    <span className='sr-only'>
                      <FormattedMessage id='nav.current' />
                    </span>
                  )}
                </Link>
              </li>
            </ul>
            <LanguageSwitch
              showLanguages={this.state.showLanguages}
              toggleLanguages={this.toggleLanguages}
              pageContext={pageContext}
            />
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
