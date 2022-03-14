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

export default function ImmediateActions() {
  const [expanded, setExpanded] = useState();

  // on direct access to an action, this hook will check the url for the selected panel and expand that panel on load
  useEffect(() => {
    if (window.location.href.indexOf("panel") > -1 && window.location.href.indexOf("Immediate") > -1) {
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

  const immediate = [
    { 
      short: "Bridge to Broadband",
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
      short: "Align Capital Investments",
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
      short: "Tech Goes Home Partnership",
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
      <h3>Immediate</h3>
      {createAccordions(immediate)}
    </div>
  );
}
