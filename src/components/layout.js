// npm
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
// import { FormattedMessage, injectIntl } from 'react-intl'
import { FormattedMessage } from 'react-intl'

// self
import Header from './header'
import Nav from './nav.js'
import './layout.scss'

// const Translator = injectIntl(({ id, intl }) => intl.formatMessage({ messageDescriptor: { id } }))

// const Layout = ({ pageContext, header, container, children, data }, ctx) => (
// const Layout = ({ messages, pageContext, header, container, children }, ctx) => {
const Layout = ({ messages, header, container, children }, ctx) => {
  const pageContext = ctx.language || { originalPath: '' }
  const pageTitleID = `${pageContext.originalPath
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
    .replace(/\/+/g, '-') || 'index'}.title`

  const pageTitle = messages[pageTitleID] ? ` — ${messages[pageTitleID]}` : ''

  console.log('pageTitleID:', pageTitleID)
  console.log('pageTitle:', pageTitle)

  return (
    <Fragment>
      <Helmet
        title={`${messages.title}${pageTitle}`}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      {header ? (
        <Header
          pageContext={pageContext}
          siteTitle={<FormattedMessage id='title' />}
          subTitle={<FormattedMessage id='subtitle' />}
        />
      ) : (
        <Nav pageContext={pageContext} />
      )}
      <div className={container || ''}>{children}</div>
    </Fragment>
  )
}

// FIXME: GraphQL should not hardcode languages
// but use an array instead
// { languages, locale, originalPath }
/*
const Layout = ({ pageContext, header, container, children, data }, ctx) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            language {
              fallback
            }
          }
        }
      }
    `}
    render={data => {
      const title = <FormattedMessage id='title' />
      const subtitle = <FormattedMessage id='subtitle' />

      const pageContext = ctx.language || {}
      return (
        <Fragment>
          <Helmet
            title={title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' }
            ]}
          />
          {header ? (
            <Header
              pageContext={pageContext}
              siteTitle={title}
              subTitle={subtitle}
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
*/

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

Layout.contextTypes = {
  language: PropTypes.object
}

export default Layout
