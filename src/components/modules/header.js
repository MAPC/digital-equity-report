import React from "react";
import { Link } from "gatsby";
import Menu from "./mainMenu";
import logo from "../../images/mapc-logo.svg";

const Header = () => {
  return (
    <div>
      <div className="section-two-col-flex">
        <div className="section-half"> 
          <Link to="/" className="header__link">
            <img src={logo} alt="MAPC Logo" className="header__logo" />
            <h4>Digital Equity Plan</h4>
          </Link>
        </div>
        <div className="section-half-right">
          <Link to="/report" className="header__link">
            <h4>Read the Report</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header