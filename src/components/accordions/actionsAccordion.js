import React from "react";
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
      // : 'rgba(255, 230, 175, 0.5)',
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
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    
    setExpanded(newExpanded ? panel : false);

    const viewportOffset = event.target.getBoundingClientRect();
    const top = viewportOffset.top;
    const scrollHeight = window.pageYOffset + top;

    console.log("window.pageYOffset", window.pageYOffset);
    console.log("window.innerHeight", window.innerHeight);
    console.log("top", top);
    
    window.scrollTo({
      top: scrollHeight ,
      left: 0,
      behavior: "smooth",
    });

  };

  const immediate = [
    {
      title: "Participate in Education Superhighway Bridge to Broadband Program Pilot",
      timeframe: "Immediate (Fall 2021 – Winter 2022)",
      status: "Completed",
      type: "Connection",
      actor: "School District",
      description: [
        "This program is a facilitated data exchange between school districts and Internet Service Providers. Massachusetts Department of Elementary and Secondary Education in Partnership with Education Superhighway established a pilot in MA, where school districts could establish data exchanges through data-sharing agreements brokered by the Student Data Privacy Alliance. Everett, Chelsea, and Revere were added to the initial pilot program and are now able to identify which students are or are not currently able to be served with a wired internet connection for an ISP serving the community."
      ],
      steps: [
        "Complete data exchanges.", 
        "Leverage data to support schools-based efforts aimed at connecting unconnected students and households.",
        "Advocate for ways to expand data exchanges that respect data rights and privacy beyond schools to support broader community connection efforts."
      ]
    },
    {
      title: "Explore and Align Municipal Infrastructure Investments",
      timeframe: "Immediate (March 2022) / Long term ", 
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Building on the infrastructure investments that have already been made by Everett, Chelsea, and Revere, to connect municipal buildings and assets. There is an opportunity to align in future investments and maintenance. The Division of Local Services has established a Municipal Fiber Grant Program that opens for the first time in March of 2020. Structured like other competitive Community Compact grants, this program allows more funds to go towards multi-jurisdictional projects up to a maximum of $500,000 may be awarded to a project.  This is an opportunity to address deficiencies in municipal networks identified in reports (like Chelsea’s Dewsbury report) while establishing robust fiber option networking to support network monitoring, cyber security, records management, and backup and recovery. Cohesive and collaborative inter-municipal network connection also creates opportunities to gain economies of scale by aggregating internet bandwidth purchases and the associated security infrastructure."
      ],
      steps: [
        "Identify priority municipal infrastructure needs",
        "Draft application(s) for Municipal Fiber Grant program "
      ]
    },
    {
      title: "Brand Cities as \"Tech Goes Home\" Communities ",
      timeframe: "Immediate", 
      status: "Potential",
      type: "Digital Literacy",
      actor: "Municipal Staff",
      description: [
        "Embed at least one Tech Goes Home instructor in every school and library in the City.  Ensure courses are offered in Spanish, Haitian Creole, Portuguese, and other community languages."
      ],
      steps: [
        "Adopt brand as policy and assess funding requirements "
      ]
    },
  ]

  const intermediate = [
    {
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

  const longterm = [
    {
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
  ]

  function createAccordions(actions) {
    return actions.map((action, index) => {
      return <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
        <AccordionSummary aria-controls={"panel" + index + "d-content"} id={"panel" + index + "d-header"}>
          <Typography><h5 style={{margin: "0.5rem"}}>{action.title}</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h5 style={{marginBottom: 0}}>Timeframe:</h5>
            <p style={{marginTop: 0}}>{action.timeframe}</p>
            <h5 style={{marginBottom: 0}}>Status: </h5>
            <p style={{marginTop: 0}}>{action.status}</p>
            <h5 style={{marginBottom: 0}}>Type: </h5>
            <p style={{marginTop: 0}}>{action.type}</p>
            <h5 style={{marginBottom: 0}}>Primary Actor: </h5>
            <p style={{marginTop: 0}}>{action.actor}</p>
            <h5>Description</h5>
            {action.description.map((elem, i) => <p key={i} style={{marginTop: 0}}>{elem}</p>)}
            <h5 style={{marginBottom: 0}}>Next Steps</h5>
            <ul>
              {action.steps.map((elem, i) => <li key={i}>{elem}</li>)}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    })
  };

  return (
    <div>
      <h3>Immediate</h3>
      {createAccordions(immediate)}
      <h3>Intermediate</h3>
      {createAccordions(intermediate)}
      <h3>Long-term</h3>
      {createAccordions(longterm)}
    </div>
  );
}
