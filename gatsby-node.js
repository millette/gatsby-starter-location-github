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
  const value =
    `/blog${createFilePath({
      node,
      getNode,
      basePath: 'custom/blog'
    })}`.slice(0, -4) + '/'

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
        allMarkdownRemark(filter: { frontmatter: { title: { ne: "" } } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                language
              }
            }
          }
        }
      }
    `).then(result => {
      if (!result.data || !result.data.allMarkdownRemark) {
        // console.log(JSON.stringify(result, null, '  '))
        return resolve()
      }

      // FIXME: only create pages in proper language
      result.data.allMarkdownRemark.edges
        .map(({ node }) => node)
        .forEach(node => {
          /*
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
          */

          languages.forEach(({ value }) => {
            if (value !== node.frontmatter.language) {
              return
            }
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
          })
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
