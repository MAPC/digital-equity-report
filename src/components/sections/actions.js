import React, { useEffect, useState, useRef } from "react";
import ActionsAccordion from "../accordions/actionsAccordion"

const Actions = () => {

  return (
    <div>
      <div className="section section-bottom">
        <h2>Actions<br/>To Take</h2>
        <h3>Guiding Principles for Community Digital Access and Equity</h3>
        <p>On its way to establishing short, medium, and long-term recommendations, MAPC and the community advisory committees involved in this process identified a set of guiding principles designed to achieve a community vision for digital access and equity. The recommendations in the following section are designed to be responsive to these principles, and any future planning efforts should revisit and build upon these established principles.  </p>
        <ul style={{marginTop: 0, listStyle: "circle"}}>
          <li style={{listStyle: "circle", marginLeft: "1.2rem"}}>Remove barriers that prevent universal access to reliable and high speed (100/100 mbps) internet.</li>
          <li style={{listStyle: "circle", marginLeft: "1.2rem"}}>Augment the capacity of key stakeholders such as IT departments, school districts, libraries, community-based organizations, and municipal staff to address the digital divide.</li>
          <li style={{listStyle: "circle", marginLeft: "1.2rem"}}>Ensure all residents who desire to improve their digital / technology literacy have a pathway to educational opportunities at a range of skill levels, offered in community appropriate languages and settings.</li>
          <li style={{listStyle: "circle", marginLeft: "1.2rem"}}>Promote competition among internet service providers offering broadband service.</li>
        </ul>
        <p>Below are actions that can be taken to address digital access and equity challenges facing our three communities. These recommendations range from immediate, intermediate, and long-term investments that can be made. These actions can build on each other to better and more sustainably connect residents and individuals in these communities.  </p>
        <ActionsAccordion />
      </div>
    </div>
  )
}

export default Actions