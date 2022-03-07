import React, { useEffect, useState, useRef } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
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
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
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
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function ActionsAccordion() {
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const actions = [
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
      title: "Adopt a standard small cell permitting policy and practice. ",
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
  ]

  const createAccordions = actions.map((action, index) => {
      return <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
        <AccordionSummary aria-controls={"panel" + index + "d-content"} id={"panel" + index + "d-header"}>
          <Typography>{action.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Timeframe: {action.timeframe}</p>
            <p>Status: {action.status}</p>
            <p>Type: {action.type}</p>
            <p>Primary Actor: {action.actor}</p>
            <p>Description:</p> 
            {action.description.map((elem, i) => <p key={i}>{elem}</p>)}
            <p>Next Steps:</p>
            <ul>
              {action.steps.map((elem, i) => <li key={i}>{elem}</li>)}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
  })

  return (
    <div>
      {createAccordions}
    </div>
  );
}
