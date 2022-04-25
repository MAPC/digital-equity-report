import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TimelineAccordion from "../accordions/timelineAccordion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

const Process = () => {
  
  const [goalsTab, setGoalsTab] = useState(0);

  const handleTabsChange = (index) => {
    setGoalsTab(index);
  };
  return (
    <div>
      <div className="section">
        <h2>Process</h2>
        <h3>Community Advisory Team</h3>
        <p>To achieve outcomes that enhance the wellbeing of a community, a plan must include that community’s perspectives and participation. This at the bedrock of any design that centers the user and the user’s needs. It is also the respectful way to work with communities, and in particular, communities that have historically been marginalized.  </p>
        <p>MAPC is very grateful to the community advisory teams that met throughout this planning process to provide feedback and respond to proposed strategies and data analysis. The teams were extremely helpful in distributing and completing the community needs assessment. It provided perspectives that informed the plan’s vision and goals and shaped the focus and framing of this report. Ultimately, it will be this set of stakeholders that will implement the goals of the plan.</p>
        <AnchorLink 
          to={`#appendix`} 
          className="anchor"
        >
          <FontAwesomeIcon icon={faArrowAltCircleDown} className="anchor__icon" />
          <span className="anchor__helper-text"><h4>Community Advisory Members</h4></span>
        </AnchorLink>
      </div>
      <div className="section">
        <h3>Project Goals</h3>
        <p>Local governments rarely understand their role in digital access: few have strategies for providing fast, reliable, and affordable internet to residents and businesses. Revere, Chelsea, and Everett are leading the Commonwealth in developing a plan that is both scaled to fit the capacity of municipal staff and that leverages a strong network of local, state, and federal public, private, educational, and nonprofit resources. MAPC has structured this plan to be a template for municipalities and their partner stakeholders.  </p>
        <p>The plan goals are as follows:</p>
        <Tabs
          selectedIndex={goalsTab} 
          onSelect={(index) => handleTabsChange(index)}
          id="plan-goals-tabs"
        >
          <TabList>
            <Tab><h4>Advise capital investment​​ </h4></Tab>
            <Tab><h4>Inform policy decisions​​ </h4></Tab>
            <Tab><h4>Identify program needs  </h4></Tab>
          </TabList>
          <TabPanel>
            <div className="section">
              <p>The American Rescue Plan Act and the Infrastructure Investment and Jobs Act have created resources for capital investment in broadband infrastructure. Municipalities will have discretionary resources, as well as the opportunity to apply for state and federal grants to invest in infrastructure. This plan aims to provide a framework within which municipalities can make sound decisions for that future investment. </p>
              <FontAwesomeIcon 
                icon={faArrowCircleRight} 
                className="anchor__icon" 
                onClick={() => setGoalsTab(goalsTab + 1)} 
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="section">
              <p>While not involved in the direct provision of internet services, municipalities have significant regulatory power in the permitting and licensing of internet service providers and in technologies that enable internet access. This includes administering cable franchise agreements, permitting 5G infrastructure, and licensing right-of-way use for cable and fiber infrastructure. This plan shows how that regulatory power can be used to improve digital access in a community.</p>
              <FontAwesomeIcon 
                icon={faArrowCircleRight} 
                className="anchor__icon" 
                onClick={() => setGoalsTab(goalsTab + 1)} 
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="section">
              <p>Municipalities can also fund or participate in programs that address the social and systemic barriers that inhibit the adoption or use of broadband internet. Establishing discretionary funding sources, convening critical stakeholders, and collecting community data are all in the purview of municipal activity. This plan identifies programming that can build local capacity and help close the digital divide.  </p>
            </div>
          </TabPanel>
        </Tabs> 
      </div>
      <div className="section section-bottom">
        <h3>Plan Timeline</h3>
        <TimelineAccordion />
      </div>
    </div>
  )
}

export default Process