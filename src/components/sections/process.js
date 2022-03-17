import React, { useEffect, useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TimelineAccordion from "../accordions/timelineAccordion";
const Process = () => {

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

  const everett = [
    "Deanna Deveny, Director of Communications, City of Everett",
    "Erin Deveny, Chief of Staff, City of Everett",
    "Kim Tsai, Deputy Superintendent, Everett Public Schools",
    "Priya Tahiliani, Superintendent, Everett Public Schools",
    "Charlie Obremski, Assistant Superintendent of Operations, Everett Public Schools", 
    "Kevin Shaw, Assistant Superintendent Everett Public Schools",
    "Kevin Dorgan, Director of Information Technology , City of Everett",
    "Stephanie Martins, City Councilor, City of Everett",

  ];

  const chelsea = [
    "Ramon Garcia, Chief Information Officer, City of Chelsea",
    "Monica Lamboy, Director of Administration and Finance, City of Chelsea",     
    "Karl Allen, Economic Development Planner, City of Chelsea", 
    "Matt Frank, Supportive Services Manager, Chelsea Housing Authority, Chelsea", 
    "Alexander Train, Director, Housing and Community Development Department, City of Chelsea",
    "Paul Nowicki, Director of Operations, Chelsea Housing Authority, City of Chelsea",
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

  const community = [
    "Lucy Pineda, Executive Director Latinos Unidos en Massachusetts (LUMA), Everett",
    "Jamie Lederer, Community Health Improvement Department, Cambridge Health Alliance, [city] ",
    "Rev Myrlande Desrosie, Associate Pasteur and Director , Everett Haitian Community Center, Everett",
    "Penny Hasselli, MetroNorth Workforce Board, [City]",
    "Chris Albrizio-Lee, MetroNorth Workforce Board [City]",
    "Melora Ruhg, MassHire MetroNorth Workforce Board, [City]",
    "Stefanie  Shull, TND Connect, [City]",
    "Dini Paulino, La Colaborativa, [City]",
    "Eva Daniggelis, Americorp Vista, The Neighborhood Developers ",
    "Evie Heffernan, Workforce Manager, The Neighborhood Developers",
    "Sean Mock, Senior Program Manager, The Neighborhood Developers",
    "Cheryl Coss, Economic Stability Program Manager, Center for Community Health Improvement, [City]",
    "Syliva Chiang, Revere CARES Massachusetts General Hospital, [City]",
    "Kelly Washburn, Massachusetts General Hospital Evaluation Team, [City]",
    "Mike Stanek, Senior Manager at Health Policy Coalition, [City]",
    "Caroline Kinuth, Senior Policy Manager at Health Policy Coalition, [City]"
  ]

  function createList(data) {
    return data.map((li) =>  <li>{li}</li>)
  };

  return (
    <div>
      <div className="section">
        <h2>Process</h2>
        <p>The COVID-19 pandemic has upended daily life in Greater Boston and around the world. Thousands of people can’t report to work, and millions are being told to cease nonessential travel. Never before has the internet been so essential for working remotely and staying connected. MAPC’s urban communities have identified access to fast, reliable, and affordable internet was a challenge to residents and businesses.</p>
        <p>Through economic recovery and resilience efforts there is an opportunity to make significant investments to address systemic issues that underpin the “Digital Divide”. Leveraging funds made available through the Economic Development Administration’s Disaster Mitigation and Planning Grant, made available through the Coronavirus Aid, Relief, and Economic Security (CARES) Act, MAPC partnered with municipalities who were facing COVID recovery challenges and both acute and systemic Digital Divide issues.</p>
        <p>Through economic recovery and resilience efforts there is an opportunity to make significant investments to address systemic issues that underpin the “Digital Divide”. Leveraging funds made available through the Economic Development Administration’s Disaster Mitigation and Planning Grant, made available through the Coronavirus Aid, Relief, and Economic Security (CARES) Act, MAPC partnered with municipalities who were facing COVID recovery challenges and both acute and systemic Digital Divide issues.</p>
        <p>To skill up on this area of planning and research, MAPC connected and partnered with organizations steeped in this work for decades and internally staffed to be able to partner and provide planning services to this area of focus demanding attention. Guided by newly <a href="https://www.speedtest.net/insights/blog/announcing-ookla-open-datasets/">released open data</a> and inspired by <a href="https://pcrd.purdue.edu/the-real-digital-divide-advertised-vs-actual-internet-speeds/">research</a> from other states, MAPC produced the December 2020 <a href="https://datacommon.mapc.org/calendar/2020/december">“Need for Speed”</a> data visualization that looked at speed test data across the 101 municipalities in MAPC’s region.</p>
        <p>This work connected us to connect with communities hit hard by the pandemic and with populations most in need of recovery assistance and future resiliency. MAPC partnered with leaders in Everett, Chelsea, & Revere who were working to address digital access issues, residents had raised in their communities. Residents in these communities were experiencing average internet speeds much lower than the available, advertised interest speeds along with device and literacy challenges related to the internet. The MAPC visualization of speed data depicted these communities with some of the lowest average download speeds of any municipality in the region. To explore the challenges and opportunities further, MAPC and the Cities partnered to develop this plan that is scaled to fit the capacity of municipal staff while leveraging a strong resource network of local, state, and federal resources that cross the public, private, educational, and nonprofit sectors. </p>
      </div>
      {/* <div className="section-two-col-flex">
        <div className="section-half border-right">
          <h3>Community Advisory Team</h3>
          <p>To achieve outcomes that enhance the wellbeing of the community, it’s essential that community perspective guides the work. A community advisory team served as a core working group which meet throughout the process to provide feedback, responses to proposed strategies and data analysis. This group was essential in assisting with the distribution and completion of the community needs assessment. The perspective provided by the community advisory helped inform the development of this plans vision and goals, and shaped the focus and framing of this report. Ultimately, it will be this set of stakeholders will be able to take actionable measures towards the goals this report intends to achieve.</p>
        </div>
        <div className="section-half">
          <h3>Community Advisory Members</h3>
          <h4>City of Everett</h4>
          <ul>
            {createList(everett)}
          </ul>
          <h4>City of Chelsea</h4>
          <ul>
            {createList(chelsea)}
          </ul>
          <h4>City of Revere</h4>
          <ul>
            {createList(revere)}
          </ul>
          <h4>Community Organizations</h4>
          <ul>
            {createList(community)}
          </ul>
          <h4>MAPC Staff</h4>
          <ul>
            {createList(mapc)}
          </ul>
        </div>
      </div> */}
      <div className="section">
        <h3>Project Goals</h3>
        <p>Local governments rarely understand their role in digital access: few have strategies for providing fast, reliable, and affordable internet to residents and businesses. Revere, Chelsea, and Everett are leading the Commonwealth in developing a plan that is both scaled to fit the capacity of municipal staff and that leverages a strong network of local, state, and federal public, private, educational, and nonprofit resources. MAPC has structured this plan to be a template for municipalities and their partner stakeholders.</p>
        <p>The plan goals are as follows: </p>
        <Tabs>
          <TabList>
            <Tab><h4>Advise Capital Investment</h4></Tab>
            <Tab><h4>Inform Policy Decisions</h4></Tab>
            <Tab><h4>Identify Program Needs</h4></Tab>
          </TabList>

          <TabPanel>
            <p>The American Rescue Plan Act and the Infrastructure Investment and Jobs Act have created resources for capital investment in broadband infrastructure. Municipalities will have discretionary resources, as well as the opportunity to apply for state and federal grants to invest in infrastructure. This plan aims to provide a framework within which to municipalities can make sound decisions for that future investment.  </p>
          </TabPanel>
          <TabPanel>
            <p>While not involved in the direct provision of internet services, municipalities have significant regulatory power in the permitting and licensing of internet service providers and in technologies that enable internet access. This includes administering cable franchise agreements, permitting 5G infrastructure, and licensing right-of-way use for cable and fiber infrastructure. This plan shows how that regulatory power can be used to improve digital access in a community. </p>
            <p>Municipalities can also enact policies that address the social and systemic barriers that inhibit the adoption or use of broadband internet. Establishing discretionary funding sources, convening critical stakeholders, and collecting community data are all in the purview of municipal activity. </p>
          </TabPanel>
          <TabPanel>
            <p>The few digital access programs that exist are mostly focused on building basic digital literacy skills. There is a need for programs that support basic-to-advanced digital skills in multilingual curricula, for expanded workforce development initiatives, and for community scale programs that build capacity and expertise in this critical area.  </p>
          </TabPanel>
        </Tabs> 
      </div>
      <div className="section section-bottom">
        <h3>Timeline</h3>
        <TimelineAccordion />
      </div>
    </div>
  )
}

export default Process