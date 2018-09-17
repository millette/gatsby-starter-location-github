// npm
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { StaticQuery, graphql } from 'gatsby'

// self
import { Link } from '../i18n'
import sfllogo from '../assets/images/logo-sfl-coul-rgb.jpg'
import { getPageTitleID } from '../utils'
import { LogoAnim, LanguageSwitch } from '.'

let config = { location: 'UNDEFINED' }

try {
  config = { ...config, ...require('../../custom/config') }
} catch (e) {
  // expected if there is no custom config
}

const sflImage = config.withAds && (
  <img
    className='mt-1 mr-3 rounded'
    src={sfllogo}
    height={48}
    alt='logo SFL'
    title='Merci - Thank you!'
  />
)

const sponsorPath = '/sponsor/'

const TopAd = ({ pageContext: { originalPath } }) =>
  config.withAds &&
  (originalPath === sponsorPath ? (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.savoirfairelinux.com/'
    >
      {sflImage}
    </a>
  ) : (
    <Link to={sponsorPath}>{sflImage}</Link>
  ))

class NavImp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showLanguages: false,
      showMenu: false
    }

    this.withBlog = this.props.totalCount > 0
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
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <LogoAnim />
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

              {this.withBlog ? (
                <li
                  className={`nav-item${
                    pageTitleStr === 'blog' ? ' active' : ''
                  }`}
                >
                  <Link className='nav-link' to='/blog/'>
                    <FormattedMessage id='nav.blog' />
                    {pageTitleStr === 'blog' && (
                      <span className='sr-only'>
                        <FormattedMessage id='nav.current' />
                      </span>
                    )}
                  </Link>
                </li>
              ) : (
                'No-BLOG'
              )}

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

              {config.withAds && (
                <li
                  className={`nav-item${
                    pageTitleStr === 'sponsor' ? ' active' : ''
                  }`}
                >
                  <Link className='nav-link' to={sponsorPath}>
                    <FormattedMessage id='nav.sponsor' />
                    {pageTitleStr === 'sponsor' && (
                      <span className='sr-only'>
                        <FormattedMessage id='nav.current' />
                      </span>
                    )}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <TopAd {...this.props} />
          <LanguageSwitch
            showLanguages={this.state.showLanguages}
            toggleLanguages={this.toggleLanguages}
            pageContext={pageContext}
          />
        </div>
      </nav>
    )
  }
}

const Nav = props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(
          limit: 1
          sort: { fields: [modifiedTime], order: DESC }
          filter: { extension: { eq: "md" } }
        ) {
          totalCount
        }
      }
    `}
    render={({ allFile: { totalCount } }) => (
      <NavImp totalCount={totalCount} {...props} />
    )}
  />
)

export default Nav
