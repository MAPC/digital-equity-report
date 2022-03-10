import React, { useEffect, useState, useRef } from "react";
import ImageModal from "../modules/imageModal";
import cities from "../../images/cities.jpg"

const Summary = () => {

  return (
    <div>
      <div className="section">
        <h2>Executive Summary</h2>
        <h4>Introduction</h4>
        <p>In March of 2020, the COVID-19 pandemic upended daily life in Greater Boston and around the world. Unemployment rates spiked, schools were closed, and those fortunate enough to work or attend school from home were forced to reorient themselves to a completely digital environment. And while fluctuations in COVID transmission will continue to impact the degree that in-person interactions can take place –the significant shift our society and economy have made to online presence is unlikely to reverse. This shift has pushed the public sector, specifically municipal leaders and staff, to evaluate their role in ensuring that residents and businesses have access to reliable, high speed, and affordable internet – along with the skills and tools to make use of it.</p>
        <p>Nowhere was this push felt more than in the cities of Chelsea, Everett, and Revere – three communities of the most impacted communities by COVID in the MAPC region and three cities with high populations of low income, people of color, and immigrant residents – population groups that have been disproportionately impacted by the health and economic disruptions of COVID . Early in the pandemic, city staff quickly identified the critical need to understand the role of municipal government in ensuring internet connectivity for residents and engaged with the Metropolitan Area Planning Council to create the Commonwealths first coordinated regional digital access plan. </p>
        <div className="section-two-col-flex">
          <div className="section-half">
            <p>Through a comprehensive planning process MAPC evaluated available data, coordinated a digital access survey with over 2,000 responses, attended school district meetings, held focus groups in multiple languages, evaluated existing infrastructure, and worked closely with municipal staff and executive leadership to fully understand not only the symptoms, but root causes of digital inequities. This report outlines those findings and sets a path forward for these municipalities, and others, to improve not only digital connectivity and use, but the economic, health, and social well being of all community residents.</p>
          </div>
          <div className="section-half">
            <ImageModal 
              source={cities}
            />
          </div>
        </div>
      </div>
      <div className="section section-bottom">
        <h4>Key Findings</h4>
        <p>Through this planning process, the degree to which digital equity gaps are impacting community residents in these three cities was found to be not just significant, but critical. Data from the 2019 US Census indicates that 15% to 19% of residents within the three communities do not have internet connections. For those households making less than $75,000 / year that number jumps to 55% in Everett, 65% in Chelsea, and 64% in Revere. And while the majority of residents do have an internet subscription, an evaluation of speed test data from MLab and Microsoft indicate that between 30% and 50% of these subscribers do not receive broadband speed as defined by the FCC (25 megabits per second download speed, 3 megabits per second upload speed)1</p>
        <p>While affordability remains the primary barrier to internet adoption, 70% of survey takers responded Yes to the question “Have you ever had to change or cancel your internet subscription because it was too expensive?” MAPC also identified barriers to internet adoption stemming from language isolation, concerns about privacy, and lack of information regarding internet subsidies and training programs. For example, respondents who completed MAPC’s Digital Access survey in a language other than English were less likely to feel confident in the use of a laptop/chromebook as well as resolving internet connectivity issues.2</p>
        <p>Beyond the existing market rate service offerings, Comcast offers a “Lifeline” internet service package known as Internet Essentials at $10/month which provides 50/5 speeds. The adoption of lifeline internet service programs like the Comcast Internet Essentials (IE) service, or the Emergency Broadband Benefit (EBB) program has been limited in all three communities. As of 2021, there have only ever been 1900 IE subscribers in Chelsea, 1800 in Revere, and 1300 in Everett (data provided by Comcast). Conversations with residents in the three communities indicate significant barriers to signing up for IE and EBB regarding documentation, language, and complexity of registration tools. </p>
        <p>Anecdotal information gleaned from stakeholder engagement has also illustrated the specific issues facing larger households. Many households in the three communities are larger, with more than four people. In Chelsea, 33% of households have 4 people or more, in Everett 27%, and Revere 24%. 80% of respondents to the Digital Access and Equity Survey responded that frequently or always more than one person in their household needs to use the internet at the same time. Multiple users of the internet on lower service plans have caused significant challenges for students and parents who need to work or attend school remotely due to limited bandwidth and speed, as well issues stemming from outdated building wiring and equipment. </p>
        <p>Finally, MAPC explored the state of existing infrastructure in the three cities and found that while the wireline service providers have close to ubiquitous cable broadband coverage, there are significant gaps in the fiber backbone serving these areas. Currently, Everett and Revere are served by Comcast and RCN, and Chelsea is only served by Comcast. As much of the future federal funding through both the American Rescue Plan Act and Infrastructure Investment and Jobs Act specifically calls out an emphasis on fiber connections for both reliability and speed, it will be critical for these communities to work with public and private actors to expand the fiber connectivity. </p>
      </div>
    </div>
  )
}

export default Summary