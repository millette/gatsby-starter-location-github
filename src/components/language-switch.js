// npm
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withPrefix } from 'gatsby'

const LanguageSwitch = ({ showLanguages, toggleLanguages, pageContext }) => {
  const languageSwitch =
    pageContext &&
    pageContext.languages &&
    pageContext.languages
      .filter(({ value }) => value !== pageContext.locale)
      .map(({ text, value }) => (
        <a
          className='text-center nav-link dropdown-item'
          key={value}
          href={`${withPrefix(`${value}${pageContext.originalPath}`)}`}
        >
          {text}
        </a>
      ))

  if (!languageSwitch) {
    return false
  }

  return (
    <ul className='navbar-nav'>
      <li className='nav-item dropdown'>
        <button
          onClick={toggleLanguages}
          type='button'
          className='btn btn-primary nav-link dropdown-toggle'
          id='navbarDropdown'
          aria-haspopup='true'
          aria-expanded={showLanguages ? 'true' : 'false'}
        >
          <FormattedMessage id='nav.switchLanguage' />
        </button>
        <div
          className={`bg-primary dropdown-menu${showLanguages ? ' show' : ''}`}
          aria-labelledby='navbarDropdown'
        >
          {languageSwitch}
        </div>
      </li>
    </ul>
  )
}

export default LanguageSwitch
