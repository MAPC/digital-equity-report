import React, { useEffect, useState, useRef, useContext } from "react";
// import Header from "../components/modules/header"; 
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
import chart1 from "../images/bar-chart-placeholder.png";
import { PopupContext } from "./contexts/popupContext";

const ReportWrapper = () => {

  const [tabIndex, setTabIndex] = useState(0);
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
      <div className="report-header padding">
        <Header />
        <div className="report-header-copy">
          <h4>Digital Equity Report:</h4>
          <h2>Everett, Chelsea, & Revere</h2> 
        </div>
      </div>
      <div className="report-content padding">
        <div className="report-content__col-1">
          <ReportMenu 
            isActive={isActive} 
            setActive={setActive}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
          />
        </div>
        <div className="report-content__col-2">

          <div ref={summaryRef} id="summary">
            <Summary />
          </div>
          
          <div ref={processRef} id="background">
            <Process />
          </div>
          
          <div ref={historyRef} id="history">
            <History />
          </div>
          
          <div ref={existingRef} id="existing-conditions">
            <ExistingConditions 
              tabIndex={tabIndex}
              setTabIndex={setTabIndex}
            />
          </div>
          
          <div ref={assessRef} id="assessment">
            <Assessment />
          </div>
          
          <div ref={actionsRef} id="actions">
            <Actions />
          </div>
          
          <div ref={appendixRef} id="appendix">
            <Appendix />
          </div>
        
        </div>
      </div>
      <Footer />
    </div>
    // </PopupProvider>
  )
}

export default ReportWrapper