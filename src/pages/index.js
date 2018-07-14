import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
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
  </Layout>
)

export default withIntl(IndexPage)
