# Digital Equity Plan: Everett, Chelsea, & Revere

This [site](https://mapc.github.io/digital-equity-report/) is a digital toolkit created to share the digital access and equity plans developed for Everett, Chelsea, and Revere.

## Development

This site was built with [Gatsby](https://www.gatsbyjs.com/) and uses `npm` for package management. Install the Gatsby CLI with `npm i -g gatsby-cli`, then install local dependencies with `npm install`. Run the site in development with `gatsby develop` and clear the cache with `gatsby clean`. Create working branches off of the `develop` branch, then merge commits from `develop` into `main` when ready to deploy to production.

The toolkit consists of 22 data visualizations, made with Tableau, Mapbox, and QGIS. The repo for the FCC Reported Provider Coverage map can be found [here](https://github.com/MAPC/fcc-map) and deployed to GitHub pages as a standalone viz [here](https://mapc.github.io/fcc-map/). Use the login details on [Dashlane](https://app.dashlane.com/login) to access the Data Services' [Tableau Public](https://public.tableau.com/s/) account.

## Deployment

This site is built from the `gh-pages` branch. To deploy changes, push code to the `main` branch, pull down changes, then run `npm run deploy`.
