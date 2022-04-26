import React, { useEffect, useState, useRef } from "react";
import chart1 from "../../images/edu-superhighway.png";
import chart2 from "../../images/tableau-placeholder.png"
import chart3 from "../../images/mlab.png"
import ImageModal from "../modules/imageModal";

const Service = () => {

  return (
    <div>
      <div className="section">
        <h3>Why are households offline?</h3>
        <p>Looking nationally at this question, the national nonprofit Education Superhighway has <a href="https://www.educationsuperhighway.org/no-home-left-offline/">released a report</a> that categorizes the reasons why US households are offline. They identified 28.2 million unconnected households across the US. While a portion of the population – 11 percent – is choosing not to connect and another 25 percent do not have the available infrastructure to connect, the majority of the unconnected households, at 64 percent, cite <span className="bold">affordability</span> as the reason why they are not connected.  </p>
        <ImageModal
          source={chart1}
        />
        <p className="citation">Education Superhighway Report: <a href="https://www.educationsuperhighway.org/no-home-left-offline/">Bridging The Broadband Affordability Gap.</a></p>
        <p>Advances in technology and expansion of networks over the past decades has reduced the offline population of US adults from 48 percent in 2000 to seven percent in 2021 (PEW). However, that seven percent not connected still consists of 28.2 million households, 18.1 million of which are offline because they can’t afford to be otherwise.  In Massachusetts, that is approximately 380,233 unconnected households, and approximately XXX thousand disconnect households are in our communities of Everett, Chelsea, and Revere. </p>
        <p>As is true nationally, affordability is a central reason why households in Everett, Chelsea, and Revere are not connected.  The challenge of affordability is something that affects urban and rural areas. As our Community Needs Assessment Survey further illustrates (LINK), the cost of internet services is dramatically affecting the lives of residents in our communities. </p>
      </div>
      <div className="section">
        <h3>How much does broadband service cost in our communities? </h3>
        <p>Let’s look at the cost of broadband services available in Everett, Chelsea, and Revere. It’s important to note that service plans are offered and sold based on max levels of speed. Not all service plans are available at every address across the study area. In the chart below we list the services packages that can be found at a sample address in Everett in 2021. This chart gives a snapshot of the ever-changing residential service advertised prices. The commercial providers Crown Castle, FirstLight, Windstream, and Comcast Business are not included in this chart. </p>
        <iframe 
          src="https://public.tableau.com/views/ProviderCosts-Everett/bars?:showVizHome=no&:embed=true" 
          width="100%" 
          height="600"
          allowFullScreen="true" 
          webkitallowfullscreen="true"
          mozallowfullscreen="true" 
        ></iframe>
        <p className="citation">Advertised plans gathered by MAPC for local Everett addresses in March 2021.</p>
        <p>Often, the speeds of these packages are described as “<em>speed up to</em>”, meaning this is the max that could be reached, even if it is not consistently reached. While all the advertised service plans, apart from DSL, listed are above 25 Mbps download and 3 Mbps upload, user may not be consistently experiencing those speeds. </p>
      </div>
      <div className="section">
        <h3>For those that are connected, what are they experiencing?</h3>
        <p>We have seen that there are an estimated XXXX households in these communities not connected with an internet subscription, <span className="bold">for those that are connected, 20 - 40% of those households may not be experiencing broadband speeds</span>. This is a significant proportion of households not reliable experiencing broadband. The definition of broadband is a low benchmark that technology today can reliably provide. </p>
        <p>Speed tests offer one way of understanding the experience of those connecting to the internet. In the data and charts below we explore two different speed tests, from two sources, where data has been made publicly available. Neither of these tests serve as “stress tests” putting a connection to the tests, where multiple browser tabs, competing with streaming video and zoom calls might test the limits of machine and connection. These tests instead are a diagnostic measurement tool that measure how long it takes packets or bits of information to traverse a part of the internet. They provide valuable insight into understanding a user’s experience.  </p>
        <p>“Speed” in speed tests is measured in megabits per second (Mbps). A megabit represents 1 million bits, the binary building block of our digital information. How fast you can send (upload) or receive (download) a megabit of information over the internet help define speed. The accompanying chart shows the results of users in Everett, Chelsea, or Revere, who have tested their speed, by using the widget that appears, when googling “speed test”. While many factors with a home, or with a provider impact and limit speeds we can see from the accompanying chart that for instance 26% of download speed test from Comcast subscribers were below 25 Mbps. This percentage of download tests under 25 Mbps (orange) do not meet the current definition of broadband. Toggling the filters of the visualizations you can see that the percentage of uploads under 3 Mbps (purple) are the percentage falling under the broadband definition by provider.  </p>
        <iframe 
          src="https://public.tableau.com/views/ProviderBroadband_16472866665260/Story1?:showVizHome=no&:embed=true" 
          width="100%" 
          height="600"
          allowFullScreen="true" 
          webkitallowfullscreen="true"
          mozallowfullscreen="true" 
        ></iframe>
        <p className="citation"><a href="https://www.measurementlab.net/data/">Measurement Lab (Mlab) data as of May of 2021.</a></p>
        <p>Broadband is defined by the Federal Communications Commission (FCC) and dates back to 2015 when it was last updated. It defines broadband speeds to be at least a minimum of 25 Mbps download and 3 Mbps upload. The FCC provides a <a href="https://www.fcc.gov/consumers/guides/broadband-speed-guide">guide</a> that outlines how many Mbps are needed for individual activities. Activities like video teleconferencing can require up to 6 Mbps download and according to <a href="https://support.zoom.us/hc/en-us/articles/201362023-Zoom-system-requirements-Windows-macOS-Linux">Zoom</a> up to 3.0 to 3.8 upload for high-quality calls. Participation on activities such as telehealth, remote schooling, and virtual work is contingent on having speeds that a proportion of households are not consistently experiencing... It should be noted that the American Rescue Plan Act and Infrastructure Investment and Jobs Act legislation reference new thresholds of up to 100/100 and 100/50 Mbps, indicating that the current definition may be outdated. If a definition of 100 download / 100 or 50 upload Mbps is used even more of those that have tested would not be experiencing broadband speeds.</p>
        <p>Another speed test source recently made publicly available is from Microsoft. Microsoft analyzed how long it was taking individuals to down software form them. They used this to estimate the speed of individuals and made available aggregated zip code level data from across the country. This <a href="https://github.com/microsoft/USBroadbandUsagePercentages">national picture</a> indicates that 120.4 million Americans are not using the internet at broadband speeds. This is a staggering number of individuals and households that are not being served well by the current market and infrastructure. This compounded by those individuals (46.9 million) and households (28.2 million) highlighted earlier in the report as not having any internet. </p>
        <p>Looking at estimates for Chelsea’s zip code, 42 % of households did not experience broadband speeds when downloading Microsoft products. Across all three cities, there is a large portion of the population that are not experiencing broadband speeds (28.4% Revere and 34.3% Everett). This stands in contrast to areas of the state that do report all users expressing broadband speeds. The chart below shows that residents in gateway cities across the state often share a common struggle to connect and use the internet at reliable broadband speeds.</p>
        <iframe 
          src="https://public.tableau.com/views/MicrosoftDataPercentofhouseholdswithInternetaccessaccessingpoorspeeds/Dashboard1?:showVizHome=no&:embed=true" 
          width="100%" 
          height="600"
          allowFullScreen="true" 
          webkitallowfullscreen="true"
          mozallowfullscreen="true" 
        ></iframe>
        <p className="citation"><a href="https://github.com/microsoft/USBroadbandUsagePercentages">Microsoft: United States Broadband Usage Percentages Dataset.</a></p>
      </div>
      <div className="section">
        <h3>Have subsidies closed the broadband affordability gap?</h3>
        <p>Our collective attempts to address the broadband affordability gap to this point have not been effective at removing the cost barrier for many low-income families to afford the service. Federal rules and subsidy opportunities have motivated or required most major providers to offer <a href="https://www.digitalinclusion.org/free-low-cost-internet-plans/">discounted subsidized plans</a>. Comcast’s Internet Essentials model is the most widely known in our area as it is used by 42% of survey participants. To qualify, Comcast requires applicants to have no debt with the company, have not been a Comcast Internet customer for 90 days prior, and be a participant in one of <a href="https://www.internetessentials.com/get-help#application&Documentsneeded">several social assistance programs</a> such as SNAP, free or reduced lunch, Pell grants and others. If a customer is qualified, they are eligible for service with speeds up to 50 Mbps download and 10 Mbps upload for $9.95/month + tax. Recently, Comcast added another plan, Internet Essentials PLUS, for 100Mps download and 5 Mbps upload, for $29.95/month + tax. Applying the ACP subsidy allows this service to be free to the customer. </p>
        <p>Stakeholders and survey respondents reported difficulty with the application process independent of the internet provider, upselling when signing up, and other concerns when enrolling in subsidies plans. Despite the efforts of school and non-profits like <a href="https://www.techgoeshome.org/">Tech Goes Home</a>, the total enrollment in the Comcast Internet Essentials program is limited. From numbers provided to MAPC by Comcast for the year 2020 there were 1,900 households in Chelsea, 1,800 in Revere, 1,300 in Everett enrolled in the program.  </p>
        <p>Other internet service providers in the cities, Starry and netBlazr have implemented a model of qualifying affordable housing properties through the sponsor organization rather than individuals who live there for a discounted service, but those companies have much smaller service areas. All of these income-eligible programs can be difficult to know about. They are not often prominently listed alongside other plans on sites like BroadbandNow, Highspeed Internet, AllConnect, Broadband Research which appear at the top Google search result for plans.  </p>
        <p>In addition to corporate income-eligible programs, recent federal recovery and investment funding have been made available as subsidies to reduce the cost burden of an internet subscription. Modeled after the Lifeline phone program, the federal government began offering a subsidy directly to consumers in the American Rescue Plan Act (ARPA) of 2021. The Emergency Broadband Benefit offered qualifying households a $50 subsidy for broadband service and a $100 rebate for device purchases. Rebranded as the Affordable Connectivity Program in January 2022 and taking effect March 1 of the same year, Congress reduced the benefit to $30, but extended the length of the once temporary program. <span className="bold">34% of the eligible households are currently taking advantage of the ACP subsidy.</span></p>
        <iframe 
          src="https://public.tableau.com/views/ACPEnrollmentEligiblePopulation_16498716865770/Dashboard1?:showVizHome=no&:embed=true" 
          width="100%" 
          height="600"
          allowFullScreen="true" 
          webkitallowfullscreen="true"
          mozallowfullscreen="true" 
        ></iframe>
        <p className="citation"><a href="https://www.usac.org/about/emergency-broadband-benefit-program/emergency-broadband-benefit-program-enrollments-and-claims-tracker/">Universal Service Administration Co. Emergency Broadband Benefit Program Enrollment and Claims Tracker (Dec. 31, 2021).</a></p>
        <p>Market forces have led to the expansion of networks and connections of households, but they have left those that can least afford it unconnected. Utah among other states and localities that have moved to address the broadband affordability gap with private-public partnerships that increase competition and drive prices down. Utah Telecommunication Open Infrastructure Agency (<a href="https://www.utopiafiber.com/">UTHOPIA</a>) is the organization established jointly by a group of municipalities in Utah, that manages an open-access network. Open access means that the UTHOPIA organization owns the fiber to the home network and infrastructure, while private providers manage the internet service. </p>
        <p>At the municipal level, there are governments (Quincy, Fairhaven) working on their own to establish public-private models. Others (Open Cape, Braintree, Leverett, and a few others) have established a public option for broadband services. Given the unprecedented federal investment available to communities, now is the time to make a generational investment that fundamentally addresses the market landscape of broadband. <a href="https://www.analysisgroup.com/globalassets/content/insights/publishing/broadband_competition_report_november_2016.pdf">Research</a> has shown that the cost of broadband services only goes down when there are more than three providers competing against each other.  </p>
        <p>Systemic and intuitional changes are needed to connect all households.  (See Recommendation Build Better Broadband).</p>
      </div>
    </div>
  )
}

export default Service