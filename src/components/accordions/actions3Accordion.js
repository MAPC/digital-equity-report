import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AnchorLink } from 'gatsby-plugin-anchor-links'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

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

export default function Actions3Accordion() {
  const [expanded, setExpanded] = useState();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (window.location.href.indexOf("longterm") > -1) {
      const url = window.location.href;
      const panel = url.substring(url.indexOf("longterm"));
      setExpanded(panel);
      handleChange(panel);
    } else {
      return undefined;
    }
  }, []);

  function copy(index) {
    const elem = document.createElement('input');
    elem.value = `mapc.github.io/digital-equity-report/report/#longterm-panel${index}`
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    setCopied(true);
  }

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

    setCopied(false);
  };


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

  function createAccordions(sections) {
    return sections.map((section, index) => {
      return <Accordion id={`longterm-panel${index}`} expanded={expanded === 'longterm-panel' + index} onChange={handleChange('longterm-panel' + index)}>
        <AccordionSummary aria-controls={"panel" + index + "d-content"} id={"panel" + index + "d-header"}>
          <Typography><h4 style={{color: "black", margin: "0.5rem"}}>{section.short}</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>{section.title}</h4>
            <div className="section-two-col-flex">
              <div className="section-half border-right">
              {section.description.map((elem, i) => <p key={i}>{elem}</p>)}
              </div>
              <div className="section-half">
                <p><span style={{fontWeight: "bold", fontFamily: "AvenirNextLTPro"}}>Timeframe:</span> <br/>{section.timeframe}</p>
                <p><span style={{fontWeight: "bold", fontFamily: "AvenirNextLTPro"}}>Status:</span> <br/>{section.status}</p>
                <p><span style={{fontWeight: "bold", fontFamily: "AvenirNextLTPro"}}>Type:</span> <br/>{section.type}</p>
                <p><span style={{fontWeight: "bold", fontFamily: "AvenirNextLTPro"}}>Primary Actor:</span> <br/>{section.actor}</p>
                <p><span style={{fontWeight: "bold", fontFamily: "AvenirNextLTPro"}}>Next Steps:</span> <br/>
                  <ul style={{marginTop: 0, listStyle: "circle"}}>
                    {section.steps.map((elem, i) => <li key={i} style={{listStyle: "circle", marginLeft: "1.2rem"}}>{elem}</li>)}
                  </ul>
                </p>
                
                <button className="copy" onClick={() => copy(index)}>
                  <FontAwesomeIcon icon={faCopy} className="copy__icon" />
                  <span className="anchor__helper-text"><h5>{!copied ? "Share this Action" : "Link Copied!"}</h5></span>
                </button>
                
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    })
  };

  return (
    <div>
      {createAccordions(longterm)}
    </div>
  );
}
