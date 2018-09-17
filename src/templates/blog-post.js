// npm
import React from 'react'
import { graphql } from 'gatsby'

// self
import { Link, withIntl } from '../i18n'
import { Layout } from '../components'

const BlogPost = ({ messages, data: { markdownRemark } }) => {
  console.log('markdownRemark:', markdownRemark)
  return (
    <Layout messages={messages}>
      <div className='container'>
        <h1>
          <Link to='/blog/'>Blog</Link>
        </h1>
        <h2>{markdownRemark.frontmatter.title}</h2>
        <h3>{markdownRemark.frontmatter.date}</h3>
        <i>Time to read: {markdownRemark.timeToRead} min.</i>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      timeToRead
    }
  }
`

export default withIntl(BlogPost)
