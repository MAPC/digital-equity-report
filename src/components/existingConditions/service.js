import React, { useEffect, useState, useRef } from "react";
import chart1 from "../../images/edu-superhighway.png";
import chart2 from "../../images/tableau-placeholder.png"
import chart3 from "../../images/mlab.png"
import ImageModal from "../modules/imageModal";

const Service = () => {

  return (
    <div>
      <div className="section">
        <h4>Why are households offline?</h4>
        <p>Looking nationally at this question, the national nonprofit Education Superhighway has <a href="https://www.educationsuperhighway.org/no-home-left-offline/">released a report</a> that categorizes the reasons why US households are offline. They identified 28.2 million unconnected households across the US. While a portion 11% of the population is choosing not to connect and another 25% do not have the available infrastructure to connect, the majority of the unconnected households cite affordability as the reason why they are not connected 64%.</p>
        <ImageModal
          source={chart1}
        />
        <p>This Broadband Affordability Gap is a major component as to why households in Everett, Chelsea, and Revere are not connected. A large majority of those residents are offline because they can’t afford to connect to an available Internet connection. While advances in technology and expansion of networks over the past decades has seen the offline population of US adults decline from 48% in 2000 to 7% in 2021 (PEW), there are still 18.1 million US households offline because of the affordability gap .  Across Massachusetts there are approximately 380,233 unconnected households, and approximately XXX thousands of those households are in our communities of Everett, Chelsea, and Revere. As we have allowed market forces to lead the expansion of networks and connection of households, it has left those that can least afford it left unconnected. </p>
        <p>The challenge of affordability is something that affects urban and rural areas. As our Community Needs Assessment Survey further illustrates this need (LINK), it’s clear that the cost of internet services is dramatically impacting the affecting the lives of residents in our communities.</p>
        <p>While states like <a href="https://www.utopiafiber.com/">Utah</a> have established private-public entities to increase competition and drive prices to address the broadband affordability gap, we have not done the same here at the state level. Massachusetts does have municipalities working on their own to establish open public-private models to drive competition (Quincy, Fairhaven) and others that have established a public option for broadband services (Open Cape, Braintree, Leverett, etc.). Given the unprecedented federal investment available to communities, now is the time to make a generational investment that fundamentally addresses the market landscape of broadband. We know from research that the cost of broadband services only goes down when there are more than 3 providers competing against each other (REF Needed). Systemic and intuitional changes are needed to connect all households.  (See Recommendation XX) </p>
      </div>
      <div className="section">
        <h4>How much does broadband service cost in our communities? </h4>
        <p>How much does broadband service cost in our communities? </p>
        <p>As we saw in the self-reported FCC data, Comcast, RCN, Verizon, netBlazer, and Starry are the main providers that have any service in the area. While these plans might not be available at every address in the three municipalities, we list here the services packages that can be found at sample addresses from the communities. These are residential service advertised prices. Commercial providers like Crown Castle, FirstLight, Windstream, or Comcast Business are not included in this chart.</p>
        {/* <iframe src="https://public.tableau.com/views/ProviderCosts/Dashboard1?:showVizHome=no&:embed=true" width="100%" height="600"></iframe> */}
        <iframe src="https://public.tableau.com/views/ProviderCosts_16468396544930/Dashboard1?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
      </div>
      <div className="section">
        <h4>Have subsidies closed the broadband affordability gap?</h4>
        <p>Our collective attempts to address the broadband affordability gap to this point have not been effective at removing the cost barrier for many low-income families to afford the service.  The consumer programs in particular have seen low participation due to lack of promotion, difficulty in application rules, and lack of trust in government programs.</p>
        <p>Federal rules and subsidy opportunities have <a href="https://www.digitalinclusion.org/free-low-cost-internet-plans/">motivated most major providers</a> to offer discounted plans.  Comcast’s Internet Essentials model is the most widely known in our area and used by XX% of survey participants. To qualify, the ISP requires applicants must have no debt with the company, have not been a Comcast Internet customer for 90 days prior, and be a participant in one of <a href="https://www.internetessentials.com/get-help#application&Documentsneeded">several social assistance programs</a> such as SNAP, free or reduced lunch, Pell grants and others. Stakeholders and survey respondents report difficulty with the application process independent of the internet provider, upselling when signing up, and other concerns. Adding to the challenge, income-eligible programs, be it Comcast, Verizon, or others are not prominently listed alongside other plans on sites like BroadbandNow, HighspeedInternet, AllConnect, Broadband Research which appear at the top Google search result for plans. Newer internet service providers, Starry and netBlazr have implemented a model of qualifying affordable housing properties through the sponsor organization rather than individuals who live there for a discounted service, but those companies have much smaller service areas. </p>
        <p>Modeled after the Lifeline phone program, the federal government also began offering a subsidy directly to consumers in the American Rescue Plan Act (ARPA) of 2021. The Emergency Broadband Benefit offered qualifying households a $50 subsidy for broadband service and a $100 rebate for device purchase. Rebranded as the Affordable Connectivity Program in January 2022 and taking effect March 1 of the same year, Congress reduced the benefit to $30, but extended the length of the once temporary program.</p>
        <p>Subscribers may take advantage of the private and public subsidies, significantly reducing the cost of broadband access. As part of their digital literacy programs, Tech Goes Home and Digital Navigators aid prospective households to sign up for the programs, but meanwhile are using MIFI devices for their programs for the ease of setup and use.  Despite these and other efforts, approximately XX percent of eligible households are taking advantage of these programs.  </p>

      </div>
      <div className="section">
        <h4>For those that are connected, what are they experiencing?</h4>
        <p>In addition to 15-19% of households we saw that were not connected to the internet, we can see from speed test that that an additional XX40% may not consistently be experiencing broadband level of speed. Those that have purchased an internet service plan that is classified as broadband level (25/3) may not be experiencing broadband levels of speed. (See Recommendation on change to 100/100).</p>
        <p>If we look at speed test data form from Microsoft and speed test sites (MLab / Ookla) they suggest the problem is significantly larger because a sizeable share of households with internet service do not operate at broadband speeds. </p>
        <iframe src="https://public.tableau.com/views/ProviderBroadband/Story1?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
      </div>
    </div>
  )
}

export default Service