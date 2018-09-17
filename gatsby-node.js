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

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type !== 'MarkdownRemark') {
    return
  }
  const value = `/blog${createFilePath({
    node,
    getNode,
    basePath: 'custom/blog'
  })}`
  createNodeField({
    name: 'slug',
    node,
    value
  })
}

exports.createPages = ({ graphql, actions: { createPage } }) => {
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
      // console.log(JSON.stringify(result, null, '  '))

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const redirect = path.resolve('src/i18n/redirect.js')
        const redirectPage = {
          // ...page,
          path: node.fields.slug,
          component: redirect,
          context: {
            languages,
            locale: '', // FIXME: 404 language bug?
            routed: false,
            redirectPage: node.fields.slug
          }
        }

        // deletePage({ path: node.fields.slug })
        createPage(redirectPage)

        languages.forEach(({ value }) =>
          createPage({
            path: `/${value}${node.fields.slug}`,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
              languages,
              locale: value,
              routed: true,
              originalPath: node.fields.slug
            }
          })
        )
      })

      resolve()
    })
  })
}

exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  // console.log('onCreatePage page.path:', page.path)
  // const { createPage, deletePage } = actions

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
    // console.log('onCreatePage DELETE', page)
    // console.log('onCreatePage CREATE', redirectPage)
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
