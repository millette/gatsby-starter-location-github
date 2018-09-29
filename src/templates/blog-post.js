// npm
import React from 'react'
import { graphql } from 'gatsby'
import { FormattedMessage } from 'react-intl'

// self
import { Link, withIntl } from '../i18n'
import { Layout, Footer } from '../components'

const BlogPost = ({ pageContext, messages, data: { markdownRemark } }) => (
  <Layout pageContext={pageContext} messages={messages}>
    <div className='container'>
      <h1>
        <Link to='/blog/'>
          <FormattedMessage id='nav.blog' />
        </Link>
      </h1>
      <h2>{markdownRemark.frontmatter.title}</h2>
      <h3>
        {markdownRemark.frontmatter.date}{' '}
        <small>{markdownRemark.frontmatter.set}</small>
      </h3>
      <i>
        <FormattedMessage
          id='blog.readtime'
          values={{ readtime: markdownRemark.timeToRead }}
        />
      </i>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </div>
    <Footer />
  </Layout>
)

export const query = graphql`
  query($locale: String!, $slug: String!) {
    markdownRemark(
      frontmatter: { language: { eq: $locale } }
      fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
        date
        language
        set
      }
      timeToRead
    }
  }
`

export default withIntl(BlogPost)
