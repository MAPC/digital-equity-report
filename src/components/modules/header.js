import React from "react";
import Menu from "./mainMenu";
import logo from "../../images/mapc-logo.svg";
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Header = () => {
  return (
    <div>
      <div className="section-two-col-flex">
        <div className="section-half"> 
          <AnchorLink to="/" className="header__link">
            <img src={logo} alt="MAPC Logo" className="header__logo" />
            <h4>Digital Equity Plan</h4>
          </AnchorLink>
        </div>
        <div className="section-half-right">
          <AnchorLink to="/report" className="header__link">
            <h4>Read the Report</h4>
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Header