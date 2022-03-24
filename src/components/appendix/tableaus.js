import React from "react";
import thumbnail from "../../images/thumbnail-tableau.png"

const Tableaus = () => {

  const tableausSources = [
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
      <img src={citation.thumbnail} />
      <a href={citation.link} target="blank">
        <h4 className="citation__link citation__link-below">{citation.title}</h4>
      </a>
    </div>
  })

  return (
    <div> 
      <div className="section-two-col-flex">
      {tableausCitations}
      </div>
    </div>
  )
}

export default Tableaus