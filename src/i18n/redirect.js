// npm
import React, { PureComponent } from 'react'
import { withPrefix } from 'gatsby'
import browserLang from 'browser-lang'

// self
import { languages } from './index'
// FIXME: should probably use GraphQL instead
// import { siteMetadata } from '../../gatsby-config'

// const { language: { fallback } } = siteMetadata
const fallback = 'en'

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
    /*
    console.error('NEWURL:', newUrl)
    const newUrl2 = withPrefix(`/${pathname}`)
    console.error('NEWURL2:', newUrl2)
    */
    window.localStorage.setItem('language', detected)
    window.location.replace(newUrl)
  }

  render () {
    return <div />
  }
}

export default Redirect
