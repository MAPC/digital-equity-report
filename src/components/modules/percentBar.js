import React from "react";

const PercentBar = ({percent}) => {
  return (
    <div style={{
      display: "flex", 
      alignItems: "center"}}
    >
      <div style={{
        backgroundColor: "#D1B02A", 
        height: "30px", 
        width: percent + "%", 
        marginRight: "1.5rem"}}>
      </div>
      <h4 style={{margin: 0}}>{percent}%</h4>
    </div>
  )
}

export default PercentBar