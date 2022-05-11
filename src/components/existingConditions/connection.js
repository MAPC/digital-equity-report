import React from "react";

const Connection = () => {

  return (
    <div>
      <div className="section">
        <p>The American Community Survey captures data on internet connections. The current survey asks, <em>“At this house, apartment, or mobile home - do you or any member of this household have access to the Internet?”</em> Everett, Chelsea, and Revere have a high percentage of households that are identified as having <em>no access</em>. Despite having more commercial providers serving the area household remain disconnected at a higher rate than can be found across Massachusetts.  </p>
        <p>[17%] of households in these three communities do not have a wired internet subscription. That means there are [ X number of Households] that are not able to leverage an internet subscription to access opportunities and fully participate in society.</p>
        <iframe 
          src="https://public.tableau.com/views/ACSPercentofHouseholdswithoutInternet/U_S_CensusQuestions?:showVizHome=no&:embed=true" 
          width="100%" 
          height="600"
          allowFullScreen="true" 
          webkitallowfullscreen="true"
          mozallowfullscreen="true" 
        ></iframe>
        <p className="citation">American Community Survey 2019 5 year: Table S2801.</p>
        <p className="viz-description">Instead of an internet subscription, many residents rely solely on a cellular telephone plan to connect to the internet. Between [7% and 13%] of households in these three communities are identified in census data as using only a smartphone.  </p>
        <p>While the advances in cell phone devices and services have been transformative, they do not enable a household to fully participate in society. Being able to apply for jobs, talking virtually with a doctor, attend online classes, or filling out a government form are not always possible to complete from a cell phone. In addition, cellular service plans are not structured like internet service plans.  </p>
        <iframe 
          src="https://public.tableau.com/views/ACSPercentofHouseholdswithSmartphoneOnly/U_S_CensusQuestions?:showVizHome=no&:embed=true" 
          width="100%" 
          height="600"
          allowFullScreen="true" 
          webkitallowfullscreen="true"
          mozallowfullscreen="true" 
        ></iframe>
        <p className="citation">American Community Survey 2019 5 year: Table S2801.</p>
        <p>Often cellular plans have monthly data caps limiting the amount of participation a household can engage online very month. Through this plan’s community engagement process, during the pandemic, parents shared their experiences of having their children participate in remote schooling form home. Parents shared that because of the cell phone data caps, by the end of the month their children were not able to attend classes because the family plan had run up against the data limit.  </p>
        <p>While school districts, libraries, and parent liaisons have worked to connect families to subsidies internet subscription of cellular (mi-fi) plans. In fact, the Everett, Chelsea and Revere schools’ districts lent out [Over Count of Mi-FI] devices during the [2020-2021] school year. While these efforts have help connect individual families and households, they highlight that by default the internet is not available to all residents as other utilities water, sewer, or roads.  </p>
        <p>The [X number of households] without internet subscriptions are not distributed equally across demographic and income groups. If we look by income, families and households with household income less than $20K per year are [X times more likely] to not have an internet subscription. In these communities, that is [X percent 42%?] of the households making under $20,000 that are not connected to the internet. Affordability is a clearly a significant factor in why households are disconnect as is explored further in the Affordability and Community Needs Assessment sections or this report. </p>
      </div>
    </div>
  )
}

export default Connection