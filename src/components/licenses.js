// npm
import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css'

// Keep the following comment otherwise these classes are purged from the generated css:
// <span className='rbt clearfix open has-aux rbt-input-hint-container rbt-aux close rbt-close sr-only rbt-sr-status rbt-menu' />

const Licenses = props => (
  <Typeahead
    inputProps={{ id: props.id }}
    clearButton
    selectHintOnEnter
    onChange={props.click}
    options={props.availableLicenses}
    labelKey='license'
    selected={props.licenseFilter}
  />
)

export default Licenses
