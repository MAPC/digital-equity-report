import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Acknowledgements from "../appendix/Acknowledgements";
import Glossary from "../appendix/Glossary";
import Additional from "../appendix/Additional";
import Literature from "../appendix/Literature";
import Slides from "../appendix/Slides";
import Tableaus from "../appendix/Tableaus";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0, 0, 0, .03)" : "white",
  border: "2px solid white",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
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
    const accordionTitles = event.target
      .closest(".MuiPaper-root")
      .parentNode.closest("div")
      .querySelectorAll(".MuiButtonBase-root");
    const offset =
      event.target
        .closest(".MuiPaper-root")
        .parentNode.closest("div")
        .getBoundingClientRect().top + window.scrollY;
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

  const appendixSections = [
    {
      title: "Acknowledgements",
      accordion: <Acknowledgements />,
    },
    {
      title: "Glossary",
      accordion: <Glossary />,
    },
    {
      title: "Additional Resources",
      accordion: <Additional />,
    },
    {
      title: "Internet Ownership Models Review",
      accordion: <Literature />,
    },
    {
      title: "Slides",
      accordion: <Slides />,
    },
    {
      title: "Data Visualizations",
      accordion: <Tableaus />,
    },
  ];

  function createAccordions(sections) {
    return sections.map((section, index) => {
      return (
        <Accordion
          key={index}
          expanded={expanded === "panel" + index}
          onChange={handleChange("panel" + index)}
        >
          <AccordionSummary
            aria-controls={"panel" + index + "d-content"}
            id={"panel" + index + "d-header"}
          >
            <Typography>
              <h3 style={{ margin: 0 }}>{section.title}</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{section.accordion}</Typography>
          </AccordionDetails>
        </Accordion>
      );
    });
  }

  return <div>{createAccordions(appendixSections)}</div>;
}
