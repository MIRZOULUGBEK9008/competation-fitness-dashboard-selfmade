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
            <div className="sidebar-parts ">
              
              <ul>
                <li>
                  <a href="" className="activee active">
                  <img src={MainPhoto} alt="" />
                     <span>Asosiy</span></a>
                </li>
              </ul>

              
            </div>
            </NavLink>
            

            <NavLink to="/Mijozlar">
              <div className="sidebar-parts">
              <ul>
                <li>
                  <a href="" className="activee">
                  <img src={MainPhoto} alt="" />
                     <span>Mijozlar</span></a>
                </li>
              </ul>
              </div>
            </NavLink>

            <div className="sidebar-parts">
            <ul>
                <li>
                  <a href="" className="activee">
                  <img src={MainPhoto} alt="" />
                     <span>Jihozlar</span></a>
                </li>
              </ul>
            </div>

            <NavLink to="/Mahsulotlar">
            <div className="sidebar-parts">
            <ul>
                <li>
                  <a href="" className="activee">
                  <img src={MainPhoto} alt="" />
                     <span>Mahsulotlar</span></a>
                </li>
              </ul>
            </div>
            </NavLink>

           

            <div className="sidebar-parts ">
            <ul>
                <li>
                  <a href="" className="activee">
                  <img src={MainPhoto} alt="" />
                     <span>Ustozlar</span></a>
                </li>
              </ul>
            </div>

            <div className="sidebar-parts">
            <ul>
                <li>
                  <a href="" className="activee">
                  <img src={MainPhoto} alt="" />
                     <span>Savol javob</span></a>
                </li>
              </ul>
            </div>



            <div className="sidebar-parts">
            <ul>
                <li>
                  <a href="" className="activee">
                  <img src={MainPhoto} alt="" />
                     <span>Statistika</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="part2">
          <Routes>
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/Mijozlar" element={<Users />} />
            <Route path="Mahsulotlar" element={<Goods/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
