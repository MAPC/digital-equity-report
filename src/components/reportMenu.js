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
  
  const menuLinks = menuData.map((element, i) => {return <div key={i}><a href={"#" + element.link} onClick={() => setActive(element.link)} className={isActive === element.link ? "active" : ""}>{element.title}</a><br/></div>})
  
  return (
    <div className="report-content__menu">
      {menuLinks}
    </div>
  )
}

export default ReportMenu