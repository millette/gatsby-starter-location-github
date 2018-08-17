// npm
import React from 'react'

// self
import rolloLogo from '../assets/images/logo.png'
import wikisuiteLogo from '../assets/images/logo-wikisuitev3.png'
// https://openclipart.org/detail/26539/megaphone
import megaphoneLogo from '../assets/images/megaphone.png'
import { Link } from '../i18n'

const logoStyle = {
  height: '8rem'
}

const adsStyle = {
  marginTop: '-1rem'
}

const ProgLanguages = props => {
  return (
    <section className='mt-3'>
      <h6 className='text-right text-warning font-italic'>Annonces</h6>
      <div
        style={adsStyle}
        className='row border border-warning pt-3 border-top-0'
      >
        <div className='col-md-4'>
          <Link to='/promo/'>
            <div className='card text-dark border-0'>
              <img
                style={logoStyle}
                className='card-img-top'
                src={wikisuiteLogo}
                alt='WikiSuite'
              />
              <div className='card-body'>
                {false && <h5 className='card-title'>WikiSuite</h5>}
                <p className='card-text'>
                  <b>WikiSuite</b> is the most comprehensive and integrated Free
                  / Libre / Open Source enterprise software suite ever developed
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='col-md-5'>
          <Link to='/promo/'>
            <div className='card text-dark border-0'>
              <img
                style={logoStyle}
                className='card-img-top'
                src={rolloLogo}
                alt='RoLLoDevs'
              />
              <div className='card-body'>
                {false && <h5 className='card-title'>RoLLoDevs</h5>}
                <p className='card-text'>
                  Looking to hire the perfect candidate? <b>RoLLoDevs</b> is the
                  place to start!
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='col-md-3'>
          <Link to='/promo/'>
            <div className='card text-right text-dark border-0'>
              <img
                style={logoStyle}
                className='card-img-top'
                src={megaphoneLogo}
                alt='You! Vous?'
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
  )
}

export default ProgLanguages
