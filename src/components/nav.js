// npm
import React, { Component } from 'react'
import { Link } from '../i18n'
import { withPrefix, push } from 'gatsby'
// import { withPrefix } from 'gatsby'

// self
import tinylogo from '../assets/images/tinier-rollo-logo.png'

// const { push } = Link

class Nav extends Component {
  constructor (props) {
    super(props)

    this.switchLanguage = this.switchLanguage.bind(this)
  }

  switchLanguage (ev) {
    const v2 = withPrefix(ev.target.value)
    // FIXME: poor man's language switch, why won't gatsby's push() work?
    // window.location = v2
    push(v2)
  }

  render () {
    const { pageContext } = this.props
    const languageSwitch =
      pageContext &&
      pageContext.languages &&
      pageContext.languages.map(({ text, value }) => (
        <option
          key={value}
          selected={value === pageContext.locale}
          value={`/${value}${pageContext.originalPath}`}
        >
          {text}
        </option>
      ))

    console.log('NAV pageContext:', pageContext)
    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={tinylogo} alt='tiny logo RoLLodeQc' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarText'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/about/'>
                  About <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact/'>
                  Contact
                </Link>
              </li>
            </ul>
            <form className='form-inline'>
              <select
                onChange={this.switchLanguage}
                className='custom-select custom-select-sm'
              >
                {languageSwitch}
              </select>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
