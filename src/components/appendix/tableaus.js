import React from "react";

const Tableaus = () => {

  const tableausSources = [
    {
      title: "Digital Equity Census Internet Questions",
      link: "https://public.tableau.com/views/DigitalEquityCensusInternetQuestions/U_S_CensusQuestions?:retry=yes&:embed=y&:display_count=n&:origin=viz_share_link",
      embed: "https://public.tableau.com/views/DigitalEquityCensusInternetQuestions/U_S_CensusQuestions?:showVizHome=no&:embed=true"
    }
  ]

  const tableausCitations = tableausSources.map((citation, index) => {
    return <div key={index} className="section">
        <a href={citation.link}>
          <h4>{citation.title}</h4>
        </a>
        <iframe src={citation.embed} width="100%" height="600"></iframe>
    </div>
  })

  return (
    <div>
      {tableausCitations}
    </div>
  )
}

export default Tableaus