// npm
import React, { Fragment } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css'

// Keep the following comment otherwise these classes are purged from the generated css:
// <span className='rbt clearfix open has-aux rbt-input-hint-container rbt-aux close rbt-close sr-only rbt-sr-status rbt-menu' />

const renderer = (option, props, index) => (
  <Fragment>
    {option.word} <small>({option.count})</small>
  </Fragment>
)

const Keywords = props => (
  <Typeahead
    inputProps={{ id: props.id }}
    clearButton
    selectHintOnEnter
    minLength={2}
    onChange={props.click}
    options={props.availableKeywords}
    labelKey='word'
    selected={props.keywordFilter}
    renderMenuItemChildren={renderer}
  />
)

export default Keywords
