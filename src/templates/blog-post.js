// npm
import React from 'react'
import { graphql } from 'gatsby'

// self
import { Link, withIntl } from '../i18n'
import { Layout } from '../components'

const BlogPost = ({ messages, data: { markdownRemark } }) => (
  <Layout messages={messages}>
    <div className='container'>
      <h1>
        <Link to='/blog/'>Blog</Link>
      </h1>
      <h2>{markdownRemark.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default withIntl(BlogPost)
