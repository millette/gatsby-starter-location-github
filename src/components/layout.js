// npm
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import 'typeface-roboto'

// self
import { Social, Header, Nav } from '.'
import './layout.scss'

// const Layout = ({ pageContext, messages, header, children }, ctx) => {
// const pageContext = ctx.language || {}
// const Layout = ({ pageContext, messages, header, children }) => {
const Layout = (props, ctx) => {
  const { messages, header, children } = props
  const pageContext = props.pageContext || ctx.language || {}
  // console.log('LAYOUT PAGECONTEXT:', pageContext)
  // console.log('LAYOUT LC:', languageSet)
  // console.log('LAYOUT ctx:', ctx)
  // console.log('LAYOUT PAGECONTEXT:', pageContext)
  return (
    <Fragment>
      <Social messages={messages} pageContext={pageContext} />
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
