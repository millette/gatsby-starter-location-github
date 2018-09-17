/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// core
const path = require('path')

// npm
const { createFilePath } = require('gatsby-source-filesystem')

// self
const { languages } = require('./src/i18n/locales')

exports.onCreateNode = oy => {
  const { node, getNode, actions: { createNodeField } } = oy
  // if (node.internal.owner === 'gatsby-transformer-json') { return }
  // if (node.internal.owner === 'internal-data-bridge') { return }
  if (node.internal.type !== 'MarkdownRemark') {
    return
  }
  // console.log('NODE:', oy)
  const fileNode = getNode(node.parent)
  const value = `/blog${createFilePath({
    node,
    getNode,
    basePath: 'custom/blog'
  })}`
  console.log('\n', value, fileNode.relativePath)
  createNodeField({
    name: 'slug',
    node,
    value
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      console.log(JSON.stringify(result, null, '  '))

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/en${node.fields.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
            languages,
            locale: 'en',
            routed: true,
            originalPath: node.fields.slug
          }
        })
      })

      resolve()
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  console.log('onCreatePage page.path:', page.path)
  const { createPage, deletePage } = actions

  // FIXME: 404 language bug?
  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    const redirect = path.resolve('src/i18n/redirect.js')
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        languages,
        locale: '', // FIXME: 404 language bug?
        routed: false,
        redirectPage: page.path
      }
    }
    deletePage(page)
    createPage(redirectPage)

    languages.forEach(({ value }) =>
      createPage({
        ...page,
        originalPath: page.path,
        path: `/${value}${page.path}`,
        context: {
          languages,
          locale: value,
          routed: true,
          originalPath: page.path
        }
      })
    )

    resolve()
  })
}
