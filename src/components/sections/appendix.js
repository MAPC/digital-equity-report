import React from "react";
import AppendixAccordion from "../accordions/appendixAccordion";
import { ParallaxBanner } from 'react-scroll-parallax';

const Appendix = () => {

  return (
    <div>
      <div className="section">
        <ParallaxBanner
          layers={[{ image: 'https://source.unsplash.com/gTyHuIDjUH0/4013x1923', speed: -30 }]}
          style={{height: "24rem", width: "100vw"}}
          className="fullbleed" 
        />
      </div>
      <div className="section section-bottom">
        <h2>Appendix</h2>
        <AppendixAccordion />
      </div>
    </div>
  )
}

export default Appendix