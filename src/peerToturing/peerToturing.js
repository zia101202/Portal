import React from "react";
import './peerTotoring.css';

const PeerToturing=()=>{

    return(

        <>
       <div className="peertoturingcontainer">

        <div className="peertoturingheader">

            <p>PEER TUTORING PROGRAM</p>
        </div>

        <div className="oneoneoneone">
        <div id="peertoturingone" className="box1"> <div className="x"><h4>New Registration</h4> <p>Registered Courses</p></div> <div className="y"> <img className="sanimated-image" src="./images/box2.svg"></img></div></div>
        <div id="peertoturingtwo" className="box2"><div className="x"><h4>Attendance</h4> <p>View Course Attendance</p></div><div className="y"><img className="sanimated-image" src="./images/box2.svg"></img></div></div>
       <div id="peertoturingthree" className="box3"><div className="x"><h4>e-Appointment</h4> <p>Set Your Apointment</p></div><div className="y"><img className="sanimated-image" src="./images/box2.svg"></img></div></div>



        </div>

        </div> 
        </>
    )
}

export default PeerToturing;
