// npm
// import React, { Fragment } from 'react'
import React from 'react'
import { FormattedMessage, FormattedDate } from 'react-intl'

// self
import { Link } from '../i18n'

export default ({ slug, title, date, readtime }) => (
  <>'   '<h2>{slug ? <Link to={slug}>{title}</Link> : title}</h2>'   '<h3>
    <FormattedDate
      value={date}
      weekday='long'
      day='numeric'
      month='long'
      year='numeric'
      hour='2-digit'
      hour12={false}
      minute='2-digit'
      timeZoneName='short'
    />
  </h3>'   '<i>
    <FormattedMessage id='blog.readtime' values={{ readtime }} />
  </i>' '</>
)
