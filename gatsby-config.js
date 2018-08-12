// const { name, headHash, version, versionTag, versionHash } = require('./utils')
// const version = require('./utils')

// console.log(headHash, version, versionHash)
// throw 'ciao'

// console.log(new Date().toISOString())
// console.log('DIRNAME:', __dirname)
// console.log('CWD:', process.cwd())

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

  console.log('OKOKOK')
  const { ret, Doit } = require('npm-git-links')
  // console.log('DOIT', Doit)

  const aa = new Doit(ret.repository)
  ret.repoUrl = aa.browse

  aa.version = ret.headHash
  ret.headUrl = aa.browse

  aa.version = ret.versionHash
  ret.versionUrl = aa.browse

  console.log('RET:', ret)

  /*
  console.log('AA1', aa1)
  console.log('AA2', aa2)
  console.log('AA3', aa3)
  */

  // const version = ret

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
      {
        resolve: 'gatsby-plugin-sass',
        options: {
          includePaths: [themeDir, `${cwd}/node_modules/bootstrap`],
          precision: 8 // required by bootstrap
        }
      },
      'gatsby-plugin-purgecss',
      'gatsby-transformer-json',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'data',
          path: `${cwd}/custom/data/`
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
  console.error(`Did you forget to create the ${cwd}/custom/config.js file?`)
  console.error(e.toString())
  // throw e
}
