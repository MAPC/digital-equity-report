import React from "react";
import chart1 from "../../images/fiber_200ft_combined_final_2022-03-31.jpg";
import chart2 from "../../images/residential_fiber_blocks.png";
import ImageModal from "../modules/ImageModal";

const Infrastructure = () => {
  return (
    <div>
      <div className="section">
        <p>
          Another source of data is the required federal self-reporting done by
          internet service providers. The FCC requires that twice a ISPs
          self-report service coverage online through{" "}
          <a href="https://www.fcc.gov/economics-analytics/industry-analysis-division/form-477-resources">
            Form 477
          </a>
          . The data from these filings gives one picture of internet connection
          across the country. While the data is open and available, it can
          exaggerate the available service area given data and reporting
          limitations.{" "}
        </p>
        <p>
          The data is reported at a census block level. A census block is a
          federal unit of geography that can contain clusters of many buildings.
          Some census blocks in Everett, Chelsea, and Revere contain more than
          50 residential buildings. If one address in a census block is serviced
          by an ISP, the whole census block is reported as a serviced area.
          Anecdotal evidence has shown that there are instances in which ISPs
          refuse service to households even within their service area, due to
          the cost of connecting that residence not providing an adequate return
          on investment to the ISP.{" "}
        </p>
        <p>
          Complicating the question of coverage, Form 477 is self-reported by
          providers and does not include levels of service offered. Providers
          are only asked to report the highest levels of speed (mbps download
          and upload) provided in each census block. What is not reported is the
          different service levels available, and their relative costs. The FCC
          is working to implement{" "}
          <a href="https://docs.fcc.gov/public/attachments/DOC-378983A1.pdf">
            “Broadband Nutrition Labels,”
          </a>{" "}
          but current information about speed and cost is limited to the Form
          477 data. Only the ISPs know the details of which addresses are
          served, which not served, and where the infrastructure is. This level
          of detail is not reported to the FCC, nor regularly reported by other
          state or local requirements.{" "}
        </p>
        <p>
          Form 477 data lists the available providers and what technology is
          prevalent in a given area. Comcast, RCN, Starry, and NetBlazr each
          service some portion of Everett, Chelsea and Revere. Of the 24
          reporting providers in these cities, 15 providers report they can
          provide a minimum of 100 Mbps download speeds. Those that can provide
          those speeds, use a mix of fiber, fixed wireless, and cable
          technologies. Verizon is another service provider with residential
          fiber options (FIOS) that is capable of high speeds, but Verizon does
          not report serving census blocks in Everett, Chelsea, Revere as they
          do in other parts of the MAPC region. Verizon only has legacy DSL
          technology available in these cities.{" "}
        </p>
        <p>
          The Form 477 data showing census block coverage of each provider is
          mapped here. Where the provider layers overlap, customers may have
          more options for internet service. It’s worth mentioning again that a
          provider reporting via Form 477 that it serves a given census block is
          no guarantee that all residents have or could even subscribe to that
          provider. While there are 24 providers that report to the FCC, many
          are only available to businesses or institutions, while residents in
          these three communities lack the same level of choice or competition.
          Most residents subscribe to one of the four providers included here in
          this map of provider service areas.{" "}
        </p>
        <iframe
          src="https://mapc.github.io/fcc-map/"
          width="100%"
          height="600"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
        <p className="citation">
          <a href="https://opendata.fcc.gov/Wireline/Fixed-Broadband-Deployment-Data-December-2020/hicn-aujz">
            Federal Communications Commission (FCC) Form 477.
          </a>{" "}
          Full map available <a href="https://mapc.github.io/fcc-map/">here.</a>
        </p>
        <p>
          Alongside the public infrastructure of sewer, water, and roads in
          Everett, Chelsea, and Revere private companies have run many miles of
          cables providing a connection to the internet. Unlike rural areas in
          Massachusetts and across the United States, there exists relatively
          more wiring in these urban areas to connect residents and businesses
          to the internet. This can be attributed in large part to the market
          forces driving this private installation of wiring. The desire to
          connect large amounts of customers as efficiently as possible. Large
          dense urban areas provide more potential customers per mile of
          investment.{" "}
        </p>
        <p>
          However, as we have seen in the access and service & affordability
          sections of this report, having wiring on your street does not mean
          you are able to connect of leverage that infrastructure. The type of
          wiring is also critical when discussing the investment, we
          collectively need to make to connect residents and businesses in the
          future. As the Journey through the Internet slides highlighted
          fiber-optic wiring provides a dramatic and generational advancement as
          compared to copper coaxial cables that replaced the prior copper
          telephone wiring.{" "}
        </p>
        <p>
          To understand how much of the wiring running under the streets of
          these communities was fiber as compared to copper, Everett, Chelsea,
          and Revere leveraged their Cable Franchise agreements to obtain
          line-level data that identified the network of fiber and coaxial of
          the two major residential providers Comcast and RCN.{" "}
        </p>
        <p>
          Coaxial wiring is the dominant wiring technology in place in the
          communities today. We can see this copper coaxial wiring running
          between street telephone poles, showcasing the investment cable
          companies, like Comcast and RCN, have had over the past decades. The
          wiring within homes has also relied on copper cabling for many
          decades. The standard and ubiquitous nature of this technology allowed
          cable companies across the country (Comcast here) to pivot in the
          1990’s, enabling the copper coaxial network that provided cable
          television to be leveraged to provide internet services. These
          established networks and provided them with a competitive marketplace
          advantage over potential competitors like telecom companies who did
          not have the same physical networks into people homes. It also
          naturally limited new competitors form enter the marketplace. A
          marketplace in which any new company would have to build a new network
          or “new roads” to homes. Given the lucrative nature of this industry
          companies like RCN, have enter the marketplace in the 2010’s and have
          built out new roads to homes leveraging in many places coaxial copper
          technology.{" "}
        </p>
        <p>
          Today Comcast and RCN networks do not just rely on coaxial technology,
          they also leverage fiber, in what is called a hybrid coaxial, fiber
          network. However, the copper coaxial cable is the major limiting
          factor in being able to provide faster and faster speeds and more
          reliable service. Symmetrical download and upload speeds of 100 Mbps
          are reliability achieved with coaxial cable technology. While lab
          settings or incremental advancements can help improve the speeds to
          coaxial cable wiring, its physical properties do not compare with the
          ability and potential fiber-optic cables can provide.{" "}
        </p>
        <p>
          If we look at the networks of Comcast and RCN leverage today in the
          communities, there is significantly less fiber wiring than copper
          coaxial wiring. When fiber is installed to a home or to the premises,
          that last connection from the street to home is often referred to as
          “the last mile” or as a home fiber “drop”.{" "}
          <a href="https://www.youtube.com/watch?v=qr9zjtfHR-w&ab_channel=InstituteforLocalSelf-Reliance">
            This video from ILSR
          </a>{" "}
          does a great job visualizing this process for a single-family home.
          Today that final “drop” or run of wiring is almost exclusively made
          with coaxial cable. In fact, for the main residential providers in the
          area Comcast, RCN, Starry, netBlazr, they together only report 9
          census blocks that contain an internet connection made directly via
          fiber optic lines.
        </p>
        <ImageModal source={chart2} />
        <p className="citation">
          Federal Communications Commission (FCC) Form 477.
        </p>
        <p>
          With the network maps of Comcast and RCN, obtained through the cable
          franchise agreement, a more detailed picture of the current state of
          internet infrastructure can emerge. While only a few Census blocks
          have reported fiber to the premise connections, we know that fiber is
          still essential to the hybrid fiber coaxial and fixed wireless
          networks area providers manage. Fiber is running underground or along
          streets aggregating connections form many homes and business and
          running those connections back to a central office or data exchange to
          be connected to the other parts of the internet and world. To
          communicate where the fiber and how much of this fiber is running in
          these cities, MAPC created this map below that shows the percentage of
          a census blocks within 200 feet of a fiber line from either of Comcast
          or RCN. We have added buffer of 200 feet to the fiber lines to
          identify if the provider networks today are close to premises to have
          that final run of fiber made. From that a percentage of coverage of
          census block track was calculated. The fiber lines are not ubiquitous
          in our three communities.{" "}
          <span className="bold">
            This highlights that a significant proportion of these cities is not
            currently close to fiber assets.
          </span>{" "}
        </p>
        <ImageModal source={chart1} />
        <p className="citation">
          Data provided by Comcast / RCN through Everett, Chelsea, Revere cable
          franchise agreements.
        </p>
        <p>
          A full fiber to the home network, replacing the slower coaxial lines,
          would require significant investment to achieve given the current
          state. Copper lines will cotinine to play a role as we look towards
          federal and private investment gear towards making infrastructure
          investments, including ARPA and IIJA, it is important to make
          investments in the technologies that will be needed to serve us all in
          10, 20, 30 years down the line. Just as public investments in roads,
          sewers, and highways have generational lifespans, we are now at the
          similar{" "}
        </p>
      </div>
      <div className="section">
        <h4>Cable Franchise Agreements</h4>
        <p>
          As mentioned above, fiber mapping is made possible through language in
          the cable franchise agreements municipalities have with cable
          providers that operate services within a city. This is a critical
          touchpoint between municipal governments and private internet services
          providers and many of the same cable provider companies are internet
          service providers. It’s important to note that in addition to
          broadband internet service, Comcast, RCN, and Verizon often offer
          other media services such as cable television or phone service. Cable
          television service that had once been the primary offering has
          steadily seen residents in these communities “cut the cord” to cable
          television. Department of Television and Cable subscription numbers
          for these communities have steadily declined from 10,603 Comcast cable
          television subscribers in 2011 to 7,000 in 2020. RCN also saw a
          significant loss in subscribers with a 56% drop in subscribers between
          the start of their cable television services in 2017 and 2020.{" "}
        </p>
        <p>
          Franchise agreements between internet service providers and
          municipalities have historically shaped the deployment of services. In
          addition to this agreement, permitting is another key touch point. The
          installation within that right of way, by burying cable in conduit or
          attaching to poles, companies must seek permits from city and/or
          property holder. Regulations are established by the city, state and
          federal authorities. This is not always a straightforward process, as
          municipalities may have different permitting processes, and may not be
          the owners of the infrastructure in question. Permits for installation
          of small cells on telephone poles for example, can take 30-120 days,
          depending on the request and the owner of the poles—in some cases they
          are owned by the municipalities, other times by private entities.{" "}
        </p>
      </div>
    </div>
  );
};

export default Infrastructure;
