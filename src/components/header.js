// npm
import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

// self
import { Nav } from '.'
import { Link } from '../i18n'
import logo from '../assets/images/logo.png'

const Header = ({ pageContext, siteTitle, subTitle }) => (
  <Fragment>
    <Nav pageContext={pageContext} />
    <section className='jumbotron'>
      <div className='container'>
        <div className='row text-center'>
          <div className='column clearfix'>
            <img
              src={logo}
              className='float-sm-left align-middle img-fluid mr-sm-4'
              alt='logo RoLLodeQc'
            />
            <h1 className='jumbotron-heading'>{siteTitle}</h1>
            <h2 className='text-muted'>{subTitle}</h2>
            <p className='lead'>
              <FormattedMessage id='jumbotron.text' />
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='column mx-auto'>
            <Link to='/about/' className='btn btn-info btn-lg'>
              <FormattedMessage id='jumbotron.more' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
)

export default Header
