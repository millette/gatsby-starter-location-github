// npm
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'

// self
import { localeData } from './locales'
// FIXME: should probably use GraphQL instead
import { siteMetadata } from '../../gatsby-config'

// FIXME: should probably use GraphQL for this
const { language: { fallback } } = siteMetadata

addLocaleData(localeData)

export default ComposedComponent => {
  class withIntl extends Component {
    static childContextTypes = {
      language: PropTypes.object
    }

    constructor (props) {
      super(props)
      const { pageContext: { locale, languages, originalPath } } = props

      this.state = {
        language: {
          locale,
          languages,
          originalPath
        }
      }
    }

    getChildContext () {
      const { language } = this.state
      return {
        language
      }
    }

    render () {
      const { language } = this.state
      const locale = language.locale || fallback
      let messages = require(`./locales/${locale}.js`) // eslint-disable-line
      try {
        const overrides = require(`../../custom/locales/${locale}.js`) // eslint-disable-line
        messages = { ...messages, ...overrides }
      } catch (e) {
        // expected if there are no overrides
      }
      return (
        <IntlProvider locale={locale} messages={messages}>
          <ComposedComponent {...this.props} />
        </IntlProvider>
      )
    }
  }
  return withIntl
}
