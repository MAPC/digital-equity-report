import React from "react";
import whynot from "../../images/thumbnails/if_not_why_not.png";
import fiberlines from "../../images/thumbnails/fibermap.png";
import comms from "../../images/thumbnails/comms_at_a_glance.png";
import without from "../../images/thumbnails/hh_without_internet.png";
import smartphone from "../../images/thumbnails/hh_smartphone.png";
import comp from "../../images/thumbnails/hh_without_comp.png";
import providercosts from "../../images/thumbnails/provider_costs.png";
import mlab from "../../images/thumbnails/mlab.png";
import microsoft from "../../images/thumbnails/microsoft.png";
import ebb from "../../images/thumbnails/ebb.png";
import providercoverage from "../../images/thumbnails/providercoverage.png";
import homefiber from "../../images/thumbnails/homefiber.png";
import adoption from "../../images/thumbnails/survey_adoption.png";
import current_isp from "../../images/thumbnails/current_isp.png";
import affordability from "../../images/thumbnails/survey_affordability.png";
import reliability from "../../images/thumbnails/survey_reliability.png";
import quality from "../../images/thumbnails/quality.png";
import confidence from "../../images/thumbnails/confidence_age.png";
import local from "../../images/thumbnails/local_resource.png";
import learn from "../../images/thumbnails/learn_more.png";
import access from "../../images/thumbnails/comp_access.png";
import purchase from "../../images/thumbnails/comp_purchase.png";
import router from "../../images/thumbnails/router.png";

const Tableaus = () => {
  const tableausSources = [
    {
      title: "Survey Data: Internet Subscription",
      link: "https://public.tableau.com/views/Ifnotwhynot_16491332923730/Ifnotwhynot?:retry=yes&:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: whynot,
    },
    {
      title: "Proximity to Comcast and RCN Fiber Map",
      link: "",
      thumbnail: fiberlines,
    },
    {
      title: "Communities at a Glance Viz",
      link: "https://public.tableau.com/views/CommunitiesataGlance_16491319836230/Dashboard1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: comms,
    },
    {
      title: "Census % of Households Without Internet",
      link: "https://public.tableau.com/views/ACSPercentofHouseholdswithoutInternet/U_S_CensusQuestions?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: without,
    },
    {
      title: "Census % of Households with Smartphone Only",
      link: "https://public.tableau.com/views/ACSPercentofHouseholdswithSmartphoneOnly/U_S_CensusQuestions?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: smartphone,
    },
    {
      title: "Census % of Household With No Computer",
      link: "https://public.tableau.com/views/ACSPercentofHouseholdswithNoComputer/U_S_CensusQuestions?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: comp,
    },
    {
      title: "Advertised Provider Costs",
      link: "https://public.tableau.com/views/ProviderCosts-Everett/bars?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: providercosts,
    },
    {
      title: "Mlab Speed 25/3 Split",
      link: "https://public.tableau.com/views/ProviderBroadband_16472866665260/Story1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: mlab,
    },
    {
      title: "Microsoft Speed Tests",
      link: "https://public.tableau.com/views/MicrosoftDataPercentofhouseholdswithInternetaccessaccessingpoorspeeds/Dashboard1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: microsoft,
    },
    {
      title: "EBB/ACP Enrollment",
      link: "https://public.tableau.com/views/ACPEnrollmentEligiblePopulation_16498716865770/Dashboard1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: ebb,
    },
    {
      title: "FCC Form477: Reported Provider Coverage",
      link: "https://mapc.github.io/fcc-map/",
      thumbnail: providercoverage,
    },
    {
      title: "FCC Form477: Map of Fiber-connected Blocks",
      link: "",
      thumbnail: homefiber,
    },
    {
      title: "Survey Data: Adoption",
      link: "https://public.tableau.com/views/QuestionsAboutInternetConnection_16509003934000/Connection?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: adoption,
    },
    {
      title: "Survey Data: ISP Breakdown",
      link: "https://public.tableau.com/views/DigitalEquitySurveyISPBreakdown/ISPBreakdown?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: current_isp,
    },
    {
      title: "Survey Data: Affordability by Provider",
      link: "https://public.tableau.com/views/AffordabilityByProvider_16509010643700/AffordabilitybyProvider?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: affordability,
    },
    {
      title: "Survey Data: Reliability",
      link: "https://public.tableau.com/views/AffordabilityByProvider_16509010643700/Reliability?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: reliability,
    },
    {
      title: "Survey Data: Use vs. Quality",
      link: "https://public.tableau.com/views/DigitalEquitySurveyUsevs_Quality/Dashboard1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: quality,
    },
    {
      title: "Survey Data: Confidence by Age",
      link: "https://public.tableau.com/views/DigitalEquitySurveyUsevs_Quality/Dashboard1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: confidence,
    },
    {
      title: "Survey Data: Local Resource",
      link: "https://public.tableau.com/views/DigitalEquitySurveyLocalResource/LocalResource?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: local,
    },
    {
      title: "Survey Data: Literacy",
      link: "https://public.tableau.com/views/DigitalEquitySurveyLiteracyLearnAbout/Sheet1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: learn,
    },
    {
      title: "Survey Data: Device Access",
      link: "https://public.tableau.com/views/DigitalEquitySurveyDeviceAccess/DeviceAccess?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: access,
    },
    {
      title: "Survey Data: Device Purchase",
      link: "https://public.tableau.com/views/DigitalEquitySurveyDevicePurchase/DevicePurchase?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: purchase,
    },
    {
      title: "Survey Data: Router",
      link: "https://public.tableau.com/views/DigitalEquitySurveyRouter/Router_1?:embed=y&:display_count=n&:origin=viz_share_link",
      thumbnail: router,
    },
  ];

  const tableausCitations = tableausSources.map((citation, index) => {
    return (
      <div key={index}>
        <img className="citation__thumbnail" src={citation.thumbnail} />
        <a href={citation.link} target="blank">
          <h4 className="citation__link citation__link-below">
            {citation.title}
          </h4>
        </a>
      </div>
    );
  });

  return (
    <div>
      <div className="section-two-col">{tableausCitations}</div>
    </div>
  );
};

export default Tableaus;
