'use strict'

try {
  const { themeType, themeName } = require('./custom/config.js')
  let themeDir
  switch (themeType) {
    case 'custom':
      themeDir = `${__dirname}/custom/scss`
      break

    case 'bootswatch':
      if (themeName) {
        themeDir = `${__dirname}/node_modules/bootswatch/dist/${themeName}`
        break
      }

    default:
      themeDir = `${__dirname}/scss/default`
  }

  module.exports = {
    pathPrefix: '/gatsby-starter-location-github',
    siteMetadata: {
      language: {
        fallback: 'en'
      }
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-sass',
        options: {
          includePaths: [themeDir, `${__dirname}/node_modules/bootstrap`],
          precision: 8 // required by bootstrap
        }
      },
      'gatsby-plugin-purgecss',
      'gatsby-transformer-json',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'data',
          path: `${__dirname}/custom/data/`
        }
        /*
      },
      {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
          analyzerPort: 8008,
        }
      */
      }
    ]
  }
} catch (e) {
  console.error(
    `Did you forget to create the ${__dirname}/custom/config.js file?`
  )
  console.error(e)
}
