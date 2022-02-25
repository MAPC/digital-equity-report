import React from "react";
import Header from "./modules/header";

const Landing = () => {
  return (
    <div className="landing padding">
      <Header />
      <h1>Digital Access for all is <span>Achievable</span>.</h1>
      <div className="border-left">
        <h3>A collection of resources and reports.</h3>
        <p className="section-half">Equity is the condition of fair and just inclusion into a society. Equity will exist when those who have been most marginalized have equal access to opportunities, power, participation and resources and all have avenues to safe, healthy, productive, and fulfilling lives. It requires restructuring deeply entrenched systems of privilege and oppression that have led to the uneven distribution of benefits and burdens over multiple generations. Society will be stronger when the promise in all of us is actualized. With inspiration from: Policy Link, King County Office of Equity and Social Justice</p>
      </div>
    </div>
  )
}

export default Landing