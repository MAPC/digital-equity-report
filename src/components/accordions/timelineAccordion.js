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

export default function TimelineAccordion() {
  const [expanded, setExpanded] = React.useState('panel0');
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    
    const accordionTitles = event.target.closest('.MuiPaper-root').parentNode.closest('div').querySelectorAll('.MuiButtonBase-root');
    const offset = event.target.closest('.MuiPaper-root').parentNode.closest('div').getBoundingClientRect().top + window.scrollY;
    const pnlIdx = parseInt(panel.substring(panel.length - 1));
    let titleOffset = 0;
    
    accordionTitles.forEach((elem, index) => {
      if (index <= pnlIdx && index !== 0) {
        titleOffset += accordionTitles[index - 1].offsetHeight;
      }      
    });
    
    const totalOffset = offset + titleOffset;

    window.scrollTo(0, totalOffset);

  };

  const timelineData = [
    {
      title: "Existing Conditions",
      time: "February - April",
      description: [
        "Assess current internet service providers and their service offerings. Identify and analyze existing data sources to better understand community devices and internet access."
      ],
      deliverables: [
        "Map of publicly owned digital infrastructure, including broadband fiber, telephone poles, cell towers, public Wi-Fi, data centers, etc.",
        "Slide deck outlining Everett’s existing level of service and public infrastructure. Data files and code in standard formats used in the analysis. "
      ]
    },
    {
      title: "Community Needs Assessment",
      time: "April - June",
      description: [
        "Assess internet availability, device access, and digital literacy among specific populations in Everett community. With community partners, identify specific internet functions needed in daily life, current ability to use them, and barriers or challenges to doing so."
      ],
      deliverables: [
        "Data and analysis from the digital community needs assessment. Outline implications of this assessment for use in future recommendations."
      ]
    },
    {
      title: "Infrastructure and Technology Evaluation ",
      time: "June - August",
      description: [
        "Determine the state of digital infrastructure in the City of Everett. Analyze the extent to which private Internet Service Providers (ISPs) have invested in the community, and if there are gaps in private service infrastructure. Evaluate relevant infrastructure elements as recommended by the City and partners."
      ],
      deliverables: [
        "Data and analysis related to the inventory of digital infrastructure in Everett. Outline implications for future investment based on current infrastructure.",
        "Technical memorandum outlining the relevant regulations and permitting for digital infrastructure.",
        "Technical memorandum outlining major findings regarding strategic investment opportunities and policies that would improve digital infrastructure in the City."
      ]
    },
    {
      title: "Plan Development",
      time: "August - November",
      description: [
        "Synthesize earlier phases of work to inform policy, program, and capital investments that address specific barriers and needs in Everett. "
      ],
      deliverables: [
        "Public document of key digital needs and issues in the City of Everett, the vision for digital access, and specific strategies that will needed to meet the vision.   ",
        "Presentation to working group of findings, strategies, and an evaluation framework. "
      ]
    }
  ]

  const createAccordions = timelineData.map((elem, index) => {
    return <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
      <AccordionSummary aria-controls={"panel" + index + "d-content"} id={"panel" + index + "d-header"}>
        <Typography>            
          <h4 style={{color: "black", margin: "0.5rem"}}>{elem.title}</h4>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <h5>{elem.time}</h5>
          {elem.description.map(p => <p>{p}</p>)}
          <h5>Deliverables</h5>
          <ul style={{listStyle: "circle"}}>
            {elem.deliverables.map((li, index) => <li key={index} style={{listStyle: "circle", marginLeft: "0.8rem"}}>{li}</li>)}
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
