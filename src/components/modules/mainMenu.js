import React from "react";
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div>
      <h4>Site Menu</h4>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/report">Read the Report</Link>
    </div>
  )
}

export default Menu