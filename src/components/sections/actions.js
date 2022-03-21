import React, { useEffect, useState, useRef } from "react";
import ActionsAccordion from "../accordions/actionsAccordion"

const Actions = () => {

  return (
    <div>
      <div className="section section-bottom">
        <h2>Actions<br/>To Take</h2>
        <p>Below are actions that can be taken to address digital access and equity challenges facing our three communities. These recommendations range from immediate, intermediate, and long-term investments that can be made. These actions can build on each other to better and more sustainably connect residents and individuals in these communities.</p>
        <ActionsAccordion />
      </div>
    </div>
  )
}

export default Actions