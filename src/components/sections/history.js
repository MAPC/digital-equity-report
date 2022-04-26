import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CalloutQuote from "../modules/calloutQuote";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

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
            <CalloutQuote 
              quote="Digital equity is a condition in which all individuals and communities have the information technology capacity needed for full participation in our society, democracy, and economy.  digital equity is necessary for civic and cultural participation, employment, lifelong learning, and access to essential services." 
            />
          </div>
        </div>
        <p>Achieving digital equity is more than providing Wi-Fi. It’s a complicated, interconnected challenge that includes three main elements: a good connection to the internet, an adequate device, and knowledge of how to use it. These are the three legs of the stool. Solutions and interventions must not only resolve isolated challenges but be part of a larger web of actions rooted in systemic and social justice.  </p>
        <Tabs
          selectedIndex={definitionsTab} 
          onSelect={(index) => handleTabsChange(index)}
          id="definitions-tabs"
        >
          <TabList>
            <Tab><h4>Device</h4></Tab>
            <Tab><h4>Access</h4></Tab>
            <Tab><h4>Digital Literacy</h4></Tab>
          </TabList>
          <TabPanel>
            <h5>Access to an Adequate Computing Device</h5>
            <p>To use the internet for critical personal services such as education, healthcare, and job searches or online applications, you need a computing device with a certain speed and functionality. The proliferation of smartphone technology has helped millions gain access to the communications benefits of the internet but is not currently a substitute for a personal computing devices function.  </p>
            <FontAwesomeIcon 
              icon={faArrowCircleRight} 
              className="anchor__icon" 
              onClick={() => setDefinitionsTab(definitionsTab + 1)} 
            />
          </TabPanel>
          <TabPanel>
            <h5>Access to Affordable, High Speed, and Reliable Internet Connection</h5>
            <p>Ensuring that residents and businesses can acquire an internet connection that meets their needs at an affordable price is an essential element to full participation in our society, democracy, and economy. </p>
            <FontAwesomeIcon 
              icon={faArrowCircleRight} 
              className="anchor__icon" 
              onClick={() => setDefinitionsTab(definitionsTab + 1)} 
            />
          </TabPanel>
          <TabPanel>
            <h5>Digital Literacy Skills to Safely and Effectively Navigate the Internet  </h5>
            <p>Ensuring all residents know how to use a given device, how to navigate the internet, how to be a smart consumer of information, and how to avoid danger online. The National Digital Inclusion Alliance (NDIA) defines digital literacy as “the ability to use information and communication technologies to find, evaluate, create, and communicate information, requiring both cognitive and technical skills.” Digital literacy is the ability to use a device and the internet effectively.   </p>
          </TabPanel>
        </Tabs>
      </div>
      <div className="section section-bottom">
        <h3>How Does the Internet Function?</h3>
        <p>To understand what actions and responsibilities could be taken to close the digital divide, it’s important to look at the internet ownership model that exists today. As the slides below highlight, the internet is comprised of many technologies, each leveraged to transfer the information as bits across the globe and to your screen. Let’s take a journey through the technology of the Internet on which we rely upon. </p>
        <div className="section-two-col-flex">
          <div className="section-half border-right">
            <h4>Who owns the internet?</h4>
          </div>
          <div className="section-half">
            <CalloutQuote 
              quote="[Broadband] isn't a luxury; it's now a necessity, like water and electricity."
              byline="- President Joseph Biden" 
            />
          </div>
        </div>
        <iframe src="https://slides.com/mapc/internet-slides/embed?byline=hidden" 
          width="100%" 
          height="480" 
          title="Internet Slides" 
          scrolling="no" 
          frameborder="0" 
          allowFullScreen 
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        >
        </iframe>
        <p>This technology infrastructure that is relied on to send bits of data across the globe has many different owners and many different operators. Different distributed networks with different models of ownership, management, and regulation connect to form the larger Internet. There is no single owner of the internet, it is a varied and distributed collection of different types of ownership.  </p>
        <p>In the cities of Chelsea, Everett, and Revere ownership of the fiber lines, cable lines, telephone poles, and other physical network infrastructure is owned and operated almost exclusively by private corporate entities. These same entities are also often the service providers that manage and operate the networks, also known as internet service providers ISPs. While some internet service providers like Starry, or netBlazer may lease infrastructure from other companies, Comcast exclusively provides services on infrastructure they own and maintain. More information about the service providers in Chelsea, Everett, and Revere can be found in the existing conditions section.  </p>
        <p>As this <a href="https://muninetworks.org/communitymap">map of community and municipal networks</a> from the Institute for Local Self Reliance shows, there are other models of ownership and operation here in Massachusetts. In often rural parts of Massachusetts municipalities have been able to provide resident service through publicly-owned broadband networks. To do this, they often leverage the organizational structure and capacity of their municipal power and light plants. This model of public ownership and public operation is commonly used where no private company is willing to invest in wired connections of very low-density areas.  </p>
        <p>Full public ownership and operation or private ownership and operation are not the only models being explored in Massachusetts. One other model to note is the Open Access model. In this model operating a network is separate from the ownership of the network infrastructure. Municipalities in urban areas across the country, including Quincy and Fairhaven Massachusetts, are exploring how this open access model may direct public investment into a public-owned infrastructure without signing municipalities up to become an internet service provider. Municipalities, public entities, or a company could own the infrastructure, such as fiber, and let ISPs compete to deliver service to business and residents. Public bodies like municipalities can ensure residents and businesses are connected with infrastructure. While also increasing the number of service operators, driving up competition, and lowering costs for residents, as examples like UTOPIA Fiber in Utah have demonstrated. This model of ownership would treat the internet more like electricity, water, or sewer utilities. </p>
        <p>Detailed descriptions of different models of ownership and operation along with examples can be found here in the <a href="https://airtable.com/shrkbXWC0AX6y14Os/tblj5k1d9mghQf5IO?backgroundColor=tealLight&viewControls=on">Internet Ownership Models Review</a>. As the recommendations of this plan describe there are short-term actions that can be taken by Chelsea, Everett, and Revere to explore the cost-benefit analysis of introducing a different model to address the connection struggles being faced by residents. </p>
      </div>
    </div>
  )
}

export default History