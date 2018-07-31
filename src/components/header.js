// npm
import React from 'react'
import { Link } from '../i18n'
import { FormattedMessage } from 'react-intl'

// self
import logo from '../assets/images/logo.png'

const Header = ({ siteTitle, subTitle }) => (
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
              defaultMessage='Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.'
            />
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='column mx-auto'>
          <button type='button' className='btn btn-info btn-lg'>
            Find out more
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Header
