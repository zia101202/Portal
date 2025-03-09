import React from "react";
import './nav.css'
import Accordian101 from "../accordian101/accordian101";
import Navbar from "../navbar/navbar";
import Profile from "../studentprofile/profile";
import Mycourses from "../mycourses/mycourses";
import Missing from "../missing/missing";
import PaymentDetails from "../paymentDetail/paymentDetail";
import Transcript from "../transcript/transcript";
import Announcements from "../announcement/announcement";
import Umtstore from "../umtstore/umtstore";
import PrsRequest from "../requests/prsRequests/prsRequest";
import CourseRequest from "../requests/coursesRequest/courseRequest";
import AppointRequest from "../requests/AppointRequest/AppointRequest";
import Youradvisor from "../requests/AppointRequest/yourAdvisor/youradvisor";
import RequestManagement from "../requests/requestManagement/requestManagement";
import Ftclearence from "../requests/Ftclearence/ftclearence";
import Attandence from "../Attandence/attendance";
import PeerToturing from "../peerToturing/peerToturing";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from "../backend/firebae.mjs";
import { useState } from "react";
import { useEffect } from "react";

const Nav = () => {


  const [Data, setdata] = useState({});
  useEffect(() => {

    async function waite() {
      const collectionRef = doc(db, "f2020065264", "RegisteredCourses");
      const documentSnapshot = await getDoc(collectionRef);


      const coursesData = documentSnapshot.data();
      setdata(coursesData);
    }
    waite();
  }, []);




  return (

    <>

      <body className="navbody0">



        <div class='grid0'>


          <div className="box10"> <div className="x0"><Link to="Profile" className="nolink"><h4>New Registration</h4> <p>Registered Courses</p></Link></div> <div className="y0"> <img src="./images/notebook.svg"></img></div></div>
          <div className="box20"><div className="x0"><Link to="Attandence" className="nolink"><h4>Attendance</h4> <p>View Course Attendance</p></Link></div><div className="y0"><img src="./images/note2.svg"></img></div></div>
          <div className="box30"><div className="x0"><Link to="AppointRequest" className="nolink"><h4>e-Appointment</h4> <p>Set Your Apointment</p></Link></div><div className="y0"><img src="./images/timer.svg"></img></div></div>
          <div className="box40"><div className="x0"><Link to="Ftclearence" className="nolink"><h4>FT Clearance</h4> <p>Final Transcript</p></Link></div><div className="y0"><img src="./images/study.svg"></img></div></div>
          <div className="box50"><div className="x0"> <Link to="Mycourses" className="nolink"><h4>My Courses</h4> <p>Courses / Assesments</p></Link></div></div>
          <div className="box60"><div className="x0"><Link to="Profile" className="nolink"><h4>Batch Profiles</h4> <p>Profiles</p></Link></div><div className="y0"><img src="./images/users.svg"></img></div></div>
          <div className="box70"><div className="x0"> <Link to="" className="nolink"><h4>UMT Giveaway</h4> <p>Free Giveaway</p></Link></div><div className="y0"><img src="./images/phone.svg"></img></div></div>
          <div className="box80"><div className="x0">    <Link to="PeerToturing" className="nolink"><h4>Peer Tutoring Program</h4> <p> Program</p></Link></div><div className="y0"><img className="xyxy" src="./images/box2.svg"></img></div></div>
          <div className="box90"><div className="x0"><Link to="PrsRequest" className="nolink"><h4>PRS Requests</h4> <p>View PRS Requests</p></Link></div><div className="y0"><img src="./images/help2.svg"></img></div></div>

          <div className="box100"><div className="x0">  <Link to="https://lms.umt.edu.pk/login/index.php" className="nolink"><h4>LMS</h4> <p>Learning Management System</p></Link></div><div className="y0"><img src="./images/wallet.svg"></img></div></div>
          <div className="box110"><div className="x0">  <Link to="AppointRequest/Youradvisor" className="nolink"><h4>Student Advisor</h4> <p>Meet With you advisor</p></Link></div><div className="y0"><img src="./images/users.svg"></img></div></div>
          <div className="box120"><div className="x0">  <Link to="ImportantLink" className="nolink"><h4>Important Links</h4> <p>External</p></Link></div><div className="y0"><img src="./images/link.svg"></img></div></div>

        </div>




        <div className="navdrop101">

          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOnes" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  Timetable
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOnes" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <div className="tom">
                    <div className="pane11">Day</div>
                    <div className="pane12">C.Code</div>
                    <div className="pane13">Name</div>
                    <div className="pane14">Faculty</div>
                    <div className="pane15">Type</div>
                    <div className="pane16">Mode</div>
                    <div className="pane17">Start Time</div>
                    <div className="pane18">End Time</div>
                    <div className="pane19">Room</div>
                  </div>


                  {Object.keys(Data).map((courseKey, index) => (

                    <div id="mapregisterdcourse12" style={{ backgroundColor: index % 2 === 0 ? 'white' : '#e5e5e5' }} className="tom">
                      <div className="pane11">{Data[courseKey].day}</div>
                      <div className="pane12">{courseKey}</div>
                      <div className="pane13">{Data[courseKey].Title}</div>
                      <div className="pane14">{Data[courseKey].Faculty}</div>
                      <div className="pane15">{Data[courseKey].Type}</div>
                      <div className="pane16">{Data[courseKey].Mode}</div>
                      <div className="pane17">{Data[courseKey]['start-Time']}</div>
                      <div className="pane18">{Data[courseKey]['End Time']}</div>
                      <div className="pane19">{Data[courseKey].Room}</div>
                    </div>
                  ))
                  }






                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Registered Courses
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">

                  <div className="tom"> <div className="pane11">ID</div>
                    <div className="pane12">Title</div>
                    <div className=" pane21">Cr.Hr</div>
                    <div className="pane11">Type</div>
                    <div className="pane15 ">Faculty</div>
                    <div className="pane22">Email</div>
                    <div className="pane17">Mode</div>
                    <div className="pane18">Section</div>
                    <div className="pane19">Semester</div></div>



                  {Object.keys(Data).map((courseKey, index) => (
                    <div  id="mapregisterdcourse12" className="tom" style={{ backgroundColor: index % 2 === 0 ? 'white' : '#e5e5e5' }}> <div className="pane11">{courseKey}</div>
                      <div className="pane12">{Data[courseKey].Title}</div>
                      <div className=" pane21">{Data[courseKey]['Cr.Hr']}</div>
                      <div className="pane11">{Data[courseKey].Type}</div>
                      <div className="pane15 ">{Data[courseKey].Faculty}</div>
                      <div className="pane22">{Data[courseKey].Email}</div>
                      <div className="pane17">{Data[courseKey].Mode}</div>
                      <div className="pane18">{Data[courseKey].Section}</div>
                      <div className="pane19">{Data[courseKey].Semester}</div></div>))}


                </div>
              </div>
            </div>
          </div>
        </div>







      </body>







    </>
  )
}

export default Nav;