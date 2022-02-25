import React, { useEffect, useState, useRef } from "react";

const ReportMenu = ({isActive, setActive}) => {


  const menuData = [
    {link: "summary", title: "Executive Summary"},
    {link: "process", title: "Planning Process"},
    {link: "history", title: "History & Background"},
    {link: "existing-conditions", title: "Existing Conditions"},
    {link: "assessment", title: "Community Needs Assessment"},
    {link: "actions", title: "Actions To Take"},
    {link: "appendix", title: "Appendix"},
    {link: "literature-review", title: "Literature Review"}
  ]
  
  const menuLinks = menuData.map((element, i) => {
    return <a key={i} href={"#" + element.link} onClick={() => setActive(element.link)} className={isActive === element.link ? "report-menu__link active" : "report-menu__link"}>
        {element.title}
      </a>
  })
  
  return (
    <div className="report-menu">
      {menuLinks}
    </div>
  )
}

export default ReportMenu