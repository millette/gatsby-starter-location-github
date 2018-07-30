// npm
import React, { Fragment, Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'
import { graphql } from 'gatsby'
import { deburr } from 'lodash-es'

// self
import Layout from '../components/layout'
import GithubUser from '../components/github-user'
import Footer from '../components/footer'

// const LANGUAGE_TYPE = 'starLanguages'
const LANGUAGE_TYPE = 'repoLanguages'
const PER_PAGE = 12

// see also:
// https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar
// https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-overflow-style
// https://github.com/vitch/jScrollPane (find a React equivalent)
const LANGUAGE_BAR = {
  whiteSpace: 'nowrap',
  paddingBottom: '1rem',
  overflowX: 'scroll'
}

const normalize = loc => deburr((loc || '').trim()).toLowerCase()

const sortFns = {
  joined: (a, b) => {
    const na = a.createdAt
    const nb = b.createdAt
    if (na > nb) {
      return 1
    }
    if (na < nb) {
      return -1
    }
    return 0
  },
  name: (a, b) => (a.name || a.login).localeCompare(b.name || b.login),
  nRepos: (a, b) => {
    const na = a.repositoriesContributedToCount
    const nb = b.repositoriesContributedToCount
    if (na > nb) {
      return 1
    }
    if (na < nb) {
      return -1
    }
    return 0
  }
}

class SecondPage extends Component {
  constructor (props) {
    super(props)

    this.allLanguageColors = {}
    props.data.allLanguageColorsJson.edges
      .map(({ node }) => node)
      .forEach(({ name, fg, bg }) => {
        this.allLanguageColors[name] = { bg, fg }
      })

    this.allUsers = props.data.allDataJson.edges[0].node.users
      .map(x => ({
        ...x,
        languages:
          x[LANGUAGE_TYPE] &&
          x[LANGUAGE_TYPE].map(({ name, count }) => `${name} (${count})`).join(
            ', '
          )
      }))
      .map(x => ({
        ...x,
        deburredName: `${normalize(x.name)} ${normalize(x.login)}`,
        deburredLocation: normalize(x.location)
      }))

    this.state = {
      filter: false,
      onlyAvailable: false,
      last: PER_PAGE,
      location: '',
      deburredLocation: '',
      name: '',
      deburredName: '',
      sort: 'joined',
      reverse: true
    }
    this.click = this.click.bind(this)
    this.clickMore = this.clickMore.bind(this)
    this.clickAvailable = this.clickAvailable.bind(this)
    this.locationFilter = this.locationFilter.bind(this)
    this.nameFilter = this.nameFilter.bind(this)
    this.filtering = this.filtering.bind(this)
    this.filtering2 = this.filtering2.bind(this)
    this.filtering3 = this.filtering3.bind(this)
    this.filtering4 = this.filtering4.bind(this)
    this.changeOrder = this.changeOrder.bind(this)
    this.changeOrder666 = this.changeOrder666.bind(this)
  }

  changeOrder ({ target: { value } }) {
    console.log('changeOrder', value)
    if (value === this.state.sort) {
      return
    }
    this.setState({
      sort: value,
      reverse: value === 'nRepos' || value === 'joined'
    })
  }

  /*
  changeOrder666 () {
    console.log('changeOrder666')
    this.setState({ reverse: !this.state.reverse })
  }
  */

  changeOrder666 ({ target: { checked } }) {
    console.log('changeOrder666', checked)
    this.setState({ reverse: checked })
  }

  nameFilter ({ target: { value } }) {
    this.setState({
      name: value,
      deburredName: normalize(value)
    })
  }

  locationFilter ({ target: { value } }) {
    this.setState({
      location: value,
      deburredLocation: normalize(value)
    })
  }

  clickMore () {
    this.setState({
      last: this.state.last + PER_PAGE
    })
  }

  clickAvailable () {
    this.setState({ onlyAvailable: !this.state.onlyAvailable })
  }

  click ({ target: { dataset } }) {
    if (!this.state.filter && !dataset.key) {
      return
    }
    this.setState({
      last: PER_PAGE,
      filter: dataset && dataset.key !== this.state.filter && dataset.key
    })
  }

  filtering (x) {
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

  filtering2 (x) {
    if (!this.state.onlyAvailable) {
      return true
    }
    return x.isHireable
  }

  filtering3 (x) {
    if (!this.state.deburredLocation) {
      return true
    }
    return x.deburredLocation.indexOf(this.state.deburredLocation) !== -1
  }

  filtering4 (x) {
    if (!this.state.deburredName) {
      return true
    }
    return x.deburredName.indexOf(this.state.deburredName) !== -1
  }

  render () {
    const availableLanguages = this.props.data.allDataJson.edges[0].node[
      LANGUAGE_TYPE
    ]

    const usersImp = this.allUsers
      .filter(this.filtering)
      .filter(this.filtering2)
      .filter(this.filtering3)
      .filter(this.filtering4)
      .sort(sortFns[this.state.sort])

    const users = this.state.reverse
      ? usersImp.reverse().slice(0, this.state.last)
      : usersImp.slice(0, this.state.last)

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
            <label>
              Tri:{' '}
              <select onChange={this.changeOrder}>
                <option value='joined'>Date d’inscription</option>
                <option value='name'>Nom (ou login)</option>
                <option value='nRepos'>Nombre de dépots</option>
              </select>
            </label>{' '}
            <label>
              Inverser l’ordre{' '}
              <input
                type='checkbox'
                checked={this.state.reverse}
                onChange={this.changeOrder666}
              />
            </label>
            <ul className='list-inline' style={LANGUAGE_BAR}>
              <li className='list-inline-item'>
                <button
                  className={`btn badge badge-primary${
                    this.state.filter ? ' badge-pill' : ' active'
                  }`}
                  type='button'
                  onClick={this.click}
                >
                  Tous
                </button>
              </li>
              {availableLanguages.map(x => (
                <li key={x.name} className='list-inline-item'>
                  <button
                    style={
                      this.allLanguageColors[x.name]
                        ? {
                          background: this.allLanguageColors[x.name].bg,
                          color: this.allLanguageColors[x.name].fg
                        }
                        : { background: '#fff', color: '#000' }
                    }
                    className={`btn badge${
                      this.state.filter === x.name ? ' active' : ' badge-pill'
                    }`}
                    type='button'
                    data-key={x.name}
                    onClick={this.click}
                  >
                    {/* {x.name}&nbsp;({x.count}) */}
                    {x.name}
                  </button>
                </li>
              ))}
            </ul>
            <label>
              Nom:{' '}
              <input
                type='text'
                value={this.state.name}
                onChange={this.nameFilter}
              />
            </label>
            <br />
            <label>
              Lieu:{' '}
              <input
                type='text'
                value={this.state.location}
                onChange={this.locationFilter}
              />
            </label>
            {this.state.deburredLocation}
            <h3>
              {users.length} utilisateurs affichés{' '}
              <small>
                sur {usersImp.length} sélectionnés
                {this.allUsers.length !== usersImp.length && (
                  <span>, {this.allUsers.length} en tout</span>
                )}
              </small>
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
            repositoriesContributedToCount
            fetchedAt
            isHireable
            websiteUrl
          }
        }
      }
    }
    allLanguageColorsJson {
      edges {
        node {
          name
          fg
          bg
        }
      }
    }
  }
`
