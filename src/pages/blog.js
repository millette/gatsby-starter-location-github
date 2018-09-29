// npm
import React from 'react'
import { graphql } from 'gatsby'
import { FormattedMessage } from 'react-intl'

// self
import { Layout, Footer } from '../components'
import { Link, withIntl } from '../i18n'

const BlogPage = props => (
  <Layout messages={props.messages}>
    <div className='container'>
      <h1>
        <FormattedMessage id='blog.posts' />
      </h1>
      {props.data.allMarkdownRemark &&
      props.data.allMarkdownRemark.edges.length ? (
          props.data.allMarkdownRemark.edges.map(({ node }, key) => (
            <div key={key}>
              <h2>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h2>
              <h3>{node.frontmatter.date}</h3>
              <i>
                <FormattedMessage
                  id='blog.readtime'
                  values={{ readtime: node.timeToRead }}
                />
              </i>
              <p>{node.excerpt}</p>
            </div>
          ))
        ) : (
          <p>Nope, sorry.</p>
        )}
    </div>
    <Footer />
  </Layout>
)

export const query = graphql`
  query($locale: String!) {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { language: { eq: $locale } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            language
          }
          excerpt(pruneLength: 400)
          timeToRead
        }
      }
    }
  }
`

export default withIntl(BlogPage)
