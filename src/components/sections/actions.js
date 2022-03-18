import React, { useEffect, useState, useRef } from "react";
import ActionsAccordion from "../accordions/actionsAccordion"
import { ParallaxBanner } from 'react-scroll-parallax';

const Actions = () => {

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
        <h2>Actions<br/>To Take</h2>
        <p>Below are actions that can be taken to address digital access and equity challenges facing our three communities. These recommendations range from immediate, intermediate, and long-term investments that can be made. These actions can build on each other to better and more sustainably connect residents and individuals in these communities.</p>
        <ActionsAccordion />
      </div>
    </div>
  )
}

export default Actions