import React, { useEffect, useState, useRef } from "react";
import Connection from "../existingConditions/connection";
import Literacy from "../existingConditions/literacy";
import Service from "../existingConditions/service";
import Infrastructure from "../existingConditions/infrastructure";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const ExistingConditions = () => {

  return (
    <div>
      <div className="section" id="tabs">
        <h2>Existing Conditions</h2>
        <Tabs>
          <TabList>
            <Tab><h4>Connection & Access</h4></Tab>
            <Tab><h4>Digital Literacy</h4></Tab>
            <Tab><h4>Service & Affordability</h4></Tab>
            <Tab><h4>Infrastructure</h4></Tab>
          </TabList>

          <TabPanel>
            <Connection />
            <AnchorLink to={`#tabs`} className="anchor__wrapper">
              <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
              <span className="anchor__helper-text">Return to Selection</span>
            </AnchorLink>
          </TabPanel>
          <TabPanel>
            <Literacy />
            <a href="#tabs"><h4>Return to Selection</h4></a>
          </TabPanel>
          <TabPanel>
            <Service />
            <a href="#tabs"><h4>Return to Selection</h4></a>
          </TabPanel>
          <TabPanel>
            <Infrastructure />
            <a href="#tabs"><h4>Return to Selection</h4></a>
          </TabPanel>
        </Tabs> 
      </div>
    </div>
  )
}

export default ExistingConditions