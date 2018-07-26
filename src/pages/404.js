// npm
import React from 'react'

// self
import Layout from '../components/layout'
import Footer from '../components/footer'

const NotFoundPage = () => (
  <Layout>
    <div className='container'>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>

    <Footer>
      <p className='card-text'>Marvoulous</p>
    </Footer>
  </Layout>
)

export default NotFoundPage
