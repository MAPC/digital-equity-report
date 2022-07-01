import React, { useState, useEffect } from "react";
import logo from "../../images/mapc-logo.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {
  const [isReport, setReport] = useState(false);

  useEffect(() => {
    if (window.location.href.indexOf("/report") > -1) {
      setReport(true);
    } else {
      setReport(false);
    }
  }, []);

  return (
    <div>
      <div className="section-two-col-flex">
        <div className="section-half">
          <div className="header__title">
            <img src={logo} alt="MAPC Logo" className="header__logo" />
            <h4>Digital Equity Plan</h4>
          </div>
        </div>
        <div className="section-half-right">
          {isReport ? (
            <AnchorLink to="/" className="header__link">
              <h4>Return to Home</h4>
            </AnchorLink>
          ) : (
            <AnchorLink to="/report" className="header__link">
              <h4>Read the Report</h4>
            </AnchorLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
