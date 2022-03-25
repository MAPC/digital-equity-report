import React from "react";
import hero from "../../images/background.jpg"
import {Helmet} from "react-helmet";

const Seo = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Digital Equity Report</title>
      <meta name="author" content="Metropolitan Area Planning Council" />
      <meta name="description" content="This site is an online report on digital access and equity for Everett, Chelsea, and Revere. Digital equity for all is achievable." />
      <meta name="keywords" content="fiber, digital, equity, internet, broadband" />
      <meta property="og:title" content="Digital Equity Report" />
      <meta property="og:description" content="This site is an online report on digital access and equity for Everett, Chelsea, and Revere. Digital equity for all is achievable." />
      <meta property="og:image" content={hero} />
      <meta property="og:url" content="https://mapc.github.io/digital-equity-report/" />
      <meta property="og:type" content="website" />
      <meta property="twitter:title" content="Digital Equity Report" />
      <meta property="twitter:description" content="This site is an online report on digital access and equity for Everett, Chelsea, and Revere. Digital equity for all is achievable." />
      <meta property="twitter:image" content={hero} />

    </Helmet>
  </>
);

export default Seo;
