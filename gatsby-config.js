module.exports = {
  pathPrefix: "/digital-equity-report",
  siteMetadata: {
    title: "Digital Equity Report",
    titleTemplate: "%s · The Real Hero",
    description: "Digital Equity for all is achievable.",
    url: "https://mapc.github.io/digital-equity-report",
    image: "/favicon.ico",
    twitterUsername: "@mapc",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-9TJ1KGCJ7T"
        ],
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
  ],
};