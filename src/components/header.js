// npm
import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

// self
import Nav from './nav.js'
import { Link } from '../i18n'
import logo from '../assets/images/logo.png'

//  navbar-expand-lg navbar-light bg-light
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
            <h1 className='jumbotron-heading'>
              <Link to='/'>{siteTitle}</Link>
            </h1>
            <h2 className='text-muted'>{subTitle}</h2>
            <p className='lead'>
              <FormattedMessage
                id='jumbotron.text'
                defaultMessage666='Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.'
              />
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='column mx-auto'>
            <Link to='/about/' className='btn btn-info btn-lg'>
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
)

export default Header
