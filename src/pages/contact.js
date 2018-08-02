// npm
import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

// self
import { Layout, Footer } from '../components'
import { withIntl, Link } from '../i18n'

let config = {
  email: 'robin@millette.info',
  contactForm: false
}

try {
  config = { ...config, ...require('../../custom/config') }
} catch (e) {
  // expected if there is no custom config
}

const Contact = ({ messages }) => (
  <Layout messages={messages}>
    <div className='container'>
      <h1 className='mt-3'>
        <FormattedMessage id='contact.title' />
      </h1>
      <Content email={config.email} contactFormEnabled={config.contactForm} />
    </div>
    <Footer>
      <p className='card-text'>Marvoulous</p>
    </Footer>
  </Layout>
)

const Form = () => (
  <div className='col-sm-12 col-md-9 col-lg-8 col-xl-7'>
    <form>
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>
          <FormattedMessage id='contact.emailInput' />
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
        <small id='emailHelp' className='form-text text-muted'>
          <FormattedMessage id='contact.emailHelp' />
        </small>
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputSubject'>
          <FormattedMessage id='contact.subjectInput' />
        </label>
        <input type='text' className='form-control' id='exampleInputSubject' />
      </div>
      <div className='form-group'>
        <label htmlFor='exampleFormControlTextarea1'>
          <FormattedMessage id='contact.commentInput' />
        </label>
        <textarea
          required
          className='form-control'
          id='exampleFormControlTextarea1'
          aria-describedby='commentHelp'
          rows='5'
        />
        <small id='commentHelp' className='form-text text-muted'>
          <FormattedMessage id='contact.commentHelp' />
        </small>
      </div>
      <button type='submit' className='btn btn-primary btn-block'>
        <FormattedMessage id='contact.submitForm' />
      </button>
    </form>
  </div>
)

const Content = ({ email, contactFormEnabled }) => {
  if (contactFormEnabled) {
    return (
      <div className='row'>
        <div className='col order-md-last'>
          <FormattedHTMLMessage id='contact.col1.html' />{' '}
          <FormattedHTMLMessage id='contact.col2.html' values={{ email }} />{' '}
          <p>
            <FormattedMessage
              id='contact.col3'
              values={{
                directory: (
                  <FormattedMessage id='contact.directory'>
                    {txt => <Link to='/'>{txt}</Link>}
                  </FormattedMessage>
                )
              }}
            />
          </p>
        </div>
        <Form />
      </div>
    )
  }

  const pClassName = 'col-sm-12 col-md-4'
  return (
    <div className='row'>
      <div className={pClassName}>
        <FormattedHTMLMessage id='contact.col1.html' />{' '}
      </div>
      <div className={pClassName}>
        <FormattedHTMLMessage id='contact.col2b.html' values={{ email }} />{' '}
      </div>
      <div className={pClassName}>
        <p>
          <FormattedMessage
            id='contact.col3'
            values={{
              directory: (
                <FormattedMessage id='contact.directory'>
                  {txt => <Link to='/'>{txt}</Link>}
                </FormattedMessage>
              )
            }}
          />
        </p>
      </div>
    </div>
  )
}

export default withIntl(Contact)
