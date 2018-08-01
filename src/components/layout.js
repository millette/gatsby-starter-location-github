// npm
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// self
import Header from './header'
import Nav from './nav.js'
import './layout.scss'

// FIXME: GraphQL should not hardcode languages
// but use an array instead
// { languages, locale, originalPath }
const Layout = ({ pageContext, header, container, children, data }, ctx) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            language {
              fallback
              en {
                title
                subtitle
              }
              fr {
                title
                subtitle
              }
            }
          }
        }
      }
    `}
    render={data => {
      const locale =
        (ctx && ctx.language && ctx.language.locale) ||
        data.site.siteMetadata.language.fallback ||
        'en'

      const pageContext = ctx.language || {}
      return (
        <Fragment>
          <Helmet
            title={data.site.siteMetadata.language[locale].title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' }
            ]}
          />
          {header ? (
            <Header
              pageContext={pageContext}
              siteTitle={data.site.siteMetadata.language[locale].title}
              subTitle={data.site.siteMetadata.language[locale].subtitle}
            />
          ) : (
            <Nav pageContext={pageContext} />
          )}
          <div className={container || ''}>{children}</div>
        </Fragment>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

Layout.contextTypes = {
  language: PropTypes.object
}

export default Layout
