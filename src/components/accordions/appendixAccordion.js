import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Acknowledgements from "../appendix/acknowledgements";
import Glossary from "../appendix/glossary";
import Online from "../appendix/online";
import Research from "../appendix/research";
import Maps from "../appendix/maps";
import Reports from "../appendix/reports";
import Literature from "../appendix/literature";
import Slides from "../appendix/slides";
import Tableaus from "../appendix/tableaus";

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
      : 'white',
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

export default function AppendixAccordion() {
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    
    setExpanded(newExpanded ? panel : false);

  };

  const appendixSections = [
    {
      title: "Acknowledgements",
      accordion: <Acknowledgements />
    },
    {
      title: "Glossary",
      accordion: <Glossary />
    },
    {
      title: "Online Articles & Blog Posts",
      accordion: <Online />
    },
    {
      title: "Research Articles",
      accordion: <Research />
    },
    {
      title: "Maps/Data",
      accordion: <Maps />
    },
    {
      title: "Reports",
      accordion: <Reports />
    },
    {
      title: "Municipal Models Draft Literature Review",
      accordion: <Literature />
    },
    {
      title: "Slides",
      accordion: <Slides />
    },
    {
      title: "Tableaus",
      accordion: <Tableaus />
    },
  ]

  function createAccordions(sections) {
    return sections.map((section, index) => {
      return <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
        <AccordionSummary aria-controls={"panel" + index + "d-content"} id={"panel" + index + "d-header"}>
          <Typography><h3 style={{margin: 0}}>{section.title}</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {section.accordion}
          </Typography>
        </AccordionDetails>
      </Accordion>
    })
  };

  return (
    <div>
      {createAccordions(appendixSections)}
    </div>
  );
}
