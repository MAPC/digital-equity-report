import React from "react";

const Acknowledgements = () => {


  const mapc = [
    "Josh Eichen", 
    "Ryan Kelly", 
    "Tony Schloss", 
    "Ella Brady", 
    "Brian Luther", 
    "Carolina Prieto",
    "Elise Harmon-Freeman",
    "Kimberly Nguyen",
    "Alyssa Kogan",
    "Ellyn Morgan"
  ];

  const everett = [
    "Deanna Deveny, Director of Communications, City of Everett",
    "Erin Deveny, Chief of Staff, City of Everett",
    "Kim Tsai, Deputy Superintendent, Everett Public Schools",
    "Priya Tahiliani, Superintendent, Everett Public Schools",
    "Charlie Obremski, Assistant Superintendent of Operations, Everett Public Schools", 
    "Kevin Shaw, Assistant Superintendent Everett Public Schools",
    "Kevin Dorgan, Director of Information Technology , City of Everett",
    "Stephanie Martins, City Councilor, City of Everett",

  ];

  const chelsea = [
    "Ramon Garcia, Chief Information Officer, City of Chelsea",
    "Monica Lamboy, Director of Administration and Finance, City of Chelsea",     
    "Karl Allen, Economic Development Planner, City of Chelsea", 
    "Matt Frank, Supportive Services Manager, Chelsea Housing Authority, Chelsea", 
    "Alexander Train, Director, Housing and Community Development Department, City of Chelsea",
    "Paul Nowicki, Director of Operations, Chelsea Housing Authority, City of Chelsea",
    "Rich Pilcher, Chief Technology Officer, Chelsea Public Schools",
    "Almi Abeyta, Superintendent, Chelsea Public Schools"
  ]

  const revere = [
    "Jorge Pazos, IT Director, City of Revere",
    "Reuben Kantor, Chief of Innovation, City of Revere",
    "Lourenco Garcia, Assistant Superintendent of Equity and Inclusion, Revere Public Schools",
    "Jaime Flynn, Executive Director of Data and Accountability, Revere Public Schools ",
    "Dianne Kelly, Superintendent, Revere Public Schools"
  ]

  const community = [
    "Lucy Pineda, Executive Director Latinos Unidos en Massachusetts (LUMA), Everett",
    "Jamie Lederer, Community Health Improvement Department, Cambridge Health Alliance",
    "Rev Myrlande Desrosie, Associate Pasteur and Director , Everett Haitian Community Center",
    "Penny Hasselli, MetroNorth Workforce Board",
    "Chris Albrizio-Lee, MetroNorth Workforce Board",
    "Melora Ruhg, MassHire MetroNorth Workforce Board",
    "Stefanie  Shull, TND Connect",
    "Dini Paulino, La Colaborativa",
    "Eva Daniggelis, Americorp Vista, The Neighborhood Developers",
    "Evie Heffernan, Workforce Manager, The Neighborhood Developers",
    "Sean Mock, Senior Program Manager, The Neighborhood Developers",
    "Cheryl Coss, Economic Stability Program Manager, Center for Community Health Improvement",
    "Syliva Chiang, Revere CARES Massachusetts General Hospital",
    "Kelly Washburn, Massachusetts General Hospital Evaluation Team",
    "Mike Stanek, Senior Manager, Health Policy Coalition",
    "Caroline Kinuth, Senior Policy Manager, Health Policy Coalition"
  ]

  function createList(data) {
    return data.map((li) =>  <li>{li}</li>)
  };

  return (
    <div>
      <div className="section">
        <h4>Community Advisory Team</h4>
        <p>To achieve outcomes that enhance the wellbeing of the community, it’s essential that community perspective guides the work. A community advisory team served as a core working group which meet throughout the process to provide feedback, responses to proposed strategies and data analysis. This group was essential in assisting with the distribution and completion of the community needs assessment. The perspective provided by the community advisory helped inform the development of this plans vision and goals, and shaped the focus and framing of this report. Ultimately, it will be this set of stakeholders will be able to take actionable measures towards the goals this report intends to achieve.</p>
      </div>
      <div className="section section-two-col-flex">
        <div className="section-half border-right">
          <h4>Community Advisory Members</h4>
          <h5>City of Everett</h5>
          <ul>
            {createList(everett)}
          </ul>
          <h5>City of Chelsea</h5>
          <ul>
            {createList(chelsea)}
          </ul>
          <h5>City of Revere</h5>
          <ul>
            {createList(revere)}
          </ul>
        </div>
        <div className="section-half">
          <h5>Community Organizations</h5>
          <ul>
            {createList(community)}
          </ul>
          <h5>MAPC Staff</h5>
          <ul>
            {createList(mapc)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Acknowledgements