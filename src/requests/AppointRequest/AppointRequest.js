import React from "react";
import './AppointRequest.css';
import Appointsubpage from "./appointsubpage/appointsubpage";
import Youradvisor from "./yourAdvisor/youradvisor";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const AppointRequest = () => {
  
    return (

        <>
         

                <div className="AppointRequestcontainer">
                <div className="AppointRequestheader">
                    <p>APPOINTMENT REQUEST</p>
                </div>
                <div className="AppointRequestButton">
                <button className="AppointRequestButton1" ><svg className="svguser"  xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path opacity="1"  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> <Link to="Youradvisor" className="linksapoint">Your Advisor's</Link></button>
                <button   className="AppointRequestButton2"><svg className="svgplus" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path opacity="1"  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/><span></span></svg><Link to="Appointment" className="linksapoint">Add Appointment</Link></button>
                </div>
                 <div className="RecieveAppointRequest">
                There is no appointment registered
                </div>
             </div>
          
             

    
         
           
        
        </>
    )
}

export default AppointRequest;