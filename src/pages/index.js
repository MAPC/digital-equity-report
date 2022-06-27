import React from "react";
import Landing from "../components/landing";
import "../styles/index.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Seo from "../components/modules/seo";

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Seo />
      <Landing />
    </ParallaxProvider>
  );
};

export default IndexPage;
