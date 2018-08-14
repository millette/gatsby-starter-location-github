// npm
import React, { Component, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

// self
import { Nav } from '.'
import { Link } from '../i18n'
import logo from '../assets/images/logo.png'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = { showHeader: true }
    this.click = this.click.bind(this)
  }

  click () {
    this.setState(state => ({
      showHeader: !state.showHeader
    }))
  }

  render () {
    const { pageContext, siteTitle, subTitle } = this.props
    return (
      <Fragment>
        <Nav pageContext={pageContext} />
        <section className=''>
          <button
            onClick={this.click}
            className='text-right border-bottom btn btn-sm btn-primary btn-block'
          >
            <FormattedMessage
              id={`jumbotron.header.${this.state.showHeader ? 'hide' : 'show'}`}
            />
          </button>
        </section>
        {this.state.showHeader && (
          <section className='jumbotron'>
            <div className='container'>
              <div className='row text-center'>
                <div className='column clearfix'>
                  <img
                    src={logo}
                    className='float-sm-left align-middle img-fluid mr-sm-4'
                    alt='logo RoLLodeQc'
                  />
                  <h1 className='jumbotron-heading'>{siteTitle}</h1>
                  <h2 className='text-muted'>{subTitle}</h2>
                  <p className='lead'>
                    <FormattedMessage id='jumbotron.text' />
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='column mx-auto'>
                  <Link to='/about/' className='btn btn-info btn-lg'>
                    <FormattedMessage id='jumbotron.more' />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </Fragment>
    )
  }
}

export default Header
