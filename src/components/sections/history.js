import React, { useEffect, useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import CalloutQuote from "../modules/calloutQuote";

const History = () => {

  return (
    <div>
      <div className="section">
        <h2>History & Background</h2>
        <h4>An overview of digital access</h4>
        <p>Digital access is more than getting a wifi password so you can read some email or stream a show. It’s a complicated, interconnected [topic] that includes three main elements: a good connection to the internet, an adequate device, and knowledge of how to use it. It’s important to define “Digital Access” and provide a framework for interventions and actions aimed at achieving community outcomes. In this report we use the framework of the “three-legged stool” to represent the many facets that make up this complicated, interconnected topic. It’s not a comprehensive analogy but does provide a reminder that solutions or interventions must not only work for resolving isolated challenges, but be part of a larger web actions, rooted in systemic and social justice.  </p>
      </div>
      <div className="section-two-col-flex">
        <div className="section-half border-right">
          <h3>Defining "Digital Access"</h3>
        </div>
        <div className="section-half">
          <CalloutQuote 
            quote="Digital Divide — the gap between those with access to the reliable internet essential to navigating everyday tasks like job searches, homework, and digital communications; and those who don’t." 
          />
        </div>
      </div>
      <div className="section">
        <Tabs>
          <TabList>
            <Tab><h4>Device</h4></Tab>
            <Tab><h4>Access</h4></Tab>
            <Tab><h4>Digital Literacy</h4></Tab>
          </TabList>

          <TabPanel>
            <p>In order to utilize the internet for critical personal services such as education, healthcare, and job search / online applications individuals need a computing device with a certain speed and functionality. The proliferation of smartphone technology has helped millions of individuals gain access to the communications benefits of the internet but is not a substitute for a personal computing devices function. </p>
          </TabPanel>
          <TabPanel>
            <p>Ensuring that residents and businesses are able to acquire internet services at an affordable price that meets their needs will be a central focus of the Everett Internet Access and Equity Plan. Suite of options that would improve the access to affordable, high speed, and reliable internet in the City. </p>
          </TabPanel>
          <TabPanel>
            <p>Digital literacy is the ability to use a device and internet effectively and in a way that enables an individual to easily navigate needed uses and services. Understanding the different uses and needs of various segments of Everett’s community will assist in creating a plan for improving literacy in a way that meets community needs and culture. </p>
          </TabPanel>
        </Tabs>
      </div>
      <div className="section">
        <h3>How Does the Internet Function?</h3>
        <p>Let’s look at the technology that is relied upon to provide the internet to us.</p>
        <iframe src="https://slides.com/mapc/internet-slides/embed" width="100%" height="480" title="Internet Slides" scrolling="no" frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="section-two-col-flex">
        <div className="section-half border-right">
          <h3>Who owns the internet? </h3>
        </div>
        <div className="section-half">
          <CalloutQuote 
            quote="[Broadband] isn’t a luxury; it’s now a necessity, like water and electricity."
            byline="- President Biden" 
          />
        </div>
      </div>
      <div className="section section-bottom">
        <p>To understand what actions and responsibilities could be taken, it’s important to look at the ownership model that exists today. As the slides above highlight, the internet is comprised of many technologies, each leveraged to transfer information as bits across the globe and to your screen. Who owns, manages or regulates those technologies and infrastructure is even more varied. </p>
        <p>In our three communities, as is true Aacross the United States today,  the internet and the infrastructure that underpins it, is not treated as a public utility. Public utilities like such as water, electricity or public infrastructure like highways have a different ownership and regulation model from internet infrastructure. While water, electricity, or our highways may each have a varied different model of ownership and regulations; they all have some level of public management. The infrastructure that makes up our highway, sewer, or electric system are all publicly owned infrastructure and assets.  </p>
        <p>While our three municipalities do manage fiber, conduit and connection center equipment, they do so for an internal public network that connects police, fire, and city staff to the internet and each other. Several municipalities across the commonwealth have extended or built publicly owned networks, under different models, that have extended beyond municipal needs or activities. A small-scale example of this is the extending of “public” networks at town halls or libraries through open public access points. This extension of the network draws on the capacity of the IT for the municipality either internal or contracted.  </p>
        <p>Municipalities in some more rural parts of Massachusetts have taken on the role of providing publicly-owned broadband networks and resident access, often by establishing or leveraging the organizational structure and capacity of their municipal power and light plants (LINK TO LIST OF MUNI ACTIVITIES OR ILSR MAP) to become an ISP. Larger scale expansion of internet service, reliant on publicly owned infrastructure, has a number of examples in western MA To date, this model is commonly used often where no private company was willing to make the investment in wired connection of householdsto very low density areas. Municipalities have taken on the role of establishing or leveraging power and light plants (LINK TO LIST OF MUNI ACTIVITIES OR ILSR MAP) to become an ISP. Serving households or businesses with the potential to connect to other municipalities, or research institutions. In many cases the municipality have chosen to become the owner of infrastructure technology (tech referenced in slides above) as well as the provider of service ISP. This requires substantial planning (Link to and check out Cambridge and Boston, Quincy planning) as well as capacity and staffing either at a municipality, power and light utility, or private public partnership. Some government entities have also taken on the role of just owning the infrastructure and not becoming an ISP, but rather creating an open market for ISP to lease from the government their technology/infrastructure/fiber. This model is referred to as Open Access Networks and is common in other parts of the world. More example about this model can be found here: </p>
        <p>Case studies of Government run Open Access Networks </p>
        <p>Municipal Models Draft Literature Review </p>
        <p>The majority of pipes/conduit, fiber and copper cables, poles and connection center equipment that run through Everett, Chelsea, and Revere are owned by private companies. For example, while the city of Chelsea may own some light poles on Broadway the majority of telephone poles across the cities are owned by the telecom company Verizon. Additionally, Comcast asserts that they only leverage infrastructure owned and managed by them in their hybrid coaxial / fiber network. (link to slides from Everett town council meeting Jan 21). Other providers we will see later in this report like Crown Castle, First Light serve as owners of infrastructure/fiber who may lease to other companies like RCN or Starry to provide residential service. In the Existing Condition: Infrastructure section we will look further into the touch points municipalities have with private companies that provide internet as a services Internet Service Providers (ISPs). </p>
      </div>
    </div>
  )
}

export default History