import React from "react";
import meeting1 from "../../images/thumbnails/meeting1.png"
import meeting2 from "../../images/thumbnails/meeting2.png"
import meeting3 from "../../images/thumbnails/meeting3.png"
import CR1 from "../../images/thumbnails/CR1.png"
import CR2 from "../../images/thumbnails/CR2.png"
import CR3 from "../../images/thumbnails/CR3.png"
import internet from "../../images/thumbnails/internet.png"
import apt from "../../images/thumbnails/apt.png"
import arpa from "../../images/thumbnails/arpa.png"
import brownbag from "../../images/thumbnails/brownbag.png"
import staff from "../../images/thumbnails/staff.png"
import thumbnail from "../../images/thumbnail-tableau.png"
import fiberlines from "../../images/thumbnails/fiberlines.png"
import homefiber from "../../images/thumbnails/homefiber.png"
import providercoverage from "../../images/thumbnails/providercoverage.png"
 
const Slides = () => {

  const slidesSources = [
    {
      title: "FCC Reported Provider Coverage",
      link: "https://mapc.github.io/fcc-map/",
      thumbnail: providercoverage
    },
    {
      title: "Fiber Access by Census Blocks",
      link: "",
      thumbnail: fiberlines
    },
    {
      title: "Residential Fiber Access by Census Blocks",
      link: "",
      thumbnail: homefiber
    },
    {
      title: "Chelsea and Revere Digital Access Municipal Presentation",
      link: "https://slides.com/mapc/chelsea-and-revere-digital-access-municipal-presentation",
      thumbnail: CR1
    },
    {
      title: "Chelsea Revere Digital Access Working Group II",
      link: "https://slides.com/mapc/chelsea-revere-digital-access-working-group-ii",
      thumbnail: CR2
    },
    {
      title: "Chelsea_Revere Digital Access Plan - Final Pres",
      link: "https://slides.com/mapc/copy-of-everett-digital-access-plan-final-pres",
      thumbnail: CR3
    },
    {
      title: "Everett Digital Access Working Group Presentation",
      link: "https://slides.com/mapc/everett",
      thumbnail: meeting1
    },
    {
      title: "Meeting 2 Everett Digital Access Working Group",
      link: "https://slides.com/mapc/everett-digital-access-presentation-2",
      thumbnail: meeting2
    },
    {
      title: "Everett Digital Access Plan - Final Pres",
      link: "https://slides.com/mapc/everett-digital-access-plan-final-pres-a72286",
      thumbnail: meeting3
    },
    {
      title: "ECCF Presentation ARPA & Digital Equity",
      link: "https://slides.com/mapc/arpa-digital-equity",
      thumbnail: arpa
    },
    {
      title: "Copy of MAPC Staff Meeting Presentation",
      link: "https://slides.com/mapc/mapc-staff-meeting-presentation",
      thumbnail: staff
    },    
    {
      title: "Digital Access and Equity Brownbag",
      link: "https://slides.com/mapc/browbag",
      thumbnail: brownbag
    },
    {
      title: "Journey Through the Internet",
      link: "https://slides.com/mapc/internet-slides/",
      thumbnail: internet
    },
    {
      title: "Apartment WIFI How-to",
      link: "https://slides.com/mapc/apartment-wifi-how-to",
      thumbnail: apt
    },
    {
      title: "MLab Speed Tests",
      link: "https://public.tableau.com/views/ProviderBroadband_16472866665260/Story1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: thumbnail
    },
    {
      title: "MLab Speed Tests",
      link: "https://public.tableau.com/views/ProviderBroadband_16472866665260/Story1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: thumbnail
    },
    {
      title: "MLab Speed Tests",
      link: "https://public.tableau.com/views/ProviderBroadband_16472866665260/Story1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: thumbnail
    },
    {
      title: "MLab Speed Tests",
      link: "https://public.tableau.com/views/ProviderBroadband_16472866665260/Story1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: thumbnail
    }
  ]

  const slidesCitations = slidesSources.map((citation, index) => {
    return <div key={index}>
      <img  className="citation__thumbnail" src={citation.thumbnail} />
      <a href={citation.link} target="blank">
        <h4 className="citation__link citation__link-below">{citation.title}</h4>
      </a>
    </div>
  })

  return (
    <div>
      <div className="section-two-col">
        {slidesCitations}
      </div>
    </div>
  )
}

export default Slides