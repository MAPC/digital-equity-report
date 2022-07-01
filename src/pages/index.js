import React from "react";
import Landing from "../components/Landing";
import "../styles/index.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Seo from "../components/modules/Seo";

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Seo />
      <Landing />
    </ParallaxProvider>
  );
};

export default IndexPage;
