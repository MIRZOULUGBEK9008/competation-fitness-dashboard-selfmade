import React from "react";
import "./Dashboard.css";


const Dashboard = () => {
  return (
<<<<<<< Updated upstream
    <div className="container">
    
       <h1>Asosiy</h1>
       
      
=======
    <div>
      <div className="sidebar container">
        <div className="sidebar-parts">{/* <img src="" alt="" /> */}</div>
        <div className="sidebar-parts">
          <img src={MainPhoto} alt="" />

          <h5>Asosiy</h5>
        </div>

        <NavLink to="/Mijozlar">
          <div className="sidebar-parts">
            <img src={MainPhoto} alt="" />
            <h5>Mijozlar</h5>
          </div>
        </NavLink>

        <div className="sidebar-parts">
          <img src={MainPhoto} alt="" />
          <h5>Jihozlar</h5>
        </div>

        <div className="sidebar-parts">
          <img src={MainPhoto} alt="" />
          <h5>Maxsulotlar</h5>
        </div>

        <div className="sidebar-parts">
          <img src={MainPhoto} alt="" />
          <h5>Savol javob</h5>
        </div>
        <div className="sidebar-parts">
          <img src={MainPhoto} alt="" />
          <h5>Statistika</h5>
        </div>
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Dashboard;
