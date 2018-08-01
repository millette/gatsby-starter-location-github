// npm
import React from 'react'
import { FormattedMessage } from 'react-intl'

// self
import Layout from '../components/layout'
import Footer from '../components/footer'
import { withIntl, Link } from '../i18n'

const Contact = ({ messages }) => (
  <Layout messages={messages || {}}>
    <div className='container'>
      <h1>
        <FormattedMessage id='contact.title' />
      </h1>

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
    </div>
    <Footer>
      <p className='card-text'>Marvoulous</p>
    </Footer>
  </Layout>
)

export default withIntl(Contact)
