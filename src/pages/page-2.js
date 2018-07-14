import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>
      <FormattedMessage id='welcome2' />
    </h1>
    <p>Welcome to page 2</p>
    <ul>
      <li>
        <Link to='/'>
          <FormattedMessage id='goback' />
        </Link>
      </li>
      <li>
        <Link to='/' lng='fr'>
          francais, accueil
        </Link>
      </li>
      <li>
        <Link to='/' lng='en'>
          english, front
        </Link>
      </li>
    </ul>
  </Layout>
)

export default withIntl(SecondPage)
