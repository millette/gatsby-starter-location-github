// npm
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'

// self
import Layout from '../components/layout'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout header>
    <div className='container'>
      <h1>
        <FormattedMessage id='welcome' />
      </h1>
      <p>
        <FormattedMessage id='build' />
      </p>
      <ul>
        <li>
          <Link to='/page-2/'>
            <FormattedMessage id='gopage2' />
          </Link>
        </li>
        <li>
          <Link to='/page-2/' lng='fr'>
            francais, page 2
          </Link>
        </li>
        <li>
          <Link to='/page-2/' lng='en'>
            english, page 2
          </Link>
        </li>
      </ul>
    </div>
    <Footer>
      <p className='card-text'>Marvoulous</p>
    </Footer>
  </Layout>
)

export default withIntl(IndexPage)
