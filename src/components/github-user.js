// npm
import React, { Fragment } from 'react'
import { FormattedMessage, FormattedDate } from 'react-intl'
import { SimpleImg, initSimpleImg } from 'react-simple-img'

// FIXME: SimpleImg only works if it's on the first loaded page. For now it's the frontpage.
// run once at your root component or at file which calls `ReactDOM.render`
if (typeof window !== 'undefined') {
  initSimpleImg({ threshold: 0.5 })
}

const GithubUser = props => {
  return (
    <div className='card mt-4'>
      <SimpleImg
        imgClassName='card-img-top'
        placeholder='linear-gradient(rgb(30, 87, 153) 0%, rgb(125, 185, 232) 100%)'
        src={`https://avatars3.githubusercontent.com/u/${props.databaseId}`}
        alt={`Avatar de ${props.name || props.login}`}
      />
      <div className='card-body'>
        {/* if props.name is falsy, show props.login */}
        <h3 className='card-title'>{props.name || props.login}</h3>
        <a
          role='button'
          className='w-100 btn btn-warning btn-sm'
          target='_blank'
          rel='noopener noreferrer'
          href={`https://github.com/${props.login}`}
        >
          {props.login} @ GitHub
        </a>
        {/* if props.bio is truthy, show it in a paragraph */}
        {props.bio && (
          <blockquote className='blockquote'>{props.bio}</blockquote>
        )}
        <dl className='row'>
          <dt className='col-6 col-xl-4'>
            <FormattedMessage id='directory.location' />
          </dt>
          <dd className='col-6 col-xl-8'>{props.location}</dd>
          {props.websiteUrl && (
            <Fragment>
              <dt className='col-6 col-xl-4'>
                <FormattedMessage id='directory.website' />
              </dt>
              <dd className='col-6 col-xl-8 text-truncate'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={props.websiteUrl}
                >
                  {props.websiteUrl}
                </a>
              </dd>
            </Fragment>
          )}
          {props.email && (
            <Fragment>
              <dt className='col-6 col-xl-4'>
                <FormattedMessage id='directory.email' />
              </dt>
              <dd className='col-6 col-xl-8 text-truncate'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`mailto:${props.email}`}
                >
                  {props.email}
                </a>
              </dd>
            </Fragment>
          )}
          <dt className='col-6 col-xl-4'>
            <FormattedMessage id='directory.created' />
          </dt>
          <dd className='col-6 col-xl-8'>
            <FormattedDate
              value={props.createdAt}
              year='numeric'
              month='long'
              day='numeric'
            />
          </dd>
          {props.company && (
            <Fragment>
              <dt className='col-6 col-xl-4'>
                <FormattedMessage id='directory.company' />
              </dt>
              <dd className='col-6 col-xl-8'>{props.company}</dd>
            </Fragment>
          )}
          {/* Here, we're testing length > 0
              since the number 0 is not falsy in this context.
              Otherwise, 0 would be shown instead of nothing or the following span.
          */}

          {props.starredRepositoriesCount > 0 && (
            <Fragment>
              <dt className='col-6 col-xl-4'>
                <FormattedMessage id='directory.stars.label' />
              </dt>
              {/* Here, we want it displayed, even if it's 0 although the previous test would prevent 0 */}
              <dd className='col-6 col-xl-8'>
                <FormattedMessage
                  id='directory.repos.value'
                  values={{ nStars: props.starredRepositoriesCount }}
                />
              </dd>
            </Fragment>
          )}
          {props.repositoriesContributedToCount && (
            <Fragment>
              <dt className='col-6 col-xl-4'>
                <FormattedMessage id='directory.repos.label' />
              </dt>
              <dd className='col-6 col-xl-8'>
                <FormattedMessage
                  id='directory.repos.value'
                  values={{ nStars: props.repositoriesContributedToCount }}
                />
              </dd>
              {props.languages && (
                <Fragment>
                  <dt className='col-6 col-xl-4'>
                    <FormattedMessage id='directory.languages' />
                  </dt>
                  <dd className='col-6 col-xl-8'>
                    <ul className='list-inline'>
                      {props.languages.map(({ name, count, style }) => (
                        <li
                          className='list-inline-item badge badge-pill'
                          style={style}
                        >
                          {name} ({count})
                        </li>
                      ))}
                    </ul>
                  </dd>
                </Fragment>
              )}
            </Fragment>
          )}
        </dl>
        {!props.onlyAvailable &&
          props.isHireable && (
          <p className='card-footer text-center'>
            <FormattedMessage id='directory.available' />
          </p>
        )}
      </div>
    </div>
  )
}

export default GithubUser
