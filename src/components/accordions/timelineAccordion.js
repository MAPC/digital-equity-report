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

export default function TimelineAccordion() {
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const timelineData = [
    {
      phase: "1A",
      title: "Existing Conditions",
      time: "February - April",
      description: [
        "Assessment of the current internet service providers available in Everett and their associated service offerings. Identify and analyze existing data sources to better understand community device and internet access."
      ],
      deliverables: [
        "Spatially map publicly owned digital infrastructure including broadband fiber, telephone poles, cell towers, public Wi-Fi, data centers, etc.",
        "Slide deck outlining Everett’s existing level of service and public infrastructure and provide data files and code in standard formats used in the analysis."
      ]
    },
    {
      phase: "1B",
      title: "Community Needs Assessment",
      time: "April - June",
      description: [
        "To understand the specific internet access needs of the Everett community, MAPC worked with community partners to identify the key functional needs of the internet in daily life, current ability to use the internet for those key functions, and barriers or challenges impacting that ability to use the internet. This assessment was structured within the framework of internet availability, device access, and digital literacy and designed to reflect certain specific population needs within the community. "
      ],
      deliverables: [
        "Data and analysis from the digital community needs assessment and implications for potential recommendations."
      ]
    },
    {
      phase: "2",
      title: "Infrastructure and Technology Evaluation ",
      time: "June - August",
      description: [
        "Reviewed available data sources to catalog the state of digital infrastructure in the City of Everett. Undertook analysis to understand the extent that private ISP’s have invested in the community and if there are gaps in private service infrastructure. In addition evaluated relevant infrastructure elements as recommended by the City and partners."
      ],
      deliverables: [
        "Data and analysis related to the inventory of digital infrastructure in Everett. This inventory will also outline the implications for future investment based on current infrastructure.",
        "Technical memorandum outlining the relevant regulations and permitting for digital infrastructure.",
        "Technical memorandum outlining major findings regarding strategic investment opportunities and policies that would yield the advancement of improved digital infrastructure in the City."
      ]
    },
    {
      phase: "3",
      title: "Plan Development",
      time: "August - November",
      description: [
        "Synthesis of earlier phases of work to inform policy, program, and capital investments to address specific barriers and needs in Everett."
      ],
      deliverables: [
        "Public document of key digital needs and issues within the City of Everett, the collective vision for digital access, and specific strategies that will need to be implemented to achieve success.",
        "Presentation of findings, strategies and an evaluation framework to working group."
      ]
    }
  ]

  const createAccordions = timelineData.map((elem, index) => {
    return <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
      <AccordionSummary aria-controls={"panel" + index + "d-content"} id={"panel" + index + "d-header"}>
        <Typography>            
          <h4>Phase {elem.phase}</h4>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <div className="section-two-col-flex">
          <div className="section-half border-right">
            <h4>{elem.title}</h4>
            <h4 style={{color: "#BEB6B6"}}>{elem.time}</h4>
          </div>
          <div className="section-half">
            {elem.description.map(p => <p>{p}</p>)}
            <h5>Deliverables</h5>
            <ul>
              {elem.deliverables.map((li, index) => <li key={index}>{li}</li>)}
            </ul>
          </div>
        </div>
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
