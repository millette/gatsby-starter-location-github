// npm
import React from 'react'
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
            <div className='col text-left'>
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

            <div className='col text-right'>
              <ul className='card-text list-unstyled'>
                {versionUrl && <li>versionUrl is {versionUrl}</li>}

                {headUrl && <li>headUrl is {headUrl}</li>}

                {versionHash && <li>versionHash is {versionHash}</li>}

                {false && (
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
                )}

                <li>
                  <FormattedMessage
                    id='footer.buildTime'
                    values={{
                      buildTime: <FormattedRelative value={buildTime} />
                    }}
                  />
                </li>
                <li>
                  Sources:{' '}
                  <a target='_blank' rel='noopener noreferrer' href={repoUrl}>
                    {name}
                  </a>
                </li>

                <li>
                  Version: {version} / {versionTag}
                </li>

                <li>
                  AGPL-v3 2018 ©{' '}
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='http://robin.millette.info/'
                  >
                    Robin Millette
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)
export default Footer
