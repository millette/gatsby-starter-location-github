// npm
import React from 'react'
// import { FormattedMessage } from 'react-intl'
import { withPrefix } from 'gatsby'

// self
// https://openclipart.org/detail/77347/globeblue
import switchLanguageLogo from '../assets/images/globe-blue.svg'

const LanguageSwitch = ({ showLanguages, toggleLanguages, pageContext }) => {
  const lngs =
    pageContext &&
    pageContext.languages &&
    pageContext.languages.filter(({ value }) => value !== pageContext.locale)

  if (!lngs || !lngs.length) {
    return false
  }

  const languageSwitch = lngs.map(({ text, value }) => (
    <a
      className='dropdown-item'
      key={value}
      href={`${withPrefix(`${value}${pageContext.originalPath}`)}`}
    >
      {text}
    </a>
  ))

  const languagesString = `${lngs.map(x => x.text).join(', ')} ?`

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
