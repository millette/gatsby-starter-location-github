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

      let messages
      let messages2

      try {
        messages = require(`./locales/${locale}.js`) // eslint-disable-line
      } catch (e) {
        console.error('EEE:', e)
        if (!messages) {
          messages = {}
        }
      }

      try {
        messages2 = require(`../../custom/locales/${locale}.js`) // eslint-disable-line
        /*
        console.log(Date.now())
        console.log('MESSAGES:', messages)
        console.log('MESSAGES2:', messages2)
        console.log('MESSAGES3:', m3)
        */
      } catch (e2) {
        console.error('EEE2:', e2)
        if (!messages2) {
          messages2 = {}
        }
      }
      const m3 = { ...messages, ...messages2 }
      return (
        <IntlProvider locale={locale} messages={m3}>
          <ComposedComponent {...this.props} />
        </IntlProvider>
      )
    }
  }
  return withIntl
}
