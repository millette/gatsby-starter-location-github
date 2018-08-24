// npm
import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

// self
import { Layout, Footer } from '../components'
import { withIntl, Link } from '../i18n'

const Sponsor = ({ messages }) => (
  <Layout messages={messages}>
    <div className='container'>
      <h1 className='mt-3'>
        <FormattedMessage id='sponsor.title' />
      </h1>
      <div className='row'>
        <div className='col-md'>
          <p>
            <FormattedMessage id='jumbotron.text' />
          </p>
          <FormattedHTMLMessage id='sponsor.col1.html' />
        </div>
        <div className='col-md'>
          <FormattedHTMLMessage id='sponsor.col2.html' />
        </div>
      </div>

      <div className='mt-5 row justify-content-around'>
        <div className='col-md-4'>
          <Link className='btn btn-primary btn-lg btn-block' to='/'>
            <FormattedMessage id='about.front' />
          </Link>
        </div>
        <div className='col-md-4'>
          <Link className='btn btn-success btn-lg btn-block' to='/contact/'>
            <FormattedMessage id='about.contact' />
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default withIntl(Sponsor)
