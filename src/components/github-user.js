// npm
import React, { Fragment } from 'react'

const GithubUser = props => {
  return (
    <div className='card mt-4'>
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
          role='button'
          className='w-100 btn btn-warning btn-sm'
          target='_blank'
          rel='noopener noreferrer'
          href={`https://github.com/${props.login}`}
        >
          {props.login} @ GitHub
        </a>
        {/* if props.bio is truthy, show it in a paragraph */}
        {props.bio && <p className='card-text'>{props.bio}</p>}
        <dl className='row'>
          <dt className='col-6 col-xl-4'>Location</dt>
          <dd className='col-6 col-xl-8'>{props.location}</dd>

          {props.websiteUrl && (
            <Fragment>
              <dt className='col-6 col-xl-4'>Site web</dt>
              <dd className='col-6 col-xl-8'>{props.websiteUrl}</dd>
            </Fragment>
          )}

          {props.email && (
            <Fragment>
              <dt className='col-6 col-xl-4'>Email</dt>
              <dd className='col-6 col-xl-8'>{props.email}</dd>
            </Fragment>
          )}

          <dt className='col-6 col-xl-4'>Créé</dt>
          <dd className='col-6 col-xl-8'>{props.createdAt}</dd>

          {props.company && (
            <Fragment>
              <dt className='col-6 col-xl-4'>Compagnie</dt>
              <dd className='col-6 col-xl-8'>{props.company}</dd>
            </Fragment>
          )}

          {/* Here, we're testing length > 0
              since the number 0 is not falsy in this context.
              Otherwise, 0 would be shown instead of nothing or the following span. */}
          {props.starredRepositories &&
            props.starredRepositories.length > 0 && (
            <Fragment>
              <dt className='col-6 col-xl-4'>Étoiles</dt>
              {/* Here, we want it displayed, even if it's 0 although the previous test would prevent 0 */}
              <dd className='col-6 col-xl-8'>
                {props.starredRepositories.length} dépots
              </dd>
            </Fragment>
          )}

          {props.repositoriesContributedTo &&
            props.repositoriesContributedTo.length > 0 && (
            <Fragment>
              <dt className='col-6 col-xl-4'>Contribs</dt>
              <dd className='col-6 col-xl-8'>
                {props.repositoriesContributedTo.length} dépots
              </dd>
              {props.languages && (
                <Fragment>
                  <dt className='col-6 col-xl-4'>Langages</dt>
                  <dd className='col-6 col-xl-8'>{props.languages}</dd>
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
