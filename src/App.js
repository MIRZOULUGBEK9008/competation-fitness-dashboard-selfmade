import Teachers from "./components/Teachers/Teachers";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import "./components/dashboard/Dashboard.css";
import MainPhoto from "./assets/icons/icon-main-min.svg";

import { NavLink } from "react-router-dom";
import Users from "./components/Users/User";
import Goods from "./components/Goods/Goods";
function App() {
  return (
    <>
      <div className="partoverall">
        <div>
          <div className="sidebar container">
            <div className="sidebar-parts">{/* <img src="" alt="" /> */}</div>
            <NavLink to="/">
              <div className="sidebar-parts">
                <img src={MainPhoto} alt="" />

                <h5>Asosiy</h5>
              </div>
            </NavLink>

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

            <NavLink to="/Mahsulotlar">
              <div className="sidebar-parts">
                <img src={MainPhoto} alt="" />
                <h5>Maxsulotlar</h5>
              </div>
            </NavLink>

            <div className="sidebar-parts">
              <img src={MainPhoto} alt="" />
              <h5>Savol javob</h5>
            </div>
            <div className="sidebar-parts">
              <img src={MainPhoto} alt="" />
              <h5>Statistika</h5>
            </div>
          </div>
        </div>

        <div className="part2">
          <Routes>
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/Mijozlar" element={<Users />} />
            <Route path="/Mahsulotlar" element={<Goods />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
