// npm
import React, { Fragment } from "react"
import { FormattedMessage, FormattedDate } from "react-intl"
import {
  Label,
  WithTooltip,
  Sparkline,
  LineSeries,
  PointSeries,
  HorizontalReferenceLine,
} from "@data-ui/sparkline"

// self
import { ListKeywords } from "."

const GithubUser = (props) => {
  return (
    <div className="col-sm-6 col-lg-4 mt-4">
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src={`https://avatars3.githubusercontent.com/u/${props.databaseId}`}
          alt={`Avatar de ${props.name || props.login}`}
        />

        {props.sparks && (
          <div
            style={{ marginTop: -64, zIndex: 200 }}
            className="card-img-top text-center rym-with-hover"
          >
            <WithTooltip
              renderTooltip={({ datum: { y } }) => y && `${y} contribs`}
            >
              <Sparkline
                margin={{ top: 10, right: 48, bottom: 10, left: 10 }}
                width={240}
                height={64}
                data={props.sparks.output}
                ariaLabel={`${props.login} sparkline`}
              >
                <HorizontalReferenceLine
                  stroke="#f00"
                  labelPosition="right"
                  LabelComponent={<Label strokeWidth={1} fill="#f00" />}
                  renderLabel={(a) => Math.round(a) && `${Math.round(a)}/w`}
                />
                <LineSeries showArea />
                <PointSeries points={["max"]} />
              </Sparkline>
            </WithTooltip>
          </div>
        )}

        <div className="card-body">
          {/* if props.name is falsy, show props.login */}
          <h3 className="card-title">{props.name || props.login}</h3>

          {/* if props.bio is truthy, show it in a paragraph */}
          {props.bio && (
            <blockquote className="blockquote">{props.bio}</blockquote>
          )}
          <dl className="row">
            <dt className="col-6 col-xl-5 text-right">
              <FormattedMessage id="directory.location" />
            </dt>
            <dd className="col-6 col-xl-7">
              {props.location
                .replace(/,/g, ", ")
                .replace(/\//g, " / ")
                .replace(/  +/g, " ")}
            </dd>

            {props.sparks && props.sparks.lastContribDate && (
              <Fragment>
                <dt className="col-6 col-xl-5 text-right">
                  <FormattedMessage id="directory.sum2.label" />
                </dt>
                <dd className="col-6 col-xl-7">
                  <FormattedMessage
                    id="directory.sum2.value"
                    values={props.sparks}
                  />
                </dd>
                <dt className="col-6 col-xl-5 text-right">
                  <FormattedMessage id="directory.lastContribDate" />
                </dt>
                <dd className="col-6 col-xl-7">
                  <FormattedDate
                    timeZone="utc"
                    value={props.sparks.lastContribDate}
                    year="numeric"
                    month="long"
                    day="numeric"
                  />
                </dd>
              </Fragment>
            )}

            {props.websiteUrl && (
              <Fragment>
                <dt className="col-6 col-xl-5 text-right">
                  <FormattedMessage id="directory.website" />
                </dt>
                <dd className="col-6 col-xl-7 text-truncate">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.websiteUrl}
                  >
                    {props.websiteUrl}
                  </a>
                </dd>
              </Fragment>
            )}
            {props.email && (
              <Fragment>
                <dt className="col-6 col-xl-5 text-right">
                  <FormattedMessage id="directory.email" />
                </dt>
                <dd className="col-6 col-xl-7 text-truncate">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto:${props.email}`}
                  >
                    {props.email}
                  </a>
                </dd>
              </Fragment>
            )}
            <dt className="col-6 col-xl-5 text-right">
              <FormattedMessage id="directory.created" />
            </dt>
            <dd className="col-6 col-xl-7">
              <FormattedDate
                timeZone="utc"
                value={props.createdAt}
                year="numeric"
                month="long"
                day="numeric"
              />
            </dd>
            {props.company && (
              <Fragment>
                <dt className="col-6 col-xl-5 text-right">
                  <FormattedMessage id="directory.company" />
                </dt>
                <dd className="col-6 col-xl-7">{props.company}</dd>
              </Fragment>
            )}
            {/* Here, we're testing length > 0
                since the number 0 is not falsy in this context.
                Otherwise, 0 would be shown instead of nothing or the following span.
            */}

            {props.starredRepositoriesCount > 0 && (
              <Fragment>
                <dt className="col-6 col-xl-5 text-right">
                  <FormattedMessage id="directory.stars.label" />
                </dt>
                <dd className="col-6 col-xl-7">
                  <FormattedMessage
                    id="directory.repos.value"
                    values={{ nStars: props.starredRepositoriesCount }}
                  />
                </dd>
              </Fragment>
            )}
            {props.repositoriesContributedToCount > 0 && (
              <Fragment>
                <dt className="col-6 col-xl-5 text-right">
                  <FormattedMessage id="directory.repos.label" />
                </dt>
                <dd className="col-6 col-xl-7">
                  <FormattedMessage
                    id="directory.repos.value"
                    values={{ nStars: props.repositoriesContributedToCount }}
                  />
                </dd>
                {props.languages && (
                  <Fragment>
                    <dt className="col-6 col-xl-5 text-right">
                      <FormattedMessage id="directory.languages" />
                    </dt>
                    <dd className="col-6 col-xl-7">
                      <ul className="list-inline">
                        {props.languages.map(({ name, count, style }) => (
                          <li
                            key={name}
                            className="list-inline-item badge badge-pill"
                            style={style}
                          >
                            {name} ({count})
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </Fragment>
                )}

                <ListKeywords keywords={props.keywords} lang={props.lang} />

                {props.licenses && (
                  <Fragment>
                    <dt className="col-6 col-xl-5 text-right">
                      <FormattedMessage id="directory.licenses" />
                    </dt>
                    <dd className="col-6 col-xl-7">
                      <ul className="list-inline">
                        {props.licenses.map(({ license, count }) => (
                          <li
                            key={license}
                            className="list-inline-item badge badge-info"
                          >
                            {license} ({count})
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </Fragment>
                )}
              </Fragment>
            )}
          </dl>
        </div>

        <div className="card-footer">
          {!props.onlyAvailable && props.isHireable && (
            <p className="text-center">
              <FormattedMessage id="directory.available" />
            </p>
          )}
          <a
            role="button"
            className="w-100 btn btn-warning btn-sm"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${props.login}`}
          >
            {props.login} @ GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default GithubUser
