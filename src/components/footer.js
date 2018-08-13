// npm
import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FormattedMessage, FormattedRelative } from 'react-intl'

// self
import { Link } from '../i18n'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          buildTime
          siteMetadata {
            version {
              dev
              repoUrl
              versionUrl
              headUrl
              name
              headHash
              version
              versionTag
              versionHash
            }
          }
        }
      }
    `}
    render={({
      site: {
        buildTime,
        siteMetadata: {
          version: {
            repoUrl,
            versionUrl,
            headUrl,
            dev,
            name,
            headHash,
            version,
            versionHash,
            versionTag
          }
        }
      }
    }) => (
      <footer className='container-fluid card mt-5'>
        <div className='container'>
          <div className='card-body row'>
            <div className='col-md-6 col-sm-12 text-left'>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/'>
                    <FormattedMessage id='directory.title' />
                  </Link>
                </li>

                <li>
                  <Link to='/about'>
                    <FormattedMessage id='about.title' />
                  </Link>
                </li>

                <li>
                  <Link to='/contact'>
                    <FormattedMessage id='contact.title' />
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-6 col-sm-12'>
              <dl className='card-text row'>
                <dt className='col-4 text-right'>Génération</dt>
                <dd className='text-truncate col-8 text-right'>
                  <FormattedMessage
                    id='footer.buildTime'
                    values={{
                      buildTime: <FormattedRelative value={buildTime} />
                    }}
                  />
                </dd>

                <dt className='col-4 text-right'>Sources</dt>
                <dd className='col-8 text-truncate text-right'>
                  <a target='_blank' rel='noopener noreferrer' href={repoUrl}>
                    {name}
                  </a>
                </dd>

                {version && (
                  <Fragment>
                    <dt className='col-4 text-right'>version</dt>
                    <dd className='col-8 text-truncate text-right'>
                      {`${version}${dev ? ' / dev' : ''}`}
                    </dd>
                  </Fragment>
                )}

                {versionUrl &&
                  !dev && (
                  <Fragment>
                    <dt className='col-4 text-right'>versionUrl</dt>
                    <dd className='col-8 text-truncate text-right'>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={versionUrl}
                      >
                        {versionHash}
                      </a>
                    </dd>
                  </Fragment>
                )}

                {headUrl &&
                  dev && (
                  <Fragment>
                    <dt className='col-4 text-right'>headUrl</dt>
                    <dd className='col-8 text-truncate text-right'>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={headUrl}
                      >
                        {headHash}
                      </a>
                    </dd>
                  </Fragment>
                )}

                <dt className='col-4 text-right'>Licence</dt>
                <dd className='col-8 text-truncate text-right'>
                  AGPL-v3 2018 ©{' '}
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='http://robin.millette.info/'
                  >
                    Robin Millette
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)
export default Footer
