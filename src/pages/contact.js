// npm
import React from 'react'
import { FormattedMessage } from 'react-intl'

// self
import Layout from '../components/layout'
import Footer from '../components/footer'
import { withIntl, Link } from '../i18n'

const Contact = ({ messages }) => (
  <Layout messages={messages}>
    <div className='container'>
      <h1 className='mt-3'>
        <FormattedMessage id='contact.title' />
      </h1>

      <div className='row'>
        <div className='col order-md-last'>
          <p>
            N’hésitez pas à nous contacter si vous avez des questions ou ou des
            suggestions.
          </p>
          <p>
            Utilisez notre formulaire ou envoyez nous un email:<br />
            <a href='mailto:robin@millette.info'>robin@millette.info</a>
          </p>
          <p>
            Pour contacter un développeurs, consultez notre{' '}
            <Link to='/'>répertoire</Link>.
          </p>
        </div>
        <div className='col-sm-12 col-md-9 col-lg-8 col-xl-7'>
          <form>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                required
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
              <small id='emailHelp' className='form-text text-muted'>
                We’ll never share your email with anyone else.
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputSubject'>Subject</label>
              <input
                type='text'
                className='form-control'
                id='exampleInputSubject'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleFormControlTextarea1'>Comment</label>
              <textarea
                required
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
              />
            </div>
            <button type='submit' className='btn btn-primary btn-block'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer>
      <p className='card-text'>Marvoulous</p>
    </Footer>
  </Layout>
)

export default withIntl(Contact)
