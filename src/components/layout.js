// npm
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'

// self
import Header from './header'
import Nav from './nav.js'
import './layout.scss'

const Layout = ({ messages, header, container, children }, ctx) => {
  const pageContext = ctx.language || { originalPath: '' }
  const pageTitleID = `${pageContext.originalPath
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
    .replace(/\/+/g, '-') || 'index'}.title`

  const pageTitle = messages[pageTitleID] ? ` — ${messages[pageTitleID]}` : ''

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

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

Layout.contextTypes = {
  language: PropTypes.object
}

export default Layout
