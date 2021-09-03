module.exports = {
  siteMetadata: {
    title: `Lovely cats`,
    description: `Share the photos of the lovely cats`,
    author: `@catguy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ragdolls image gallery`,
        short_name: `Ragdolls image`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `browser`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
