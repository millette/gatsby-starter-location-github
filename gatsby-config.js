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

  module.exports = {
    pathPrefix: '/gatsby-starter-location-github',
    siteMetadata: {
      version: ret,
      language: {
        fallback: 'en'
      }
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-json',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'data',
          path: `${cwd}/custom/data/`
        }
      },
      {
        resolve: 'gatsby-plugin-sass',
        options: {
          includePaths: [themeDir, `${cwd}/node_modules/bootstrap`],
          precision: 8 // required by bootstrap
        }
      },
      'gatsby-plugin-purgecss'
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
