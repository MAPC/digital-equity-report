import React from "react";

const Literature = () => {

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
    return <div key={index} className="section">
      <a href={citation.link}>
        <h4>{citation.title}</h4>
      </a>
      {citation.description.map(p => <p>{p}</p>)}
    </div>
  })

  return (
    <div>
      {litCitations}
    </div>
  )
}

export default Literature