// npm
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

class Radios extends Component {
  constructor (props) {
    const buttons = ['dontCare', 'yes', 'no']
    super(props)
    this.active = props.active || buttons[0]
    this.buttons = buttons.map(key => ({
      key,
      txt: <FormattedMessage id={`radios.${key}`} />
    }))
    this.change = this.change.bind(this)
  }

  change ({ target: { value } }) {
    if (this.props.change) {
      this.props.change(value)
    }
  }

  render () {
    // FIXME: workaround purgecss and missing classes
    // See also the whitelist option for 'gatsby-plugin-purgecss' in gatsby-config.js
    // eslint-disable-next-line no-unused-expressions
    // Keep the following comment otherwise these classes are purged from the generated css:
    // <span className='text-primary text-secondary text-success text-danger text-warning text-info btn-primary btn-secondary btn-success btn-danger btn-warning btn-info btn-outline-primary btn-outline-secondary btn-outline-success btn-outline-danger btn-outline-warning btn-outline-info' />
    return (
      <div className='form-group row'>
        <div className='col-6 col-sm-12 text-truncate'>
          <span className='pt-1 px-0'>{this.props.title}</span>
        </div>
        <div className='col-6 col-sm-12 btn-group btn-group-sm btn-group-toggle'>
          {this.buttons.map(({ key, txt }, i) => (
            <label
              key={key}
              className={`btn pt-0 ${
                this.active === key
                  ? `btn-${this.props.color} active`
                  : `btn-outline-${this.props.color}`
              }`}
            >
              <input
                onChange={this.change}
                value={key}
                type='radio'
                autoComplete='off'
                checked={this.active === key}
              />{' '}
              {txt}
            </label>
          ))}
        </div>
      </div>
    )
  }
}

export default Radios
