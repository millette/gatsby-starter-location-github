// npm

import React from 'react'
import Helmet from 'react-helmet'

// self
import { getPageTitleID } from '../utils'
import { baseUrl, location } from '../../custom/config'

const url = baseUrl || 'http://dev.rollodeqc.com'

const Social = props => {
  let { messages, pageContext } = props
  if (!messages) {
    messages = {}
  }

  const pageTitleStr = getPageTitleID(pageContext)
  const pageTitleID = pageTitleStr && `${pageTitleStr}.title`
  const pageTitle =
    pageTitleID && messages[pageTitleID] ? messages[pageTitleID] : location
  const currentLanguage = (pageContext && pageContext.locale) || 'en'

  return (
    <Helmet>
      <title>{`${messages.title} — ${pageTitle}`}</title>
      <meta name='description' content={messages.subtitle} />
      <meta name='image' content='http://www.rollodeqc.com/images/logo.png' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@RoLLodeQc' />
      <meta name='twitter:title' content={messages.title} />
      <meta name='twitter:description' content={messages.subtitle} />
      <meta name='twitter:creator' content='@RoLLodeQc' />
      <meta
        name='twitter:image:src'
        content='http://www.rollodeqc.com/images/logo.png'
      />

      <meta
        itemprop='name'
        content={messages.title}
        itemscope
        itemtype='http://schema.org/WebSite'
      />
      <meta
        itemprop='description'
        content={messages.subtitle}
        itemscope
        itemtype='http://schema.org/WebSite'
      />
      <meta
        itemprop='image'
        content='http://www.rollodeqc.com/images/logo.png'
        itemscope
        itemtype='http://schema.org/WebSite'
      />
      <meta
        itemprop='url'
        content={`${url}/${currentLanguage}/`}
        itemscope
        itemtype='http://schema.org/WebSite'
      />

      <meta name='og:title' content={messages.title} />
      <meta name='og:type' content='website' />
      <meta name='og:url' content={`${url}/${currentLanguage}/`} />
      <meta
        name='og:image'
        content='http://www.rollodeqc.com/images/logo.png'
      />
      <meta name='og:description' content={messages.subtitle} />
      <meta name='og:site_name' content={messages.title} />
      <meta name='og:locale' content={currentLanguage} />
    </Helmet>
  )
}

export default Social
