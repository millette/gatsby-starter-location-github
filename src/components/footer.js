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
            <div className='col-6 text-left'>
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

            <div className='col-6 text-right666'>
              <dl className='card-text row'>
                {versionUrl && (
                  <Fragment>
                    <dt className='col-4'>versionUrl</dt>
                    <dd className='col-8 text-truncate'>{versionUrl}</dd>
                  </Fragment>
                )}

                {headUrl && (
                  <Fragment>
                    <dt className='col-4'>headUrl</dt>
                    <dd className='col-8 text-truncate'>{headUrl}</dd>
                  </Fragment>
                )}

                {versionHash && (
                  <Fragment>
                    <dt className='col-4'>versionHash</dt>
                    <dd className='col-8 text-truncate'>{versionHash}</dd>
                  </Fragment>
                )}

                <dt className='col-4'>Génération</dt>
                <dd className='text-truncate col-8'>
                  <FormattedMessage
                    id='footer.buildTime'
                    values={{
                      buildTime: <FormattedRelative value={buildTime} />
                    }}
                  />
                </dd>

                <dt className='col-4'>Sources</dt>
                <dd className='col-8 text-truncate'>
                  <a target='_blank' rel='noopener noreferrer' href={repoUrl}>
                    {name}
                  </a>
                </dd>

                {versionHash && (
                  <Fragment>
                    <dt className='col-4'>versionHash</dt>
                    <dd className='col-8 text-truncate'>{versionHash}</dd>
                  </Fragment>
                )}

                {version && (
                  <Fragment>
                    <dt className='col-4'>version</dt>
                    <dd className='col-8 text-truncate'>
                      {version} / {versionTag}
                    </dd>
                  </Fragment>
                )}

                <dt className='col-4'>Licence</dt>
                <dd className='col-8 text-truncate'>
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

              {false && (
                <ul className='card-text list-unstyled'>
                  <li>
                    Version: {version}{' '}
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={`https://github.com/millette/gatsby-starter-location-github/tree/v${headHash}`}
                    >
                      {headHash.slice(0, 10)}
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)
export default Footer
