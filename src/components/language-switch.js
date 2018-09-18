// npm
import React from 'react'
// import { FormattedMessage } from 'react-intl'
import { withPrefix } from 'gatsby'

// self
// https://openclipart.org/detail/77347/globeblue
import switchLanguageLogo from '../assets/images/globe-blue.svg'

const LanguageSwitch = ({
  languageSets,
  showLanguages,
  toggleLanguages,
  pageContext
}) => {
  const lngs =
    pageContext &&
    pageContext.languages &&
    pageContext.languages.filter(({ value }) => value !== pageContext.locale)

  console.log('languageSets:', languageSets)
  console.log('lngs:', lngs)

  /*
  if (!lngs || !lngs.length || !languageSets) {
    return null // <span>None</span>
  }
  */

  // const languageLink = (languageSets && (languageSets.length > 1))
  const languageLink = languageSets
    ? value => {
      const otherA = languageSets.find(({ language }) => language === value)
      const other = otherA.slug
      return `${withPrefix(`${value}${other}`)}`
    }
    : value => {
      return `${withPrefix(`${value}${pageContext.originalPath}`)}`
    }

  // href={`${withPrefix(`${value}${pageContext.originalPath}`)}`}
  const languageSwitch =
    lngs && lngs.length && languageSets && languageSets.length ? (
      lngs.map(({ text, value }) => (
        <a className='dropdown-item' key={value} href={languageLink(value)}>
          {text}
        </a>
      ))
    ) : (
      <span>None</span>
    )

  const languagesString =
    lngs && lngs.length ? `${lngs.map(x => x.text).join(', ')} ?` : 'None'

  return (
    <ul className='navbar-nav'>
      <li className='nav-item dropdown'>
        <button
          title={languagesString}
          onClick={toggleLanguages}
          type='button'
          className='btn nav-link dropdown-toggle'
          id='navbarDropdown'
          aria-haspopup='true'
          aria-expanded={showLanguages ? 'true' : 'false'}
        >
          <img
            style={{ height: '32px' }}
            src={switchLanguageLogo}
            alt='Switch language'
          />
        </button>
        <div
          className={`dropdown-menu${showLanguages ? ' show' : ''}`}
          aria-labelledby='navbarDropdown'
        >
          {languageSwitch}
        </div>
      </li>
    </ul>
  )
}

export default LanguageSwitch
