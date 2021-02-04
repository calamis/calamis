/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

var proxy = require("http-proxy-middleware");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
  	logo: `x`,
    company: `Xalamis`,
    author: `Christian Alamis`,
    siteUrl: `https://www.xalamis.co`,
    heroTitle: `Next level branding, design & development`,
    title: `Xalamis | A Brand Strategy Design and Web Development Studio`,
    baseUrl: 'http://localhost:8000',
    description: `Focus on your business, and let us take care of your digital presence.`
  },
  developMiddleware: app => { 
    app.use(
      "/contact",
      proxy({
        target: "http://localhost:3000"
      })
    )
  },
  plugins: [
  `gatsby-plugin-sass`, `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: process.env.GA_TRACKING_ID,
    },
  },
  ],
  pathPrefix: "/calamis"
}