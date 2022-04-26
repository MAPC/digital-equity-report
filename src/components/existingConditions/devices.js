import React, { useEffect, useState, useRef } from "react";
import pew1 from "../../images/pew.png";
import pew2 from "../../images/pew2.png";
import ImageModal from "../modules/imageModal";
import CalloutQuote from "../modules/calloutQuote";

const Devices = () => {

  return (
    <div>
      <div className="section">
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
        <p>In addition to an internet subscription, owning a device that can connect and access the internet is an essential to full participation. Closing the digital divide includes enabling and empowering residents and businesses with connected devices. While the price of a personal computer has fallen [ X since X get source] still in [2019] nearly one in five households in [three communities] did not have a desktop or laptop to serve as a computing device. While mobile devices may someday be capable of connecting residents to a full set of services, not having a device today can leave households unable to work remotely, attend virtual classes, or shop safely and securely online. </p>
        <iframe 
          src="https://public.tableau.com/views/ACSPercentofHouseholdswithNoComputer/U_S_CensusQuestions?:showVizHome=no&:embed=true" 
          width="100%" 
          height="600"
          allowFullScreen="true" 
          webkitallowfullscreen="true"
          mozallowfullscreen="true" 
        ></iframe>
        <p className="citation">American Community Survey 2019 5 year: Table S2801.</p>
      </div>
      <div className="section">
        <h4>Digital Literacy</h4>
        <div className="section-two-col-flex">
          <div className="section-half">
            <p>As essential as it is to have an adequate device and good connection to the internet, it’s just as necessary to have the skills and ability to be successful in navigating that digital landscape. The NDIA defines digital literacy as “the ability to use information and communication technologies to find, evaluate, create, and communicate information, requiring both cognitive and technical skills.” The “digital” in digital literacy skills cast a wide net and encompass many skills that may be needed to leverage devices and connections. Digital skills are required to operate a device, obtain an email address, apply for a job, communicate with a doctor, and connect with family members.  </p>
            <p>A recent 2021 Pew Research Center study found that 30 percent of adults are not “tech ready,” meaning they need support to set up or navigate a new computer, smartphone, or other electronic device; or they have little to no confidence in their ability to use those devices to do the things they need to do online.   </p>
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
        <p>The Digital Navigator program, pioneered by NDIA, is one example of this type of digital inclusion programing being piloted today in the MetroNorth Workforce Board region of which Everett, Chelsea, and Revere are part. <a href="https://www.digitalinclusion.org/digital-navigator-model/">Digital Navigators</a> are indivduals who receive training and are hosted within trusted organiztions, that provide community memebers a connection point to get digital support. This can be support on how to use common computer applications such as email, Google search, and other productivity tools; sign up for discounted internet service; or even provide light IT support. The MetroNorth Workforce Board pilot, leverages YouthWorks funding to pay young adults, who receive the NDIA digital navigator trainings that is funded by Comcast. In Spring of 2022, the first pilot cohort of 15 trained digital navigators will be deployed and hosted at local organizations within the City of Everett and City of Revere, City of Malden. </p>
        <p>It’s important to note that digital literacy can be compounded by the lack of literacy skills. This is acutely true when information, guidance, or support aimed at growing skills is not presented in a language that is shared and understood. Language and culturally appropriate guidance can support the growth of all skills including digital skills. One local organization that has been providing, language appropriate trainings since its founding in 2000 is <a href="https://www.techgoeshome.org/">Tech Goes Home</a> (TGH). In partnership with other community-based organizations across Greater Boston, TGH trains learners through courses that focus on digital skill building. In addition to the skills training TGH courses also provide learners with a Chromebook and 12 months of internet services through the Comcast Internet Essential program.  </p>
      </div>
    </div>
  )
}

export default Devices