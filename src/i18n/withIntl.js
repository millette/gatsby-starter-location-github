import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'
import { localeData } from './locales'
import { siteMetadata } from '../../gatsby-config'

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
      const messages = require(`./locales/${locale}.js`) // eslint-disable-line

      return (
        <IntlProvider locale={locale} messages={messages}>
          <ComposedComponent {...this.props} />
        </IntlProvider>
      )
    }
  }
  return withIntl
}
