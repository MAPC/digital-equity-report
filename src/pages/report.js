import React, { useEffect, useState, useRef } from "react";
import ReportMenu from "../components/reportMenu";
import Summary from "../components/sections/summary";
import Process from "../components/sections/process";
import History from "../components/sections/history";
import ExistingConditions from "../components/sections/existingConditions";
import Assessment from "../components/sections/assessment";
import Actions from "../components/sections/actions";
import Appendix from "../components/sections/appendix";
import LiteratureReview from "../components/sections/literatureReview";

const Report = () => {

  const [isActive, setActive] = useState("summary");

  const summaryRef = useRef();
  const processRef = useRef();
  const historyRef = useRef();
  const existingRef = useRef();
  const assessRef = useRef();
  const actionsRef = useRef();
  const appendixRef = useRef();
  const litRef = useRef();
  let refs = [summaryRef, processRef, historyRef, existingRef, assessRef, actionsRef, appendixRef, litRef];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  const handleScroll = () => {
    let viewport = window.pageYOffset + window.innerHeight;
    if (viewport >= refs[7].current.offsetTop) {
      setActive(refs[7].current.id);
    } else if (viewport >= refs[6].current.offsetTop) {
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
      <div className="report-header padding">
        Report Page Header  
      </div>
      <div className="report-content padding">
        <div className="report-content__col-1">
          <ReportMenu 
            isActive={isActive} 
            setActive={setActive} 
          />
        </div>
        <div className="report-content__col-2">

          <div ref={summaryRef} id="summary">
            <Summary />
          </div>
          
          <div ref={processRef} id="process">
            <Process />
          </div>
          
          <div ref={historyRef} id="history">
            <History />
          </div>
          
          <div ref={existingRef} id="existing-conditions">
            <ExistingConditions />
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
          
          <div ref={litRef} id="literature-review">
            <LiteratureReview />
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Report