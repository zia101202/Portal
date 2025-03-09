import React from "react";
import "./accordia.css";
import PrsRequest from "../requests/prsRequests/prsRequest";
import CourseRequest from "../requests/coursesRequest/courseRequest";
import AppointRequest from "../requests/AppointRequest/AppointRequest";
import Youradvisor from "../requests/AppointRequest/yourAdvisor/youradvisor";
import RequestManagement from "../requests/requestManagement/requestManagement";
import Ftclearence from "../requests/Ftclearence/ftclearence";
import Missing from "../missing/missing";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Accordian = () => {


  return (




    <div className="bean">

      <div class="accordion" id="accordionPanelsStayOpenExample">

        <div class="accordion-item">
          <h2 class="accordion-header">

            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              <img src="./home/7.png"></img>Payments
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse ">
            <div class="accordion-body">
              <div class="navlist00100">

                <Link to="PaymentDetails"> <div className="nobi231"><a>Payments History</a></div> </Link>
                <Link to="Missing"> <div className="nobi231"><a>Pending Fee Voucher</a></div> </Link>



              </div>
            </div>
          </div>
        </div>


      </div>





    </div>





  )
}

export default Accordian;