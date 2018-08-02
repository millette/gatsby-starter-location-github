// npm
import React from 'react'

// self
import { Layout, Footer } from '../components'

// FIXME: translate 404 page
const NotFoundPage = () => (
  <Layout>
    <div className='container'>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn’t exist... the sadness.</p>
    </div>

    <Footer>
      <p className='card-text'>Marvoulous</p>
    </Footer>
  </Layout>
)

export default NotFoundPage
