// npm
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'

// self
import Header from './header'
import Nav from './nav.js'
import { getPageTitleID } from '../utils'
import './layout.scss'

const Layout = ({ messages, header, children }, ctx) => {
  if (!messages) {
    messages = {}
  }
  const pageTitleStr = getPageTitleID(ctx.language)
  const pageTitleID = pageTitleStr && `${pageTitleStr}.title`
  const pageTitle =
    pageTitleID && messages[pageTitleID] ? ` — ${messages[pageTitleID]}` : ''
  const pageContext = ctx.language || {}
  const helmetProps = {
    title: `${messages.title}${pageTitle}`
  }
  if (messages.subtitle) {
    helmetProps.meta = [{ name: 'description', content: messages.subtitle }]
  }

  return (
    <Fragment>
      <Helmet {...helmetProps} />
      {header ? (
        <Header
          pageContext={pageContext}
          siteTitle={<FormattedMessage id='title' />}
          subTitle={<FormattedMessage id='subtitle' />}
        />
      ) : (
        <Nav pageContext={pageContext} />
      )}
      {children}
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
