import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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

export default function IntermediateActions() {
  const [expanded, setExpanded] = useState();

  // on direct access to an action, this hook will check the url for the selected panel and expand that panel on load
  useEffect(() => {
    if (window.location.href.indexOf("panel") > -1) {
      console.log("url contains panel");
      const url = window.location.href;
      const panel = url.substring(url.indexOf('panel'));
      console.log("end of url", panel);
      setExpanded(panel)
    }
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {

    const currentUrl = window.location.href
    const newUrl = window.location.href + panel;
    if (newUrl !== currentUrl) {
      window.history.pushState({ path: newUrl }, '', newUrl);
    } else if (newUrl === (currentUrl + panel)) {
      return undefined
    } else {
      return undefined
    }

    setExpanded(newExpanded ? panel : false);

  };

  const intermediate = [
    {
      short: "Housing Authority Wi-Fi",
      title: "Establish Wi-Fi deployments as part of Mass Broadband Institute Gateway City WiFi Grant",
      timeframe: "Intermediate (Summer 2021 – 2024)", 
      status: "Underway",
      type: "Connection, Digital Literacy",
      actor: "Housing Authority, Municipal Staff",
      description: [
        "As part of the State’s Economic Recovery Plan, the Mass Broadband Institute has made funds available, through MAPC, to support Wi-Fi deployments to help connect individuals, families, or small businesses with sustainable internet access in Chelsea, Everett, Revere, Malden, and Quincy. The goal of these deployments is to provide broader internet access in communities that face barriers to connectivity.",
        "Through enhanced Wi-Fi availability, this program aims to connect more individuals, families, and small businesses with sustainable internet access for daily use. The MAPC team has explored a first round of installations at public housing properties in Chelsea, Everett, and Revere using an open-access network model, similar to Wi-Fi systems in an airport. These networks will provide in-unit access to high-speed internet, leveraging network hardware installed in public spaces such as stairwells and hallways. The internet service will be provided through the procurement of one, high-speed commercial-grade internet connection. This service will be maintained by the municipalities after one year of service coverage by MAPC.",
        "MAPC’s second round of grants will focus on building the capacity of stakeholders within the region to focus on digital access, equity, and inclusion. MAPC is exploring relationships with community colleges to establish in-house digital stewardship programs – a model in which students would receive specialized training in community organizing and networking technology/management and apply their training by building community networks with local stakeholders and partners."
      ],
      steps: [
        "Continue efforts to establish free Wi-Fi at pilot public housing properties in each community.", 
        "Connect with community members to learn from these pilot connection installations.", 
        "Identify funds to continue the program if deemed successful by residents. "
      ]
    },
    {
      short: "Rooftop RFP",
      title: "Inventory and release procurements for use of Municipal rooftop space",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Connection",
      actor: "Housing Authority, Municipal Staff",
      description: [
        "Rooftops of municipal buildings could be leveraged by internet service providers, like Starry and netBlazer, to provide competitive options. Building off Request for Proposals from neighboring communities (Cambridge) procurements could leverage public assets to obtain sustainable maintenance funds while enabling the expansion of subsidized internet access programs for residents Starry Connect, NetBlazer."
      ],
      steps: [
        "Inventory and RFP municipal roofs, focusing on tall or elevated properties.", 
        "Draft request for information or proposals that would lease rooftop space."
      ]
    },
    {
      short: "Last Mile RFI",
      title: "Release a request for information about \"Last Mile\" fiber connections ",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Bringing fiber connections into residential buildings will improve speed and reliability for property tenants."
      ],
      steps: [
        "Review fiber maps and ID priority areas for investment. "
      ]
    },
    {
      short: "Dig Once Policy",
      title: "Establish Dig Once Policy",
      timeframe: "Intermediate / Long term ", 
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
      short: "Standardize Small Cell Permits",
      title: "Adopt a standard small cell permitting policy and practice",
      timeframe: "Intermediate / Long term ", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Municipalities currently approve or deny small cell permit applications of providers looking to build internet infrastructure. This process is not currently standard across 	municipalities. A shared understanding of guidelines and concerns could go a long way in clarifying processes and incentivizing safe and community approved investments."
      ],
      steps: [
        "Review other municipal small cell permit applications and process",
        "Draft and establish guidelines drawing on successful practices and community input"
      ]
    },
    {
      short: "Analyze Provider Network Maps",
      title: "Leverage Cable Franchise to Map Connection",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "MAPC will establish a process to expand on the analysis that comes from fiber and 	cable mapping data provided by ISPs."
      ],
      steps: [
        "MACP to establish program and funds (DLTA?)"
      ]
    },
    {
      short: "Hire Digital Equity Officer",
      title: "Hire a Regional Digital Access and Equity Officer ",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Municipalities hire a shared digital equity officer model after similar positions 	across the country. "
      ],
      steps: [
        "Connect with MAPC Regional Cyber officer work",
        "Pull list of positions and job descriptions "
      ]
    },
    {
      short: "Host Digital Navigator Program",
      title: "Participate in Youth Works Digital Navigators Program",
      timeframe: "Intermediate", 
      status: "Underway",
      type: "Digital Literacy",
      actor: "Municipal Staff, Community Organizations",
      description: [
        "Through the Chelsea, Everett, Revere planning process, it was revealed that there were significant gaps in local capacity to help residents navigate the various public benefit resources related to digital access. To address this issue, MAPC worked with the MetroNorth Workforce Investment Board to seek funding through the State’s Commonwealth Corporation YouthWorks program, and additional corporate support from Comcast. By combining these funds, the MetroNorth Workforce Board was able to hire the National Digital Inclusion Alliance to train and support 15 young people, aged 17 – 21, in Everett, Revere, and Malden to provide digital resource navigation support.",
        "MAPC is further supporting the workforce board by connecting the young people with entities who are working directly with the target population the navigators seek to serve. These include healthcare institutions like the Cambridge Health Alliance, school districts, housing authorities, and the Mass Healthy Aging Council.",
        "This is the first youth-focused digital navigators program in the country. Municipalities responded to RFI, Spend residents to support and help make connections between new capacity and those that need support. Digital Navigators can be embedded in municipal offices, healthcare facilities, schools, or other CBO's to provide direct technology and resource support to the community."
      ],
      steps: [
        "Connect residents to new service ",
        "Add to training and City communications "
      ]
    },
    {
      short: "ECF Funding Application",
      title: "Apply for and Distribute Emergency Connectivity Fund Resources",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Digital Literacy, Device",
      actor: "Municipal Staff",
      description: [
        "The Emergency Connectivity Fund assists schools and libraries purchase technology equipment and internet service.  Funds should be leveraged to supporting wired connections whenever possible."
      ],
      steps: [
        "Submit ECF applications from School District and Library "
      ]
    },
    {
      short: "Digital Equity Fund",
      title: "Establish a Digital Equity Trust Fund",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Digital Literacy, Device, Connection",
      actor: "Municipal Staff",
      description: [
        "A Digital Equity Trust would be a sustained funding source to assist residents purchase devices such as PC's or routers, as well as internet subscriptions when subsidies are unavailable."
      ],
      steps: [
        "Establish a trust through legislative action."
      ]
    },
    {
      short: "Device Refurbishment Program",
      title: "Support the Creation of a Tech Refurbishment Center (Long)",
      timeframe: "Intermediate", 
      status: "Potential",
      type: "Device",
      actor: "Municipal Staff",
      description: [
        "A Tech Refurbishment program would divert e-waste, enable skill-building, and provide low-cost options for devices in the community."
      ],
      steps: [
        "Coordinate with private sector partners, School District, and Workforce Board"
      ]
    }
  ]

  function createAccordions(actions) { 
    return actions.map((action, index) => {
      return <a href={"#actions/" + action.timeframe + "/panel" + index}>
        <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
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
      </a>
    })
  };

  return (
    <div>
      <h3>Intermediate</h3>
      {createAccordions(intermediate)}
    </div>
  );
}
