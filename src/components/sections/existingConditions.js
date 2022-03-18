import React from "react";
import Connection from "../existingConditions/connection";
import Service from "../existingConditions/service";
import Infrastructure from "../existingConditions/infrastructure";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import ImageModal from "../modules/imageModal";
import chart1 from "../../images/bar-chart-placeholder.png";
import { ParallaxBanner } from 'react-scroll-parallax';

const ExistingConditions = ({tabIndex, setTabIndex}) => {

  const handleTabsChange = (index) => {
    setTabIndex(index);
    console.log("tabIndex", tabIndex);
  };

  return (
    <div>
      <div className="section">
        <ParallaxBanner
          layers={[{ image: 'https://source.unsplash.com/gTyHuIDjUH0/4013x1923', speed: -30 }]}
          style={{height: "24rem", width: "100vw"}}
          className="fullbleed" 
        />
      </div>
      <div className="section section-bottom">
        <h2>Existing Conditions</h2>
        <p>Currently, access to the internet is not managed as a public utility with , guaranteeingd access to for all residents. Without that guarantee, access to the internet is heavily influenced by the economic and societal makeup of a community. Having a low household income, living with a high number of individuals per household, not understanding the language for which guidance or marketing materials are produced, being older and non-digital native can all be compounding barriers to internet access.</p>
        <p>Using the accompanying chart, we can explore a variety of census data about our the communities (Chelsea, Everett, and Revere). We can see that tThe cities of Chelsea, Everett, and Revere are some of the most diverse communities in Massachusetts, w. With a higher-than-average number of languages spoken in the communities than in most MA communities as well a high rate of foreign-born population.</p>
        <p>These communities also have many residents with limited income. The median household income in (Chelsea, Everett, and Revere) is $61,600 [calculated # if aggregated].  In fact, more than 20% of households in the three cities are categorized as “extremely low income” meaning they make less than 30% of HUD’s Median Area Family Income. </p>
        <p>Further, we know that mmany households in the three communities are larger, withhave more than four people. More individuals with more devices are competing to pull and push data within the bounds of an internet service providers plan. Multiple users of the internet on lower service plans can caused significant challenges for students and parents who need to work or attend school remotely. </p>
        <p>Bar chart with Chelsea, Everett, Revere, MA, MAPC Region:</p>
        <ImageModal 
          source={chart1}
        />
        <Tabs 
          selectedIndex={tabIndex} 
          onSelect={(index) => handleTabsChange(index)}
          id="existing-conditions-tabs"
        >
          <TabList>
            <Tab><h4>Connection & Access</h4></Tab>
            <Tab><h4>Service & Affordability</h4></Tab>
            <Tab><h4>Infrastructure</h4></Tab>
          </TabList>

          <TabPanel>
            <Connection />
            <AnchorLink 
              to={`#tabs`} 
              className="anchor"
              onAnchorLinkClick={() => setTabIndex(tabIndex + 1)}
            >
              <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
              <span className="anchor__helper-text">Next Section: Service & Affordability</span>
            </AnchorLink>
          </TabPanel>
          <TabPanel>
            <Service />
            <AnchorLink 
              to={`#tabs`} 
              className="anchor"
              onAnchorLinkClick={() => setTabIndex(tabIndex + 1)}
            >
              <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
              <span className="anchor__helper-text">Next Section: Infrastructure</span>
            </AnchorLink>
          </TabPanel>
          <TabPanel>
            <Infrastructure />
          </TabPanel>
        </Tabs> 
      </div>
    </div>
  )
}

export default ExistingConditions