// npm
import React from 'react'
import { graphql } from 'gatsby'
import { FormattedMessage } from 'react-intl'

// self
import { Link, withIntl } from '../i18n'
import { Layout, Footer, BlogPostHeader } from '../components'

const BlogPost = ({ pageContext, messages, data: { markdownRemark } }) => (
  <Layout pageContext={pageContext} messages={messages}>
    <div className='container'>
      <h1>
        <Link to='/blog/'>
          <FormattedMessage id='nav.blog' />
        </Link>
      </h1>
      <BlogPostHeader
        title={markdownRemark.frontmatter.title}
        date={markdownRemark.frontmatter.date}
        readtime={markdownRemark.timeToRead}
      />
      <div
        className='blogpost'
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      />
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
