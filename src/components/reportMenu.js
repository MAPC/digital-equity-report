import React from "react";
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const ReportMenu = ({isActive, setActive, setTabIndex, setAssessIndex}) => {


  const menuData = [
    {type: "main", link: "summary", title: "Executive Summary"},
    {type: "main", link: "process", title: "Process"},
    {type: "main", link: "history", title: "History & Background"},
    {type: "main", link: "existing-conditions", title: "Existing Conditions"},
    {type: "sub-tab", link: "existing-conditions-tabs", title: "Connection & Access", tab: 0, parent: "existing-conditions", callback: setTabIndex},
    {type: "sub-tab", link: "existing-conditions-tabs", title: "Devices & Literacy", tab: 1, parent: "existing-conditions", callback: setTabIndex},
    {type: "sub-tab", link: "existing-conditions-tabs", title: "Service & Affordability", tab: 2, parent: "existing-conditions", callback: setTabIndex},
    {type: "sub-tab", link: "existing-conditions-tabs", title: "Infrastructure", tab: 3, parent: "existing-conditions", callback: setTabIndex},
    {type: "main", link: "assessment", title: "Community Needs Assessment"},
    {type: "sub-tab", link: "findings-tabs", title: "Access", tab: 0, parent: "assessment", callback: setAssessIndex},
    {type: "sub-tab", link: "findings-tabs", title: "Literacy", tab: 1, parent: "assessment", callback: setAssessIndex},
    {type: "sub-tab", link: "findings-tabs", title: "Device", tab: 2, parent: "assessment", callback: setAssessIndex},
    {type: "main", link: "actions", title: "Actions To Take"},
    {type: "sub", link: "immediate", title: "Immediate", parent: "actions"},
    {type: "sub", link: "intermediate", title: "Intermediate", parent: "actions"},
    {type: "sub", link: "longterm", title: "Longterm", parent: "actions"},
    {type: "main", link: "appendix", title: "Appendix"}
  ]

  const menuLinks = menuData.map((element, i) => {
    if (element.type === "main") {
      return <AnchorLink key={i} to={`#` + element.link} onClick={() => setActive(element.link)} className={isActive === element.link ? "report-menu__link active" : "report-menu__link"}>
        {element.title}
      </AnchorLink>
    } else if (element.type === "sub-tab") {
      return <AnchorLink key={i} to={`#` + element.link} onAnchorLinkClick={() => handleTabsChange(element.tab, element.callback)} className={isActive !== element.parent ? "report-menu__sublink hidden" : "report-menu__sublink" }>{element.title}</AnchorLink>
    } else if (element.type === "sub") {
      return <AnchorLink key={i} to={`#` + element.link} className={isActive !== element.parent ? "report-menu__sublink hidden" : "report-menu__sublink" }>{element.title}</AnchorLink>
    } else {
      return undefined;
    }
  })

  const handleTabsChange = (index, callback) => {
    callback(index);
  };

  return (
    <div className="report-menu">
      {menuLinks}
    </div>
  )
}

export default ReportMenu