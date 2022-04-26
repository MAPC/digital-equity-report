import React from "react";
import { PopupProvider } from "../components/contexts/popupContext";
import ReportWrapper from "../components/reportWrapper";
import "../styles/index.scss";
import { ParallaxProvider } from 'react-scroll-parallax';
import Seo from "../components/modules/seo";
import { Helmet } from "react-helmet";

const Report = () => {

  return (
    <ParallaxProvider>
      <PopupProvider>
        <Helmet>
          <script
            type="module" 
            src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
          ></script>
        </Helmet>
        <Seo />
        <ReportWrapper />
      </PopupProvider>
    </ParallaxProvider>
  )
}

export default Report