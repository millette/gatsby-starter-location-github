// npm
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const I18nLink = ({ to, children, lng, ...rest }, { language }) => (
  <Link
    to={
      lng
        ? `/${lng}${to}`
        : language && language.locale ? `/${language.locale}${to}` : `${to}`
    }
    {...rest}
  >
    {children}
  </Link>
)

I18nLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

I18nLink.contextTypes = {
  language: PropTypes.object
}

export default I18nLink
