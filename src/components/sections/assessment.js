import React, { useEffect, useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CalloutQuote from "../modules/calloutQuote";
import chart1 from "../../images/choppy.png";
import chart2 from "../../images/laptop.png";
import chart3 from "../../images/internet-connectivity.png";
import chart4 from "../../images/learn-more.png";
import chart5 from "../../images/it.png";
import PercentBar from "../modules/percentBar";
import ImageModal from "../modules/imageModal";
import { ParallaxBanner } from 'react-scroll-parallax';

const Assessment = () => {

  const languageFloats = [
    {
      number: "1,068",
      stat: "responses were recorded in English"
    },
    {
      number: "1,045",
      stat: "responses were recorded in Spanish"
    },
    {
      number: "36",
      stat: "responses were recorded in Arabic"
    },
    {
      number: "15",
      stat: "responses were recorded in Brazilian Portuguese"
    },
    {
      number: "1",
      stat: "response was recorded in Haitian Creole"
    },
    {
      number: "0",
      stat: "responses were recorded in Khmer"
    },
  ]

  const raceFloats = [
    {
      number: "1,404",
      stat: "respondents identified their race or ethnicity within the survey"
    }
  ]

  const racePercents = [
    {
      number: 23,
      stat: "of respondents who responded identified as White"
    },
    {
      number: 3,
      stat: "as Black"
    },
    {
      number: 1,
      stat: "as AAPI"
    },
    {
      number: 69,
      stat: "as Hispanic/Latinx"
    },
    {
      number: 5,
      stat: "as Arab"
    },
  ]

  const hhPercents = [
    {
      number: 40,
      stat: "of respondents live in a household with 5 or more people"
    },
    {
      number: 45,
      stat: "of respondents live in a household with 3 or more adults"
    },
    {
      number: 54,
      stat: "of respondents live in a household with at least one child"
    },
    {
      number: 42,
      stat: "of those respondents have two children"
    },
    {
      number: 22,
      stat: "have three or more children"
    }
  ]

  function createFloats(data) {
    return data.map((elem, index) => {
      return <div key={index} style={{display: "flex", alignItems: "center"}}>
        <h4 style={{margin: "0.5rem 0.5rem 0.5rem 0"}}>{elem.number}</h4>
        <p style={{margin: "0.5rem 0"}}>{elem.stat}.</p>
      </div>
    })
  }

  function createPercents(data) { 
    return data.map((elem, index) => {
      return <div key={index} style={{margin: "1.5rem 0"}}>
        <PercentBar percent={elem.number} />
        <p style={{display: "inline", margin: "1.5rem 0"}}><span style={{fontWeight: "200"}}>{elem.stat}.</span></p>
      </div>
    })
  }
  
  return (
    <div>
      <div className="section">
        <ParallaxBanner
          layers={[{ image: 'https://source.unsplash.com/gTyHuIDjUH0/4013x1923', speed: -30 }]}
          style={{height: "24rem", width: "100vw"}}
          className="fullbleed" 
        />
      </div>
      <div className="section">
        <h2>Community Needs Assessment</h2>
        <div className="section-two-col-flex">
          <div className="section-half border-right">
            <p>Expanding on the existing conditions analysis, MAPC worked to further understand the specific experiences of residents in the three communities accessing and using the internet. MAPC worked with community partners to identify the key functional needs of the internet in daily life, current ability to use the internet for those key functions, and barriers or challenges impacting that ability to use the internet. </p>
          </div>
          <div className="section-half">
            <CalloutQuote 
              quote="MAPC collected 2,165 surveys, far in excess of the survey goal."
            />
          </div>
        </div> 
        <p>MAPC worked with key stakeholders in the community to execute this assessment through a series of one-on-one stakeholder interviews, group focus groups, and a comprehensive digital access survey of over 2,000 residents. The following assessment has been organized around the framework of internet connectivity, device access, and digital literacy.</p>
        <p>MAPC sought to execute 500 surveys in each community in order to gather a representative sample of the community populations. The survey was distributed through a number of municipal and community channels, and was conducted both digitally, in person, and via phone outreach.</p>
        <p>In sum, MAPC collected 2,165 surveys, far in excess of the survey goal.</p>
        <p>MAPC collected 793 surveys from Chelsea residents, 388 from Everett residents, and 825 from Revere residents. The key findings in this report will summarize the total of the three communities, but specific community-level findings can be viewed using the tableau data tool to the XXXX. </p>
      </div>
      <div className="section">
        <h3>Survey Respondent Demographics</h3>
        <Tabs>
          <TabList>
            <Tab><h4>Language</h4></Tab>
            <Tab><h4>Race and Ethnicity</h4></Tab>
            <Tab><h4>Household Size</h4></Tab>
          </TabList>

          <TabPanel>
            <p>In addition to being available in English the digital access survey was translated into 5 languages spoken widely in the three cities; Spanish, Haitian Creole, Brazilian Portuguese, Arabic, and Khmer.</p>
            {createFloats(languageFloats)}
          </TabPanel>
          <TabPanel>
            <p>{createFloats(raceFloats)}</p>
            {createPercents(racePercents)}
          </TabPanel>
          <TabPanel>
            <p>Respondents to the survey represented a diverse cross section of family types and household sizes within the three communities.</p>
            {createPercents(hhPercents)}
          </TabPanel>
        </Tabs> 
      </div>
      <div className="section section-bottom">
        <h3>Key Findings</h3>
        <h4>Connectivity</h4>
        <p>Ensuring that residents are able to acquire internet services at an affordable price that meets their needs is a major component of digital access. The following key findings summarize respondents experience and perspective on internet subscriptions, internet affordability, and internet reliability.  </p>
        <Tabs>
          <TabList>
            <Tab><h4>Internet Subscriptions</h4></Tab>
            <Tab><h4>Literacy</h4></Tab>
            <Tab><h4>Device Access</h4></Tab>
          </TabList>

          <TabPanel>
            <div className="section">
              <iframe src="https://public.tableau.com/shared/P4HHTP4R3?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p>12% of survey respondents do not have an internet subscription, slightly lower than what is represented in the Census 

              6% Do not have any internet at their home 

              75% of those who do not have internet access cite affordability as the reason why they don’t have internet. 

              6% rely only on a WiFi hotspot 

              The majority of survey respondents in the three cities are Comcast subscribers. 

              In Chelsea, where Comcast is the only cable ISP, 80% of respondents used Comcast. In Revere and Everett that number was between 63 and 67%, with an average of 20% of respondents using RCN as an available competitor. 

              In all three communities, about 6% of respondents were still using Verizon DSL services. 

              About 8% of respondents in all communities rely on T Mobile or MetroPCS Hotspot mobile subscriptions. 

              Chelsea had the highest number of T-Mobile or MetroPCS wireless service subscriptions as the primary form of internet service. 

              Wireless ISP providers like Starry and NetBlazer are available in all three communities, but have had limited market penetration, with only 1% of survey respondents using that service. 

              In Revere and Everett where RCN is an available competitor to Comcast, those communities had about 20% of users subscribing to an alternative to Comcast. Indicating that where there is more choice in service providers, individuals will adopt.</p>
            </div>


            <div className="section-two-col-flex section">
              <div className="section-half border-right">
                <h4>Affordability</h4>
                <p>70% of survey respondents have had to change or cancel their internet subscription because it was too expensive 

                Overall, only 50% of respondents agreed with the statement “My internet is affordable” 

                Subscribers to RCN were slightly more likely to indicate that their internet was affordable – 60% as compared to 50% of Comcast subscribers. This may indicate that competition  

                While a smaller sample pool, 75% of respondents using Starry indicate that their internet is affordable. 

                This is likely due to the bundling of cable TV services from Comcast and RCN</p>
              </div>
              <div className="section-half">
                <CalloutQuote quote="Necesitamos que el costo del internet sea mas justo." byline="We need the cost of the internet to be fairer." />
              </div>
            </div>

            <div className="section">
                <h4>Reliability</h4>
                <p>37% of survey respondents have had to leave their home to use internet at another location because internet at their home is unreliable 

                32% of survey respondents indicate that they always or frequently have issues with dropped or choppy video calls. 

                This correlates closely with the ~30% of speed tests below 25mbps download 

                Those respondents who disagreed with the statement my internet is affordable (45% of all respondents), that number jumps to 45% indicating they always or frequently have issues with dropped video calls, potentially indicating that they are unable to pay for the speed package needed to serve their household. 

                Respondents who indicated that thre or more people needed to use the internet at any given time for work or education were more likely to experience choppy or dropped video calls </p>                
            </div>

          </TabPanel>
          <TabPanel>
            <div className="section">
              <iframe src="https://public.tableau.com/shared/77TSJBM84?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p>Digital Access can be defined as the ability to use a device and internet effectively and in a way that enables an individual to easily use information and communication technologies to find, evaluate, create, and communicate information, requiring both cognitive and technical skills.  These skills are a foundational element of digital access and are frequently observed as the most difficult of the three legs of the stool to address due to different levels of experience with technology, language barriers, and other issues. </p>
              <h4>Use of Technology</h4>
              <p>82% of survey respondents indicate that the feel confident in their ability to use a laptop/Chromebook. 

              For respondents who took the survey in a language other than English that number dropped as follows: 

              70% Arabic 

              72% Spanish 

              37.5% Portuguese 

              Younger respondents also responded with higher levels of confidence than older respondents </p>
        
              <p>A smaller portion of respondents felt comfortable solving issues related directly to internet connectivity. Similarly, that number increased in higher age brackets. </p>
            </div>
            <div className="section">
              <h4>Support Systems and Training</h4>
              <p>Overall, 90% of respondents indicated that they would prefer to have a local resource that could support technology needs, rather than relying on internet service providers. When asked about which digital skills respondents would like to learn more about, about a third of all respondents indicated interest in all of the following topics: 

            Essential basic computer skills (identifying technology, using keyboard and mouse, using a web browser) 

            Essential software skills (creating documents, creating slides, using email) 

            Using technology in daily life (use online resources to find trustworthy information, find a job, use social media) 

            Learning advanced technology skills </p>
              <p>However, twice as many respondents in Spanish indicated an interest in those same skill areas.  </p>
              <p>Further, higher percentages of respondents in languages other than English indicated that they would be interested in careers in technology or IT if training were available. </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="section">
              <iframe src="https://public.tableau.com/shared/K3Z38NZS3?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p>In order to utilize the internet for critical personal services such as education, healthcare, and job search / online applications individuals need a computing device with  a certain speed and functionality. The proliferation of smartphone technology has helped millions of individuals gain access to the communications benefits of the internet, but is not a substitute for a personal computing devices function.</p>
              <p>21.5% of respondents disagreed with the statement “People in my household always have access to a computer if they need one.” 

              60% of respondents lease a WiFi router from an internet service provider. 

              41% of respondents have had to buy a new computer in the last three years 

              Many of those individuals had to buy a computer to either replace an older computer, or because their household did not have an existing computer. </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Assessment