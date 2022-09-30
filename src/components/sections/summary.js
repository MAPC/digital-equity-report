/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ImageModal from "../modules/ImageModal";
import chart1 from "../../images/fiber_200ft_combined_final_2022-03-31.jpg";
import CalloutQuote from "../modules/CalloutQuote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Summary = () => {
  return (
    <div>
      <div className="section">
        <h2>Introduction</h2>
        <p>
          In March of 2020, the COVID-19 pandemic upended daily life in Greater
          Boston and around the world. Unemployment rates spiked, schools were
          closed, and those with the ability to work or attend school virtually
          were forced to reorient themselves to a completely digital
          environment. Reliance on this digital environment exposed many of the
          inequities that have existed in accessing these digital tools and
          resources. While some transitioned to online work or learning
          seamlessly, others faced big challenges. Many of those challenges
          relate to digital access. For example, slow and unreliable internet
          connections made it hard for many students to fully participate in
          online school. Some families were reliant on data-limited cellular
          plans that might run out by month's end. Many residents were not
          familiar with how to use the internet and digital tools, limiting
          their access to resources and making them vulnerable to scams and
          malware. And for a large share of the population, they simply did not
          own a computer. These barriers put people at a disadvantage in
          education, jobs, health, and civic and community participation.
        </p>
        <p>
          In the cities of Chelsea, Everett, and Revere there are many
          low-income households, people of color, and immigrant residents that
          have been disproportionately impacted by the health and economic
          disruptions of COVID. Barriers to digital access are also common in
          these communities. For most homes in the three cities, average upload
          and download speeds do not measure up to what is advertised; this is a
          particular problem for larger households. Fiber optic service,
          essential for truly high-bandwidth internet connections, is available
          only in some neighborhoods, leaving many households reliant on slower
          copper cable service. One out of five households do not have a
          computer available.1
        </p>
        <p>
          Municipal leaders and staff in Chelsea, Everett, and Revere recognize
          that they have a critical role to play in ensuring that residents and
          businesses have access to reliable, high-speed, and affordable
          internet service, along with the skills and tools to use it. The three
          municipalities engaged the Metropolitan Area Planning Council to
          create the Commonwealth’s first regional digital access plan. A
          regional approach was taken because the digital divide crosses
          municipal boundaries, and the solutions require coordinated efforts.
          Through a comprehensive planning process, MAPC evaluated available
          data, coordinated a digital access survey with over 2,000 responses,
          attended school district meetings, held focus groups in multiple
          languages, evaluated existing infrastructure, and worked closely with
          municipal staff and executive leadership to fully understand not only
          the symptoms, but the root causes of digital inequities. This plan
          outlines those findings and sets a path forward for these
          municipalities and others to improve not only digital connectivity and
          use, but the economic, health, and social well-being of all residents.
        </p>
      </div>
      <div className="section">
        <h3>Key Findings</h3>
        <p>
          Our research documented widespread and inequitable lack of access to
          broadband speed connections, and wide variation in connection speeds.
          15% of residents within the three communities do not have an internet
          connection at home, according to the 2015-19 American Community
          Survey. For those households making less than $75,000 per year, that
          number jumps to 55% in Everett, 65% in Chelsea, and 64% in Revere.
          Among those with internet access, the quality of the service (in terms
          of upload and download speeds) varies widely. Speed test data from
          mLab and Microsoft indicate that 30% to 40% of households have service
          that does not meet the FCC’s basic definition of “broadband”: 25
          megabits per second (Mb/s) download speed and 3 Mb/s upload speed
          (otherwise known as “25/3”). 2
        </p>
        <p>
          Connection speed is particularly important when multiple people need
          to work or attend school remotely at the same time. 80% of respondents
          to the Digital Access and Equity Survey responded that more than one
          person in their household needs to use the internet at the same time
          frequently or all the time. This is more likely among large families
          and households (four or more people), which make up 33% of households
          in Chelsea, 27% of those in Everett, and 24% of those in Revere.
          Parents, students, and teachers attest to the disruption caused by
          slow internet speeds and multiple users competing for limited
          bandwidth.
        </p>
        <p>
          Affordability remains a primary barrier to consistent internet service
          and high-speed subscriptions in these three cities. 70% of survey
          takers responded, ‘Yes’ to the question, “Have you ever had to change
          or cancel your internet subscription because it was too expensive?”
          Additional barriers to internet adoption stem from language isolation,
          concerns about privacy, and lack of information regarding internet
          subsidies and training programs. For example, respondents who
          completed MAPC’s Digital Access survey in a language other than
          English were less likely to feel confident in the use of a
          laptop/Chromebook as well as resolving internet connectivity issues,
          indicating the need for language-specific programming.3
        </p>
        <iframe
          src="https://public.tableau.com/views/Ifnotwhynot_16491332923730/Ifnotwhynot?:showVizHome=no&:embed=true"
          width="100%"
          height="600"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
        <p className="citation">
          MAPC Digital Access and Equity Survey for the Cities of Chelsea,
          Everett, and Revere.
        </p>
        <div className="section-two-col-flex">
          <div className="section-half border-right">
            <p>
              Despite the clear need, there has been limited adoption of the
              subsidized internet packages that are available from many
              providers. For example, Comcast offers the Internet Essentials
              (IE) package at $10/month, providing 50/5 Mb/s speeds. Comcast
              reports that as of 2021, there were only 1,900 IE subscribers in
              Chelsea, 1,800 in Revere, and 1,300 in Everett. The federal
              government also provides a subsidy for qualified households,
              previously named the Emergency Broadband Benefit, now known as the
              American Connectivity Program (ACP). As of May 2022, approximately
              34% of qualifying households have registered for the subsidy in
              these communities.
            </p>
            <p>
              Interviews with residents in the three communities identified
              significant barriers to signing up for IE and other subsidy
              programs, including documentation, language, and complexity of
              registration tools, among others.
            </p>
          </div>
          <div className="section-half">
            <CalloutQuote
              quote="سمعت بأن شركة كومكاست توفر انترنت مجاني لأصحاب الدخل المحدود .هل هذا صحيح؟"
              byline="I heard that internet service companies provide free internet to people with limited income. Is this true?"
            />
          </div>
        </div>
        <p>
          The affordability problem is compounded by the limited choice of
          service providers and limited reach of fiber optic networks. Most
          households in the three cities rely on “wireline” connections through
          a cable TV provider. There are only two such providers in Everett and
          Revere (Comcast and RCN); and Chelsea is served only by Comcast.
          Depending on location, households may have connection only to the
          copper wire cable TV connection, or they may be able to access fiber
          optic service. Fiber optic service supports much higher speeds and
          could (theoretically) enable users to have a choice of Internet
          Service Providers (ISPs) but is not available in all neighborhoods.
          Where fiber does exist, it is owned by the cable service provider
          (Comcast or RCN), which serves as the sole ISP.
        </p>
        <p>
          Understanding where the current fiber optic networks are and who owns
          them, is an essential step in addressing digital equity. Upon request
          from the three cities, RCN and Comcast provided detailed maps of the
          cable and fiber service networks (cable franchise agreements provide
          municipalities with the right to access this information upon
          request). MAPC mapped these networks and estimated how many households
          were within 200 feet of a mapped fiber line (a threshold chosen as a
          reasonable upper limit of a service connection for such dense urban
          communities.) The resulting map depicts the estimated likelihood that
          a home in each census block is within that 200-foot threshold; it
          shows that access to fiber is very uneven throughout the three cities.
          Some neighborhoods have good fiber coverage that provides access to
          most houses; others have fiber that serves only certain streets.
          Overall, MAPC estimates that 34% of residents in the three cities live
          further than 200 feet from a fiber optic line. Chelsea has the
          greatest share of residents without access to fiber (42%) while
          Everett has the lowest share (30%). MAPC’s analysis did not find
          evidence that people of color and low-income residents are
          disproportionately underserved by the fiber network within each city.
          However, the incomplete coverage in this “majority minority” portion
          of the region does have disparate impacts when compared to universal
          coverage of fiber access in wealthier municipalities.
        </p>
        <ImageModal source={chart1} />
        <p className="citation">
          Data provided by Comcast / RCN through Everett, Chelsea, Revere cable
          franchise agreements.
        </p>
        <p>
          These results show that existing telecommunication companies have yet
          to build networks that provide all residents with a choice of internet
          service providers offering truly high-speed broadband access. As much
          of the future federal funding through both the American Rescue Plan
          Act and Infrastructure Investment and Jobs Act specifically calls out
          an emphasis on fiber connections for both reliability and speed, it
          will be critical for these communities to work with public and private
          actors to expand fiber connectivity. This plan can serve as an
          introduction to municipal actions to advise capital investment, inform
          policy decisions, and identify program needs that can address resident
          concerns, remove barriers, promote competition, and provide pathways
          to close the digital divide and affordability gap that exists today in
          these municipalities.
        </p>
      </div>
      <div className="section">
        <h3>Recommendations</h3>
        <p>
          Historically, digital equity has been an issue that municipal and
          community partners have recognized as important, but not one that has
          been a core focus of any one entity. While establishing a local point
          of contact for leading future efforts related to digital access and
          equity, it is also important to recognize the role that existing
          stakeholders can play in advancing programs, policies, and
          investments.
        </p>
        <p>
          MAPC established the following framework for considering the roles of
          these local actors as follows:{" "}
        </p>
        <iframe
          src="https://slides.com/mapc/everett-digital-access-plan-final-pres-809f36/embed?token=cwvrAva4"
          width="100%"
          height="480"
          title="Everett Digital Access Plan - Final Pres"
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
      <div className="section section-bottom">
        <h4>Guiding Principles for Community Digital Access and Equity</h4>
        <p>
          On its way to establishing short, medium, and long-term
          recommendations, MAPC and the community advisory committees involved
          in this process identified a set of guiding principles designed to
          achieve a community vision for digital access and equity. The
          recommendations identified in this plan are designed to be responsive
          to these principles, and any future planning efforts should revisit
          and build upon these established principles.
        </p>
        <ul style={{ marginTop: 0, listStyle: "circle" }}>
          <li>
            <span style={{ fontWeight: "bold" }}>Remove barriers</span> that
            prevent universal access to reliable and high speed (100/100 Mb/s)
            internet.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Augment the capacity</span> of
            key stakeholders such as IT departments, school districts,
            libraries, community-based organizations, and municipal staff to
            address the digital divide.
          </li>
          <li>
            Ensure all residents who desire to improve their digital /
            technology literacy have a{" "}
            <span style={{ fontWeight: "bold" }}>
              pathway to educational opportunities
            </span>{" "}
            at a range of skill levels, offered in community appropriate
            languages and settings.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>
              Promote and facilitate competition
            </span>{" "}
            among internet service providers offering broadband service by
            advancing open-access fiber networks which can be accessed by
            multiple competing ISPs.
          </li>
        </ul>
        <p>
          This plan identifies actions that can be taken to address digital
          access and equity challenges facing these three communities.
          Recommendations range from immediate, intermediate, and long-term
          investments that can be made. These actions can build on each other to
          connect residents better and more sustainably in these communities.
        </p>
        <AnchorLink to={`#actions`} className="anchor">
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            className="anchor__icon"
          />
          <span className="anchor__helper-text">Read the Actions</span>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Summary;
