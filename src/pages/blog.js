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
  // FIXME: should be a 404 but this will do for now
  if (
    !props.data.allMarkdownRemark ||
    !props.data.allMarkdownRemark.edges.length
  ) {
    return <div>Niet</div>
  }
  return (
    <Layout messages={props.messages}>
      <div className='container'>
        {props.data.allMarkdownRemark.edges.map(({ node }, key) => (
          <div key={key}>
            <h2>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h2>
            <i>Time to read: {node.timeToRead} min.</i>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 5
      filter: { frontmatter: { title: { ne: "" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
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
