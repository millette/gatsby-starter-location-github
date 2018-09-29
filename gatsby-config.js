const cwd = process.cwd()

try {
  const { themeType, themeName } = require('./custom/config.js')
  let themeDir
  switch (themeType) {
    case 'custom':
      themeDir = `${cwd}/custom/scss`
      break

    case 'bootswatch':
      if (themeName) {
        themeDir = `${cwd}/node_modules/bootswatch/dist/${themeName}`
        break
      }

    // eslint-disable-next-line no-fallthrough
    default:
      themeDir = `${cwd}/scss/default`
  }

  const { ret, Doit } = require('npm-git-links')

  const aa = new Doit(ret.repository)
  if (!ret.dev) {
    ret.dev = false
  }
  ret.repoUrl = aa.browse

  aa.version = ret.headHash
  ret.headUrl = aa.browse

  if (ret.versionHash) {
    aa.version = ret.versionHash
    ret.versionUrl = aa.browse
  } else {
    ret.versionHash = false
    ret.versionUrl = false
  }
  if (!ret.versionTag) {
    ret.versionTag = 'dev'
  }

  const serialize = ({ query: { site, allMarkdownRemark } }) =>
    allMarkdownRemark.edges.map(({ node }) => ({
      ...node.frontmatter,
      description: node.excerpt,
      url: `${site.siteMetadata.siteUrl}${node.frontmatter.language}${
        node.fields.slug
      }`,
      guid: `${site.siteMetadata.siteUrl}${node.frontmatter.language}${
        node.fields.slug
      }`,
      custom_elements: [{ 'content:encoded': node.html }]
    }))

  module.exports = {
    pathPrefix: '/gatsby-starter-location-github',
    siteMetadata: {
      siteUrl: 'http://dev.rollodeqc.com/',
      title: 'RoLLodeQc',
      description: 'Votre source de développeurs locaux',
      version: ret,
      language: {
        fallback: 'en'
      }
    },
    plugins: [
      /*
      {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
          production: true
        }
      },
      */
      'gatsby-plugin-catch-links',
      {
        resolve: 'gatsby-plugin-feed',
        options: {
          query: `
            {
              site {
                siteMetadata {
                  siteUrl
                  description
                  title
                }
              }
            }
          `,
          feeds: [
            {
              serialize,
              query: `
                {
                  allMarkdownRemark(
                    limit: 20
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                      frontmatter: {
                        language: { eq: "fr" }
                        title: { ne: "" }
                      }
                    }
                  ) {
                    edges {
                      node {
                        excerpt(pruneLength: 400)
                        html
                        fields { slug }
                        frontmatter {
                          title
                          date
                          language
                        }
                      }
                    }
                  }
                }
              `,
              output: '/fr/rss.xml'
            }
          ]
        }
      },
      {
        resolve: 'gatsby-plugin-feed',
        options: {
          query: `
            {
              site {
                siteMetadata {
                  siteUrl
                  description
                  title
                }
              }
            }
          `,
          feeds: [
            {
              serialize,
              query: `
                {
                  allMarkdownRemark(
                    limit: 20
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                      frontmatter: {
                        language: { eq: "en" }
                        title: { ne: "" }
                      }
                    }
                  ) {
                    edges {
                      node {
                        excerpt
                        html
                        fields { slug }
                        frontmatter {
                          title
                          date
                          language
                        }
                      }
                    }
                  }
                }
              `,
              output: '/en/rss.xml'
            }
          ]
        }
      },
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'data',
          path: `${cwd}/custom/data/`
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'img',
          path: `${cwd}/src/assets/images/`
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'blog',
          path: `${cwd}/custom/blog/`
        }
      },
      'gatsby-transformer-json',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-smartypants',
            {
              resolve: 'gatsby-remark-external-links',
              options: {
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            },
            {
              resolve: 'gatsby-remark-images',
              options: {
                // showCaptions: true,
                withWebp: true,
                // wrapperStyle: 'width: 100%',
                maxWidth: 1100
              }
            }
          ]
        }
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-plugin-sass',
        options: {
          includePaths: [themeDir, `${cwd}/node_modules/bootstrap`],
          precision: 8 // required by bootstrap
        }
      },
      'gatsby-plugin-purgecss'
      /*
From:  /home/millette/gml/v2/gatsby-starter-location-github/node_modules/react-bootstrap-typeahead/css/Typeahead.css
 Removed Selectors:  [ '.rbt-menu-pagination-option',
  '.rbt .rbt-input-main::-ms-clear',
  '.rbt-input-multi',
  '.rbt-input-multi.focus',
  '.rbt-input-multi.form-control[disabled]',
  '.rbt-input-multi input::-moz-placeholder',
  '.rbt-input-multi input:-ms-input-placeholder',
  '.rbt-input-multi input::-webkit-input-placeholder',
  '.rbt-input-multi .rbt-input-wrapper',
  '.rbt-input-multi .rbt-input-main',
  '.rbt-input-multi .rbt-input-hint-container',
  '.rbt-input-multi.input-lg .rbt-input-main',
  ' .rbt-input-multi.form-control-lg .rbt-input-main',
  '.rbt-input-multi.input-sm .rbt-input-main',
  ' .rbt-input-multi.form-control-sm .rbt-input-main',
  '.rbt-close-lg',
  '.rbt-token',
  '.rbt-token-disabled',
  '.rbt-token-removeable',
  '.rbt-token-active',
  '.rbt-token .rbt-token-remove-button',
  '.rbt-loader',
  '.rbt-loader-lg',
  '.rbt-aux-lg',
  '.has-aux .rbt-input',
  '.rbt-highlight-text',
  '.input-group > .rbt',
  '.input-group > .rbt .rbt-input-hint-container',
  '.input-group > .rbt .rbt-input-hint',
  '.input-group > .rbt .rbt-aux',
  '.input-group > .rbt:not(:first-child) .form-control',
  '.input-group > .rbt:not(:last-child) .form-control',
  '.has-error .rbt-input-multi.focus',
  '.has-warning .rbt-input-multi.focus',
  '.has-success .rbt-input-multi.focus' ]

From:  /home/millette/gml/v2/gatsby-starter-location-github/node_modules/react-bootstrap-typeahead/css/Typeahead-bs4.css
 Removed Selectors:  [ '.rbt-input-multi.focus',
  '.rbt-input-multi.is-invalid.focus',
  '.rbt-input-multi.is-valid.focus',
  '.rbt-input-multi input::-moz-placeholder',
  '.rbt-input-multi input:-ms-input-placeholder',
  '.rbt-input-multi input::-webkit-input-placeholder',
  '.rbt-input-multi .rbt-input-main',
  '.rbt-input-multi.form-control-lg .rbt-input-main',
  '.rbt-input-multi.form-control-sm .rbt-input-main',
  '.input-group > .rbt .rbt-input-hint-container' ]
      */
      /*
      {
        resolve: 'gatsby-plugin-purgecss',
        options: {
          printRejected: true
        }
      }
      */
      /*
      {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
          analyzerPort: 8008,
        }
      */
    ]
  }
} catch (e) {
  console.error(`Did you forget to create the ${cwd}/custom/config.js file?`)
  console.error(e.toString())
  // throw e
}
