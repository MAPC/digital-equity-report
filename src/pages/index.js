import React from "react";
import Landing from "../components/landing";
import "../styles/index.scss";
import { ParallaxProvider } from 'react-scroll-parallax';

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Landing />
    </ParallaxProvider>
  )
}

export default IndexPage
