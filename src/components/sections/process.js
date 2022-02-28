import React, { useEffect, useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Process = () => {

  function parseList(list) {
    list.map((li, i) =>  <li key={i}>{li}</li>);
  }

  const mapc = [
    "Josh Eichen", 
    "Ryan Kelly", 
    "Tony Schloss", 
    "Ella Brady", 
    "Brian Luther", 
    "Carolina Prieto",
    "Elise Harmon-Freeman",
    "Kimberly Nguyen",
    "Alyssa Kogan",
    "Ellyn Morgan"
  ];

  const mapcList = mapc.map((li) =>  <li>{li}</li>);

  const everett = [
    "Deanna Deveny, Director of Communications",
    "Erin Deveny, Chief of Staff",
    "Kim Tsai, Deputy Superintendent of Schools",
    "Priya Tahiliani, Superintendent of Schools",
    "Charlie Obremski, Assistant Superintendent of Operations", 
    "Kevin Shaw, Assistant Superintendent",
    "Kevin Dorgan, Director of Information Technology"
  ];

  const everettList = everett.map((li) =>  <li>{li}</li>);

  const chelsea = [
    "Ramon Garcia, Chief Information Officer",
    "Monica Lamboy, Director of Administration and Finance",     
    "Karl Allen, Economic Development Planner", 
    "Matt Frank, Supportive Services Manager, Chelsea Housing Authority", 
    "Alexander Train, Director, Housing and Community Development Department",
    "Paul Nowicki, Director of Operations, Chelsea Housing Authority", 
    "Rich Pilcher, Chief Technology Officer, Chelsea Public Schools",
    "Almi Abeyta, Superintendent, Chelsea Public Schools" 
  ]

  const revere = [
    "Jorge Pazos, IT Director, City of Revere",
    "Reuben Kantor, Chief of Innovation, City of Revere",
    "Lourenco Garcia, Assistant Superintendent of Equity and Inclusion, Revere Public Schools",
    "Jaime Flynn, Executive Director of Data and Accountability, Revere Public Schools ",
    "Dianne Kelly, Superintendent, Revere Public Schools"
  ]

  const revereList = revere.map((li) =>  <li>{li}</li>);

  return (
    <div>
      <div className="section">
        <h2>Planning Process</h2>
        <p>The COVID-19 pandemic has upended daily life in Greater Boston and around the world. Thousands of people can’t report to work, and millions are being told to cease nonessential travel. Never before has the internet been so essential for working remotely and staying connected. MAPC’s urban communities have identified access to fast, reliable, and affordable internet was a challenge to residents and businesses.</p>
        <p>Through economic recovery and resilience efforts there is an opportunity to make significant investments to address systemic issues that underpin the “Digital Divide”. Leveraging funds made available through the Economic Development Administration’s Disaster Mitigation and Planning Grant, made available through the Coronavirus Aid, Relief, and Economic Security (CARES) Act, MAPC partnered with municipalities who were facing COVID recovery challenges and both acute and systemic Digital Divide issues.</p>
        <p>Through economic recovery and resilience efforts there is an opportunity to make significant investments to address systemic issues that underpin the “Digital Divide”. Leveraging funds made available through the Economic Development Administration’s Disaster Mitigation and Planning Grant, made available through the Coronavirus Aid, Relief, and Economic Security (CARES) Act, MAPC partnered with municipalities who were facing COVID recovery challenges and both acute and systemic Digital Divide issues.</p>
        <p>To skill up on this area of planning and research, MAPC connected and partnered with organizations steeped in this work for decades and internally staffed to be able to partner and provide planning services to this area of focus demanding attention. Guided by newly <a href="https://www.speedtest.net/insights/blog/announcing-ookla-open-datasets/">released open data</a> and inspired by <a href="https://pcrd.purdue.edu/the-real-digital-divide-advertised-vs-actual-internet-speeds/">research</a> from other states, MAPC produced the December 2020 <a href="https://datacommon.mapc.org/calendar/2020/december">“Need for Speed”</a> data visualization that looked at speed test data across the 101 municipalities in MAPC’s region.</p>
        <p>This work connected us to connect with communities hit hard by the pandemic and with populations most in need of recovery assistance and future resiliency. MAPC partnered with leaders in Everett, Chelsea, & Revere who were working to address digital access issues, residents had raised in their communities. Residents in these communities were experiencing average internet speeds much lower than the available, advertised interest speeds along with device and literacy challenges related to the internet. The MAPC visualization of speed data depicted these communities with some of the lowest average download speeds of any municipality in the region. To explore the challenges and opportunities further, MAPC and the Cities partnered to develop this plan that is scaled to fit the capacity of municipal staff while leveraging a strong resource network of local, state, and federal resources that cross the public, private, educational, and nonprofit sectors. </p>
      </div>
      <div className="section-two-col-flex">
        <div className="section-half border-right">
          <h3>Community Advisory Team</h3>
          <p>To achieve outcomes that enhance the wellbeing of the community, it’s essential that community perspective guides the work. A community advisory team served as a core working group which meet throughout the process to provide feedback, responses to proposed strategies and data analysis. This group was essential in assisting with the distribution and completion of the community needs assessment. The perspective provided by the community advisory helped inform the development of this plans vision and goals, and shaped the focus and framing of this report. Ultimately, it will be this set of stakeholders will be able to take actionable measures towards the goals this report intends to achieve.</p>
        </div>
        <div className="section-half">
          <h3>Community Advisory Members</h3>
          <h4>MAPC Staff</h4>
          <ul>
            {mapcList}
          </ul>
          <h4>City of Everett</h4>
          <ul>
            {everettList}
          </ul>
          <h4>City of Revere</h4>
          <ul>
            {revereList}
          </ul>
        </div>
      </div>
      <div className="section">
        <h3>Project Goals</h3>
        <p>Few Massachusetts municipalities of Chelsea, Everett, or Revere’s size have adopted a clear strategy for providing fast, reliable, and affordable internet to residents and businesses.  Most cities and towns within the state do not have a clear understanding of the role of local government in the area of digital access., Few Massachusetts municipalities of Chelsea, Everett, or Revere’s sizecities have adopted a clear strategy for providing fast, reliable, and affordable internet to residents and businesses.  and as sucThere is no clear template for doing so. Revere, Chelsea, and Everett h, these communities are set to become leaders within the Commonwealth by developing a plan that is scaled to fit the capacity of municipal staff while leveraging a strong resource network of local, state, and federal resources that cross the public, private, educational, and nonprofit sectors.</p>
        <p>MAPC has structured this plan to be used by municipalities and their partner stakeholders in accomplishing the following goals:</p>

          <h4>Advise Capital Investment</h4>
          <p>Recent federal actions through the American Rescue Plan Act and the Infrastructure Investment and Jobs Act have created an unprecedented amount of potential resources available for capital investment in broadband infrastructure. Municipalities will have discretionary resources, as well as the opportunity to apply for state and federal grants to invest in infrastructure, and this plan aims to provide a framework within which to municipalities can make sound decisions for that future investment.  </p> 

          <h4>Inform Policy Decisions​​</h4>
          <div>
            <p>While not involved in the direct provision of internet services, municipalities have a significant amount of regulatory power in the permitting and licensing of internet service providers and other technologies that will enable broader internet access. This includes the administration of cable franchise agreements, permitting of 5g infrastructure, and licensing right of way use for cable and fiber infrastructure. This plan aims to give municipal actors a fuller picture of how that regulatory power can improve digital access within their communities. </p>
            <p>Further, municipalities have the ability to enact policies that will address the social and systemic barriers that inhibit the adoption or use of broadband internet. Establishing discretionary funding sources, convening critical stakeholders, and collecting community data are all within the purview of municipal activity. </p>
          </div>

          <h4>Identify Program Needs</h4>
          <p>Historically, the landscape of digital access programs has been sparse, and mostly focused on building basic digital literacy skills. There is a major opportunity to build a robust ecosystem of programs available to support basic to advanced digital skills in multilingual curriculums, expanded workforce development initiatives, and community scale programs that will build capacity and expertise in this critical area.</p> 
        <p>Building on these broad goals, MAPC worked with the community advisory committees in the three communities to establish a vision that ultimately was used to establish a suite of short, medium, and long term recommendations. The vision as follows: </p>
      </div>
      <div className="section">
        <Tabs>
          <TabList>
            <Tab><p className="bold">Advise Capital Investment</p></Tab>
            <Tab><p className="bold">Inform Policy Decisions</p></Tab>
            <Tab><p className="bold">Identify Program Needs</p></Tab>
          </TabList>

          <TabPanel>
            <p>Recent federal actions through the American Rescue Plan Act and the Infrastructure Investment and Jobs Act have created an unprecedented amount of potential resources available for capital investment in broadband infrastructure. Municipalities will have discretionary resources, as well as the opportunity to apply for state and federal grants to invest in infrastructure, and this plan aims to provide a framework within which to municipalities can make sound decisions for that future investment.</p>
          </TabPanel>
          <TabPanel>
            <p>While not involved in the direct provision of internet services, municipalities have a significant amount of regulatory power in the permitting and licensing of internet service providers and other technologies that will enable broader internet access. This includes the administration of cable franchise agreements, permitting of 5g infrastructure, and licensing right of way use for cable and fiber infrastructure. This plan aims to give municipal actors a fuller picture of how that regulatory power can improve digital access within their communities. </p>
            <p>Further, municipalities have the ability to enact policies that will address the social and systemic barriers that inhibit the adoption or use of broadband internet. Establishing discretionary funding sources, convening critical stakeholders, and collecting community data are all within the purview of municipal activity. </p>
          </TabPanel>
          <TabPanel>
            <p>Historically, the landscape of digital access programs has been sparse, and mostly focused on building basic digital literacy skills. There is a major opportunity to build a robust ecosystem of programs available to support basic to advanced digital skills in multilingual curriculums, expanded workforce development initiatives, and community scale programs that will build capacity and expertise in this critical area.</p>
          </TabPanel>
        </Tabs> 
      </div>
      {/* <div className="section"> */}
        <h3>Project Vision</h3>
        <p>Remove barriers to adoption that prevent universal access to reliable and high speed (100/100) internet.</p> 
        <p>Augment the capacity of key stakeholders such as IT Departments, School Districts, Libraries, Community based organizations, and municipal staff to address the digital divide</p>
        <p>Ensure all residents who desire to improve their digital / technology literacy have a pathway to educational opportunities at a range of skill levels, offered in community appropriate languages and settings.</p>
        <p>Promote competition among internet service providers offering broadband service.</p>
      {/* </div> */}
      <div className="section">
        <h3>Timeline</h3>
      </div>
    </div>
  )
}

export default Process