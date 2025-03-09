import React from "react";
import "./accordian101.css";
import PrsRequest from "../requests/prsRequests/prsRequest";
import CourseRequest from "../requests/coursesRequest/courseRequest";
import AppointRequest from "../requests/AppointRequest/AppointRequest";
import Youradvisor from "../requests/AppointRequest/yourAdvisor/youradvisor";
import RequestManagement from "../requests/requestManagement/requestManagement";
import Ftclearence from "../requests/Ftclearence/ftclearence";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Accordian101=()=>{


  return(


    

<div className="portal">

<div class="accordion" id="accordionPanelsStayOpenExample">

  <div class="accordion-item">
    <h2 class="accordion-header">
    
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsetwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
      <img src="./home/6.png"></img>Request
      </button>
    </h2>
    <div id="panelsStayOpen-collapsetwo" class="accordion-collapse collapse ">
      <div class="accordion-body">
       <div class="navlist00100">

  

     <Link to="PrsRequest"> <div className="nobi231"><a>Prs Request</a></div> </Link>
     <Link to="CourseRequest"> <div className="nobi231"><a>Courses Request</a></div> </Link>
     <Link to="RequestManagement"> <div className="nobi231"><a>Request Management</a></div> </Link>
     <Link to="Ftclearence"> <div className="nobi231"><a>FT Clearance</a></div> </Link>
     <Link to="AppointRequest"> <div className="nobi231"><a>Appointment Request</a></div> </Link>

       </div>
      </div>
    </div>
  </div>

 
</div>
</div>


    
  )
}

export default Accordian101;