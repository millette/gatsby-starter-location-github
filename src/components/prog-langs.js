// npm
import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css'

// Keep the following comment otherwise these classes are purged from the generated css:
// <span className='badge badge-primary badge-pill rbt clearfix open has-aux rbt-input-hint-container rbt-aux close rbt-close sr-only rbt-sr-status rbt-menu' />

const renderer = (allLanguageColors, option, props, index) => (
  <button
    className='badge badge-primary badge-pill'
    style={
      allLanguageColors[option.name]
        ? {
          background: allLanguageColors[option.name].bg,
          color: allLanguageColors[option.name].fg
        }
        : { background: '#fff', color: '#000' }
    }
  >
    {option.name} <small>({option.count})</small>
  </button>
)

const ProgLanguages = props => (
  <Typeahead
    inputProps={{ id: props.id }}
    clearButton
    selectHintOnEnter
    onChange={props.click}
    options={props.availableLanguages}
    labelKey='name'
    selected={props.languageFilter}
    renderMenuItemChildren={renderer.bind(null, props.allLanguageColors)}
  />
)

export default ProgLanguages
