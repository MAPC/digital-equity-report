import React from "react";
import { Link } from "gatsby"

const PercentBar = ({percent}) => {
  return (
    <div style={{
      display: "flex", 
      alignItems: "center"}}
    >
      <div style={{
        backgroundColor: "#D1B02A", 
        height: "50px", 
        width: percent + "%", 
        marginRight: "1rem"}}>
      </div>
      <h4>{percent}%</h4>
    </div>
  )
}

export default PercentBar