import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import GithubUser from '../components/github-user'

class SecondPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: false,
      onlyAvailable: false
    }
    this.click = this.click.bind(this)
    this.clickAvailable = this.clickAvailable.bind(this)
  }

  clickAvailable (ev) {
    this.setState({ onlyAvailable: !this.state.onlyAvailable })
  }

  click (ev) {
    const filter = ev.target.dataset.key && ev.target.dataset.key
    this.setState({ filter })
  }

  render () {
    const filtering = x => {
      if (!this.state.filter) {
        return true
      }
      let ok = false
      if (!x.repoLanguages) {
        return false
      }
      x.repoLanguages.forEach(y => {
        if (y.name === this.state.filter) {
          ok = true
        }
      })
      return ok
    }

    const filtering2 = x => {
      if (!this.state.onlyAvailable) {
        return true
      }
      return x.isHireable
    }

    const availableLanguages = this.props.data.allDataJson.edges[0].node
      .repoLanguages

    const users = this.props.data.allDataJson.edges[0].node.users
      .filter(filtering)
      .filter(filtering2)
      .map(x => ({
        ...x,
        languages:
          x.repoLanguages &&
          x.repoLanguages
            .map(({ name, count }) => `${name} (${count})`)
            .join(', ')
      }))

    return (
      <Layout>
        <h1>
          <FormattedMessage id='welcome2' />
        </h1>
        <ul>
          <li>
            <Link to='/'>
              <FormattedMessage id='goback' />
            </Link>
          </li>
          <li>
            <Link to='/' lng='fr'>
              francais, accueil
            </Link>
          </li>
          <li>
            <Link to='/' lng='en'>
              english, front
            </Link>
          </li>
        </ul>
        <div>
          <p>
            <button
              className='btn btn-secondary'
              type='button'
              onClick={this.clickAvailable}
            >
              Dispo? {this.state.onlyAvailable ? 'OUI' : 'Peu importe'}
            </button>
          </p>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <button
                style={{ margin: '0.25rem 0.125rem' }}
                className={`btn btn-sm btn-primary${
                  this.state.filter ? '' : ' active'
                }`}
                type='button'
                onClick={this.click}
                key='ALL'
              >
                Tous
              </button>
            </li>
            {availableLanguages.map(x => (
              <li className='list-inline-item'>
                <button
                  style={{ margin: '0.25rem 0.125rem' }}
                  className={`btn btn-sm btn-primary${
                    this.state.filter === x.name ? ' active' : ''
                  }`}
                  type='button'
                  data-key={x.name}
                  onClick={this.click}
                  key={x.name}
                >
                  {x.name}&nbsp;({x.count})
                </button>
              </li>
            ))}
          </ul>
          <h3>{users.length} utilisateurs</h3>
          <div className='row'>
            {users.slice(0, 24).map(x => (
              <div className='col-sm-6 col-md-6 col-lg-4'>
                <GithubUser key={x.databaseId} {...x} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default withIntl(SecondPage)

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          meta {
            name
            version
            processedAt
          }

          repoLanguages {
            name
            count
          }

          starLanguages {
            name
            count
          }

          users {
            starLanguages {
              name
              count
            }
            repoLanguages {
              name
              count
            }
            name
            login
            databaseId
            bio
            company
            email
            location
            createdAt
            starredRepositories {
              starredAt
              nameWithOwner
              primaryLanguage
            }
            repositoriesContributedTo {
              nameWithOwner
              forkCount
              primaryLanguage
              stargazersCount
              stargazers {
                starredAt
                createdAt
                login
                databaseId
                location
              }
            }
            repositoriesContributedToCount
            fetchedAt
            isHireable
            websiteUrl
          }
        }
      }
    }
  }
`
