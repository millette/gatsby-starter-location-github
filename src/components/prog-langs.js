// npm
import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css'

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
