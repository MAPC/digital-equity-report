import React, { useEffect, useState, useRef } from "react";

const ReportMenu = ({isActive, setActive, tabIndex, setTabIndex}) => {


  const menuData = [
    {type: "main", link: "summary", title: "Executive Summary"},
    {type: "main", link: "background", title: "Background"},
    {type: "main", link: "history", title: "History & Background"},
    {type: "main", link: "existing-conditions", title: "Existing Conditions"},
    {type: "sub", title: "Connection & Access", tab: 0, parent: "existing-conditions"},
    {type: "sub", title: "Service & Affordability", tab: 1, parent: "existing-conditions"},
    {type: "sub", title: "Infrastructure", tab: 2, parent: "existing-conditions"},
    {type: "main", link: "assessment", title: "Community Needs Assessment"},
    {type: "main", link: "actions", title: "Actions To Take"},
    {type: "main", link: "appendix", title: "Appendix"},
    {type: "main", link: "literature-review", title: "Literature"}
  ]

  const menuLinks = menuData.map((element, i) => {
    if (element.type === "main") {
      return <a key={i} href={"#" + element.link} onClick={() => setActive(element.link)} className={isActive === element.link ? "report-menu__link active" : "report-menu__link"}>
        {element.title}
      </a>
    } else if (element.type === "sub") {
      return <a key={i} href={"#" + element.parent} onClick={() => handleClick(element.tab)} className={isActive !== element.parent ? "report-menu__sublink hidden" : "report-menu__sublink" }>{element.title}</a>
    } else {
      return undefined;
    }
  })
  
  function handleClick (index) {
    setTabIndex(index);
    console.log("tabIndex", tabIndex);
  }

  return (
    <div className="report-menu">
      {menuLinks}
    </div>
  )
}

export default ReportMenu