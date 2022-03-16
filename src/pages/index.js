import React from "react";
import { Link } from "gatsby"
import Landing from "../components/landing";
import Report from "./report";
import ReactMarkdown from 'react-markdown';
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
