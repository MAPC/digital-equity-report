import React, { useEffect, useState, useRef } from "react";
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const ReportMenu = ({isActive, setActive, tabIndex, setTabIndex}) => {


  const menuData = [
    {type: "main", link: "summary", title: "Executive Summary"},
    {type: "main", link: "process", title: "Process"},
    {type: "main", link: "history", title: "History & Background"},
    {type: "main", link: "existing-conditions", title: "Existing Conditions"},
    {type: "sub", link: "existing-conditions-tabs", title: "Connection & Access", tab: 0, parent: "existing-conditions"},
    {type: "sub", link: "existing-conditions-tabs", title: "Service & Affordability", tab: 1, parent: "existing-conditions"},
    {type: "sub", link: "existing-conditions-tabs", title: "Infrastructure", tab: 2, parent: "existing-conditions"},
    {type: "main", link: "assessment", title: "Community Needs Assessment"},
    {type: "main", link: "actions", title: "Actions To Take"},
    {type: "main", link: "appendix", title: "Appendix"}
  ]

  const menuLinks = menuData.map((element, i) => {
    if (element.type === "main") {
      return <AnchorLink key={i} to={`#` + element.link} onClick={() => setActive(element.link)} className={isActive === element.link ? "report-menu__link active" : "report-menu__link"}>
        {element.title}
      </AnchorLink>
    } else if (element.type === "sub") {
      return <AnchorLink key={i} to={`#` + element.link} onAnchorLinkClick={() => handleTabsChange(element.tab)} className={isActive !== element.parent ? "report-menu__sublink hidden" : "report-menu__sublink" }>{element.title}</AnchorLink>
    } else {
      return undefined;
    }
  })

  const handleTabsChange = (index) => {
    setTabIndex(index);
    console.log("tabIndex", tabIndex);
  };

  return (
    <div className="report-menu">
      {menuLinks}
    </div>
  )
}

export default ReportMenu