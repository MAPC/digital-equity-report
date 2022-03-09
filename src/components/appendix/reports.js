import React from "react";

const Reports = () => {

  const reportSources = [
    {
      title: "FCC Measuring Fixed Broadband—Tenth Report",
      link: "https://www.fcc.gov/reports-research/reports/measuring-broadband-america/measuring-fixed-broadband-tenth-report",
      description: [
        "FCC’s Measuring Fixed Broadband report in the 10th report of its’ kind. The report draws conclusions from reporting from Internet Service Providers as well as FCC Form 477 data. This report tracks the top Internet Service Providers in the country, and evaluates both their advertised speeds and their performance. The report also evaluates latency and packet loss by ISP. In general, ISPs are meeting or exceeding advertised speeds. Specifically, relatively few cable subscribers fell short of advertised download speeds. The report highlights a need for constant change in methodology as the internet and internet service changes continuously. The report also notes that “A key difference between the fiber venders and other technology venders is that (with the exception of Cincinnati Bell), most fiber venders advertise generally symmetric upload and download speeds”. This resource is useful in comparing ISPs, types of service (DSL, cable, fiber), explaining and analyzing latency, packet loss, advertised speed vs. actual speed, comparing trends and changes year to year, and the contrast of speed that comes with fiber service. "
      ]
    },
    {
      title: "FCC Digital Divide Report",
      link: "https://www.fcc.gov/document/fcc-annual-broadband-report-shows-digital-divide-rapidly-closing",
      description: [
        "This report was crafted for the federal commission and is produced yearly. The report is intended to evaluate “progress in the deployment of advanced telecommunications capability and whether that progress is occurring in a reasonable and timely fashion”. The FCC uses a five-year time frame analysis for this product. The report explicitly does not cover certain benchmarks such as latency and affordability and stands by a 25/3 Mbps metric for broadband internet. The FCC Digital Divide Report uses FCC form 477 data to produce charts and conclusions about the landscape of broadband access in the country. Examples of charts include broadband by income level (determined by poverty rate, median household income), broadband by land type (urban, rural, tribal), speed tiers of broadband, 4G LTE deployment and fixed terrestrial 25/3. The report also outlines all the commission’s policy and procedure advancements and initiatives. After analyzing the included data, it is concluded that “as the Commission has before, that advanced telecommunications capability is being deployed to all Americans in a reasonable and timely fashion” (53). Furthermore, “We are confident that the Commission’s policymaking efforts over the last few years have placed the Commission on the proper course and are encouraging strong progress in deploying advanced telecommunications capability to more and more Americans” (55). This report provides a thorough analysis of FCC Form 477 data, refreshed yearly, therefore, it is current. Also included is an updated narrative from the FCC, as well as policy and procedure tied to the statistical landscape. There is also an acknowledgement of schools and classroom broadband, with a mention of Education SuperHighway."
      ]
    },
    {
      title: "Worcester Report",
      link: "https://www.wrrb.org/wp-content/uploads/2020/07/Broadening-Broadband-FINAL.pdf",
      description: [
        "Worcester’s “Considering Municipal Ownership as a Solution to Worcester’s Internet Challenges” was produced by the Worcester Regional Research Bureau in July of 2020. This report summarizes the need for a municipal broadband network in Worcester, the existing and proposed models for such a network, general statements about the feasibility of such an initiative, and next steps. The report uses Open Street Map and ACS data to produce GIS maps about the state of the internet in Worcester. The report generally finds that the benefits of such a model are numerous and lasting, but it would require an infrastructure overhaul and various cost burdens. Highlights of this report include the evidence pointing to low residential download speeds and an expensive monopoly on service in Worcester, the inclusion of Shrewsbury, Braintree, Norwood and Concord’s municipal owned networks, an in-depth picture of business models for municipal owned networks, funding models, educational impact, and an explanation of the ways to build such a network."
      ]
    },
    {
      title: "Cambridge Digital Equity Study",
      link: "https://www.cambridgema.gov/-/media/Files/citymanagersoffice/cityofcambridgedigitalequitystudymarch2021.pdf",
      description: [
        "The goal of the Cambridge Digital Equity study, produced in March 2021, is to understand the range of problems affecting residents’ ability to obtain and effectively use broadband, and suggest correlating solutions. The study provides recommendations based on data from a citywide mail survey, a Cambridge Housing Authority survey, hourly speed tests at homes of Comcast customers, and interviews with residents, stakeholders, and experts and practitioners from other cities. The citywide survey provides evidence of general satisfaction with home broadband service, and dissatisfaction with the cost of services. The CHA survey calls attention to an expressed need for access to internet service and devices. Overall, the Cambridge Digital Equity study highlights the need for user education campaigns within the city. Key recommendations include expanding the city’s $50,000 pilot program into a Digital Equity Fund, establishing a digital skills training corps, conducting a municipal broadband feasibility study, and expanding public Wi-Fi."
      ]
    },
    {
      title: "Somerville Report on Expanding Internet Access ",
      link: "https://www.somervillema.gov/sites/default/files/recommendations-for-expanding-internet-access-and-supporting-net-neutrality.pdf",
      description: [
        "The Somerville Report on Expanding Internet Access was created at the end of a year of the Somerville Internet Access Task Force’s meetings to discuss the challenges and opportunities to improve broadband connectivity within the municipality. The report begins with an acknowledgement of the existing problems with internet access in Somerville, adding net neutrality as a key focus area alongside other common problem factors. In the summary portion, municipal electrical cooperatives and fiber networks are first highlighted. The beginning of the report also includes an expansive vocabulary index. The report provides recommendations for encouraging a competitive marketplace and net neutrality, increasing access and technical literacy, policy and new role recommendations, as well as efforts to show potential retail internet service providers that Somerville residents are interested in net neutrality. The report provides case studies and multiple options for last mile access technologies, ownership models for the access network, and policy options, which include public and community Wi-Fi.  Where this report focuses more on net neutrality than other, similar, reports, it provides expansive, well-supported recommendations for last mile technologies, fiber buildouts, policy options and public access Wi-Fi. Highlights include sections on municipally owned and operated broadband, municipally-owned but privately-operated network, public-private partnership, and privately-owned networks with conditions set by municipality. This report can be used to provide case studies, vocabulary and concept explanations, and progressive suggestions for digital access."
      ]
    }
  ]

  const reportCitations = reportSources.map((citation, index) => {
    return <div key={index} className="section">
        <a href={citation.link}>
          <h4>{citation.title}</h4>
        </a>
        {citation.description.map(p => <p>{p}</p>)}
    </div>
  })

  return (
    <div>
      {reportCitations}
    </div>
  )
}

export default Reports