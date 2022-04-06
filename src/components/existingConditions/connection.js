import React, { useEffect, useState, useRef } from "react";
import pew1 from "../../images/pew.png";
import pew2 from "../../images/pew2.png";
import ImageModal from "../modules/imageModal";
import CalloutQuote from "../modules/calloutQuote";

const Connection = () => {

  return (
    <div>
      <div className="section">
        <p>The American Community Survey captures data on internet connections. The current survey asks, “At this house, apartment, or mobile home - do you or any member of this household have access to the Internet?”. Everett, Chelsea, and Revere have a high percentage of households that are identified as have no access. Despite having more commercial providers serving the area household remain disconnected at a higher rate than can be found across Massachusetts.</p>
        <p className="viz-description">[17%] of households in these three communities do not have a wired internet subscription. That means there are [ X number of Households] that are not able to leverage an internet subscription to access opportunities and fully participate in society.</p>
        <iframe src="https://public.tableau.com/views/DigitalEquityCensusInternetQuestions/NoInternet_1?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
        <p className="citation">American Community Survey 2019 5 year: Table S2801.</p>
        <p className="viz-description">Instead of an internet subscription, many residents rely solely on a cellular telephone plan to connect to the internet. Between [7% and 13%] of households in these three communities are identified in census data as using only a smartphone. </p>
        <iframe src="https://public.tableau.com/views/DigitalEquityCensusInternetQuestions/U_S_CensusQuestions?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
        <p className="citation">American Community Survey 2019 5 year: Table S2801.</p>
        <p>While the advances in cell phone devices and services have been transformative they do not enable a household to fully participate in society. Being able to apply for jobs, talking virtually with a doctor, attend online classes, or filling out a government form are not always possible to complete from a cell phone. In addition, cellular service plans are not structured like internet service plans.  </p>
        <p>Often cellular plans have monthly data caps limiting the amount of participation a household can engage online very month. Through this plan’s community engagement process, during the pandemic, parents shared their experiences of having their children participate in remote schooling form home. Parents shared that because of the cell phone data caps, by the end of the month their children were not able to attend classes because the family plan had run up against the data limit.  </p>
        <p>While school districts, libraries, and parent liaisons have worked to connect families to subsidies internet subscription of cellular (mi-fi) plans. In fact, the Everett, Chelsea and Revere schools districts lent out [Over Count of Mi-F] devices during the [2020-2021] school year. While these efforts have help connect individual families and households they highlight that by default the internet is not available to all residents as other utilities water, sewer, or roads. </p>
        <p>The [X number of households] without internet subscriptions are not distributed equally across demographic and income groups. If we look by income, families and households with household income less than $20K per year are [X times more likely] to not have an internet subscription. In these communities, that is [X percent 42%?)] of the households making under $20,000 that are not connected to the internet. Affordability is a clearly a significant factor in why households are disconnect as is explored further in the Affordability and Community Needs Assessment sections or this report. </p>
      </div>
      <div className="section">
        <h3>Devices & Literacy</h3>
        <div className="section-two-col-flex">
          <div className="section-half border-right">
            <h4>Device Ownership</h4>
          </div>
          <div className="section-half">
            <CalloutQuote 
              quote="Nearly one in five households in Everett, Chelsea, Revere did not have a desktop or laptop to serve as a computing device." 
            />
          </div>
        </div>
        <p className="viz-description">In addition to an internet subscription, owning a device that can connect and access the internet is an essential to full participation. Closing the digital divide includes enabling and empowering residents and businesses with connected devices. While the price of a personal computer has fallen [ X since X get source] still in [2019] nearly one in five households in [three communities] did not have a desktop or laptop to serve as a computing device. While mobile devices may someday be capable of connecting residents to a full set of services, not having a device today can leave households unable to work remotely, attend virtual classes, or shop safely and securely online. </p>
        <iframe src="https://public.tableau.com/views/DigitalEquityCensusInternetQuestions/NoComputer_1?:showVizHome=no&:embed=true" width="100%" height="600"></iframe>
        <p className="citation">American Community Survey 2019 5 year: Table S2801.</p>
      </div>
      <div className="section">
        <h4>Digital Literacy</h4>
        <div className="section-two-col-flex">
          <div className="section-half">
            <p>As essential as it is to have an adequate device and good connection to the internet, it’s just as necessary to have the skills and ability to be successful in navigating that digital landscape. The NDIA defines digital literacy as “the ability to use information and communication technologies to find, evaluate, create, and communicate information, requiring both cognitive and technical skills.” The “digital” in digital literacy skills cast a wide net and encompass many skills that may be needed to leverage devices and connections. Digital skills are required to operate a device, obtain an email address, apply for a job, communicate with a doctor, and connect with family members.</p>
            <p>A recent 2021 Pew Research Center study found that 30 percent of adults are not “tech ready,” meaning they need support to set up or navigate a new computer, smartphone, or other electronic device; or they have little to no confidence in their ability to use those devices to do the things they need to do online.  </p>
            <p>Pew research has also identified that digital skills gaps are more pronounced by age. Older adults may have a harder time adopting digital skills like setting up a new device. Connecting with trusted individuals that can provide techincal support or guidnce is one way of addressing this gap in digital literacy. Trusted programing that connects individuals can be an opportunity to foster intergenerational connections and to transfer skills between generations.  </p>
          </div>
          <div className="section-half">
            <ImageModal
              source={pew1}
            />
            <p className="citation"><a href="https://www.pewresearch.org/internet/2021/09/01/navigating-technological-challenges/">Pew Research Center.</a></p>
            <ImageModal
              source={pew2} 
            />
            <p className="citation"><a href="https://www.pewresearch.org/internet/2021/09/01/navigating-technological-challenges/">Pew Research Center.</a></p>
          </div>
        </div>
        <p>The Digital Navigator program, pioneered by NDIA, is one example of this type of digital inclusion programing being piloted today in the MetroNorth Workforce Board region of which Everett, Chelsea, and Revere are part. Digital Navigators are indivduals who receive training and are hosted within trusted organiztions, that provide community memebers a connection point to get digital support. This can be support on how to use common computer applications such as email, Google search, and other productivity tools; sign up for discounted internet service; or even provide light IT support. The MetroNorth Workforce Board pilot, leverages YouthWorks funding to pay young adults, who receive the NDIA digital navigator trainings that is funded by Comcast. In Spring of 2022, the first pilot cohort of 15 trained digital navigators will be deployed and hosted at local organizations XXX, and within the City of Everett and City of Revere [CONFIRM LIST].  </p>
        <p>It’s important to note that digital literacy can be compounded by the lack of literacy skills. This is acutely true when information, guidance, or support aimed at growing skills is not presented in a language that is shared and understood. Language and culturally appropriate guidance can support the growth of all skills including digital skills. One local organization that has been providing, language appropriate trainings since its founding in 2000 is<a href="https://www.techgoeshome.org/">Tech Goes Home (TGH)</a>. In partnership with other community-based organizations across Greater Boston, TGH trains learners through courses that focus on digital skill building. In addition to the skills training TGH courses also provide learners with a Chromebook and 12 months of internet services through the Comcast Internet Essential program.</p>
      </div>
    </div>
  )
}

export default Connection