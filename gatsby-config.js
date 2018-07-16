module.exports = {
  pathPrefix: '/gatsby-starter-location-github',
  siteMetadata: {
    language: {
      fallback: 'en'
    },
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8
      }
    }
  ]
}
