import React from "react";
import ImageModal from "../modules/imageModal";
import chart1 from "../../images/comcast_census_blocks_2022-02-18_3pm.png";
import CalloutQuote from "../modules/calloutQuote";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Summary = () => {

  return (
    <div>
      <div className="section">
        <h2>Executive Summary</h2>
        <h3>Introduction</h3>
        <p>In March of 2020, the COVID-19 pandemic upended daily life in Greater Boston and around the world. Unemployment rates spiked, schools were closed, and those fortunate enough to work or attend school from home were forced to reorient themselves to a completely digital environment. And while fluctuations in COVID transmission will continue to impact the degree that in-person interactions can take place –the significant shift our society and economy have made to online presence is unlikely to reverse. This shift has pushed the public sector, specifically municipal leaders and staff, to evaluate their role in ensuring that residents and businesses have access to reliable, high speed, and affordable internet – along with the skills and tools to make use of it.</p>
        <p>Nowhere was this push felt more than in the cities of Chelsea, Everett, and Revere – communities with high populations of low income, people of color, and immigrant residents – population groups that have been disproportionately impacted by the health and economic disruptions of COVID . Residents in these communities were also experiencing average internet speeds much lower than available, advertised <a href="https://datacommon.mapc.org/calendar/2020/december">speeds</a>. In fact, the data showed these communities to have some of the lowest average download speeds of any municipality in the region. These disadvantages are only compounded by the numerous residents without devices that can take full advantage of the internet, and the many with digital literacy challenges.</p>
        <p>City staff quickly identified the critical need to understand the role of municipal government in ensuring internet connectivity for residents and engaged with the Metropolitan Area Planning Council to create the Commonwealth’s first coordinated regional digital access plan.</p>
        <p>Through a comprehensive planning process MAPC evaluated available data, coordinated a digital access survey with over 2,000 responses, attended school district meetings, held focus groups in multiple languages, evaluated existing infrastructure, and worked closely with municipal staff and executive leadership to fully understand not only the symptoms, but root causes of digital inequities. This report outlines those findings and sets a path forward for these municipalities, and others, to improve not only digital connectivity and use, but the economic, health, and social well-being of all community residents.</p>
      </div>
      <div className="section">
        <h3>Key Findings</h3>
        <p>Through this planning process, the degree to which digital equity gaps are impacting community residents in these three cities was found to be not just significant, but critical. Data from the 2019 US Census indicates that 15% to 19% of residents within the three communities do not have internet connections. For those households making less than $75,000 / year that number jumps to 55% in Everett, 65% in Chelsea, and 64% in Revere. And while the majority of residents do have an internet subscription, <a href="https://broadbandnow.com/report/fcc-broadband-definition/">an evaluation of speed test data</a> from MLab and Microsoft indicate that between 30% and 50% of these subscribers do not receive broadband speed as defined by the FCC (25 megabits per second download speed, 3 megabits per second upload speed).</p>
        <p>While affordability remains the primary barrier to internet adoption, 70% of survey takers responded Yes to the question “Have you ever had to change or cancel your internet subscription because it was too expensive?” MAPC also identified barriers to internet adoption stemming from language isolation, concerns about privacy, and lack of information regarding internet subsidies and training programs. For example, respondents who completed MAPC’s Digital Access survey in a language other than English were less likely to feel confident in the use of a laptop/chromebook as well as resolving internet connectivity issues, <a href="#assessment">indicating the need for language specific programming.</a></p>
        <iframe src="https://public.tableau.com/views/DigitalAccessSurveyDraft_3/Story2Literacy?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
        </div>
        <div className="section-two-col-flex">
          <div className="section-half border-right">
            <p>Beyond the existing market rate service offerings, Comcast offers a “Lifeline” internet service package known as Internet Essentials at $10/month which provides 50/5 speeds. The adoption of lifeline internet service programs like the Comcast Internet Essentials (IE) service, or the Emergency Broadband Benefit (EBB) program has been limited in all three communities. As of 2021, there have only ever been 1900 IE subscribers in Chelsea, 1800 in Revere, and 1300 in Everett (data provided by Comcast). Conversations with residents in the three communities indicate significant barriers to signing up for IE and EBB regarding documentation, language, and complexity of registration tools. </p>
          </div>
          <div className="section-half">
            <CalloutQuote 
              quote="سمعت بأن شركة كومكاست توفر انترنت مجاني لأصحاب الدخل المحدود .هل هذا صحيح؟" 
              byline="I heard that internet service companies provide free internet to people with limited income. Is this true?" 
            />
          </div>
        </div>
        <div className="section">
        <p>Anecdotal information gleaned from stakeholder engagement has also illustrated the specific issues facing larger households. Many households in the three communities are larger, with more than four people. In Chelsea, 33% of households have 4 people or more, in Everett 27%, and Revere 24%. 80% of respondents to the Digital Access and Equity Survey responded that frequently or always more than one person in their household needs to use the internet at the same time. Multiple users of the internet on lower service plans have caused significant challenges for students and parents who need to work or attend school remotely due to limited bandwidth and speed, as well issues stemming from outdated building wiring and equipment. </p>
        <p>Finally, MAPC explored the state of existing infrastructure in the three cities and found that while the wireline service providers have close to ubiquitous cable broadband coverage, there are significant gaps in the fiber backbone serving these areas. Currently, Everett and Revere are served by Comcast and RCN, and Chelsea is only served by Comcast. As much of the future federal funding through both the American Rescue Plan Act and Infrastructure Investment and Jobs Act specifically calls out an emphasis on fiber connections for both reliability and speed, it will be critical for these communities to work with public and private actors to expand the fiber connectivity.</p>
        <ImageModal
          source={chart1}
        />        
      </div>
      <div className="section">
        <h3>Recommendations</h3>
        <p>Historically, digital access and equity has been an issue that municipal and community partners have recognized as important, but not one that has been a core focus of any one entity. While establishing a local point of contact for leading forward future efforts related to digital access and equity, it is also important to recognize that existing stakeholders can play in advancing program, policies, and investments.</p>
        <p>MAPC established the following framework for considering the roles of these local actors as follows: </p>
        <iframe 
          src="https://slides.com/mapc/everett-digital-access-plan-final-pres-809f36/embed?token=cwvrAva4" 
          width="100%" 
          height="480" 
          title="Everett Digital Access Plan - Final Pres" 
          scrolling="no" 
          frameborder="0" 
          allowFullScreen="true" 
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        >
        </iframe>
        <p>With that framework, MAPC recommends that the cities of Chelsea, Everett, and Revere take the following steps to advance digital access and equity in their communities.</p>
      </div>
      <div className="section">
        <AnchorLink 
          to={`#actions`} 
          className="anchor"
        >
          <FontAwesomeIcon icon={faArrowAltCircleDown} className="anchor__icon" />
          <span className="anchor__helper-text">Read the Actions</span>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Summary