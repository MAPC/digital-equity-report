import React from "react";
import thumbnail from "../../images/thumbnail-tableau.png"
import fiberlines from "../../images/thumbnails/fiberlines.png"
import homefiber from "../../images/thumbnails/homefiber.png"
import providercoverage from "../../images/thumbnails/providercoverage.png"

const Tableaus = () => {

  const tableausSources = [
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

  const tableausCitations = tableausSources.map((citation, index) => {
    return <div key={index}>
      <img className="citation__thumbnail" src={citation.thumbnail} />
      <a href={citation.link} target="blank">
        <h4 className="citation__link citation__link-below">{citation.title}</h4>
      </a>
    </div>
  })

  return (
    <div> 
      <div className="section-two-col">
      {tableausCitations}
      </div>
    </div>
  )
}

export default Tableaus