// npm
import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

/*
  // STUFF

  <ul className='list-inline'>
    {props.licenses.map(({ license, count }) => (
      <li
        key={license}
        className='list-inline-item badge badge-info'
      >
        {license} ({count})
      </li>
    ))}
  </ul>
*/

const ListKeywords = props => {
  // console.log('ListKeywords PROPS:', props)
  if (!props.keywords || !props.keywords.length) {
    return false
  }

  let kw = []

  props.keywords.forEach(a => {
    if (a.language !== props.lang) {
      return
    }
    kw = a.keywords.slice(0, 6)
  })

  // <pre>{JSON.stringify(kw, null, ' ')}</pre>

  return (
    <Fragment>
      <dt className='col-6 col-xl-5 text-right'>
        <FormattedMessage id='directory.keywords' />
      </dt>
      <dd className='col-6 col-xl-7'>
        <ul className='list-inline'>
          {kw.map(({ word, count }) => (
            <li key={word} className='list-inline-item badge badge-secondary'>
              {word} ({count})
            </li>
          ))}
        </ul>
      </dd>
    </Fragment>
  )
}

export default ListKeywords
