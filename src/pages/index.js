import React from "react";
import { Link } from "gatsby"
import Landing from "../components/landing";
import Report from "./report";
import ReactMarkdown from 'react-markdown';
import "../styles/index.scss";
import { PopupProvider } from "../components/contexts/popupContext";

const IndexPage = () => {
  return (
    <div>
      <PopupProvider>
        <Landing />
      </PopupProvider>
    </div>
  )
}

export default IndexPage
