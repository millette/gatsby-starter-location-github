// npm
import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

// self
import { Link } from '../i18n'

const adsStyle = {
  marginTop: '-1rem'
}

const Ads = props => (
  <StaticQuery
    query={graphql`
      query {
        f1: file(base: { eq: "logo-wikisuitev4.png" }) {
          childImageSharp {
            fixed(width: 220) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }

        f2: file(base: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 220) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }

        f3: file(base: { eq: "megaphone.png" }) {
          childImageSharp {
            fixed(width: 220) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={o => (
      <section className='mt-3'>
        <h6 className='text-right text-warning font-italic'>Annonces</h6>
        <div
          style={adsStyle}
          className='row border border-warning pt-3 border-top-0'
        >
          <div className='col-md-4'>
            <Link to='/promo/'>
              <div className='card text-dark border-0 text-center'>
                <Img
                  className='card-img-top'
                  alt='WikiSuite'
                  fixed={o.f1.childImageSharp.fixed}
                />
                <div className='card-body'>
                  {false && <h5 className='card-title'>WikiSuite</h5>}
                  <p className='card-text'>
                    <b>WikiSuite</b> is the most comprehensive and integrated
                    Free / Libre / Open Source enterprise software suite ever
                    developed
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-md-5'>
            <Link to='/promo/'>
              <div className='card text-dark border-0 text-center'>
                <Img
                  className='card-img-top'
                  alt='RoLLoDevs'
                  fixed={o.f2.childImageSharp.fixed}
                />
                <div className='card-body'>
                  {false && <h5 className='card-title'>RoLLoDevs</h5>}
                  <p className='card-text'>
                    Looking to hire the perfect candidate? <b>RoLLoDevs</b> is
                    the place to start!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-md-3'>
            <Link to='/promo/'>
              <div className='card text-dark border-0 text-center'>
                <Img
                  className='card-img-top'
                  alt='You! Vous?'
                  fixed={o.f3.childImageSharp.fixed}
                />

                <div className='card-body'>
                  <h5 className='card-title'>Et vous?</h5>
                  <p className='card-text'>
                    Contactez-nous pour connaitre nos forfaits.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    )}
  />
)

export default Ads
