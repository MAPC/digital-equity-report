import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

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
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, .03)"
      : "rgba(100, 149, 237, 0.15)",
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

export default function Actions1Accordion() {
  const [expanded, setExpanded] = useState();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (window.location.href.indexOf("immediate") > -1) {
      const url = window.location.href;
      const panel = url.substring(url.indexOf("immediate"));
      setExpanded(panel);
      handleChange(panel);
    } else {
      return undefined;
    }
  }, []);

  function copy(index) {
    const elem = document.createElement("input");
    elem.value = `mapc.github.io/digital-equity-report/report/#immediate-panel${index}`;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    setCopied(true);
  }

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

    setCopied(false);
  };

  const immediate = [
    {
      short: "Bridge to Broadband",
      title: (
        <span>
          Participate in Education Superhighway{" "}
          <a href="https://www.educationsuperhighway.org/bridge-to-broadband/">
            Bridge to Broadband Program
          </a>{" "}
          Pilot
        </span>
      ),
      timeframe: "Immediate (Fall 2021 – Winter 2022)",
      status: "Completed",
      type: "Connection",
      actor: "School District",
      description: [
        <span>
          This program is a facilitated data exchange between school districts
          and Internet Service Providers. Massachusetts Department of Elementary
          and Secondary Education in Partnership with Education Superhighway
          established a pilot in MA, where school districts could establish data
          exchanges through data-sharing agreements brokered by the{" "}
          <a href="https://sdpc.a4l.org/about_alliance.php?state=MA">
            Student Data Privacy Alliance
          </a>
          . Everett, Chelsea, and Revere were added to the initial pilot program
          and are now able to identify which students are or are not currently
          able to be served with a wired internet connection for an ISP serving
          the community.{" "}
        </span>,
      ],
      steps: [
        "Complete data exchanges.",
        "Leverage data to support schools-based efforts aimed at connecting unconnected students and households.",
        "Advocate for ways to expand data exchanges that respect data rights and privacy beyond schools to support broader community connection efforts.",
      ],
    },
    {
      short: "Build Better Broadband Grant Application",
      title:
        "Apply for funding to support regional strategic and financial planning of public infrastructure. ",
      timeframe: "Immediate",
      status: "Underway",
      type: "Connection",
      actor: "Municipal Staff, MAPC",
      description: [
        "To support the equitable expenditure of federal funds municipalities can together, with MAPC, submit a regional application for the Build Better Broadband grant funded by Connect Humanity. This grant will fund work to evaluate and provide cost estimate analysis for future public infrastructure investments. It will be important to further identify where public infrastructure investments can be leveraged to equitably close the digital divide. ",
      ],
      steps: [
        "Identify priority municipal infrastructure needs",
        "Draft application(s) for Municipal Fiber Grant program ",
      ],
    },
    {
      short: "Housing Authority Wi-Fi Pilot",
      title: (
        <span>
          Establish Wi-Fi deployments as part of{" "}
          <a href="https://www.mapc.org/massachusetts-broadband-institute-mbi-gateway-city-wifi-hotspot-program/">
            Mass Broadband Institute Gateway City WiFi Grant
          </a>
        </span>
      ),
      timeframe: "Intermediate (Summer 2021 – 2024) ",
      status: "Immediate / Underway",
      type: "Connection, Digital Literacy ",
      actor: "Housing Authority, Municipal Staff",
      description: [
        "As part of the State’s Economic Recovery Plan, the Mass Broadband Institute has made funds available, through MAPC, to support Wi-Fi deployments to help connect individuals, families, or small businesses with sustainable internet access in Chelsea, Everett, Revere, Malden, and Quincy. The goal of these deployments is to provide broader internet access in communities that face barriers to connectivity.",
        "Through enhanced Wi-Fi availability, this program aims to connect more individuals, families, and small businesses with sustainable internet access for daily use. The MAPC team has explored a first round of installations at public housing properties in Chelsea, Everett, and Revere using an open-access network model, similar to Wi-Fi systems in an airport. These networks will provide in-unit access to high-speed internet, leveraging network hardware installed in public spaces such as stairwells and hallways. The internet service will be provided through the procurement of one, high-speed commercial-grade internet connection. This service will be maintained by the municipalities after one year of service coverage by MAPC.",
        "MAPC’s second round of grants will focus on building the capacity of stakeholders within the region to focus on digital access, equity, and inclusion. MAPC is exploring relationships with community colleges to establish in-house digital stewardship programs – a model in which students would receive specialized training in community organizing and networking technology/management and apply their training by building community networks with local stakeholders and partners. ",
      ],
      steps: [
        "Identify priority municipal infrastructure needs",
        "Draft application(s) for Municipal Fiber Grant program ",
      ],
    },
    {
      short: "Tech Goes Home Partnership",
      title: "Expand Tech Goes Home Partnership",
      timeframe: "Immediate",
      status: "Potential",
      type: "Digital Literacy",
      actor: "Municipal Staff",
      description: [
        "Embed at least one Tech Goes Home instructor in every school and library in the City.  Ensure courses are offered in Spanish, Haitian Creole, Portuguese, and other community languages. ",
      ],
      steps: ["Adopt brand as policy and assess funding requirements."],
    },
    {
      short: "Hire Digital Equity Officer",
      title: "Hire a Regional Digital Access and Equity Officer",
      timeframe: "Immediate",
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Municipalities hire a shared digital equity officer model after similar positions 	across the country. This position could be a joint position across municipalities that is focused on the implementation of digital equity initiatives and strategies. ",
      ],
      steps: [
        "Connect with MAPC Regional Cyber officer work to explore hiring model ",
        "Pull list of positions and job descriptions ",
      ],
    },
  ];

  function createAccordions(sections) {
    return sections.map((section, index) => {
      return (
        <Accordion
          id={`immediate-panel${index}`}
          expanded={expanded === "immediate-panel" + index}
          onChange={handleChange("immediate-panel" + index)}
        >
          <AccordionSummary
            aria-controls={"panel" + index + "d-content"}
            id={"panel" + index + "d-header"}
          >
            <Typography>
              <h4 style={{ color: "black", margin: "0.5rem" }}>
                {section.short}
              </h4>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h4>{section.title}</h4>
              <div className="section-two-col-flex">
                <div className="section-half border-right">
                  {section.description.map((elem, i) => (
                    <p key={i}>{elem}</p>
                  ))}
                </div>
                <div className="section-half">
                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontFamily: "AvenirNextLTPro",
                      }}
                    >
                      Timeframe:
                    </span>{" "}
                    <br />
                    {section.timeframe}
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontFamily: "AvenirNextLTPro",
                      }}
                    >
                      Status:
                    </span>{" "}
                    <br />
                    {section.status}
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontFamily: "AvenirNextLTPro",
                      }}
                    >
                      Type:
                    </span>{" "}
                    <br />
                    {section.type}
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontFamily: "AvenirNextLTPro",
                      }}
                    >
                      Primary Actor:
                    </span>{" "}
                    <br />
                    {section.actor}
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontFamily: "AvenirNextLTPro",
                      }}
                    >
                      Next Steps:
                    </span>{" "}
                    <br />
                    <ul style={{ marginTop: 0, listStyle: "circle" }}>
                      {section.steps.map((elem, i) => (
                        <li
                          key={i}
                          style={{ listStyle: "circle", marginLeft: "1.2rem" }}
                        >
                          {elem}
                        </li>
                      ))}
                    </ul>
                  </p>

                  <button className="copy" onClick={() => copy(index)}>
                    <FontAwesomeIcon icon={faCopy} className="copy__icon" />
                    <span className="anchor__helper-text">
                      <h5>{!copied ? "Share this Action" : "Link Copied!"}</h5>
                    </span>
                  </button>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    });
  }

  return <div>{createAccordions(immediate)}</div>;
}
