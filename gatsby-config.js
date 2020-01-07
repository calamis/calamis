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
    heroDesc: `A Brand Strategy Design and Web Development Studio`,
    description: `We Help Brands & Businesses succeed in digital world.`,
  },
  plugins: [
  `gatsby-plugin-sass`, `gatsby-plugin-react-helmet`
  ],
  pathPrefix: "/calamis"
}