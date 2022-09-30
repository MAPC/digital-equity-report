module.exports = {
  pathPrefix: "/digital-equity-report",
  siteMetadata: {
    title: "Digital Equity Report",
    titleTemplate: "%s · The Real Hero",
    description: "Digital Equity for all is achievable.",
    url: "https://mapc.github.io/digital-equity-report",
    image: "src/images/favicon.ico",
    twitterUsername: "@mapc",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-9TJ1KGCJ7T"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Digital Equity Plan`,
        short_name: `Digital Equity Plan`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.ico`,
      },
    },
  ],
};
