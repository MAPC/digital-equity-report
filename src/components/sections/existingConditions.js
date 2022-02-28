import React, { useEffect, useState, useRef } from "react";
import Connection from "../existingConditions/connection";
import Literacy from "../existingConditions/literacy";
import Service from "../existingConditions/service";
import Infrastructure from "../existingConditions/infrastructure";

const ExistingConditions = () => {

  return (
    <div>
      <div className="section">
        <h2>Existing Conditions</h2>
        <Connection />
        <Literacy />
        <Service />
        <Infrastructure />
      </div>
    </div>
  )
}

export default ExistingConditions