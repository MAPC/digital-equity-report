import React from "react";

const Research = () => {
  
  const researchSources = [
    {
      author: "Monica Anderson & John B. Horrigan",
      title: "“Americans have mixed views on policies encouraging broadband adoption.”",
      misc: "Pew Research Center",
      link: "https://www.pewresearch.org/fact-tank/2017/04/10/americans-have-mixed-views-on-policies-encouraging-broadband-adoption/",
      description: [
        "The Pew Research Center is a self-described nonpartisan fact tank that conducts opinion polling, demographic research, content analysis and other data-driven research without taking policy positions. This article was written by researchers Monica Anderson and John B. Horrigan in April of 2017, and centers around the findings of a Pew Research Center survey, highlighting contrasting opinions of Americans with regards to broadband adoption. The central tension identified in this piece lies between the high percentage of the public who believes local governments should be able to build their own broadband networks, and fewer than half of Americans that think the government should provide subsidies for home broadband to lower-income Americans. The article includes an analysis of public opinion of government funded broadband subsidies based on political affiliation, race, and ethnicity, in order to better understand the finding of mixed support. Key Facts from the survey include: 70% of the public surveyed believes that local governments should be able to build their own broadband networks if existing services in the area are either too expensive or not good enough, 44% of Americans think that the government should provide subsidies to help lower-income Americans pay for high-speed internet at home, and 54% says high-speed home internet service is affordable enough that nearly every household should be able to buy service on its own. Overall, this article provides a clear analysis of an informative survey on public opinion of government involvement in broadband initiatives, specifically subsidies and municipal networks. "
      ]
    },
    {
      author: "Andrew Perrin",
      title: "“Mobile Technology and Home Broadband 2021.”",
      misc: "Pew Research Center",
      link: "https://www.pewresearch.org/internet/2021/06/03/mobile-technology-and-home-broadband-2021/",
      description: [
        "The Pew Research Center is a self-described nonpartisan fact tank that conducts opinion polling, demographic research, content analysis and other data-driven research without taking policy positions. This article was written by Researcher Andrew Perrin in June of 2021. This article produces the findings from a Pew Research Center survey of 1,502 U.S. adults, under the direction of Abt Associates. The results were weighted to be representative of the U.S. adult population. The survey highlights an increase in smartphone ownership between 2019 and 2021, difficulty that some Americans have getting online, and the reasons broadband non-adopters cite for forgoing services. The survey highlights broadband connection issues, with the conclusion that “Some 30% of adults say they often or sometimes experience problems connecting to the internet at home, including 9% who say such problems happen often”. The research also identifies some 15% of U.S. adults as “smartphone-only” internet users, as they have a smartphone, but do not have a home broadband connection. In terms of broadband non-adopters, 71% say that they are not interested in having such a connection at home. Additionally, about one-in-five adults, or 19%, of broadband non-adopters say that their most important reason for not having broadband at home is that their smartphone does everything they need to do online. Overall, this article ties respondent’s broadband non-adoption to increasing smartphone dependency, as some respondents stated that their smartphone provided their internet needs. Generally, the research explores some more nuanced understandings of households without broadband."
      ]
    },
    {
      author: "",
      title: "Leichtman Research ",
      misc: "",
      link: "https://www.leichtmanresearch.com/research-notes/",
      description: [
        "The Leichtman Research Group provides research and consulting on the impact and adoption of broadband, with studies involving surveying random samples of consumer households in the U.S. The group conducted an eighteenth annual study on the broadband industry which tracks findings from previous years, as well as an investigation of the current online universe. Unfortunately, only the Table of Contents is available on their website. Therefore, the resource analyzed in this literature review is the LRG Research Notes, 2Q 2021. The last section of the LRG Research Notes, 2Q 2021 is titled “About 1,020,000 Added Broadband in 1Q 2021. The notes go on to include key findings for the quarter, compared to the same findings from 1Q in 2020. LRG Research Notes, 2Q 2021 also provides an up-to-date table of Top Broadband Internet Providers in the U.S. From the Research Notes, it is proven that “The largest cable and wireline phone providers in the U.S. acquired about 1,020,000 net additional broadband Internet subscribers in 1Q 2021, compared to a pro forma gain of about 1,170,000 subscribers in 1Q 2020”. LRG also assesses that top broadband providers now account for around 107 million subscribers, and that these providers added over one million subscribers in the first quarter of 2021. This would be the fourth time in the past five quarters that there were more than one million net broadband additions in the US. Overall, the “Top Broadband Internet Providers in the U.S.” chart is helpful, as it provides quantitative data on the amount of subscribers for the largest cable companies and their number of subscribers."
      ]
    },
    {
      author: "Richard Jones",
      title: "“Debunking the Open Access Myths.”",
      misc: "Light Reading",
      link: "https://www.lightreading.com/gigabit/fttx/debunking-the-open-access-myths/a/d-id/720514",
      description: [
        "Light Reading is an independent digital media platform providing news, analysis and insight for the global communications networking and services industry. This article was written by Richard Jones, co-founder of Ventura Team, in January of 2016. “Debunking the Open Access Myths” provides a clear definition of open access, as there is no legal or industry standard definition of the term. The term open access is described by the author as “widely abused”. In talking about open access, Jones is speaking about the last mile, instead of the inter-city network or metro networks. Here, open access network models are defined by separating the management of the network from the supply of services by Retail Service Providers (RSP)s. Multiple models of open access networks are explored. For a fiber access network, open access is defined as “the ability for an end customer to receive and choose from multiple types of services delivered by multiple different operators simultaneously”. Jones explicitly states that “the only type of organization that can deliver is a committed, experienced and specialized Open Access operator that lives and breathes this business”. This article provides “Practical questions for potential Open Access providers”, which includes sample questions and comments on the importance of such questions for providers. This can be used as a template for municipalities, property and fiber owners.  "
      ]
    }
  ]

  const researchCitations = researchSources.map((citation, index) => {
    return <div key={index} className="section">
      <a href={citation.link}>
        <h4 className="citation__link"><span style={{fontWeight: "200"}}>{citation.author}.</span> {citation.title} <span style={{fontWeight: "200"}}>{citation.misc}.</span></h4>
      </a>
      {citation.description.map(p => <p>{p}</p>)}
    </div>
  })
  
  return (
    <div>
      {researchCitations}
    </div>
  )
}

export default Research