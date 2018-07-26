// npm
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from '../i18n'

// self
import Header from './header'
import './layout.scss'

const Layout = ({ header, container, children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        {header ? (
          <Header siteTitle={data.site.siteMetadata.title} />
        ) : (
          <div className='container'>
            <h1 className='jumbotron-heading'>
              <Link to='/'>{data.site.siteMetadata.title}</Link>
            </h1>
          </div>
        )}
        <div className={container || ''}>{children}</div>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
