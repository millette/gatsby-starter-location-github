// npm
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { IntlProvider, injectIntl, addLocaleData } from 'react-intl'
import { IntlProvider, addLocaleData } from 'react-intl'

// self
import { localeData } from './locales'
// FIXME: should probably use GraphQL instead
import { siteMetadata } from '../../gatsby-config'

// FIXME: should probably use GraphQL for this
const { language: { fallback } } = siteMetadata

addLocaleData(localeData)

// console.log('LOCALEDATA:', localeData)

export default ComposedComponent => {
  class withIntl extends Component {
    static childContextTypes = {
      // messages: PropTypes.object,
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

    getMessages (locale) {
      // const locale = this.state.language.locale || fallback
      // FIXME: use GraphQL instead?
      const messages = require(`./locales/${locale}.js`) // eslint-disable-line
      try {
        // FIXME: use GraphQL instead?
        const overrides = require(`../../custom/locales/${locale}.js`) // eslint-disable-line
        return { ...messages, ...overrides }
      } catch (e) {
        // expected if there are no overrides
      }
      return messages
    }

    getChildContext () {
      const { language } = this.state
      // const locale = language.locale || fallback
      // const messages = this.getMessages(locale)
      return {
        // messages,
        language
      }
    }

    render () {
      const { language } = this.state
      const locale = language.locale || fallback
      const messages = this.getMessages(locale)
      /*
      // FIXME: use GraphQL instead?
      let messages = require(`./locales/${locale}.js`) // eslint-disable-line
      try {
        // FIXME: use GraphQL instead?
        const overrides = require(`../../custom/locales/${locale}.js`) // eslint-disable-line
        messages = { ...messages, ...overrides }
      } catch (e) {
        // expected if there are no overrides
      }
      */
      return (
        <IntlProvider locale={locale} messages={messages}>
          <ComposedComponent {...this.props} messages={messages} />
        </IntlProvider>
      )
    }
  }
  return withIntl
}
