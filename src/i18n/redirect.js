import React, { PureComponent } from 'react'
import { withPrefix } from 'gatsby-link'
import browserLang from 'browser-lang'
import { languages } from './index'
import { siteMetadata } from '../../gatsby-config'

const { language: { fallback } } = siteMetadata

class Redirect extends PureComponent {
  constructor (props) {
    super(props)

    const langKeys = languages.map(language => language.value)
    const { pathname } = props.location

    // Skip build, Browsers only
    if (typeof window === 'undefined') {
      return
    }
    const detected =
      window.localStorage.getItem('language') ||
      browserLang({
        languages: langKeys,
        fallback
      })

    const newUrl = withPrefix(`/${detected}${pathname}`)
    window.localStorage.setItem('language', detected)
    window.location.replace(newUrl)
  }

  render () {
    return <div />
  }
}

export default Redirect