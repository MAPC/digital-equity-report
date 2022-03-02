import React, { useEffect, useState, useRef } from "react";
import chart1 from "../../images/fiber-lines.png";
import chart2 from "../../images/fcc_residential_fiber_providers.png";

const Infrastructure = () => {

  return (
    <div>
      <div className="section">
        <p>Alongside the public infrastructure of sewer, water, and roads in Everett, Chelsea, and Revere private companies have run many miles of cables underneath city streets and poles, providing a connection to the internet. Unlike rural areas in Massachusetts and across the United States, there exists relatively more wiring in these urban areas to connect residents and businesses to the internet. This can be attributed in large part to the market forces driving this private installation of wiring. The desire to connect large amounts of customers as efficiently as possible. Large dense urban areas provide more potential customers per mile of investment.</p>
        <p>However, as we have seen in the access and service & affordability sections of this report, having wiring on your street does not mean you are able to connect of leverage that infrastructure. The type of wiring is also critical when discussing the investment, we collectively need to make to connect residents and businesses in the future. Speed needed in future reference. Moore’s law for speed </p>
        <p>As the Journey through the Internet slides highlighted fiber-optic wiring provides a dramatic and generational advancement as compared to copper coaxial cables that replaced the prior copper telephone wiring. To understand how much of the wiring running under the streets of these communities was fiber as compared to copper, Everett, Chelsea, and Revere leveraged their Cable Franchise agreements to obtain line level data that identified the network of fiber and coaxial of the two major residential providers Comcast and RCN. In addition, MAPC also purchased commercial provider data from GeoTel to reference and help fill out the picture of wiring running under the streets of these communities. </p>
        <p>Looking just at Comcast and RCN networks coaxial wiring is the dominant wiring technology in place in the communities today. Copper coaxial wiring lines the telephone poles and it also today plays a critical role at and inside the home/dwelling. The wiring cable companies helped install in homes over past decades and provided them with a competitive market advantage (over telecom) when it was discovered that the same coaxial cable technology could be leveraged for internet services in addition to cable tv service, is also today a limiting factor in providing faster and more advanced services (need referenced / clear examples here like HD video streaming, teleconferencing, gaming etc.). As coaxial technology can be relied on to provide speeds for the services plans available today (Avg plan in area?)in the hundreds of Mbps download. It is a limiting factor in the available download speeds. Symmetrical speeds of 100 over 100 are not easily or efficiently achieved with coaxial cable technology. While lab settings or incremental advancements can help improve the speeds to coaxial cable wiring, it’s physical properties do not compare with the ability and potential fiber-optic cables can provide. </p>
      </div>
      <div className="section-two-col-flex">
        <div className="section-half">
          <p>If we look at fiber lines Comcast and RCN leverage today in the communities there is significantly less  wiring than copper coaxial wiring. Using the propriety maps of Comcast and RCN, obtained through the cable franchise agreement, MAPC created this map that shows census blocks in all three communities that have fiber running with in them from these two providers. </p>
          <p>This map highlights that fiber lines are not ubiquitous in our three communities. As fiber comes to replace coaxial cabling throughout our cities and homes significant investment will be needed to accomplish this feat.  </p>
        </div>
        <div className="section-half">
          <img src={chart1} />
          <p>Details: A 200ft buffer was applied to the fiber lines. From that a percentage of coverage of 	census block track was calculated.</p>
        </div>
      </div>
      <div className="section">
        <p>Another look at the availability of fiber is to look at the FCC ISP self-reported data mentioned in the access section. This data highlights the census blocks, which at min could be just one building per block, that are connected with fiber. The map below shows for the 4 major residential providers in the communities and served Comcast, RCN, Starry and NetBlazer only Starry and NetBlazer report having any census blocks connected by fiber, and in total only 9 blocks are reported. </p>
        <img src={chart2} />
        <p>While neighboring suburbs have more fiber to the home connection option available. Residents in these communities do not have that option available to them.  Verizon is one ISP with residential fiber options (FIOS) that does not report serving census blocks in Everett, Chelsea, Revere as they do in other parts of the MAPC region.</p>
        <p>While copper lines will cotinine to play a role as we look towards federal and private investment gear towards making infrastructure investments, including ARPA and IIJA, it is important to make investments in the technologies that will be needed to serve us all in 10, 20, 30 years down the line. Just as public investments in roads, sewers, and highways have generational lifespans, we are now at the similar   </p>
      </div>
      <div className="section">
        <h4>Cable Franchise Agreements</h4>
        <p>As mentioned above fiber mapping is made possible through language in the Cable franchise agreements municipalities have with cable providers that operate service within a city. This is a critical touchpoint between municipal governments and private internet services providers and many of the same cable provider companies are internet service providers. (Call / bill reference to change DTC purview?)   It’s important to note that in addition to broadband internet service, Comcast, RCN, and Verizon often offer other media services such as cable television or phone service. As mentioned in the history section of this report, cable television service that had once been the primary offering has steadily seen residents in these communities “cut the cord” to cable television. Department of Television and Cable subscription numbers for these communities have steadily declined from 10,603 Comcast cable television subscribers in 2011 to 7,000 in 2020. RCN also saw significant loss in subscribes with a 56% drop in subscribes between the start of their cable television services in 2017 and 2020.</p>
      </div>
    </div>
  )
}

export default Infrastructure