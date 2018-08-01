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
        precision: 8 // required by bootstrap
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
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
