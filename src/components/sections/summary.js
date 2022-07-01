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
        <h2>Executive Summary</h2>
        <h3>Introduction</h3>
        <p>
          In March of 2020, the COVID-19 pandemic upended daily life in Greater
          Boston and around the world. Unemployment rates spiked, schools were
          closed, and those with the ability to work or attend school virtually
          were forced to reorient themselves to a completely digital
          environment. Reliance on this digital environment exposed many of the
          inequities that have existed in accessing these digital tools and
          resources. Not all students had a home internet connection that would
          allow them to attend online classes. Some families were reliant on
          cellular plans that would run out by month's end, not allowing them to
          attend work or school. Many residents lack the skills or devices that
          would allow them to fully participate in this digital environment. And
          while our society is shifting, and more in-person interactions can
          take place –the significant shift our society and economy have made to
          online presence is unlikely to reverse. This shift has pushed the
          public sector, specifically municipal leaders and staff, to evaluate
          their role in ensuring that residents and businesses have access to
          reliable, high speed, and affordable internet – along with the skills
          and tools to make use of it.
        </p>
        <p>
          In the cities of Chelsea, Everett, and Revere – communities with high
          populations of low income, people of color, and immigrant residents –
          population groups that have been disproportionately impacted by the
          health and economic disruptions of COVID. Residents in these
          communities were also experiencing average internet speeds much lower
          than available, advertised{" "}
          <a href="https://datacommon.mapc.org/calendar/2020/december">
            speeds
          </a>
          . In fact, the data showed these communities have some of the lowest
          average download speeds of any municipality in the region. These
          disadvantages are only compounded by the numerous residents without
          devices that can take full advantage of the internet, and the many
          with digital literacy challenges.
        </p>
        <p>
          City staff quickly identified the critical need to understand the role
          of municipal government in ensuring internet connectivity for
          residents and engaged the Metropolitan Area Planning Council to create
          the Commonwealth's first coordinated regional digital access plan.{" "}
        </p>
        <p>
          Through a comprehensive planning process, MAPC evaluated available
          data, coordinated a digital access survey with over 2,000 responses,
          attended school district meetings, held focus groups in multiple
          languages, evaluated existing infrastructure, and worked closely with
          municipal staff and executive leadership to fully understand not only
          the symptoms, but the root causes of digital inequities. This plan
          outlines those findings and sets a path forward for these
          municipalities—and others—to improve not only digital connectivity and
          use, but the economic, health, and social well-being of all community
          residents.
        </p>
      </div>
      <div className="section">
        <h3>Key Findings</h3>
        <p>
          Through this planning process, the degree to which digital equity gaps
          are impacting community residents in these three cities was found to
          be not just significant, but critical. Data from the 2019 US Census
          indicates that 15% to 19% of residents within the three communities do
          not have internet connections. For those households making less than
          $75,000 / year that number jumps to 55% in Everett, 65% in Chelsea,
          and 64% in Revere. And while the majority of residents do have an
          internet subscription, an evaluation of speed test data from MLab and
          Microsoft indicate that between 30% and 40% of these subscribers do
          not receive broadband speed as defined by the{" "}
          <a href="https://broadbandnow.com/report/fcc-broadband-definition/">
            FCC
          </a>{" "}
          (25 megabits per second download speed, 3 megabits per second upload
          speed).
        </p>
        <p>
          Affordability remains the primary barrier to internet adoption in
          these three cities, 70% of survey takers responded, ‘Yes' to the
          question “Have you ever had to change or cancel your internet
          subscription because it was too expensive?” Additional barriers to
          internet adoption stemming from language isolation, concerns about
          privacy, and lack of information regarding internet subsidies and
          training programs. For example, respondents who completed MAPC's
          Digital Access survey in a language other than English were less
          likely to feel confident in the use of a laptop/Chromebook as well as
          resolving internet connectivity issues, indicating the need for
          language-specific programming.
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
              Residential internet service providers, for those that qualify to
              offer subsidies internet packages that are below market rate
              service offerings. Comcast offers a low-income internet service
              package known as Internet Essentials at $10/month which provides
              50/5 speeds. The adoption of income-based internet service
              programs like the Comcast Internet Essentials (IE) service has
              been limited in all three communities. As of 2021, there have only
              ever been 1,900 IE subscribers in Chelsea, 1,800 in Revere, and
              1,300 in Everett (data provided by Comcast). Conversations with
              residents in the three communities indicate significant barriers
              to signing up for IE and other subsidy programs regarding
              documentation, language, and complexity of registration tools.{" "}
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
          Anecdotal information gleaned from stakeholder engagement has also
          illustrated the specific issues facing larger households. Many
          households in the three communities are larger, with more than four
          people. In Chelsea, 33% of households have 4 people or more, in
          Everett 27%, and Revere 24%. 80% of respondents to the Digital Access
          and Equity Survey responded that frequently or always more than one
          person in their household needs to use the internet at the same time.
          Multiple users of the internet on lower service plans have caused
          significant challenges for students and parents who need to work or
          attend school remotely due to limited bandwidth and speed, as well
          issues stemming from outdated building wiring and equipment.{" "}
        </p>
        <p>
          Subsidies programs like Internet Essentials or recent federal subsidy
          programs Affordability Connectivity Program (ACP), formerly the
          Emergency Broadband Benefit (EBB) program, do offer opportunities to
          connected residents to resources that can help with affordability but
          are not designed to eliminate the affordability gap. Less than [7% of
          the eligible households] in these cities are currently taken advantage
          of the ACP subsidy (Add footnote source). The need is great and
          private ownership and operation of internet networks is not
          incentivized to eliminate this affordability gap and put stakeholder
          needs over shareholder needs.
        </p>
        <p>
          To eliminate the affordability gap and provide universal access to
          internet services it's critical to look at the state of existing
          internet infrastructure in the three cities. Currently, wireline
          residential service providers have close to ubiquitous cable broadband
          coverage, there are significant gaps in the fiber network serving
          these areas. Comcast and RCN are two of the major providers currently
          servicing Everett and Revere, while Chelsea is only served by Comcast.
          Through this planning process, cable franchise agreements were
          leveraged to obtain Comcast and RCN network infrastructure maps. These
          maps highlight that The fiber is not ubiquitous in these cities.
          Currently, 79% of census blocks in these cities have sections, not
          with 200 ft of a Comcast or RCN fiber line. 319 census blocks or 18.7%
          have no fiber running through them from these providers. The map below
          shows the area of each census block that lies within 200 ft of either
          Comcast or RCN fiber lines.{" "}
        </p>
        <ImageModal source={chart1} />
        <p className="citation">
          Data provided by Comcast / RCN through Everett, Chelsea, Revere cable
          franchise agreements.
        </p>
        <p>
          As much of the future federal funding through both the American Rescue
          Plan Act and Infrastructure Investment and Jobs Act specifically calls
          out an emphasis on fiber connections for both reliability and speed,
          it will be critical for these communities to work with public and
          private actors to expand the fiber connectivity. We need to know where
          there is and isn't infrastructure, to spend public money effectively
          and efficiently. This plan can serve as an introduction to municipal
          actions to advise capital investment, inform policy decisions, and
          identify program needs that can address resident concerns, remove
          barriers, promote competition, and provide pathways to close the
          divide the affordability gap that exist today in these municipalities.{" "}
        </p>
      </div>
      <div className="section">
        <h3>Recommendations</h3>
        <p>
          Historically, digital equity has been an issue that municipal and
          community partners have recognized as important, but not one that has
          been a core focus of any one entity. While establishing a local point
          of contact for leading forward future efforts related to digital
          access and equity, it is also important to recognize that existing
          stakeholders can play in advancing programs, policies, and
          investments.{" "}
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
            prevent universal access to reliable and high speed (100/100 Mbps)
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
            <span style={{ fontWeight: "bold" }}>Promote competition</span>{" "}
            among internet service providers offering broadband service.
          </li>
        </ul>
        <p>
          This plan identifies actions that can be taken to address digital
          access and equity challenges facing our three communities. These
          recommendations range from immediate, intermediate, and long-term
          investments that can be made. These actions can build on each other to
          better and more sustainably connect residents and individuals in these
          communities.
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
