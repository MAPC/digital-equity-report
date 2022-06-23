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

export default function Actions2Accordion() {
  const [expanded, setExpanded] = useState();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (window.location.href.indexOf("intermediate") > -1) {
      const url = window.location.href;
      const panel = url.substring(url.indexOf("intermediate"));
      setExpanded(panel);
      handleChange(panel);
    } else {
      return undefined;
    }
  }, []);

  function copy(index) {
    const elem = document.createElement("input");
    elem.value = `mapc.github.io/digital-equity-report/report/#intermediate-panel${index}`;
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

  const intermediate = [
    {
      short: "Analyze Provider Network Maps ",
      title: "Leverage Cable Franchise to Map Connection ",
      timeframe: "Intermediate",
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "As a potential local technical assistance funded project with MAPC, to further expand on the analysis that comes from fiber and cable mapping data provided by ISPs.  ",
      ],
      steps: [
        "Apply to local technical assistance grants for potential project establishment",
        "Partners with other cities request maps as allowed in cable franchise agreements",
      ],
    },
    {
      short: "Dig Once Policy",
      title: "Establish Dig Once Policy ",
      timeframe: "Intermediate",
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Municipal investments in fiber can be coupled with Dig Smart policies that mandate additional conduit be installed during construction or repair. This conduit throughout public rights-of-way, allows for future providers to thread fiber in that area. Lowering costs for providing broadband service and making a community more attractive for broadband providers hoping to break into a new market or expand their existing operations. Other municipal construction of repair projects for water or sewer pipes, along with roads and sidewalks presents an additional opportunity to incentivize fiber installation.  ",
      ],
      steps: ["Review other municipal Dig Once Policies "],
    },
    {
      short: "Local Digital Equity Fund ",
      title: "Establish a Digital Equity Trust Fund ",
      timeframe: "Intermediate",
      status: "Potential",
      type: "Digital Literacy, Device, Connection",
      actor: "Municipal Staff",
      description: [
        "A Digital Equity Trust would be a continuing funding source to incentivize and support local efforts to address digital divide issues. This could include an application process for community groups to take on broadband work. This could be in the shape of local hotspots, larger area networks, adoption campaigns, skills training, and tech career programs.",
      ],
      steps: [
        "Establish trust through legislative action ",
        "Develop governing body and process for applications ",
      ],
    },
    {
      short: "Device Refurbishment Program ",
      title: "Support the Creation of a Tech Refurbishment Center  ",
      timeframe: "Intermediate",
      status: "Potential",
      type: "Device",
      actor: "Municipal Staff",
      description: [
        "A Tech Refurbishment program would divert e-waste, enable skill-building, and provide low-cost options for devices in the community.  ",
      ],
      steps: [
        "Coordinate with private sector partners, School District, and Workforce Board ",
      ],
    },
    {
      short: "Leverage Municipal Rooftop Assets",
      title: "Inventory and release procurements for use of municipal assets",
      timeframe: "Intermediate",
      status: "Potential",
      type: "Connection",
      actor: "Housing Authority, Municipal Staff",
      description: [
        <span>
          Rooftops of municipal buildings could be leveraged by internet service
          providers, like Starry and netBlazer, to provide competitive options.
          In addition to rooftops, sheds, buildings and other street furniture
          or City-owned lots could be used for in-the-field cabinets, edge
          computing/mini data centers or other equipment necessary for broadband
          infrastructure. Building off Request for Proposals from neighboring
          communities (
          <a href="https://cambridge-housing.org/wp-content/uploads/2021/02/RFP-to-lease-rooftop-space-FINAL-1.pdf">
            Cambridge
          </a>
          ) procurements could leverage public assets to obtain sustainable
          maintenance funds while enabling the expansion of subsidized internet
          access programs for residents{" "}
          <a href="https://starry.com/starryconnect">Starry Connect</a>,{" "}
          <a href="https://www.netblazr.com/bostons-netblazr-and-kt-partner-to-supply-affordable-housing-residents-with-free-high-speed-internet/">
            NetBlazer
          </a>
          .
        </span>,
      ],
      steps: [
        "Inventory and RFP municipal roofs, focusing on tall or elevated properties. ",
        "Inventory and RFP other spaces advantageous to existing or planned broadband infrastructure",
        "Draft request for information or proposals that would lease rooftop or other spaces.",
      ],
    },
    {
      short: "Broadband Consumer Protection",
      title:
        "Support and advocate for local needs in current federal rule related to broadband ",
      timeframe: "Intermediate",
      status: "Potential",
      type: "Connection",
      actor: "Municipal Staff",
      description: [
        "Create a task force to create policy recommendations to submit to state and federal entities to shape broadband policy and investment. Suggested policies to explore",
        <ul>
          <li>
            Broadband Nutrition Label with detail comparable information.{" "}
          </li>
          <li>Advocate for new definition of broadband 100/100. </li>
          <li>Advocate that competition requires at least 3 providers. </li>
          <li>
            Advocate for federal funding to be distributed equitably and to
            consider affordability gap not just access gap{" "}
          </li>
          <li>
            Advocate for a clear and easy to use system municipalities and local
            government will have to file complaints / grievances on Behalf of
            Residents New FCC rules put onus on gov to submit/prove speed /
            price issue with provider{" "}
          </li>
        </ul>,
      ],
      steps: ["Recruit members and establish charter/goals for group"],
    },
  ];

  function createAccordions(sections) {
    return sections.map((section, index) => {
      return (
        <Accordion
          id={`intermediate-panel${index}`}
          key={index}
          expanded={expanded === "intermediate-panel" + index}
          onChange={handleChange("intermediate-panel" + index)}
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

  return <div>{createAccordions(intermediate)}</div>;
}
