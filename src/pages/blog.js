// npm
import React from 'react'
import { graphql } from 'gatsby'

// self
import { Layout } from '../components'
import { withIntl } from '../i18n'

const BlogPage = props => {
  return (
    <Layout messages={props.messages}>
      <div className='container'>
        {props.data.allFile.edges.map(({ node }, key) => (
          <div style={{ border: 'thin solid black' }} key={key}>
            <h2>{node.childMarkdownRemark.frontmatter.title}</h2>
            <h3>{node.modifiedTime}</h3>
            <i>Time to read: {node.childMarkdownRemark.timeToRead} min.</i>
            <p>{node.childMarkdownRemark.excerpt}</p>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: node.childMarkdownRemark.html
              }}
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

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

export default withIntl(BlogPage)
