import React, { Fragment } from 'react'

const GithubUser = props => {
  return (
    <div className='card' style={{ marginTop: '2rem' }}>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={`https://github.com/${props.login}`}
      >
        <img
          className='card-img-top'
          src={`https://avatars3.githubusercontent.com/u/${
            props.databaseId
          }?s=460&v=4`}
          alt={`Avatar de ${props.name || props.login}`}
        />
      </a>

      <div className='card-body'>
        {/* if props.name is falsy, show props.login */}
        <h3 className='card-title'>{props.name || props.login}</h3>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`https://github.com/${props.login}`}
        >
          {`https://github.com/${props.login}`}
        </a>
        {/* if props.bio is truthy, show it in a paragraph */}
        {props.bio && <p>{props.bio}</p>}
        <dl className='row'>
          <dt className='col-6'>Location</dt>
          <dd className='col-6'>{props.location}</dd>

          {props.websiteUrl && (
            <Fragment>
              <dt className='col-6'>Site web</dt>
              <dd className='col-6'>{props.websiteUrl}</dd>
            </Fragment>
          )}
          <dt className='col-6'>Créé</dt>
          <dd className='col-6'>{props.createdAt}</dd>

          {/* Here, we're testing length > 0
              since the number 0 is not falsy in this context.
              Otherwise, 0 would be shown instead of nothing or the following span. */}
          {props.starredRepositories &&
            props.starredRepositories.length > 0 && (
            <Fragment>
              <dt className='col-6'>Étoiles</dt>
              {/* Here, we want it displayed, even if it's 0 although the previous test would prevent 0 */}
              <dd className='col-6'>
                {props.starredRepositories.length} dépots
              </dd>
            </Fragment>
          )}

          {props.repositoriesContributedTo &&
            props.repositoriesContributedTo.length > 0 && (
            <Fragment>
              <dt className='col-6'>Contribué à</dt>
              <dd className='col-6'>
                {props.repositoriesContributedTo.length} dépots
              </dd>
              {props.languages && (
                <Fragment>
                  <dt className='col-6'>Langages</dt>
                  <dd className='col-6'>{props.languages}</dd>
                </Fragment>
              )}
            </Fragment>
          )}
        </dl>
        {props.isHireable && (
          <p className='card-text'>Disponible pour travailler</p>
        )}
      </div>
    </div>
  )
}

export default GithubUser
