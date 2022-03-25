import React from "react";
import { Title, Link, Meta } from "react-head";
import hero from "../../images/background.jpg"

const Seo = () => (
  <>
    <Title>Digital Equity Report</Title>
    <Meta name="description" content="This site is an online report on digital access and equity for Everett, Chelsea, and Revere. Digital equity for all is achievable." />
    <Meta name="url" content="https://mapc.github.io/digital-equity-report/" />
    <Meta name="image" content={hero} />
  </>
);

export default Seo;
