import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CalloutQuote from "../modules/calloutQuote";
import PercentBar from "../modules/percentBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Assessment = ({assessIndex, setAssessIndex}) => {

  const [demosTab, setDemosTab] = useState(0);

  const handleTabsChange = (index, callback) => {
    callback(index);
  };

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

  const agePercents = [
    {
      number: 4,
      stat: "of respondents are between the ages of 10-18"
    },
    {
      number: 34,
      stat: "of respondents are between the ages of 19-35"
    },
    {
      number: 59,
      stat: "of respondents are between the ages of 36-65"
    },
    {
      number: 3,
      stat: "of respondents are ages 66+"
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
        <h2>Community Needs Assessment</h2>
        <div className="section-two-col-flex">
          <div className="section-half border-right">
            <p>To further understand the specific experiences of residents in the three communities accessing and using the internet, MAPC worked with community partners on a community needs assessment. The assessment worked to identify the key daily activities which the internet was used, assess current ability to use leverage the internet , and barriers or challenges impacting that ability to use the internet. </p>
            <p>MAPC worked with the community advisor team to execute this assessment through a series of one-on-one stakeholder interviews, group focus groups, and a comprehensive survey of over 2,000 residents. The survey was conducted through the Summer and Fall of 2021. The survey was distributed through a number of municipal and community channels, and was conducted both digitally, in person, and via phone outreach.</p>
          </div>
          <div className="section-half">
            <CalloutQuote 
              quote="MAPC collected 2,165 surveys, far in excess of the survey goal."
            />
          </div>
        </div> 
      </div>
      <div className="section">
      <h3>Survey Respondent Demographics</h3>
        <p>In sum, MAPC collected 2,165 surveys, in excess of the survey goal.</p>
        <p>MAPC collected 793 surveys from Chelsea residents, 388 from Everett residents, and 825 from Revere residents. The key findings in this report will summarize the total of the three communities, but specific community-level findings can be viewed using the data visualizations embedded in the following section. </p>
        <Tabs
          selectedIndex={demosTab} 
          onSelect={(index) => handleTabsChange(index, setDemosTab)}
          id="demographics-tabs"
        >
          <TabList>
            <Tab><h4>Language</h4></Tab>
            <Tab><h4>Race & Ethnicity</h4></Tab>
            <Tab><h4>Household Size</h4></Tab>
            <Tab><h4>Age</h4></Tab>
          </TabList>

          <TabPanel>
            <div className="section">
              <p>In addition to being available in English the digital access survey was translated into 5 languages spoken widely in the three cities; Spanish, Haitian Creole, Brazilian Portuguese, Arabic, and Khmer.</p>
              {createFloats(languageFloats)}
              <FontAwesomeIcon 
                style={{marginTop: "1rem"}}
                icon={faArrowCircleRight} 
                className="anchor__icon" 
                onClick={() => setDemosTab(demosTab + 1)} 
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="section">
              <p>1,404 respondents identified their race or ethnicity within the survey. </p>
              <p>{createFloats(raceFloats)}</p>
              {createPercents(racePercents)}
              <FontAwesomeIcon 
                style={{marginTop: "1rem"}}
                icon={faArrowCircleRight} 
                className="anchor__icon" 
                onClick={() => setDemosTab(demosTab + 1)} 
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="section">
              <p>Respondents to the survey represented a diverse cross section of family types and household sizes within the three communities. </p>
              {createPercents(hhPercents)}
              <FontAwesomeIcon 
                style={{marginTop: "1rem"}}
                icon={faArrowCircleRight} 
                className="anchor__icon" 
                onClick={() => setDemosTab(demosTab + 1)} 
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="section">
              {createPercents(agePercents)}
            </div>
          </TabPanel>
        </Tabs> 
      </div>
      <div className="section section-bottom">
        <h3>Key Findings</h3>
        <Tabs
          selectedIndex={assessIndex} 
          onSelect={(index) => handleTabsChange(index, setAssessIndex)}
          id="findings-tabs"
        >
          <TabList>
            <Tab><h4>Access</h4></Tab>
            <Tab><h4>Literacy</h4></Tab>
            <Tab><h4>Device</h4></Tab>
          </TabList>

          <TabPanel>
            <div className="section">
              <p>Ensuring that residents are able to acquire internet services at an affordable price that meets their needs is a major component of digital access. The following key findings summarize respondents' experience and perspective on internet subscriptions, internet affordability, and internet reliability.  </p>
            </div>
            <div className="section">
              <h4>Internet Subscriptions</h4>
              <p><span className="bold">15.5% of survey respondents do not have an internet subscription</span>, slightly lower than what is represented in the Census (18%) but still a significant number of individuals. 6% of that non-internet-subscription population have chosen instead to leverage a cellular subscription and MiFi device to connect. This may be because programs either through schools, libraries, or community groups have made them free and available. However, unlike most internet subscription plans, cellular plans may have monthly data caps, limited cell reception, and limited speeds that may not make viable alternatives.</p>
              <iframe src="https://public.tableau.com/views/QuestionsAboutInternetConnection/Connection?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p className="citation">MAPC Digital Access and Equity Survey for the Cities of Chelsea, Everett, and Revere.</p>
              <p><span className="bold">The majority of survey respondents in the three cities are Comcast subscribers.</span> In Chelsea, where Comcast is the only cable ISP, 80% of respondents used Comcast. As highlighted in the infrastructure section [link], RCN is an available competitor in Revere and Everett. In all three communities, about 6% of respondents were still using Verizon DSL services. Wireless ISP providers like Starry and NetBlazer are available in all three communities, but have had limited market penetration, with only 1% of survey respondents using that service.</p>
              <p>In all three communities, about 6% of respondents were still using Verizon DSL services. Wireless ISP providers like Starry and NetBlazer are available in all three communities, but have had limited market penetration, with only 1% of survey respondents using that service.</p>
              <iframe src="https://public.tableau.com/views/DigitalEquitySurveyISPBreakdown/ISPBreakdown?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p className="citation">MAPC Digital Access and Equity Survey for the Cities of Chelsea, Everett, and Revere.</p>
            </div>
            <div className="section">
              <div className="section-two-col-flex section">
                <div className="section-half border-right">
                  <h4>Affordability</h4>
                  <p><span className="bold">70% of survey respondents have had to change or cancel their internet subscription because it was too expensive. </span>Subscribers to RCN were slightly more likely to indicate that their internet was affordable – 60% as compared to 50% of Comcast subscribers. This may indicate that competition. While a smaller sample pool, 82% of respondents using Starry indicate that their internet is affordable. This is likely due to the bundling of cable TV services from Comcast and RCN </p>
                </div>
                <div className="section-half">
                  <CalloutQuote quote="Necesitamos que el costo del internet sea mas justo." byline="We need the cost of the internet to be fairer." />
                </div>
              </div>
              <iframe src="https://public.tableau.com/views/AffordabilityByProvider/AffordabilitybyProvider?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p className="citation">MAPC Digital Access and Equity Survey for the Cities of Chelsea, Everett, and Revere.</p>
            </div>
            <div className="section">
                <h4>Reliability</h4>
                <p>37% of survey respondents have had to leave their home to use internet at another location because internet at their home is unreliable. Earlier in the infrastructure section, it was noted that many households in these cities, up to 42%, were not experiencing the minimum definition of broadband, impacting their experience and the reliability of their service. This survey is another clear example where the current state of service is impacting residents forcing them to leave their homes to find internet. When 32% of respondents indicate that they always or frequently have issues with dropped or choppy video calls, they cannot rely on home internet to be there for remote work, schooling, or healthcare.</p>    
                <iframe src="https://public.tableau.com/views/AffordabilityByProvider/Reliability?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
                <p className="citation">MAPC Digital Access and Equity Survey for the Cities of Chelsea, Everett, and Revere.</p>
                <p>Respondents who indicated that three or more people needed to use the internet at any given time for work or education were more likely to experience choppy or dropped video calls.  </p>
                <iframe src="https://public.tableau.com/views/DigitalEquitySurveyUsevs_Quality/Dashboard1?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
            </div>
            <AnchorLink 
              to={`#findings-tabs`} 
              className="anchor"
              onAnchorLinkClick={() => setAssessIndex(assessIndex + 1)}
            >
              <FontAwesomeIcon 
                icon={faArrowCircleRight} 
                className="anchor__icon" 
              />
              <span className="anchor__helper-text">Next Section: Literacy</span>
            </AnchorLink>
          </TabPanel>
          <TabPanel>
            <div className="section">
              <p>Digital skills are needed to effectively use devices and internet to find, use, and communicate information. These are both cognitive and technical skills. These skills are a foundational element of digital access and are frequently observed as the most difficult of the three legs of the stool to address due to different levels of experience with technology, language barriers, and other issues. </p>
            </div>
            <div className="section">
              <h4>Use of Technology</h4>
              <p>82% of survey respondents indicate that the feel confident in their ability to use a laptop / Chromebook. It is encouraging that a high percentage of respondents felt confident in their abilities. To better understand those that indicated they were not confident, we can explore responses by language and age. For respondents who took the survey in a language other than English the number of confident their abilities dropped as follows (70% Arabic, 72% Spanish, 37.5% Portuguese). If we look by age where younger respondents responded with higher levels of confidence than older respondents. A smaller portion of respondents felt comfortable solving issues related directly to internet connectivity. Survey respondents in languages other than English also exhibited less confidence in resolving internet connectivity issues. Similarly, that number increased in higher age brackets. </p>
              <iframe src="https://public.tableau.com/views/DigitalEquityPlansConfidencebyAge/LiteracybyAge?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p className="citation">MAPC Digital Access and Equity Survey for the Cities of Chelsea, Everett, and Revere.</p>
              <p>A smaller portion of respondents felt comfortable solving issues related directly to internet connectivity. Similarly, that number increased in higher age brackets. </p>
            </div>
            <div className="section">
              <h4>Support Systems and Training</h4>
              <p>Overall, 90% of respondents indicated that they would prefer to have a local resource that could support technology needs, rather than relying on internet service providers. In addition to preferring local resources there may be opportunities to encourage and support the growth of local trained professionals. 63% of respondents indicated they would be interested in a career in Technology or IT. Further, higher percentages of respondents in languages other than English indicated that they would be interested in careers in technology or IT if training were available.  </p>
              <iframe src="https://public.tableau.com/views/DigitalEquitySurveyLocalResource/LocalResource?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p className="citation">MAPC Digital Access and Equity Survey for the Cities of Chelsea, Everett, and Revere.</p>
              <p>When asked about which digital skills respondents would like to learn more about, about a third of all respondents indicated interest in all of the following topics:</p>
              <ul>
                <li>Essential basic computer skills (identifying technology, using keyboard and mouse, using a web browser) </li>
                <li>Essential software skills (creating documents, creating slides, using email) </li>
                <li>Using technology in daily life (use online resources to find trustworthy information, find a job, use social media) </li>
                <li>Learning advanced technology skills </li>
              </ul>
              <p>However, twice as many respondents in Spanish indicated an interest in those same skill areas. </p>
              <iframe src="https://public.tableau.com/views/DigitalEquitySurveyLiteracyLearnAbout/Sheet1?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p className="citation">MAPC Digital Access and Equity Survey for the Cities of Chelsea, Everett, and Revere.</p>
            </div>
            <AnchorLink 
              to={`#findings-tabs`} 
              className="anchor"
              onAnchorLinkClick={() => setAssessIndex(assessIndex + 1)}
            >
              <FontAwesomeIcon 
                icon={faArrowCircleRight} 
                className="anchor__icon" 
              />
              <span className="anchor__helper-text">Next Section: Device Access</span>
            </AnchorLink>
          </TabPanel>
          <TabPanel>
            <div className="section">
              <p>In order to utilize the internet for critical personal services such as education, healthcare, job searches, and online applications, individuals need a computing device with a certain speed and functionality. The proliferation of smartphone technology has helped millions of individuals gain access to the communications benefits of the internet but is not a substitute for a personal computing devices function.  </p>
            </div>
            <div className="section">
              <h4>Computers</h4>
              <p>21.5% of respondents disagreed with the statement “People in my household always have access to a computer if they need one.” </p>
              <iframe src="https://public.tableau.com/views/DigitalEquitySurveyDeviceAccess/DeviceAccess?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p className="citation">MAPC Digital Access and Equity Survey for the Cities of Chelsea, Everett, and Revere.</p>
              <p>41% of respondents have had to buy a new computer in the last three years </p>
              <p>Many of those individuals had to buy a computer to either replace an older computer, or because their household did not have an existing computer.</p>
              <iframe src="https://public.tableau.com/views/DigitalEquitySurveyDevicePurchase/DevicePurchase?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p className="citation">MAPC Digital Access and Equity Survey for the Cities of Chelsea, Everett, and Revere.</p>
            </div>
            <div className="section">
              <h4>Routers</h4>
              <p>60% of respondents lease a WiFi router from an internet service provider.</p>
              <iframe src="https://public.tableau.com/views/DigitalEquitySurveyRouter/Router_1?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
              <p className="citation">MAPC Digital Access and Equity Survey for the Cities of Chelsea, Everett, and Revere.</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Assessment