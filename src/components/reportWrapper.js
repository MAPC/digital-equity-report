import React, { useEffect, useState, useRef, useContext } from "react";
import Header from "./modules/header";
import ReportMenu from "./reportMenu";
import Summary from "./sections/summary";
import Process from "./sections/process";
import History from "./sections/history";
import ExistingConditions from "./sections/existingConditions";
import Assessment from "./sections/assessment";
import Actions from "./sections/actions";
import Appendix from "./sections/appendix";
import Footer from "./modules/footer";
import { PopupContext } from "./contexts/popupContext";
import { ParallaxBanner } from 'react-scroll-parallax';

const ReportWrapper = () => {

  const [tabIndex, setTabIndex] = useState(0);
  const [assessIndex, setAssessIndex] = useState(0);
  const [isActive, setActive] = useState("summary");
  const { popupState, sourceState } = useContext(PopupContext)
  const [popup, togglePopup] = popupState;
  const [popupSource, setPopupSource] = sourceState;

  const summaryRef = useRef();
  const processRef = useRef();
  const historyRef = useRef();
  const existingRef = useRef();
  const assessRef = useRef();
  const actionsRef = useRef();
  const appendixRef = useRef();
  let refs = [summaryRef, processRef, historyRef, existingRef, assessRef, actionsRef, appendixRef];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  const handleScroll = () => {
    let viewport = window.pageYOffset + window.innerHeight;
    if (viewport >= refs[6].current.offsetTop) {
      setActive(refs[6].current.id);
    } else if (viewport >= refs[5].current.offsetTop) {
      setActive(refs[5].current.id);
    } else if (viewport >= refs[4].current.offsetTop) {
      setActive(refs[4].current.id);
    } else if (viewport >= refs[3].current.offsetTop) {
      setActive(refs[3].current.id);
    } else if (viewport >= refs[2].current.offsetTop) {
      setActive(refs[2].current.id);
    } else if (viewport >= refs[1].current.offsetTop) {
      setActive(refs[1].current.id);
    } else if (viewport >= refs[0].current.offsetTop) {
      setActive(refs[0].current.id);
    } else {
      setActive("");
    }
  } 

  return (
    <div className="report-container" onScroll={handleScroll}>
      <div className={popup ? "report-image" : "hidden"}>
        <img 
          className={popup ? "popup" : "hidden"} 
          src={popupSource} 
          onClick={() => togglePopup(!popup)}
        />
      </div>
      <ParallaxBanner
        layers={[{ image: 'https://source.unsplash.com/F-SSkCfSEoo/2400x1404', speed: -20 }]}
        style={{height: "32rem"}}
      >
        <div style={{position: "absolute", width: "100%"}}>
          <div className="padding report-header">
            <Header />
            <h2 style={{width: "100%", color: "white", padding: "3rem 0"}}>Digital Equity Plan:<br/><span>Everett, Chelsea, & Revere</span></h2>
          </div>
        </div>
      </ParallaxBanner>
      <div className="report-content padding">
        <div className="report-content__col-1">
          <ReportMenu 
            isActive={isActive} 
            setActive={setActive}
            setTabIndex={setTabIndex}
            setAssessIndex={setAssessIndex}
          />
        </div>
        <div className="report-content__col-2">
          <div ref={summaryRef} id="summary">
            <Summary />
          </div>
          <div className="section">
            <ParallaxBanner
              layers={[{ image: 'https://source.unsplash.com/gTyHuIDjUH0/4013x1923', speed: -30 }]}
              style={{height: "30rem", width: "100vw"}}
              className="fullbleed" 
            />
          </div>
          <div ref={processRef} id="process">
            <Process />
          </div>
          <div className="section">
            <ParallaxBanner
              layers={[{ image: 'https://source.unsplash.com/QVuBdXk-07I/2400x1600', speed: -30 }]}
              style={{height: "30rem", width: "100vw"}}
              className="fullbleed" 
            />
          </div>
          <div ref={historyRef} id="history">
            <History />
          </div>
          <div className="section">
            <ParallaxBanner
              layers={[{ image: 'https://source.unsplash.com/Tk7Vf2iMiRg', speed: -30 }]}
              style={{height: "30rem", width: "100vw"}}
              className="fullbleed" 
            />
          </div>
          <div ref={existingRef} id="existing-conditions">
            <ExistingConditions 
              tabIndex={tabIndex}
              setTabIndex={setTabIndex}
            />
          </div>
          <div className="section">
            <ParallaxBanner
              layers={[{ image: 'https://source.unsplash.com/SpipDgDNE_U/2400x1600', speed: -30 }]}
              style={{height: "30rem", width: "100vw"}}
              className="fullbleed" 
            />
          </div>
          <div ref={assessRef} id="assessment">
            <Assessment 
              assessIndex={assessIndex} 
              setAssessIndex={setAssessIndex}
            />
          </div>
          <div className="section">
            <ParallaxBanner
              layers={[{ image: 'https://source.unsplash.com/WPc2CaLR1U0/2400x1350', speed: -30 }]}
              style={{height: "30rem", width: "100vw"}}
              className="fullbleed" 
            />
          </div>
          <div ref={actionsRef} id="actions">
            <Actions />
          </div>
          <div className="section">
            <ParallaxBanner
              layers={[{ image: 'https://source.unsplash.com/XPkjweA1EBA/2400x3200', speed: -30 }]}
              style={{height: "30rem", width: "100vw"}}
              className="fullbleed" 
            />
          </div>
          <div ref={appendixRef} id="appendix">
            <Appendix />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ReportWrapper