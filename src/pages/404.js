// npm
import React from 'react'
import { FormattedMessage } from 'react-intl'

// self
import { Layout, Footer } from '../components'
import { withIntl } from '../i18n'

const NotFoundPage = () => (
  <Layout>
    <div className='container'>
      <h1 className='mt-3'>
        <FormattedMessage id='404.title' />
      </h1>
      <p>
        <FormattedMessage id='404.text' />
      </p>
    </div>

    <Footer>
      <p className='card-text'>Marvoulous</p>
    </Footer>
  </Layout>
)

export default withIntl(NotFoundPage)
