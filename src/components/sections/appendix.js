import React, { useEffect, useState, useRef } from "react";

const Appendix = () => {

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
    return <div key={index} className="section-two-col-flex">
      <div className="section-half">
        <a href={citation.link}>
          <h4><span style={{fontWeight: "200"}}>{citation.author}.</span> {citation.title} <span style={{fontWeight: "200"}}>{citation.misc}.</span></h4>
        </a>
      </div>
      <div className="section-half">
        {citation.description.map(p => <p>{p}</p>)}
      </div>
    </div>
  })

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
    return <div key={index} className="section-two-col-flex">
      <div className="section-half">
        <a href={citation.link}>
          <h4><span style={{fontWeight: "200"}}>{citation.author}.</span> {citation.title} <span style={{fontWeight: "200"}}>{citation.misc}.</span></h4>
        </a>
      </div>
      <div className="section-half">
        {citation.description.map(p => <p>{p}</p>)}
      </div>
    </div>
  })


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
    return <div key={index} className="section-two-col-flex">
      <div className="section-half">
        <a href={citation.link}>
          <h4>{citation.title}</h4>
        </a>
      </div>
      <div className="section-half">
        {citation.description.map(p => <p>{p}</p>)}
      </div>
    </div>
  })


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
    return <div key={index} className="section-two-col-flex">
      <div className="section-half">
        <a href={citation.link}>
          <h4>{citation.title}</h4>
        </a>
      </div>
      <div className="section-half">
        {citation.description.map(p => <p>{p}</p>)}
      </div>
    </div>
  })

  const planSources = [
    {
      title: "Long Beach Digital Access Plan",
      link: "https://longbeach.gov/globalassets/ti/media-library/documents/digital-inclusion/long-beach-digital-inclusion-roadmap-final-june-2021",
      description: [
        "The Long Beach Digital Access Plan provides findings from a community survey of needs, as well as a Digital Inclusion Roadmap developed in partnership with stakeholder groups. The plan uses frameworks such as a digital equity and inclusion lens, a collective impact approach, and the spectrum of community engagement (inform, consult, involve, collaborate, empower) to shape community prioritized strategies for digital access. Key recommendations from community engagement include funding low cost or free internet services and devices, offering ESL and literacy programming, funding a digital inclusion consumer advocate position and hotline, providing education about internet security, offering free public Wi-Fi, developing a network of public charging stations, and providing City-funded community computer labs and printing centers."
      ]
    },
    {
      title: "New York City Internet Master Plan",
      link: "https://www1.nyc.gov/assets/cto/downloads/internet-master-plan/NYC_IMP_1.7.20_FINAL-2.pdf",
      description: [
        "The New York City Internet Master Plan lays out a roadmap for universal broadband throughout the five boroughs. This plan is supported by data and analysis of current broadband access and connectivity in New York City, with an emphasis on New Yorkers who do not use both a mobile connection and a home connection. The plan also highlights the correlation between maps of households in poverty and internet service rates, as well as the sizable gaps in fiber infrastructure in areas such as Brooklyn and Queens. The universal broadband plan calls for a built out open access fiber optic infrastructure reaching nearly every street intersection with an aggregation point in every neighborhood. It is proposed that the fiber network be overlaid with a neutral radio access network so that mobile wireless service will be available throughout every neighborhood. The document includes a thorough economic impact analysis of universal broadband, and estimates the planned infrastructure build out to cost $2.1 billion."
      ]
    }
  ]

  const planCitations = planSources.map((citation, index) => {
    return <div key={index} className="section-two-col-flex">
      <div className="section-half">
        <a href={citation.link}>
          <h4>{citation.title}</h4>
        </a>
      </div>
      <div className="section-half">
        {citation.description.map(p => <p>{p}</p>)}
      </div>
    </div>
  })

  const litSources = [
    {
      title: "Model A: Municipal Owned and Operated",
      link: "",
      description: [
        "Municipally Owned & Operated, Single ISP",
        "In this model, the municipality owns and operates the network itself. The municipality holds total responsibility for all aspects for the network and its operation. Therefore, a municipally owned and operated network, single ISP, involves the highest level of operating and financial risk, and the municipality assumes the fixed costs of operating the network. User subscription fees may decrease of even offset high costs. This model can be successful when the incumbent operators have a monopoly status, high prices, poor infrastructure, slow speeds, or a negative reputation. However, the municipality needs a thorough understanding of the business model in order to operate a municipal network of this kind. Most municipalities are inexperienced in being internet service providers and may struggle to be competitive in the market. They may also face an insufficient number of customers signing up for service, or incumbent providers raising the stakes. In general, models that allow for a single ISP does not significantly expand choice or competition. Additionally, very few municipalities have been successful in deploying this model. Examples include Sandy, Oregon and Monmouth, Oregon.",
        "Municipal Electrical Utility Owned & Operated, Single ISP",
        "Another option for a municipal owned and operated model is the municipal electric utility owned and operated, single ISP model. This option is the most successful of the models using a single ISP approach. This is often due to the established reputation of the electric utility in the community, as well as the utility’s ability to provide financial, customer service and engineering expertise for the network. When municipalities pursue this option, the municipal electrical utility owns and operates the network and is also the sole service provider on the network. Again, a single ISP does not significantly expand choice, and the municipality/electrical utility is still vulnerable to the incumbent raising the stakes. Additionally, although the electric utility provides some expertise, knowledge of network operations will still need to be enhanced or developed. Examples of this option include Chattanooga, Tennessee and Longmont, Colorado."
      ]
    },
    {
      title: "Model B: Open Access",
      link: "",
      description: [
        "In an open access model, the network owner provides non discriminatory, transparent pricing for service providers to access the network. Ultimately, the goal of an open access model is market competition. Open access models increase consumer choice, but the operation of an open access network is more complex than operating a single ISP network due to the need for human management of network tasks.",
        "Manual Open Access",
        "In a manual open access model, the network is lit end to end. This means that the network operator places and controls the electronics at both ends of the networks. Manuel open access allows users to switch service providers by requesting so from a web portal. This process may appear to be automated, but the network provisioning is not automated. UTOPIA is an example of a manual open access network.",
        "Automated Open Access",
        "In an automated open access model, the network operator places electronics at both ends of the network, and subscribers can dynamically select service providers in real-time. The automated provisioning creates a marketplace for services which includes ISP’s and private networks for other services. The ability to switch service providers on demand increases choice and competition. An automated open access model is also able to provide local network resilience via local communications if connections over the middle mile are down. The only municipality with full implementation operating today is Ammon, Idaho, yet Quincy, Massachusetts is currently exploring this model.",
        "Cooperative Owned & Operated, Open Access ISP",
        "In this model, a fiber-optic infrastructure cooperative owns and operates the network using an open access model. As subscribers to the network are the owners of the infrastructure, there is local control over infrastructure. This model faces more difficulty obtaining financing because the cooperative has no assets at the beginning of the project. Additionally, if financing can be obtained, costs will be higher than a town-sponsored project.  "
      ]
    },
    {
      title: "Model C: Municipally Owned Network Operated by a Private Partner or Contractor",
      link: "",
      description: [
        "In this model, the municipality partners with an existing service provider who becomes the primary provider of network services. Once the contract is in place between the municipality and the network operator, the private entity accepts most of the risk in running the business in exchange for increased control. There are pathways that can be created by the municipality in order to mitigate the risk of a partner’s non-performance, such as imposing frequent negotiation, or making payment contingent on certain successes and failures. If a partner only provides one type of service, another ISP could support other types of customers on the network. In some but not all cases the operating partner also has some responsibility for capital investment or deployment. Although in the model a private operator may be able to shield the municipality from some of the risk of high operating costs or low revenue, these risks still exist."
      ]
    },
    {
      title: "Model D: A Municipality “Anchoring” a Privately-Owned and Operated Network ",
      link: "",
      description: [
        "In this model, the municipality partners with an existing service provider who builds, extends, or delivers service over a network. The provider owns and operates the network itself. In exchange for the operator agreeing (under contract) to build facilities or deliver services to meet the goals of municipalities, the municipality agrees to guarantee a certain amount of revenue to the private operator over the life of the agreement. The city is not directly exposed to the operating costs of the network. The ongoing financial obligation for the municipality is generally converted into a fixed (or at least maximum) obligation to make payments to the network owner and operator. A well written contract is important in this model, as partner agreements where the private partner owns the infrastructure tend to be long-term agreements with fewer opportunities for re-negotiation due to the fact that the partner owns the asset. Overall, this model is designed to reduce uncertainty within the municipality about what the future costs will be. With a long-term contract, there is a risk that interests of the parties may drift apart.",
        "Leverett—Municipal Light Plant Example",
        "Ownership",
        "The town owns the underlying network infrastructure. MBI owns the middle mile assets which run to towns “anchor institutions”. Verizon and Eversource uses their own poles to mount fiber. MLP is licensed by the utilities to use the poles under a lease agreement.",
        "Construction",
        "The town of Leverett connected all premises in town to the network as part of the initial capital outlay and network construction, whether or not those premise owners had signed up for service. This allowed the town to spread the high fixed costs over a wider group of premises.",
        "Costs",
        "Project costs were funded by MBI grants, pre-subscription revenue, and a general obligation bond. Annual project related costs are funded by Leverett taxpayers. Annual operating and maintenance costs are funded by MLP Fees from LeverettNet customers. Because the network is financed by general revenue bonds, its solvency is not dependent on the number or subscribers. It is important to note that political leadership in the town convinced residents to approve a property tax increase in order to pay for the network.",
        "Operation",
        "LeverettNet is operated under the telecom authority of the Leverett Municipal Light Plant, which contracts with third parties for Network Operator, Internet Service Provider (ISP), and maintenance functions. LeverettNet provides symmetrical 1 Gbps Active Ethernet connectivity between each subscriber location and the Internet Point of Presence. LeverettNet connects from the Point of Presence to the ISP at 2 Gbps, via the MBI “middle mile” network. All premises in town are connected using the fiber-to-home network, but not all residents subscribe to the service.",
        "The Municipal Light Plant created by the town is the custodian of the network. The MLP has a separate budget. A local ISP, Crocker Communications, provides data and voice services with a single on gigabit internet service tier. Holyoke Gas & Electric Telecom providers network operation services. Master Limited Partnership, created by the town with a separate budget, is responsible for overall network operations which are outsourced to HG&E Telecom. Master Limited Partnership also assumes the financial risk of operations.",
        "Contractual Arrangements for Pre-construction and Construction Phases",
        "The town of Leverett entered contracts with HG&E, Millennial Communications Group, Homeowners, and Eversource and Verizon for pre-construction and construction phases. The contract with HG&E is a project management services agreement which defines HG&E’s responsibilities as the project manager for the development of LeverettNet including bidding, construction phases, POP design, and make-ready oversight. With Millennial Communications Group (MCG), the town entered a construction agreement that defines MCG’s responsibilities for network design to households, drops and ONT installation, make-ready oversight, and network equipment and fiber construction. With homeowners, there is a right of entry agreement that authorizes the MLP to install and maintain network equipment on the premises. The town and Eversource and Verizon have a pole attachment agreement which governs the MLP, Verizon, and Eversource’s responsibilities for pre-construction inspection and make-ready work for pole attachments.",
        "Contractual Arrangements for Operations",
        "For operations, the MLP has a FTTH operator services agreement with HG&E, defining HG&E’s responsibilities for network connectivity to the ISP, and monitoring and maintaining network equipment in PoPs, middle-mile to ISP, CPEs and ONTs. HG&E also has a middle-mile access agreement with MBI. The MLP also has an maintenance agreement with local electricians. There is also a communications services agreement, which is the master ISP contract with OTT Communications, which define’ s OTT’s responsibilities (Crocker Communications was the ISP during the construction phase. OTT communications is the current ISP). OTT Communications also has an ISP contract with subscribers."
      ]
    },
  ]

  const litCitations = litSources.map((citation, index) => {
    return <div key={index} className="section-two-col-flex">
      <div className="section-half">
        {/* <a href={citation.link}> */}
          <h4>{citation.title}</h4>
        {/* </a> */}
      </div>
      <div className="section-half">
        {citation.description.map(p => <p>{p}</p>)}
      </div>
    </div>
  })


  return (
    <div>
      <div className="section">
        <h2>Appendix</h2>
        <h3>Online Articles & Blog Posts</h3>
        {onlineCitations}
      </div>
      <div className="section">
        <h3>Research Articles</h3>
        {researchCitations}
      </div>
      <div className="section">
        <h3>Maps/Data</h3>
        {mapCitations}
      </div>
      <div className="section">
        <h3>Reports</h3>
        {reportCitations}
      </div>
      <div className="section">
        <h3>Reports</h3>
        {planCitations}
      </div>
      <div className="section-bottom">
        <h3>Municipal Models Draft Literature Review </h3>
        {litCitations}
      </div>
    </div>
  )
}

export default Appendix