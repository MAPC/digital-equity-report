import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Online from "../appendix/online";
import Research from "../appendix/research";
import Maps from "../appendix/maps";
import Reports from "../appendix/reports";
import Literature from "../appendix/literature";

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
    const accordionTitles = event.target.closest('.MuiPaper-root').parentNode.closest('div').querySelectorAll('.MuiButtonBase-root');
    const offset = event.target.closest('.MuiPaper-root').parentNode.closest('div').getBoundingClientRect().top + window.scrollY;
    const pnlIdx = parseInt(panel.substring(panel.length - 1));
    let titleOffset = 0;
    
    accordionTitles.forEach((elem, index) => {
      if (index <= pnlIdx && index !== 0) {
        titleOffset += accordionTitles[index - 1].offsetHeight;
      }      
    });
    
    let totalOffset = offset + titleOffset;

    window.scrollTo(0, totalOffset);
    // const viewportOffset = event.target.getBoundingClientRect();
    // const top = viewportOffset.top;
    // const scrollHeight = window.pageYOffset + top;

    // console.log("window.pageYOffset", window.pageYOffset);
    // console.log("window.innerHeight", window.innerHeight);
    // console.log("top", top);
    
    // window.scrollTo({
    //   top: scrollHeight ,
    //   left: 0,
    //   behavior: "smooth",
    // });

  };

  const appendixSections = [
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
