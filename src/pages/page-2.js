// npm
import React, { Fragment, Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'
import { graphql } from 'gatsby'

// self
import Layout from '../components/layout'
import GithubUser from '../components/github-user'
import Footer from '../components/footer'

const PER_PAGE = 24

const LANGUAGE_TYPE = 'repoLanguages'
// const LANGUAGE_TYPE = 'starLanguages'

class SecondPage extends Component {
  constructor (props) {
    super(props)

    this.allUsers = props.data.allDataJson.edges[0].node.users.map(x => ({
      ...x,
      languages:
        x[LANGUAGE_TYPE] &&
        x[LANGUAGE_TYPE].map(({ name, count }) => `${name} (${count})`).join(
          ', '
        )
    }))

    this.state = {
      filter: false,
      onlyAvailable: false,
      last: PER_PAGE
    }
    this.click = this.click.bind(this)
    this.clickMore = this.clickMore.bind(this)
    this.clickAvailable = this.clickAvailable.bind(this)
  }

  clickMore (ev) {
    this.setState({
      last: this.state.last + PER_PAGE
    })
  }

  clickAvailable (ev) {
    this.setState({ onlyAvailable: !this.state.onlyAvailable })
  }

  click (ev) {
    const filter = ev.target.dataset.key && ev.target.dataset.key
    this.setState({ last: PER_PAGE, filter })
  }

  render () {
    const filtering = x => {
      if (!this.state.filter) {
        return true
      }
      let ok = false
      if (!x[LANGUAGE_TYPE]) {
        return false
      }
      x[LANGUAGE_TYPE].forEach(y => {
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

    const availableLanguages = this.props.data.allDataJson.edges[0].node[
      LANGUAGE_TYPE
    ]

    const usersImp = this.allUsers.filter(filtering).filter(filtering2)

    const users = usersImp.slice(0, this.state.last)

    return (
      <Layout>
        <div className='container'>
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
                  className={`m-1 btn btn-sm btn-primary${
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
                <li key={x.name} className='list-inline-item'>
                  <button
                    className={`m-1 btn btn-sm btn-primary${
                      this.state.filter === x.name ? ' active' : ''
                    }`}
                    type='button'
                    data-key={x.name}
                    onClick={this.click}
                  >
                    {x.name}&nbsp;({x.count})
                  </button>
                </li>
              ))}
            </ul>
            <h3>
              {users.length} utilisateurs{' '}
              <small>sur {this.allUsers.length}</small>
            </h3>

            {users.length ? (
              <Fragment>
                <div className='row'>
                  {users.map(x => (
                    <div
                      key={x.databaseId}
                      className='col-sm-6 col-md-6 col-lg-4'
                    >
                      <GithubUser {...x} />
                    </div>
                  ))}
                </div>

                {usersImp.length > this.state.last && (
                  <button
                    onClick={this.clickMore}
                    className='mt-4 w-100 btn btn-info'
                    type='button'
                  >
                    Afficher plus de résultats
                  </button>
                )}
              </Fragment>
            ) : (
              <div className='col'>
                <p>Aucun résultat.</p>
              </div>
            )}
          </div>
        </div>
        <Footer>
          <p className='card-text'>Marvoulous</p>
        </Footer>
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
