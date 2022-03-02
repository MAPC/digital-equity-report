import React, { useEffect, useState, useRef } from "react";
import chart1 from "../../images/pew.png";
import chart2 from "../../images/literacy-survey.png";

const Literacy = () => {

  return (
    <div>
      <div className="section-two-col-flex">
        <div className="section-half">
          <p>As essential as it is to have the device or connection to the internet, it’s as essential to have the skills and ability to be successful in navigating that digital landscape.  The NDIA defines digital literacy as “the ability to use information and communication technologies to find, evaluate, create, and communicate information, requiring both cognitive and technical skills”. The “digital” in digital literacy skills casts a wide net and encompasses many skills a person or user may need to leverage devices and connection. Translated to daily life, dDigital skills are required to operate a device, obtain, and email address, apply for a job, communicate with a doctor, and connect with family members. Assessments such as the NorthStar Digital Literacy assessment, purchased (by City of Revere?) can provide a way of assessing levels of digital literacy.</p>
          <p>It’s important to note that digital literacy can be compounded by the lack of literacy skills. This is acutely true when information, guidance, or support aimed at growing skills is not presented in a language that is shared and understood. Language and culturally appropriate guidance can support the growth of all skills including digital skills.</p>
          <p>A recent 2021 Pew study found that 30% of adults are not “tech ready,” meaning they need support to set up or navigate a new computer, smartphone or other electronic device or have little to no confidence to use those devices to do the things they need to do online. The digital literacy issue is even greater with older adults.</p>
        </div>
        <div className="section-half">
          <img src={chart1} />
        </div>
      </div>
      <div className="section-two-col-flex">
        <div className="section-half">
          <p>MAPC’s survey of Chelsea, Everett and Revere residents showed approximately 18% of respondents did not feel confident in their ability to use a Chromebook, tablet or computer. </p>
          <p>There are many ways for a person to develop or gain skills that can help them to be more productive and secure while accessing services and information across the web. <a href="https://www.digitalinclusion.org/digital-navigator-model/">The National Digital Inclusion Alliance (NDIA)</a> has pioneered many efforts to bridge the digital divide, most recently through the Digital Navigator program, a train the trainer model that enables staff at community organizations to support computer users using common applications such as email, Google search, and other productivity tools; sign up for discounted Internet service; and provide light IT support. Digital Navigators have been placed in libraries, schools, and community-based organizations. The MetroNorth Work Force Board, through their YouthWorks programming and with support from Comcast, is currently organizing Digital Navigator programs in Everett, Revere, and Malden municipal offices.</p>
        </div>
        <div className="section-half">
          <img src={chart2} />
        </div>
      </div>
    </div>
  )
}

export default Literacy