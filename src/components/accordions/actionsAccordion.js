import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AnchorLink } from 'gatsby-plugin-anchor-links'; 

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, .03)'
      : 'rgba(100, 149, 237, 0.15)',
  border: '2px solid white',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function ActionsAccordion() {
  const [expandedImmediate, setExpandedImmediate] = useState();
  const [expandedIntermediate, setExpandedIntermediate] = useState();
  const [expandedLongTerm, setExpandedLongTerm] = useState();

  useEffect(() => {
    if (window.location.href.indexOf("immediate") > -1) {
      const url = window.location.href;
      const panel = url.substring(url.indexOf("immediate"));
      setExpandedImmediate(panel);
      handleChangeImmediate(panel);
    } else if (window.location.href.indexOf("intermediate") > -1) {
      const url = window.location.href;
      const panel = url.substring(url.indexOf("intermediate"));
      setExpandedIntermediate(panel);
      handleChangeIntermediate(panel);
    } else if (window.location.href.indexOf("longterm") > -1) {
      const url = window.location.href;
      const panel = url.substring(url.indexOf("longterm"));
      setExpandedLongTerm(panel);
      handleChangeLongTerm(panel);
    } else {
      return undefined;
    }
  }, []);

  const handleChangeImmediate = (panel) => (event, newExpanded) => {
    console.log("panel", panel);
    setExpandedImmediate(newExpanded ? panel : false);
    const accordionTitles = event.target.closest(`.acc-action-immediate`).children;
    const offset = event.target.closest(`.acc-action-immediate`).getBoundingClientRect().top + window.scrollY;
    const pnlIdx = parseInt(panel.substring(panel.length - 1));
    let titleOffset = 0;
  
    Array.prototype.forEach.call(accordionTitles, (elem, index) => {
      if (index <= pnlIdx && index !== 0) {
        titleOffset += accordionTitles[index - 1].offsetHeight;
      }      
      if (pnlIdx === pnlIdx) {
        const totalOffset = offset + titleOffset;
        window.scrollTo(0, totalOffset);
      }
    });
    
  };

  const handleChangeIntermediate = (panel) => (event, newExpanded) => {
    
    setExpandedIntermediate(newExpanded ? panel : false);
    const offset = event.target.closest(`.acc-action-intermediate`).getBoundingClientRect().top + window.scrollY;
    const pnlIdx = parseInt(panel.substring(panel.length - 1));
    let titleOffset = pnlIdx * 80;
    
    const totalOffset = offset + titleOffset;

    window.scrollTo(0, totalOffset);
  };

  const handleChangeLongTerm = (panel) => (event, newExpanded) => {
    
    setExpandedLongTerm(newExpanded ? panel : false);
    const offset = event.target.closest(`.acc-action-longterm`).getBoundingClientRect().top + window.scrollY;
    const pnlIdx = parseInt(panel.substring(panel.length - 1));
    let titleOffset = pnlIdx * 80;
    
    const totalOffset = offset + titleOffset;

    window.scrollTo(0, totalOffset);
  };

  const immediate = [
    { 
      short: "Bridge to Broadband",
      title: <span>Participate in Education Superhighway <a href="https://www.educationsuperhighway.org/bridge-to-broadband/">Bridge to Broadband Program</a> Pilot</span>,
      timeframe: "Immediate (Fall 2021 – Winter 2022)",
      status: "Completed",
      type: "Connection",
      actor: "School District",
      description: [
        <span>This program is a facilitated data exchange between school districts and Internet Service Providers. Massachusetts Department of Elementary and Secondary Education in Partnership with Education Superhighway established a pilot in MA, where school districts could establish data exchanges through data-sharing agreements brokered by the <a href="https://sdpc.a4l.org/about_alliance.php?state=MA">Student Data Privacy Alliance</a>. Everett, Chelsea, and Revere were added to the initial pilot program and are now able to identify which students are or are not currently able to be served with a wired internet connection for an ISP serving the community.  </span>
      ],
      steps: [
        "Complete data exchanges.", 
        "Leverage data to support schools-based efforts aimed at connecting unconnected students and households.",
        "Advocate for ways to expand data exchanges that respect data rights and privacy beyond schools to support broader community connection efforts."
      ]
    },
    {
      short: "Build Better Broadband Grant Application",
      title: "Apply for funding to support regional strategic and financial planning of public infrastructure. ",
      timeframe: "Immediate", 
      status: "Underway",
      type: "Connection",
      actor: "Municipal Staff, MAPC",
      description: [
        "To support the equitable expenditure of federal funds municipalities can together, with MAPC, submit a regional application for the Build Better Broadband grant funded by Connect Humanity. This grant will fund work to evaluate and provide cost estimate analysis for future public infrastructure investments. It will be important to further identify where public infrastructure investments can be leveraged to equitably close the digital divide. "
      ],
      steps: [
        "Identify priority municipal infrastructure needs",
        "Draft application(s) for Municipal Fiber Grant program "
      ]
    },
    {
      short: "Housing Authority Wi-Fi Pilot",
      title: <span>Establish Wi-Fi deployments as part of <a href="https://www.mapc.org/massachusetts-broadband-institute-mbi-gateway-city-wifi-hotspot-program/">Mass Broadband Institute Gateway City WiFi Grant</a></span>,
      timeframe: "Intermediate (Summer 2021 – 2024) ", 
      status: "Immediate / Underway",
      type: "Connection, Digital Literacy ",
      actor: "Housing Authority, Municipal Staff",
      description: [
        "As part of the State’s Economic Recovery Plan, the Mass Broadband Institute has made funds available, through MAPC, to support Wi-Fi deployments to help connect individuals, families, or small businesses with sustainable internet access in Chelsea, Everett, Revere, Malden, and Quincy. The goal of these deployments is to provide broader internet access in communities that face barriers to connectivity.",
        "Through enhanced Wi-Fi availability, this program aims to connect more individuals, families, and small businesses with sustainable internet access for daily use. The MAPC team has explored a first round of installations at public housing properties in Chelsea, Everett, and Revere using an open-access network model, similar to Wi-Fi systems in an airport. These networks will provide in-unit access to high-speed internet, leveraging network hardware installed in public spaces such as stairwells and hallways. The internet service will be provided through the procurement of one, high-speed commercial-grade internet connection. This service will be maintained by the municipalities after one year of service coverage by MAPC.",
        "MAPC’s second round of grants will focus on building the capacity of stakeholders within the region to focus on digital access, equity, and inclusion. MAPC is exploring relationships with community colleges to establish in-house digital stewardship programs – a model in which students would receive specialized training in community organizing and networking technology/management and apply their training by building community networks with local stakeholders and partners. "
      ],
      steps: [
        "Identify priority municipal infrastructure needs",
        "Draft application(s) for Municipal Fiber Grant program "
      ]
    },
    {
      short: "Tech Goes Home Partnership",
      title: "Expand Tech Goes Home Partnership",
      timeframe: "Immediate", 
      status: "Potential",
      type: "Digital Literacy",
      actor: "Municipal Staff",
      description: [
        "Embed at least one Tech Goes Home instructor in every school and library in the City.  Ensure courses are offered in Spanish, Haitian Creole, Portuguese, and other community languages. "
      ],
      steps: [
        "Adopt brand as policy and assess funding requirements."
      ]
    },
    {
      short: "Hire Digital Equity Officer",
      title: "Hire a Regional Digital Access and Equity Officer",
      timeframe: "Immediate", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Municipalities hire a shared digital equity officer model after similar positions 	across the country. This position could be a joint position across municipalities that is focused on the implementation of digital equity initiatives and strategies. "
      ],
      steps: [
        "Connect with MAPC Regional Cyber officer work to explore hiring model ",
        "Pull list of positions and job descriptions "
      ]
    },
  ]

  const intermediate = [
    {
      short: "Analyze Provider Network Maps ",
      title: "Leverage Cable Franchise to Map Connection ",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "As a potential local technical assistance funded project with MAPC, to further expand on the analysis that comes from fiber and cable mapping data provided by ISPs.  "
      ],
      steps: [
        "Apply to local technical assistance grants for potential project establishment", 
        "Partners with other cities request maps as allowed in cable franchise agreements", 
      ]
    },
    {
      short: "Dig Once Policy",
      title: "Establish Dig Once Policy ",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Municipal investments in fiber can be coupled with Dig Smart policies that mandate additional conduit be installed during construction or repair. This conduit throughout public rights-of-way, allows for future providers to thread fiber in that area. Lowering costs for providing broadband service and making a community more attractive for broadband providers hoping to break into a new market or expand their existing operations. Other municipal construction of repair projects for water or sewer pipes, along with roads and sidewalks presents an additional opportunity to incentivize fiber installation.  "
      ],
      steps: [
        "Review other municipal Dig Once Policies "
      ]
    },
    {
      short: "Local Digital Equity Fund ",
      title: "Establish a Digital Equity Trust Fund ",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Digital Literacy, Device, Connection",
      actor: "Municipal Staff",
      description: [
        "A Digital Equity Trust would be a continuing funding source to incentivize and support local efforts to address digital divide issues. This could include an application process for community groups to take on broadband work. This could be in the shape of local hotspots, larger area networks, adoption campaigns, skills training, and tech career programs."
      ],
      steps: [
        "Establish trust through legislative action ", 
        "Develop governing body and process for applications "
      ]
    },
    {
      short: "Device Refurbishment Program ",
      title: "Support the Creation of a Tech Refurbishment Center  ",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Device",
      actor: "Municipal Staff",
      description: [
        "A Tech Refurbishment program would divert e-waste, enable skill-building, and provide low-cost options for devices in the community.  "
      ],
      steps: [
        "Coordinate with private sector partners, School District, and Workforce Board "
      ]
    },
    {
      short: "Leverage Municipal Rooftop Assets",
      title: "Inventory and release procurements for use of municipal assets",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Connection",
      actor: "Housing Authority, Municipal Staff",
      description: [
        <span>Rooftops of municipal buildings could be leveraged by internet service providers, like Starry and netBlazer, to provide competitive options. In addition to rooftops, sheds, buildings and other street furniture or City-owned lots could be used for in-the-field cabinets, edge computing/mini data centers or other equipment necessary for broadband infrastructure. Building off Request for Proposals from neighboring communities (<a href="https://cambridge-housing.org/wp-content/uploads/2021/02/RFP-to-lease-rooftop-space-FINAL-1.pdf">Cambridge</a>) procurements could leverage public assets to obtain sustainable maintenance funds while enabling the expansion of subsidized internet access programs for residents <a href="https://starry.com/starryconnect">Starry Connect</a>, <a href="https://www.netblazr.com/bostons-netblazr-and-kt-partner-to-supply-affordable-housing-residents-with-free-high-speed-internet/">NetBlazer</a>.</span>
      ],
      steps: [
        "Inventory and RFP municipal roofs, focusing on tall or elevated properties. ",
        "Inventory and RFP other spaces advantageous to existing or planned broadband infrastructure",
        "Draft request for information or proposals that would lease rooftop or other spaces."
      ]
    },
    {
      short: "Broadband Consumer Protection",
      title: "Support and advocate for local needs in current federal rule related to broadband ",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Create a task force to create policy recommendations to submit to state and federal entities to shape broadband policy and investment. Suggested policies to explore",
        <ul>
          <li>Broadband Nutrition Label with detail comparable information. </li>
          <li>Advocate for new definition of broadband 100/100.   </li>
          <li>Advocate that competition requires at least 3 providers. </li>
          <li>Advocate for federal funding to be distributed equitably and to consider affordability gap not just access gap </li>
          <li>Advocate for a clear and easy to use system municipalities and local government will have to file complaints / grievances on Behalf of Residents New FCC rules put onus on gov to submit/prove speed / price issue with provider </li>
        </ul>
      ],
      steps: [
        "Recruit members and establish charter/goals for group"
      ]
    },
  ]

  const longterm = [
    {
      short: "Align Capital Investments",
      title: "Explore and Align Municipal Infrastructure Investments",
      timeframe: "Long term", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        <span>Building on the infrastructure investments that have already been made by Everett, Chelsea, and Revere to connect municipal buildings and assets, there is an opportunity to align future investments and maintenance. The Division of Local Services has established a <a href="https://www.mass.gov/municipal-fiber-grant-program">Municipal Fiber Grant Program</a> that opened for the first time in March of 2020. Structured like other competitive Community Compact grants, this program allows more funds to go towards multi-jurisdictional projects up to a maximum of $500,000 may be awarded to a project.  This is an opportunity to address deficiencies in municipal networks identified in reports (like Chelsea's <a href="https://mapc365.sharepoint.com/:f:/s/DigitalAccess/ErM3RPx1sz5BocIKT599V7kBHXnduTFtiquhvRDDpJ-iVg?e=KdN7uP">Dewsbury report</a>) while establishing robust fiber option networking to support network monitoring, cyber security, records management, and backup and recovery. Cohesive and collaborative inter-municipal network connection also creates opportunities to gain economies of scale by aggregating internet bandwidth purchases and the associated security infrastructure. </span>
      ],
      steps: [
        "Identify priority municipal infrastructure needs",
        "Draft application(s) for Municipal Fiber Grant program"
      ]
    },
    {
      short: "Expand on Community TV resource",
      title: "Reposition Community TV as a Digital Resource Hub",
      timeframe: "Long term", 
      status: "Potential",
      type: "Digital Literacy, Device",
      actor: "Community TV Staff, Municipal Staff",
      description: [
        "Local cable stations could leverage existing equipment, knowledge, and space for digital content production and skill development."
      ],
      steps: [
        "Establish an advisory board to develop a strategic plan for local access stations "
      ]
    },
    {
      short: "Standardize Small Cell Permits ",
      title: "Adopt a standard small cell permitting policy and practice",
      timeframe: "Long term", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Municipalities currently approve or deny small cell permit applications of providers looking to build internet infrastructure. This process is not currently standard across municipalities. A shared understanding of guidelines and concerns could go a long way in clarifying processes and incentivizing safe and community approved investments. "
      ],
      steps: [
        "Review other municipal small cell permit applications and process ",
        "Draft and establish guidelines drawing on successful practices and community input  "
      ]
    },
  ]

  function createAccordions(actions, type, changeFunction, expandSetting) {
    return actions.map((action, index) => {
      return <AnchorLink to={`#${type}-panel${index}`}>
        <Accordion className="actionAccordion" id={`${type}-panel${index}`} expanded={expandSetting === `${type}-panel${index}`} onChange={changeFunction(`${type}-panel${index}`)}  onLoad={changeFunction(`${type}-panel${index}`)}>
          <AccordionSummary aria-controls={"panel" + index + "d-content"} id={"panel" + index + "d-header"}>
            <Typography><h4 style={{color: "black", margin: "0.5rem"}}>{action.short}</h4></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <h4>{action.title}</h4>
            <div className="section-two-col-flex">
              <div className="section-half border-right">
              {action.description.map((elem, i) => <p key={i}>{elem}</p>)}
              </div>
              <div className="section-half">
                <p><span style={{fontWeight: "bold", fontFamily: "AvenirNextLTPro"}}>Timeframe:</span> <br/>{action.timeframe}</p>
                <p><span style={{fontWeight: "bold", fontFamily: "AvenirNextLTPro"}}>Status:</span> <br/>{action.status}</p>
                <p><span style={{fontWeight: "bold", fontFamily: "AvenirNextLTPro"}}>Type:</span> <br/>{action.type}</p>
                <p><span style={{fontWeight: "bold", fontFamily: "AvenirNextLTPro"}}>Primary Actor:</span> <br/>{action.actor}</p>
                <p><span style={{fontWeight: "bold", fontFamily: "AvenirNextLTPro"}}>Next Steps:</span> <br/>
                  <ul style={{marginTop: 0, listStyle: "circle"}}>
                    {action.steps.map((elem, i) => <li key={i} style={{listStyle: "circle", marginLeft: "1.2rem"}}>{elem}</li>)}
                  </ul>
                </p>
              </div>
            </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AnchorLink>
    })
  };

  return (
    <div>
        <h3>Immediate</h3>
      <div className="acc-action-immediate" id="immediate">
        {createAccordions(immediate, 'immediate', handleChangeImmediate, expandedImmediate)}
      </div>
        <h3>Intermediate</h3>
        <div className="acc-action-intermediate">
        {createAccordions(intermediate, 'intermediate', handleChangeIntermediate, expandedIntermediate)}
      </div>
        <h3>Longterm</h3>
        <div className="acc-action-longterm">
        {createAccordions(longterm, 'longterm', handleChangeLongTerm, expandedLongTerm)}
      </div>
    </div>
  );
}
