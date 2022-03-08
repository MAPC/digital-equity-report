import React, { useEffect, useState, useRef } from "react";
import Literacy from "./literacy";
import chart1 from "../../images/bar-chart-placeholder.png";
import chart2 from "../../images/without-internet.png";
import pew1 from "../../images/pew.png";
import pew2 from "../../images/pew2.png";
import literacy from "../../images/literacy-survey.png"
import ImageModal from "../modules/imageModal";

const Connection = () => {

  return (
    <div>
      <div className="section">
        <p>Currently, access to the internet is not managed as a public utility with , guaranteeingd access to for all residents. Without that guarantee, access to the internet is heavily influenced by the economic and societal makeup of a community. Having a low household income, living with a high number of individuals per household, not understanding the language for which guidance or marketing materials are produced, being older and non-digital native can all be compounding barriers to internet access.</p>
        <p>Using the accompanying chart, we can explore a variety of census data about our the communities (Chelsea, Everett, and Revere). We can see that tThe cities of Chelsea, Everett, and Revere are some of the most diverse communities in Massachusetts, w. With a higher-than-average number of languages spoken in the communities than in most MA communities as well a high rate of foreign-born population.</p>
        <p>These communities also have many residents with limited income. The median household income in (Chelsea, Everett, and Revere) is $61,600 [calculated # if aggregated].  In fact, more than 20% of households in the three cities are categorized as “extremely low income” meaning they make less than 30% of HUD’s Median Area Family Income. </p>
        <p>Further, we know that mmany households in the three communities are larger, withhave more than four people. More individuals with more devices are competing to pull and push data within the bounds of an internet service providers plan. Multiple users of the internet on lower service plans can caused significant challenges for students and parents who need to work or attend school remotely. </p>
        <p>Bar chart with Chelsea, Everett, Revere, MA, MAPC Region:</p>
        <ImageModal 
          source={chart1}
        />
      </div>
      <div className="section">
        <h4>Connected to the Internet</h4>
        <p>The American Community Survey also captures data on internet connection. The current survey asks… [if you have internet, what kind of plan—summarize how the question is asked.] As shown in the data viz below, almost 16% of Everett households, and more than 18% of Revere and Chelsea households, have no internet connection at home.</p>
        <iframe src="https://public.tableau.com/views/DigitalEquityCensusInternetQuestions/U_S_CensusQuestions?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
        <p>The percentage of households with only broadband cellular plan also stands out when compared with (REGION/STATE/US/World bank compare?)</p>
        <iframe src="https://public.tableau.com/views/DigitalEquityCensusInternetQuestions/U_S_CensusQuestions?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
        <p>The connection to the internet is not distributed equally. While the number of households with a fiber / broadband level speed lags behinds the state and region, the lack of connection is even more pronounced to for those households living below 200% of below the poverty threshold.</p>
        <iframe src="https://public.tableau.com/views/DigitalEquityCensusInternetQuestions/U_S_CensusQuestions?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
        <p>Access to the internet is also a racial equity issue. Analysis of the digital divide shows that Black and Latinx residents are also disproportionately represented in “Unconnected Communities,” defined as….   We know nationally disconnect households are disproportionately impacting communities of color.</p>
        <p>The Census data above highlights that these three communities have some of the highest 	populations of Black and Latinx populations in region and state.</p>
        <p>Another source of data is the required federal self-reporting done by internet service providers to help understand connection. The FCC requires that twice a year internet service providers self-report service coverage online through Form 477. The data from these filings gives one picture of internet connection across the country. While the data is open and available, it can exaggerate the available service area given data and reporting limitations.</p>
        <p>The data is reported at a census block level. A census block is a federal unit of geography that can contain clusters of many buildings. Some census blocks in Everett, Chelsea, and Revere contain more than 50 residential buildings. If one address in a census block is serviced by an ISP the whole census block is reported as a serviced area. Additionally, anecdotal evidence has shown that ISP’s may refuse service to households even within their service area, oftentimes due to the cost of connecting that home does not provide the return on investment required to serve that address. </p>
        <p>Complicating the question of coverage, Form 477 is self-reported by providers and does not include levels of service offered. Providers are only asked to report the highest levels of speed (mbps download and upload) serviced provided infor each census block. What is not reported is the different service level available at what cost. While the FCC is working to implement “Broadband Nutrition Labels”, today clearcurrent comparisons ofinformation about viability speed and cost between providers is limited to the form 477 data. Only the ISPs know the dDetails of what addresses are served, not served, or where the infrastructure is; this level of detail  known only by the individual ISPs and not reported to the FCC, nor regularly reported through other state or local requirements. (SEE RECOMMENDATION: XX Data Reporting)</p>
        <p>Form 477 data does can in part start to illustrate who are the major available providers, and what technology is prevalent in the a given area. The table below lists providers from the FCC data. Comcast, RCN, Starry, and NetBlazr each service some portion of Everett, Chelsea and/or Revere. There are a limited number of providers in the area who can provide 100/10 speeds. Those that can provide those speeds, use a mix of fiber, fixed wireless, and cable technologies.</p>
        <iframe src="https://public.tableau.com/views/FCC_DA_Munis/TechnologyTableDashboard?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
        <p>The Form 477 data is mapped below, where the color indicates the number of ISPs that report serving that census block. Many census blocks have 2 provider options, and the darkest colored areas have all 4 of these residential provider options available in the census block. It’s worth mentioning again that a provider reporting via Form 477 that it serves a given census block is no guarantee that all residents have or could even subscribe to that provider.  While business may have additional ISP options residents across these three communities don’t have the same level of choice nor competition.</p>
        <iframe src="https://mapc.github.io/fcc-map/" width="100%" height="600"></iframe>
        <p>Looking closer at the technologies used in the map below, there are less fewer than 20 census blocks where the service connection allows a direct connection to the internet via fiber optic lines from any one of the providers. that the 4 area residential providers report having fiber connections within them. This doesn’t mean that there’s no fiber: This map and data does not mean these residential providers (Comcast, RCN, Starry, netBlazr)b do not utilize fiber in these communities. What it does show is that both Comcast and RCN networks have hybrid fiber/coaxial networks in these communities, but nearly every connection will rely in part on still report relying on some coaxial / cable technology (listed as DOCSIS 3.0 /3.1 systems) between the home and the internet across their full area of services. While these ISP have hybrid fiber/coaxial networks, no blocks are reported as being served solely by fiber, highlighting that aA full fiber to the home network, replacing the slower coaxial lines, would require significant investment to achieve given the current state.</p>
      </div>
      <div className="section">
        <h4>Device Ownership</h4>
        <p>The state of device ownership in Everett, prior to the pandemic can be glimpsed assessed through Census ACS 	data. The accompanying table/chart highlights the Of more than 16,00021 households in Everett, almost 20% 	of them as of 2019, 3,178 households one in five (just under [20%]) did not have a desktop or laptop to serve as a computing 	device. This lags the statewide average of 14% (or the MAPC region calculate?)</p>
        <p>Those households without a desktop or laptop (45%, or 1,433 households) did indicate they have a mobile smart device (smartphone or tablet). However, as we have seen expressed acutely in recent years, full participation in society often requires a computing device beyond a phone to apply for jobs or work remotely, complete forms or applications, attend virtual classes, teleconference with doctors, virtually connect with family, shop safely and securely online. While mobile devices may someday be capable of connecting residents to a full set of services, we can see from these resident stories described below below show that without a computing device beyond a phone, residents can be disconnected from the broaorder economy and society.  </p>
        <iframe src="https://public.tableau.com/views/DigitalEquityCensusInternetQuestions/U_S_CensusQuestions?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
        {/* <ImageModal 
          source={chart4}
        /> */}
      </div>
      <div className="section">
        <h4>Digital Literacy</h4>
      </div>
      <div className="section-two-col-flex">
        <div className="section-half">
          <p>As essential as it is to have the device or connection to the internet, it’s as essential to have the skills and ability to be successful in navigating that digital landscape.  The NDIA defines digital literacy as “the ability to use information and communication technologies to find, evaluate, create, and communicate information, requiring both cognitive and technical skills”. The “digital” in digital literacy skills casts a wide net and encompasses many skills a person or user may need to leverage devices and connection. Translated to daily life, dDigital skills are required to operate a device, obtain, and email address, apply for a job, communicate with a doctor, and connect with family members. Assessments such as the NorthStar Digital Literacy assessment, purchased (by City of Revere?) can provide a way of assessing levels of digital literacy.</p>
          <p>It’s important to note that digital literacy can be compounded by the lack of literacy skills. This is acutely true when information, guidance, or support aimed at growing skills is not presented in a language that is shared and understood. Language and culturally appropriate guidance can support the growth of all skills including digital skills.</p>
          <p>A recent 2021 Pew study found that 30% of adults are not “tech ready,” meaning they need support to set up or navigate a new computer, smartphone or other electronic device or have little to no confidence to use those devices to do the things they need to do online. The digital literacy issue is even greater with older adults.</p>
        </div>
        <div className="section-half">
          <ImageModal
            source={pew1}
          />
          <ImageModal
            source={pew2} 
          />
        </div>
      </div>
      <div className="section-two-col-flex">
        <div className="section-half">
          <p>MAPC’s survey of Chelsea, Everett and Revere residents showed approximately 18% of respondents did not feel confident in their ability to use a Chromebook, tablet or computer. </p>
          <p>There are many ways for a person to develop or gain skills that can help them to be more productive and secure while accessing services and information across the web. <a href="https://www.digitalinclusion.org/digital-navigator-model/">The National Digital Inclusion Alliance (NDIA)</a> has pioneered many efforts to bridge the digital divide, most recently through the Digital Navigator program, a train the trainer model that enables staff at community organizations to support computer users using common applications such as email, Google search, and other productivity tools; sign up for discounted Internet service; and provide light IT support. Digital Navigators have been placed in libraries, schools, and community-based organizations. The MetroNorth Work Force Board, through their YouthWorks programming and with support from Comcast, is currently organizing Digital Navigator programs in Everett, Revere, and Malden municipal offices.</p>
        </div>
        <div className="section-half">
          <ImageModal
            source={literacy} 
          />
        </div>
      </div>
    </div>
  )
}

export default Connection