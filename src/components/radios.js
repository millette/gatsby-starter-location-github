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
    return (
      <div className='form-group row'>
        <div className='col-6 col-sm-12 col-form-label'>{this.props.title}</div>
        <div className='col-6 col-sm-12 btn-group btn-group-toggle'>
          {this.buttons.map(({ key, txt }) => (
            <label
              key={key}
              className={`btn btn-sm btn-secondary${
                this.active === key ? ' active' : ''
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
