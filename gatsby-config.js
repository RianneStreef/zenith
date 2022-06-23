module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-CN0JQ68GS4"],
        pluginConfig: {
          head: true,
        },
        enableWebVitalsTracking: true,
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.jsx"),
      },
    },
  ],
};
