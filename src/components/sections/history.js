/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CalloutQuote from "../modules/CalloutQuote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const History = () => {
  const [definitionsTab, setDefinitionsTab] = useState(0);

  const handleTabsChange = (index) => {
    setDefinitionsTab(index);
  };

  return (
    <div>
      <div className="section">
        <h2>History & Background</h2>
        <div className="section-two-col-flex">
          <div className="section-half border-right">
            <h3>Defining "digital equity"</h3>
          </div>
          <div className="section-half">
            <CalloutQuote quote="Digital equity exists when all individuals and communities have the information technology capacity needed for full participation in our society, democracy, and economy.  Digital equity is necessary for civic and cultural participation, employment, lifelong learning, and access to essential services." />
          </div>
        </div>
        <p>
          Achieving digital equity is more than providing decent Wi-Fi. It’s an
          interconnected challenge that includes three main elements: an
          adequate device (computer or tablet) a good broadband connection to
          the internet, and the “digital literacy” necessary to use the internet
          safely, effectively, and confidently. These are the three legs of the
          digital access stool. Unfortunately, many residents in Chelsea,
          Everett, and Revere face chronic, structural, and longstanding
          barriers to full digital access. Solutions and interventions must not
          only resolve isolated challenges but be part of a larger web of
          actions rooted in systemic and social justice.
        </p>
        <Tabs
          selectedIndex={definitionsTab}
          onSelect={(index) => handleTabsChange(index)}
          id="definitions-tabs"
        >
          <TabList>
            <Tab>
              <h4>Device</h4>
            </Tab>
            <Tab>
              <h4>Access</h4>
            </Tab>
            <Tab>
              <h4>Digital Literacy</h4>
            </Tab>
          </TabList>
          <TabPanel>
            <h5>Adequate Computing Device</h5>
            <p>
              To use the internet for critical personal services such as
              education, healthcare, job searches, and other online
              applications, people need a computing device with adequate
              functionality. The proliferation of smartphone technology has
              helped millions gain access to the communications benefits of the
              internet, but smartphones can’t fully substitute for personal
              computing devices such as a laptop, desktop computer, or tablet.
              Students need full-size screens and keyboards for schoolwork. Many
              essential websites or applications are not available or optimized
              for smartphones and phones can be easily lost or damaged. For
              these reasons and others, it is important to ensure residents can
              acquire and maintain a dedicated personal computing device that
              meets their needs.
            </p>
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              className="anchor__icon"
              onClick={() => setDefinitionsTab(definitionsTab + 1)}
            />
          </TabPanel>
          <TabPanel>
            <h5>Affordable, Reliable Broadband Connection</h5>
            <p>
              Users have a good experience on the internet when they can connect
              to online resources and transfer data (both uploads and downloads)
              fast enough to facilitate video conferencing and accomplish other
              tasks with minimal loading time. This requires an internet
              connection that has the bandwidth necessary to support modern web
              applications and services. Digital access suffers when households
              can’t afford a high-speed plan, when connections are unreliable or
              “throttled” by service providers, when in-building wiring or
              hardware (such as modems and routers) is inadequate or outdated,
              or when the needs of multiple users in a household overwhelm the
              available bandwidth. It is essential to ensure that all households
              have access to a connection fast enough to meet their needs, and
              to ensure that this connection is something they can afford
              without sacrificing other essential needs.
            </p>
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              className="anchor__icon"
              onClick={() => setDefinitionsTab(definitionsTab + 1)}
            />
          </TabPanel>
          <TabPanel>
            <h5>
              Digital Literacy Skills to Safely and Effectively Navigate the
              Internet
            </h5>
            <p>
              While many people navigate the internet effectively on a daily
              basis, others are not familiar with how to use the internet and
              digital apps, limiting their access to resources and making them
              vulnerable to scams, misinformation, and malware. The National
              Digital Inclusion Alliance (NDIA) defines digital literacy as “the
              ability to use information and communication technologies to find,
              evaluate, create, and communicate information, requiring both
              cognitive and technical skills.” These skills and knowledge
              encompass the ability to use a computing device, to navigate the
              internet, to be a smart consumer of information, and to avoid
              danger online. Today, such skills are essential to operate a
              device, obtain an email address, apply for a job, communicate with
              a doctor, and connect with family members. Ensuring that all
              residents have these skills requires programs, educational
              materials, and other support that must be tailored to the needs of
              individual communities and subgroups.
            </p>
          </TabPanel>
        </Tabs>
      </div>
      <div className="section">
        <h3>How Does the Internet Function?</h3>
        <p>
          To understand what actions and responsibilities could be taken to
          close the digital divide, it’s important to look at the internet
          ownership model that exists today. As the slides below highlight, the
          internet is comprised of many technologies, each playing a part in
          transferring information as bits across the globe and to your screen.
          Let’s take a journey through the technology of the Internet:
        </p>
        <iframe
          src="https://slides.com/mapc/internet-slides/embed?byline=hidden"
          width="100%"
          height="480"
          title="Internet Slides"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
      <div className="section">
        <h4>Who owns the internet?</h4>
        <p>
          No one “owns” the internet. The technology infrastructure that is used
          to send bits of data across the globe has many different owners and
          many different operators. Various distributed networks with different
          models of ownership, management, and regulation connect to form the
          larger Internet. Some entities own the massive “server farms” on which
          websites and applications live and operate; others own the connections
          between these farms and the portals which link them together; others
          own and operate the wires, fiber optic cables, or satellites that
          connect individual devices to the internet; and some companies exist
          simply to provide that connection. And of course, property owners and
          residents are often responsible for in-building wiring and hardware
          (such as modems) that are the critical final links in the network.
          Understanding the landscape in Metro Boston is essential to planning
          for better connectivity.
        </p>
        <p>
          In the cities of Chelsea, Everett, and Revere, corporate entities own
          and operate almost all the fiber optic lines, cable lines, telephone
          poles, and other physical network infrastructure. These same entities
          are the exclusive Internet Service Providers (ISPs) for households
          using this infrastructure to access the internet.
        </p>
        <p>
          There are also some ISPs such as Starry and netBlazer which lease
          infrastructure from other companies or strategically deploy their own
          physical infrastructure. More information about the service providers
          in Chelsea, Everett, and Revere can be found in the existing
          conditions section.
        </p>
        <div className="section">
          <CalloutQuote
            quote="[Broadband] isn't a luxury; it's now a necessity, like water and electricity."
            byline="- President Joseph Biden"
          />
        </div>
        <p>
          Corporate monopolies on wireline internet connections are not the only
          model for local internet access. As this map of community and
          municipal networks from the Institute for Local Self Reliance shows,
          there are other models of ownership and operation here in
          Massachusetts. In some, more rural parts of Massachusetts
          municipalities have been able to provide resident service through
          publicly owned broadband networks. To do this, they often leverage the
          organizational structure and authority of special public entities
          called municipal power and light plants. These municipally-owned but
          financially independent entities, originally conceived of to provide
          electricity, are empowered to build and operate broadband networks as
          well. This model of public ownership and public operation is commonly
          used where no private company is willing to invest in wired
          connections of very low density areas.
        </p>
        <p>
          There are other ownership and operation models emerging elsewhere and
          being explored in Massachusetts. The “Open Access” model allows for
          one entity to own the network infrastructure, while one or more other
          entities provide internet access over that network. This approach,
          being considered in both Quincy and Fairhaven, MA, allows
          municipalities to direct public investment into publicly owned
          infrastructure without committing them to become an internet service
          provider. Municipalities, public entities, or a company could own the
          infrastructure, such as fiber, and let ISPs compete to deliver service
          to businesses and residents. With such a model, municipalities can
          ensure residents and businesses are equitably connected with
          infrastructure. By allowing multiple ISPs to provide service across
          the publicly owned network, this model can provide more choice for
          residents and lower costs due to ISP competition.  The UTOPIA Fiber
          initiative in Utah is one example of an open access network being
          implemented now.
        </p>
        <p>
          Detailed descriptions of different models of ownership and operation
          along with examples can be found here in the{" "}
          <a href="https://airtable.com/shrkbXWC0AX6y14Os/tblj5k1d9mghQf5IO?backgroundColor=tealLight&viewControls=on">
            Internet Ownership Models Review
          </a>
          . As the recommendations of this plan describe there are short-term
          actions that can be taken by Chelsea, Everett, and Revere to explore
          the cost-benefit analysis of introducing a different model to address
          the connection struggles being faced by residents.{" "}
        </p>
      </div>
    </div>
  );
};

export default History;
