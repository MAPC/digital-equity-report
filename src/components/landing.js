import React from "react";
import Header from "./modules/header";
import Footer2 from "./modules/footer";
import { Footer } from "mapc-design-system";

const Landing = () => {
  return (
    <div>
      <div className="landing-bg">
        <div className="landing-overlay padding">
          <div className="landing-copy">
            <Header />
            <h1>Digital Access for all is <span>Achievable.</span></h1>
            <div className="border-left">
              <h3>A collection of resources and reports.</h3>
              <p className="section-half">Equity is the condition of fair and just inclusion into a society. Equity will exist when those who have been most marginalized have equal access to opportunities, power, participation and resources and all have avenues to safe, healthy, productive, and fulfilling lives. As the COVID pandemic has highlighted, being able to leverage a digital internet connection is an essential utility that enables access to opportunities, power, and full participation in society. MAPC conducted a comprehensive planning process with the cities of Chelsea, Everett, and Revere to produce this report. This report outlines findings and sets a path forward for these municipalities, and others, to improve the economic, health, and social well-being of all community residents through digital connectivity.</p>
            </div>
          </div>
        </div>
        {/* <Footer backgroundColor="#155756" /> */}
        <Footer2 />
      </div>
    </div>
  )
}

export default Landing