// npm
import React, { Component, Fragment } from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { FormattedMessage } from 'react-intl'

// self
import { Link } from '../i18n'

const adsStyle = {
  marginTop: '-1rem'
}

class Ads extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showAds: true
    }
    this.click = this.click.bind(this)
  }

  click () {
    this.setState({ showAds: !this.state.showAds })
  }

  render () {
    const { f1, f2, f3 } = this.props.data
    return (
      <section className='mt-3'>
        <h6 className='text-right'>
          <button
            onClick={this.click}
            className='btn btn-link text-warning font-italic'
          >
            {this.state.showAds ? (
              <FormattedMessage id='ads.toggle.hide' />
            ) : (
              <FormattedMessage id='ads.toggle.show' />
            )}
          </button>
        </h6>
        <div
          style={adsStyle}
          className={`row border border-warning pt-3 border-top-0${
            this.state.showAds ? '' : ' border-left-0'
          }`}
        >
          {this.state.showAds ? (
            <Fragment>
              <div className='col-md-4'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://wikisuite.org/'
                >
                  <div className='card pt-2 text-dark border-0 text-center'>
                    <Img
                      className='card-img-top'
                      alt='WikiSuite'
                      fixed={f1.childImageSharp.fixed}
                    />
                    <div className='card-body'>
                      <p className='card-text'>
                        <FormattedMessage
                          id='ads.wikisuite'
                          values={{ name: <b>WikiSuite</b> }}
                        />
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-md-5'>
                <Link to='/promo/'>
                  <div className='card pt-2 text-dark border-0 text-center'>
                    <Img
                      className='card-img-top'
                      alt='RoLLoDevs'
                      fixed={f2.childImageSharp.fixed}
                    />
                    <div className='card-body'>
                      <p className='card-text'>
                        <FormattedMessage
                          id='ads.rollodevs'
                          values={{ name: <b>RoLLoDevs</b> }}
                        />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3'>
                <Link to='/contact/'>
                  <div className='card pt-2 text-dark border-0 text-center'>
                    <Img
                      className='card-img-top'
                      alt='You! Vous?'
                      fixed={f3.childImageSharp.fixed}
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        <FormattedMessage id='ads.andyou.title' />
                      </h5>
                      <p className='card-text'>
                        <FormattedMessage id='ads.andyou.text' />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </Fragment>
          ) : (
            <div className='col text-right'>
              <blockquote className='blockquote'>
                <p>
                  <FormattedMessage id='ads.why' />
                </p>
                <footer className='blockquote-footer'>Robin Millette</footer>
              </blockquote>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        f1: file(base: { eq: "logo-wikisuitev3.png" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }

        f2: file(base: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }

        f3: file(base: { eq: "megaphone.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Ads data={data} {...props} />}
  />
)
