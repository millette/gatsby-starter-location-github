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
          <FormattedHTMLMessage id='sponsor.col1.html' />
        </div>
        <div className='col-md ml-3'>
          <div className='card'>
            <div className='card-header text-center'>
              <h4>
                <FormattedMessage id='sponsor.col2.title' />
              </h4>
            </div>
            <div className='card-body text-white bg-info'>
              <FormattedHTMLMessage id='sponsor.col2.html' />
            </div>
            <Link
              to='/contact/'
              className='card-footer btn btn-danger bg-danger btn-block'
            >
              <FormattedMessage id='contact.title' />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default withIntl(Sponsor)
