import React from "react";

const Maps = () => {


  const mapSources = [
    {
      title: "South Carolina Digital Drive",
      link: "https://www.scdigitaldrive.com/",
      description: [
        "The South Caroline Digital Drive is produced by the South Carolina Office of Regulatory Staff, and provides county maps of the “Best Available Technology” and “Areas of Need”. The Best Available Technology map for each county shows the best available technology across all ISPs in a given census block. These technologies are ranked from best to worst in the legend. The Areas of Need map showcases the speed tiers in the area, as well as the density of unserved households. These maps are constructed with a blend of FCC Form 477 augmented by Speedtest Intelligence data. The goal of the work is stated as “Dedicated to ensuring that every home has access to affordable, high-speed Internet by the end of 2026”. The maps created by county are free to download and are made to use in presentations. This organization uses Ookla’s Speedtest data, therefore, they link and encourage those who visit the website to perform their own speed test to supplement their dataset."
      ]
    },
    {
      title: "Microsoft Speed Test Map",
      link: "https://broadbandusa.maps.arcgis.com/apps/webappviewer/index.html?id=ba2dcd585f5e43cba41b7c1ebf2a43d0",
      description: [
        "The Indicators of Broadband Need map was created by the Unites States Department of Commerce, National Telecommunications and Information Administration (NTIA). This goal of this mapping effort is to combine different datasets into layers to show information on the availability of broadband in the United States. The layers in this map include the U.S. Census (American Community Survey), Ookla Speedtest results, Measurement Lab (M-Lab) speed test results, Microsoft, the Federal Communications Commission (FCC), the Department of Education and internal NTIA data resources. The data is displayed at county, census tract, and census block level. This resource clarifies which datasets are available within a geographic area, although, it does not provide a clean narrative analysis of the datasets in conjunction with one another.  This mapping page mentions that “spreadsheets containing the corresponding county, census tract and census block level data used in the map are available for download in CSV spreadsheet format”."
      ]
    },
    {
      title: "M-Lab Community Meeting Slides",
      link: "https://docs.google.com/presentation/d/1fV3IYUUI-ea3O9st8YPDZf_8HTzgg5rn2BcwJMPVefo/edit#slide=id.ga80c6cea1b_33_24",
      description: [
        "M-Lab was founded in 2009 by New America’s Open Technology Institute, the PlanetLab Consortium, Google and a group of academic researchers. M-Lab is an open source project that provides an open measurement platform for network performance and hosts an open Internet performance dataset. These slides were presented at M-Lab November and December 2020 Community Calls. This resource starts by defining useful terms (bandwidth vs. latency, on-net vs. off-net, link capacity vs. path capacity, single-stream vs. multi-steam, bulk transport capacity). Next, the slides compare broadband data sources (M-Lab NDT, 3rd Part M-Lab NDT Integrations, Form 477 Fixed and Ookla’s Speedtest). This slide deck furthermore includes “Factoring Influences and Analysis Pitfalls” when analyzing M-Lab datasets. This resource is helpful in supporting a vocabulary index, an understanding of the available datasets, as well as an analysis of the M-Lab data itself. The final section of the slide deck is useful in aiding the researcher analyze M-Lab data, and where error may exist within the dataset. Specifically, it mentions that one should account for beacons that test frequently, as the data may be dominated by these results. Also, rural zip codes and census tracts may only have 1 or 2 tests per month."
      ]
    },
  ]

  const mapCitations = mapSources.map((citation, index) => {
    return <div key={index} className="section">
        <a href={citation.link}>
          <h4 className="citation__link">{citation.title}</h4>
        </a>
        {citation.description.map(p => <p>{p}</p>)}
    </div>
  })

  return (
    <div>
      {mapCitations}
    </div>
  )
}

export default Maps