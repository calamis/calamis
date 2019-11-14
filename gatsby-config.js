/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
  	logo: `x`,
    company: `Xalamis`,
    author: `Christian Alamis`,
    siteUrl: `https://www.xalamis.co`,
    heroDesc: `A Digital Product design & development studio`,
    description: `We are a product design and development company`,
  },
  plugins: [
  `gatsby-plugin-sass`
  ],
  pathPrefix: "/calamis"
}