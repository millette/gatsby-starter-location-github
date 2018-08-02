// npm
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

// self
import { Link } from '../i18n'
import tinylogo from '../assets/images/tinier-rollo-logo.png'
import { getPageTitleID } from '../utils'
import LanguageSwitch from './language-switch'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = { showLanguages: false }
    this.toggleLanguages = this.toggleLanguages.bind(this)
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
