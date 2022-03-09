import React from "react";

const Online = () => {


  const onlineSources = [
    {
      author: "Ben Forman",
      title: "\“Gateway Cities at the Center of the digital divide in Massachusetts.\”",
      misc: "MassINC",
      link: "https://massinc.org/2020/05/05/gateway-cities-at-the-center-of-the-digital-divide-in-massachusetts/",
      description: [
        "Ben Forman, a Research Director at the Massachusetts Institute for a New Commonwealth (MassINC), published “Gateway Cities at the Center of the digital divide in Massachusetts” in May of 2020. MassINC is a nonprofit think tank and news source in the state. Forman’s article provides an overview and visualization of the Census Bureau data on internet and device access for Gateway Cities in the state. The articles provides maps and key findings from this data that are filtered so that the reader can best understand the digital divide as it pertains to education for students in these cities.",
        "MassINC’s analysis of the Census data highlights the often underestimated demand for computers provided by this data set that comes from the Census. This is due to the count of households instead of a count of students by the Census. The article provides support for programs within the state that provide computers, internet access, and capacity building in the digital space. Key facts include that nearly 30,000 Gateway City households with school-age children at home do not have a laptop or desktop, more than 23,000 Gateway City households with school-age children do not have internet access, and that while Gateway Cities make up one-quarter of all households in the state, they account for more than 40 percent of households with no computers. This article is best used to support efforts towards sustainable device and internet access in the state, starting with communities of the highest need."
      ]
    },
    {
      author: "Christopher Terry",
      title: "\“3500 Days of the National Broadband Plan.\”",
      misc: "Benton Institute for Broadband & Society",
      link: "https://www.benton.org/blog/3500-days-national-broadband-plan",
      description: [
        "The Benton Institute for Broadband & Society is a non-partisan daily digest providing news related to universal broadband, with the goal do bringing “open, affordable, high-capacity broadband to all people in the U.S. to ensure a thriving democracy”. This article was written by scholar Christopher Terry, and published on October 15, 2019. This article from the Benton Institute provides an assessment of the National Broadband Plan from the FCC as it approaches the ten year mark. Terry concludes that while the FCC has continued to try different approaches to assist broadband development, the ambitious goals of the National Broadband Plan have not been met. Therefore, it is suggested that a new plan be made, one with “realistic, incremental goals backed by the necessary subsidies, and a willingness to admit that the government has taken the lead on every communication system since the creation of the post office”.",
        "The original goals of the FCC universal broadband deployment were: Healthcare, Education, Energy and the Environment, Economic Opportunity, Government Performance and Civic Engagement and Public Safety and Homeland Security. The article includes an analysis of the approach of the FCC: “While nominally continuing to favor a marketplace approach, throughout 2019 the FCC has made a number of rolling announcements of block subsidies to be used over a 10-year period to assist in broadband deployment”. The article also pulls out key facts such as 26 percent of Americans in rural areas and 32 percent of Americans in Tribal lands lack access to 25/3, fixed broadband. This article overall supports the creation of a new National Broadband Plan, and provides insight into the guiding principles of the FCC’s broadband initiatives from the past decade."
      ]
    },
    {
      author: "John B. Horrigan",
      title: "“Focusing on Affordability.”",
      misc: "Benton Institute for Broadband & Society",
      link: "https://www.benton.org/blog/focusing-affordability",
      description: [
        "The Benton Institute for Broadband & Society is a non-partisan daily digest providing news related to universal broadband, with the goal do bringing “open, affordable, high-capacity broadband to all people in the U.S. to ensure a thriving democracy”. This article was written by John B. Horrigan in April of 2021.",
        "As the Biden Administration has made closing the digital divide a high priority, this article highlights two types of policy tools often used for this effort. The first is promoting competition by investing in new infrastructure and creating more provider options. The second policy tool mentioned is providing subsidies, as research shows that affordability is the number one reason households do not subscribe to broadband. In this article, Horrigan analyzes the effectiveness of the two policy tools within the context of the reality of broadband access in the country. Horrigan also points out the correlation between social vulnerability and broadband: “Both poverty and residential segregation loom large in having strong correlations with the level of household broadband adoption in cities, ‘You’ll win more bets on predicting a city’s broadband adoption rate if you know its poverty rate than if you know only whether it has a fiber network competing with cable’”. Overall, Horrigan concludes that relying on competition alone may still leave broadband access out of reach and insufficient with high prices. The solution proposed involves focusing on subsidies, building off of existing support programs, and speeding up the time horizon of broadband access."
      ]
    },
  ]

  const onlineCitations = onlineSources.map((citation, index) => {
    return <div key={index} className="section">
        <a href={citation.link}>
          <h4><span style={{fontWeight: "200"}}>{citation.author}.</span> {citation.title} <span style={{fontWeight: "200"}}>{citation.misc}.</span></h4>
        </a>
        {citation.description.map(p => <p>{p}</p>)}
    </div>
  })

  return (
    <div>
      {onlineCitations}
    </div>
  )
}

export default Online