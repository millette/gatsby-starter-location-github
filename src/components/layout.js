// npm
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from '../i18n'

// self
import Header from './header'
import './layout.scss'

const Layout = ({ header, container, children, data }, ctx) => {
  /*
  console.log('DATA1', typeof data)
  if (data) {
    console.log('DATA1-keys', Object.keys(data))
  }
  // FIXME: move this down into render?
  const fallback = (data && data.site && data.site.siteMetadata && data.site.siteMetadata.language && data.site.siteMetadata.language.fallback) || 'en'
  const locale = (ctx && ctx.language && ctx.language.locale) || fallback

  console.log('fallback:', fallback)
  console.log('locale:', locale)
  */
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              language {
                fallback
                en {
                  title
                  subtitle
                }
                fr {
                  title
                  subtitle
                }
              }
            }
          }
        }
      `}
      render={data => {
        /*
        console.log('DATA2', typeof data)
        if (data) {
          console.log('DATA2-keys', Object.keys(data))
        }
        */
        const locale =
          (ctx && ctx.language && ctx.language.locale) ||
          data.site.siteMetadata.language.fallback ||
          'en'

        return (
          <Fragment>
            <Helmet
              title={data.site.siteMetadata.language[locale].title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' }
              ]}
            />
            {header ? (
              <Header
                siteTitle={data.site.siteMetadata.language[locale].title}
                subTitle={data.site.siteMetadata.language[locale].subtitle}
              />
            ) : (
              <div className='container'>
                <h1 className='jumbotron-heading'>
                  <Link to='/'>
                    {data.site.siteMetadata.language[locale].title}
                  </Link>
                </h1>
              </div>
            )}
            <div className={container || ''}>{children}</div>
          </Fragment>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

Layout.contextTypes = {
  language: PropTypes.object
}

export default Layout
