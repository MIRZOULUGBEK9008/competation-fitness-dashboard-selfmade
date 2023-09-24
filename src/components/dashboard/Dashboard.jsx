import React from 'react'
import "./Dashboard.css"
import MainPhoto from "../../assets/icons/icon-main-min.svg"
import Logo from "../../assets/gantel.png"
const Dashboard = () => {
  return (
    <div>
        <div className='sidebar_overall'>
        <div className='sidebar container'>
        <div className='sidebar-parts'>
                <img src={Logo} alt="" />

                 
            </div>
            <div className='sidebar-parts'>
                <img src={MainPhoto} alt="" />

                 <h5>Asosiy</h5>
            </div>

            <div className='sidebar-parts'>
            <img src={MainPhoto} alt="" />
                 <h5>Mijozlar</h5>
            </div>


            <div className='sidebar-parts'>
            <img src={MainPhoto} alt="" />
                 <h5>Juhozlar</h5>
            </div>


            <div className='sidebar-parts'>
            <img src={MainPhoto} alt="" />
                 <h5>Maxsulotlar</h5>
            </div>

            <div className='sidebar-parts'>
            <img src={MainPhoto} alt="" />
                 <h5>Savol javob</h5>
            </div>
            <div className='sidebar-parts'>
            <img src={MainPhoto} alt="" />
                 <h5>Statistika</h5>
            </div>




        </div>

        <div className='sidebar-asosiy container'>
            menu

        </div>
        </div>
    </div>
  )
}

export default Dashboard