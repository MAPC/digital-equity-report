import React, { useEffect, useState, useRef } from "react";
import Connection from "../existingConditions/connection";
import Literacy from "../existingConditions/literacy";
import Service from "../existingConditions/service";
import Infrastructure from "../existingConditions/infrastructure";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby";

const ExistingConditions = ({tabIndex, setTabIndex}) => {

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <div>
      <div className="section section-bottom" id="tabs">
        <h2>Existing Conditions</h2>
        <Tabs 
          selectedIndex={tabIndex} 
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab><h4>Connection & Access</h4></Tab>
            <Tab><h4>Service & Affordability</h4></Tab>
            <Tab><h4>Infrastructure</h4></Tab>
          </TabList>

          <TabPanel>
            <Connection />
            <AnchorLink to={`#tabs`} className="anchor">
              <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
              <span className="anchor__helper-text">Return to Selection</span>
            </AnchorLink>
          </TabPanel>
          <TabPanel>
            <Service />
            <AnchorLink to={`#tabs`} className="anchor">
              <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
              <span className="anchor__helper-text">Return to Selection</span>
            </AnchorLink>
          </TabPanel>
          <TabPanel>
            <Infrastructure />
            <AnchorLink to={`#tabs`} className="anchor">
              <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
              <span className="anchor__helper-text">Return to Selection</span>
            </AnchorLink>
          </TabPanel>
        </Tabs> 
      </div>
    </div>
  )
}

export default ExistingConditions