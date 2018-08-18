// npm
import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

// self
// import rolloLogo from '../assets/images/logo.png'
// import wikisuiteLogo from '../assets/images/logo-wikisuitev3.png'
// https://openclipart.org/detail/26539/megaphone
// import megaphoneLogo from '../assets/images/megaphone.png'
import { Link } from '../i18n'

/*
const logoStyle = {
  height: '8rem'
}
*/

const adsStyle = {
  marginTop: '-1rem'
}

/*

        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

              fluid(maxHeight: 200) {
                aspectRatio
                tracedSVG
                src
                originalName
              }

*/

const Ads = props => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              id
              fixed(cropFocus: CENTER, width: 200) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      }
    `}
    render={o => (
      <section className='mt-3'>
        <pre>{JSON.stringify(o, null, '  ')}</pre>
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
                  fixed={o.allImageSharp.edges[5].node.fixed}
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
                  fixed={o.allImageSharp.edges[1].node.fixed}
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
                  fixed={o.allImageSharp.edges[2].node.fixed}
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
