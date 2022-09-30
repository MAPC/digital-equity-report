import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TimelineAccordion from "../accordions/TimelineAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

const Process = () => {
  const [goalsTab, setGoalsTab] = useState(0);

  const handleTabsChange = (index) => {
    setGoalsTab(index);
  };
  return (
    <div>
      <div className="section">
        <h2>Digital Equity Planning Process </h2>
        <h3>Project Purpose</h3>
        <p>
          The purpose of this report is to establish a framework for
          understanding and addressing the digital access challenges in Chelsea,
          Everett, and Revere. While Massachusetts already has a strong track
          record of tackling rural broadband issues, not as much attention has
          been paid to underserved urban communities, especially Gateway Cities
          (defined by the State Legislature as a group of 26 midsize urban
          centers that anchor regional economies around the state). There is
          little guidance and few proven strategies for closing the gaps in
          these communities, necessitating a planning process that brings in new
          information and new approaches. Given the challenges facing these
          municipalities and their residents, it is also particularly important
          to develop a plan centered around user needs and capabilities and
          scaled to fit the capacity of municipal staff and other local
          implementers.
        </p>
        <p>
          MAPC envisions that the participating municipalities can use the
          findings and recommendations of this report for three major areas of
          work: advising capital investments, supporting program design, and
          informing policy change. We also hope that this report can serve as a
          template for other Gateway Cities interested in developing digital
          access plans, so they can save time and effort on such planning
          processes.
        </p>
      </div>
      <div className="section">
        <h3>Project Goals</h3>
        <p>
          Local governments rarely understand their role in digital access: few
          have strategies for providing fast, reliable, and affordable internet
          to residents and businesses. Revere, Chelsea, and Everett are leading
          the Commonwealth in developing a plan that is both scaled to fit the
          capacity of municipal staff and that leverages a strong network of
          local, state, and federal public, private, educational, and nonprofit
          resources. MAPC has structured this plan to be a template for
          municipalities and their partner stakeholders.{" "}
        </p>
        <p>The plan goals are as follows:</p>
        <Tabs
          selectedIndex={goalsTab}
          onSelect={(index) => handleTabsChange(index)}
          id="plan-goals-tabs"
        >
          <TabList>
            <Tab>
              <h4>Advise capital investment</h4>
            </Tab>
            <Tab>
              <h4>Inform policy decisions</h4>
            </Tab>
            <Tab>
              <h4>Identify program needs </h4>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="section">
              <p>
                The American Rescue Plan Act and the Infrastructure Investment
                and Jobs Act have created substantial resources for capital
                investment in broadband infrastructure. Massachusetts is setting
                up a $50 million Digital Equity Fund to help address gaps in
                digital equity. Municipalities will have discretionary
                resources, as well as the opportunity to apply for state and
                federal grants to invest in infrastructure. There are many
                things these resources could be used for: fiber optic networks,
                wireless access points, subscription subsidies, devices, and
                more. This plan aims to provide a framework within which
                municipalities can make sound decisions for future investments.
              </p>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="anchor__icon"
                onClick={() => setGoalsTab(goalsTab + 1)}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="section">
              <p>
                Municipalities have modest regulatory power in the permitting
                and licensing of internet service providers and in technologies
                that enable internet access. This includes administering cable
                franchise agreements, permitting 5G infrastructure, and
                licensing right-of-way use for cable and fiber infrastructure.
                This plan shows how that regulatory power can be used to improve
                digital access in a community. Municipalities can also be
                powerful advocates for policy changes at the state level; the
                findings in this plan can help to inform this advocacy, and the
                recommendations include changes that must be made by legislative
                or regulatory entities.
              </p>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="anchor__icon"
                onClick={() => setGoalsTab(goalsTab + 1)}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="section">
              <p>
                Achieving and maintaining digital equity will be an ongoing
                effort, not a one-time action. As technology changes and needs
                evolve, many communities will continue to face social and
                systemic barriers to digital access. Municipalities have a key
                role to play in funding, convening, and coordinating
                cross-sectoral and multi-organizational efforts in this space.
                This plan identifies programming that can build local capacity
                and help close the digital divide.
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="section">
        <h3>Project Goals</h3>
        <p>
          MAPC firmly believes that to achieve outcomes that enhance the
          wellbeing of a community, a plan must include that community’s
          perspectives and participation. This is the bedrock of any design that
          centers users and their needs. It is also the respectful way to work
          with communities, and in particular, communities that have
          historically been marginalized.
        </p>
        <p>
          This plan has benefitted greatly from the community advisory teams
          that met throughout this process to provide feedback and respond to
          proposed strategies and data analysis. The teams were extremely
          helpful in distributing and completing the community needs assessment.
          It provided perspectives that informed the plan’s vision and goals and
          shaped the focus and framing of this plan. These stakeholders will
          also have a role to play in implementation; they should be actively
          engaged by municipal staff as they move the plan into action.
        </p>
        <AnchorLink to={`#appendix`} className="anchor">
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            className="anchor__icon"
          />
          <span className="anchor__helper-text">
            <h4>Community Advisory Members</h4>
          </span>
        </AnchorLink>
      </div>
      <div className="section section-bottom">
        <h3>Plan Timeline</h3>
        <TimelineAccordion />
      </div>
    </div>
  );
};

export default Process;
