import React from 'react'

const GithubUser = props => {
  return (
    <div style={{ padding: '1em', margin: '1em', border: 'thin solid blue' }}>
      {/* if props.name is falsy, show props.login */}
      <h2>{props.name || props.login}</h2>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={`https://github.com/${props.login}`}
      >{`https://github.com/${props.login}`}</a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={`https://github.com/${props.login}`}
      >
        <img
          src={`https://avatars3.githubusercontent.com/u/${
            props.databaseId
          }?s=460&v=4`}
          alt={`Avatar de ${props.name || props.login}`}
        />
      </a>
      {/* if props.bio is truthy, show it in a paragraph */}
      {props.bio && <p>{props.bio}</p>}
      <dl>
        <dt>Location</dt>
        <dd>{props.location}</dd>

        {props.websiteUrl && (
          <span>
            <dt>Site web</dt>
            <dd>{props.websiteUrl}</dd>
          </span>
        )}
        <dt>Créé</dt>
        <dd>{props.createdAt}</dd>

        {/* Here, we're testing length > 0
            since the number 0 is not falsy in this context.
            Otherwise, 0 would be shown instead of nothing or the following span. */}
        {props.starredRepositories &&
          props.starredRepositories.length > 0 && (
          <span>
            <dt>Étoiles</dt>
            {/* Here, we want it displayed, even if it's 0 although the previous test would prevent 0 */}
            <dd>{props.starredRepositories.length} dépots</dd>
          </span>
        )}

        {props.repositoriesContributedTo &&
          props.repositoriesContributedTo.length > 0 && (
          <span>
            <dt>Contribué à</dt>
            <dd>{props.repositoriesContributedTo.length} dépots</dd>
            {props.languages && (
              <span>
                <dt>Langages</dt>
                <dd>{props.languages}</dd>
              </span>
            )}
          </span>
        )}
      </dl>
      {props.isHireable && <p>Disponible pour travailler</p>}
    </div>
  )
}

export default GithubUser
