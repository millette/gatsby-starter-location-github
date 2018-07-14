import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>
      <FormattedMessage id='welcome' />
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to='/page-2/'>
      <FormattedMessage id='gopage2' />
    </Link>
  </Layout>
)

export default withIntl(IndexPage)
