import React, { useEffect, useState, useRef, useContext } from "react";
import Header from "../components/modules/header"; 
import ReportMenu from "../components/reportMenu";
import Summary from "../components/sections/summary";
import Process from "../components/sections/process";
import History from "../components/sections/history";
import ExistingConditions from "../components/sections/existingConditions";
import Assessment from "../components/sections/assessment";
import Actions from "../components/sections/actions";
import Appendix from "../components/sections/appendix";
import LiteratureReview from "../components/sections/literatureReview";
import Footer from "../components/modules/footer";
import chart1 from "../images/bar-chart-placeholder.png";
import { PopupContext, PopupProvider } from "../components/contexts/popupContext";
import ReportWrapper from "../components/reportWrapper";

const Report = () => {

  return (
    <PopupProvider>
      <ReportWrapper />
    </PopupProvider>
  )
}

export default Report