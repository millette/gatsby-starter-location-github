// npm
import React, { Fragment, Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { graphql } from 'gatsby'
import deburr from 'lodash.deburr'
import { parse, stringify } from 'query-string'

// self
import { Radios, Layout, GithubUser, Footer } from '../components'
import { withIntl } from '../i18n'

let config = { location: 'UNDEFINED' }

try {
  config = { ...config, ...require('../../custom/config') }
} catch (e) {
  // expected if there is no custom config
}

const PER_PAGE = 12

const BUTTONCOLORS = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info'
]

// see also:
// https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar
// https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-overflow-style
// https://github.com/vitch/jScrollPane (find a React equivalent)
const LANGUAGE_BAR = {
  textAlign: 'justify',
  overflowY: 'scroll',
  maxHeight: '4rem',
  marginBottom: '1.25rem'
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
  contribs: (a, b) => {
    const na = a.sparks && a.sparks.sum2
    const nb = b.sparks && b.sparks.sum2
    if (na > nb) {
      return 1
    }
    if (na < nb) {
      return -1
    }
    return 0
  },
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

const maybeMap = {
  available: 'maybeFilterAvailable',
  minDepots: 'maybeFilterMinDepots',
  minContribs: 'maybeFilterMinContribs',
  web: 'maybeFilterWeb',
  email: 'maybeFilterEmail',
  company: 'maybeFilterCompany'
}

const maybeMapFns = {
  available: {
    dontCare: () => true,
    yes: x => x.isHireable,
    no: x => !x.isHireable
  },
  minDepots: {
    dontCare: () => true,
    yes: x => x.repositoriesContributedToCount,
    no: x => !x.repositoriesContributedToCount
  },
  minContribs: {
    dontCare: () => true,
    yes: x => x.sparks.sum2,
    no: x => !x.sparks.sum2
  },
  web: {
    dontCare: () => true,
    yes: x => x.websiteUrl,
    no: x => !x.websiteUrl
  },
  email: {
    dontCare: () => true,
    yes: x => x.email,
    no: x => !x.email
  },
  company: {
    dontCare: () => true,
    yes: x => x.company,
    no: x => !x.company
  }
}

// FIXME: should take ALL filters, ordering and such in consideration
const booya = obj => {
  if (typeof window === 'undefined') {
    return
  }
  const xx = {
    ...queryString(),
    ...obj
  }

  Object.keys(xx).forEach(k => {
    switch (typeof xx[k]) {
      case 'undefined':
        delete xx[k]
        break

      case 'null':
      case 'string':
        if (!xx[k]) {
          xx[k] = 'yes'
        } else {
          xx[k] = xx[k].toLowerCase()
        }
        if (xx[k] === 'dontcare') {
          delete xx[k]
        } else if (xx[k] === 'yes') {
          xx[k] = null
        }
        break

      default:
        throw new Error('Oh my!!')
    }
  })
  const qsStr = stringify(xx)
  window.history.pushState(
    xx,
    null,
    qsStr ? `?${qsStr}` : window.location.pathname // this.props.location.pathname
  )
}

const queryString = () => {
  if (typeof window === 'undefined') {
    return {}
  }
  const qs = parse(window.location.search)
  let r

  for (r in qs) {
    if (qs[r] !== 'no') {
      qs[r] = 'yes'
    }
  }
  return qs
}

const elDoer = (obj, state, props) => {
  console.log('EL-STATE:', state)
  console.log('EL-PROPS:', props)
  console.log('EL-OBJ:', obj)

  // FIXME: booya should handle all cases, not just maybeFilters
  if (!obj.sort) {
    booya(obj)
  }
  return obj
}

class FrontPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      maybeFilterAvailable: 'dontCare',
      maybeFilterMinDepots: 'dontCare',
      maybeFilterMinContribs: 'dontCare',
      maybeFilterWeb: 'dontCare',
      maybeFilterEmail: 'dontCare',
      maybeFilterCompany: 'dontCare',
      languageFilter: false,
      last: PER_PAGE,
      location: '',
      deburredLocation: '',
      name: '',
      deburredName: '',
      sort: 'joined',
      reverse: true,
      ...queryString()
    }

    const userSparks = {}
    props.data.allSparksJson.edges
      .map(({ node }) => node)
      .forEach(({ login, output, sum2, lastContribDate }) => {
        userSparks[login] = {
          output: output.reverse(),
          sum2,
          lastContribDate
        }
      })

    this.allLanguageColors = {}
    props.data.allLanguageColorsJson.edges
      .map(({ node }) => node)
      .forEach(({ name, fg, bg }) => {
        this.allLanguageColors[name] = { bg, fg }
      })

    this.allUsers = props.data.allDataJson.edges[0].node.users
      // FIXME: spam detection
      // If a user has a digit in his location and a website
      // but no repos starred or contributed to,
      // it's probably a spammer.
      .filter(
        x =>
          !x.location.match(/[0-9]/) ||
          !x.websiteUrl ||
          x.starredRepositoriesCount ||
          x.repositoriesContributedToCount
      )
      .map(x => ({
        ...x,
        sparks: userSparks[x.login],
        languages:
          x.repoLanguages &&
          x.repoLanguages.map(({ name, count }) => {
            const ret = { name, count }
            if (this.allLanguageColors[name]) {
              const { bg, fg } = this.allLanguageColors[name]
              ret.style = { background: bg, color: fg }
            } else {
              ret.style = { background: '#fff', color: '#000' }
            }
            return ret
          })
      }))
      .map(x => ({
        ...x,
        deburredName: `${normalize(x.name)} ${normalize(x.login)}`,
        deburredLocation: normalize(x.location)
      }))

    this.click = this.click.bind(this)
    this.clickMore = this.clickMore.bind(this)
    this.locationFilter = this.locationFilter.bind(this)
    this.nameFilter = this.nameFilter.bind(this)
    this.languageFiltering = this.languageFiltering.bind(this)
    this.locationFiltering = this.locationFiltering.bind(this)
    this.nameFiltering = this.nameFiltering.bind(this)
    this.changeOrder = this.changeOrder.bind(this)
    this.changeOrderReverse = this.changeOrderReverse.bind(this)
  }

  componentDidMount (prevProps, prevState, snapshot) {
    this.setState({ ping: true })
  }

  radioChange (x, value) {
    const obj = {}
    obj[maybeMap[x]] = value

    // booya(obj)
    // this.setState(obj)
    this.setState(elDoer.bind(null, obj))
  }

  changeOrder ({ target: { value } }) {
    if (value === this.state.sort) {
      return
    }
    console.log('CHANGE-ORDER')

    const obj = {
      sort: value,
      reverse: value === 'nRepos' || value === 'joined' || value === 'contribs'
    }

    this.setState(elDoer.bind(null, obj))
  }

  changeOrderReverse ({ target: { checked } }) {
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

  click ({ target: { dataset } }) {
    if (!this.state.languageFilter && !dataset.key) {
      return
    }
    this.setState({
      last: PER_PAGE,
      languageFilter:
        dataset && dataset.key !== this.state.languageFilter && dataset.key
    })
  }

  languageFiltering (x) {
    if (!this.state.languageFilter) {
      return true
    }
    let ok = false
    if (!x.repoLanguages) {
      return false
    }
    x.repoLanguages.forEach(y => {
      if (y.name === this.state.languageFilter) {
        ok = true
      }
    })
    return ok
  }

  locationFiltering (x) {
    if (!this.state.deburredLocation) {
      return true
    }
    return x.deburredLocation.indexOf(this.state.deburredLocation) !== -1
  }

  nameFiltering (x) {
    if (!this.state.deburredName) {
      return true
    }
    return x.deburredName.indexOf(this.state.deburredName) !== -1
  }

  render () {
    const availableLanguages = this.props.data.allDataJson.edges[0].node
      .repoLanguages

    const usersImp = this.allUsers
      .filter(this.languageFiltering)
      .filter(this.locationFiltering)
      .filter(this.nameFiltering)
      .filter(maybeMapFns.available[this.state[maybeMap.available]])
      .filter(maybeMapFns.minContribs[this.state[maybeMap.minContribs]])
      .filter(maybeMapFns.minDepots[this.state[maybeMap.minDepots]])
      .filter(maybeMapFns.company[this.state[maybeMap.company]])
      .filter(maybeMapFns.web[this.state[maybeMap.web]])
      .filter(maybeMapFns.email[this.state[maybeMap.email]])
      .sort(sortFns[this.state.sort])

    const users = this.state.reverse
      ? usersImp.reverse().slice(0, this.state.last)
      : usersImp.slice(0, this.state.last)

    const AllRadios = ({ radios }) => (
      <div className='row'>
        {radios.map((key, i) => (
          <div key={key} className='col-sm-6 col-md-4 col-xl-2'>
            <Radios
              color={BUTTONCOLORS[i % 6]}
              active={this.state[maybeMap[key]]}
              change={this.radioChange.bind(this, key)}
              title={<FormattedMessage id={`radios.${key}`} />}
            />
          </div>
        ))}
      </div>
    )

    return (
      <Layout header messages={this.props.messages}>
        <div className='container'>
          <div>
            {false && (
              <p>
                <button
                  className='btn btn-secondary'
                  type='button'
                  onClick={this.clickAvailable}
                >
                  <FormattedMessage
                    id={
                      this.state.onlyAvailable
                        ? 'index.available.on'
                        : 'index.available.off'
                    }
                  />
                </button>
              </p>
            )}
            <AllRadios radios={Object.keys(maybeMap)} />
            <label>
              <FormattedMessage id='index.order' />:{' '}
              <select onChange={this.changeOrder}>
                <FormattedMessage id='index.order.joined'>
                  {txt => <option value='joined'>{txt}</option>}
                </FormattedMessage>
                <FormattedMessage id='index.order.contribs'>
                  {txt => <option value='contribs'>{txt}</option>}
                </FormattedMessage>
                <FormattedMessage id='index.order.name'>
                  {txt => <option value='name'>{txt}</option>}
                </FormattedMessage>
                <FormattedMessage id='index.order.nRepos'>
                  {txt => <option value='nRepos'>{txt}</option>}
                </FormattedMessage>
              </select>
            </label>{' '}
            <label>
              <FormattedMessage id='index.order.reverse' />{' '}
              <input
                type='checkbox'
                checked={this.state.reverse}
                onChange={this.changeOrderReverse}
              />
            </label>
            <ul className='list-inline' style={LANGUAGE_BAR}>
              <li className='list-inline-item'>
                <button
                  className={`btn badge badge-primary${
                    this.state.languageFilter ? ' badge-pill' : ' active'
                  }`}
                  type='button'
                  onClick={this.click}
                >
                  <FormattedMessage id='index.allLanguages' />
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
                      this.state.languageFilter === x.name
                        ? ' active'
                        : ' badge-pill'
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
              <FormattedMessage id='index.search.name' />:{' '}
              <input
                type='text'
                value={this.state.name}
                onChange={this.nameFilter}
              />
            </label>
            <br />
            <label>
              <FormattedMessage id='index.search.location' />:{' '}
              <input
                type='text'
                value={this.state.location}
                onChange={this.locationFilter}
              />
            </label>
            <h4>
              <FormattedMessage
                id='index.resultsSummary'
                values={{
                  nDisplayed: users.length,
                  nSelected: usersImp.length,
                  nTotal: this.allUsers.length,
                  location: config.location
                }}
              />
            </h4>
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
                    <FormattedMessage id='index.more' />
                  </button>
                )}

                <h4>
                  <FormattedMessage
                    id='index.resultsSummary'
                    values={{
                      nDisplayed: users.length,
                      nSelected: usersImp.length,
                      nTotal: this.allUsers.length,
                      location: config.location
                    }}
                  />
                </h4>
              </Fragment>
            ) : (
              <p>
                <FormattedMessage id='index.noResults' />
              </p>
            )}
          </div>
        </div>
        <Footer />
      </Layout>
    )
  }
}

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
          users {
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
            starredRepositoriesCount
            repositoriesContributedToCount
            fetchedAt
            isHireable
            websiteUrl
          }
        }
      }
    }

    allSparksJson {
      totalCount
      edges {
        node {
          lastContribDate
          sum2
          output
          login
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

export default withIntl(FrontPage)
