import React from "react";
import Header from "./modules/header";
import Footer from "./modules/footer";
import { Link } from "gatsby";
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

const Landing = () => {
  return (
    <div>
      <ParallaxBanner
        layers={[{ image: '/public/background.jpg', speed: -20 }]}
        // layers={[{ image: 'https://source.unsplash.com/gTyHuIDjUH0', speed: -20 }]}
        style={{height: "auto", minHeight: "180vh"}}
      >
        <div style={{position: "absolute"}}>
          <div className="padding landing-overlay">
            <div className="landing-copy">
              <Header />
              <div className="title-container">
                <h1>Digital Equity Plan:<br/><span className="highlight">Everett, Chelsea, & Revere</span></h1>
              </div>
              <div className="body-container">
                <h3>Digital Equity for all is Achievable</h3>
                <p className="section-half">Equity is the condition of fair and just inclusion into a society. Equity will exist when those who have been most marginalized have equal access to opportunities, power, participation and resources and all have avenues to safe, healthy, productive, and fulfilling lives. As the COVID pandemic has highlighted, being able to leverage a digital internet connection is an essential utility that enables access to opportunities, power, and full participation in society. MAPC conducted a comprehensive planning process with the cities of Chelsea, Everett, and Revere to produce this report. This report outlines findings and sets a path forward for these municipalities, and others, to improve the economic, health, and social well-being of all community residents through digital connectivity.</p>
              </div>
              <div className="call-to-action-container">
                <Link to="/report/" className="button-link"><button className="button">Read the Report</button></Link>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <Footer />

    </div>

    // <div>
      // <div className="landing-bg">
      //   <div className="landing-overlay padding">
      //     <div className="landing-copy">
      //       <Header />
      //       <div className="title-container">
      //         <h1>Digital Equity Plan:<br/><span className="highlight">Everett, Chelsea, & Revere</span></h1>
      //       </div>
      //       <div className="body-container">
      //         <h3>Digital Equity for all is Achievable</h3>
      //         <p className="section-half">Equity is the condition of fair and just inclusion into a society. Equity will exist when those who have been most marginalized have equal access to opportunities, power, participation and resources and all have avenues to safe, healthy, productive, and fulfilling lives. As the COVID pandemic has highlighted, being able to leverage a digital internet connection is an essential utility that enables access to opportunities, power, and full participation in society. MAPC conducted a comprehensive planning process with the cities of Chelsea, Everett, and Revere to produce this report. This report outlines findings and sets a path forward for these municipalities, and others, to improve the economic, health, and social well-being of all community residents through digital connectivity.</p>
      //       </div>
      //       <div className="call-to-action-container">
      //         <Link to="/report/" className="button-link"><button className="button">Read the Report</button></Link>
      //       </div>
      //     </div>
      //   </div>
      //   <Footer />
      // </div>
    // </div>
  )
}

export default Landing