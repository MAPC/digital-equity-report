import React from "react";
import { PopupProvider } from "../components/contexts/popupContext";
import ReportWrapper from "../components/reportWrapper";
import "../styles/index.scss";
import { ParallaxProvider } from 'react-scroll-parallax';
import Seo from "../components/modules/seo";

const Report = () => {

  return (
    <ParallaxProvider>
      <PopupProvider>
        <Seo />
        <ReportWrapper />
      </PopupProvider>
    </ParallaxProvider>
  )
}

export default Report