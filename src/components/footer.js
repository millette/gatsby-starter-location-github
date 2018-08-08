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
        }
      }
    `}
    render={({ site: { buildTime } }) => (
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
              <p className='card-text'>
                <ul className='list-unstyled'>
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
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://github.com/millette/gatsby-starter-location-github'
                    >
                      gatsby-starter-location-github
                    </a>
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
              </p>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)
export default Footer
