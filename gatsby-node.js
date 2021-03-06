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
                set
              }
            }
          }
        }
      }
    `).then(result => {
      if (!result.data || !result.data.allMarkdownRemark) {
        return resolve()
      }

      result.data.allMarkdownRemark.edges
        .map(({ node }) => node)
        .forEach(node => {
          languages.forEach(({ value }) => {
            if (value !== node.frontmatter.language) {
              return
            }
            createPage({
              path: `/${value}${node.fields.slug}`,
              component: path.resolve(`./src/templates/blog-post.js`),
              context: {
                slug: node.fields.slug,
                languageSet: node.frontmatter.set || '',
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
  // FIXME: 404 language bug?
  // see https://github.com/gatsbyjs/gatsby/issues/5129
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
