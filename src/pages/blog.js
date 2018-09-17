// npm
import React from 'react'
import { graphql } from 'gatsby'

// self
import { Layout } from '../components'
import { Link, withIntl } from '../i18n'

/*
const BlogPage = props => {
  return (
    <Layout messages={props.messages}>
      <div className='container'>
        {props.data.allFile.edges.map(({ node }, key) => (
          <div style={{ border: 'thin solid black' }} key={key}>
            <h2>
              <Link to={node.childMarkdownRemark.fields.slug}>
                {node.childMarkdownRemark.frontmatter.title}
              </Link>
            </h2>
            <h3>{node.modifiedTime}</h3>
            <i>Time to read: {node.childMarkdownRemark.timeToRead} min.</i>
            <p>{node.childMarkdownRemark.excerpt}</p>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: node.childMarkdownRemark.html
              }}
            />
            <pre>{JSON.stringify(node, null, '  ')}</pre>
          </div>
        ))}
      </div>
    </Layout>
  )
}
*/

const BlogPage = props => {
  return (
    <Layout messages={props.messages}>
      <div className='container'>
        <h1>Blog posts</h1>
        {props.data.allMarkdownRemark &&
        props.data.allMarkdownRemark.edges.length ? (
            props.data.allMarkdownRemark.edges.map(({ node }, key) => (
              <div key={key}>
                <h2>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h2>
                <h3>{node.frontmatter.date}</h3>
                <i>Time to read: {node.timeToRead} min.</i>
                <p>{node.excerpt}</p>
              </div>
            ))
          ) : (
            <p>Nope, sorry.</p>
          )}
      </div>
    </Layout>
  )
}

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
          excerpt
          timeToRead
        }
      }
    }
  }
`

/*
export const query = graphql`
  query {
    allFile(
      limit: 5
      sort: { fields: [modifiedTime], order: DESC }
      filter: { extension: { eq: "md" } }
    ) {
      totalCount
      edges {
        node {
          id
          publicURL
          modifiedTime
          childMarkdownRemark {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            fileAbsolutePath
            html
            excerpt
            headings {
              value
              depth
            }
            timeToRead
            tableOfContents
            wordCount {
              paragraphs
              sentences
              words
            }
          }
        }
      }
    }
  }
`
*/

export default withIntl(BlogPage)
