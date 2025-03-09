import React from 'react'
import Login from './login/login';
import Home from './home/home';
import AppointRequest from './requests/AppointRequest/AppointRequest';

import './app.css';
import Nav from "./nav/nav";
import Navbar from "./navbar/navbar";
import Profile from "./studentprofile/profile";
import Mycourses from "./mycourses/mycourses";
import Missing from "./missing/missing";
import PaymentDetails from "./paymentDetail/paymentDetail";
import Transcript from "./transcript/transcript";
import Announcements from "./announcement/announcement";
import Umtstore from "./umtstore/umtstore";
import PrsRequest from "./requests/prsRequests/prsRequest";
import CourseRequest from "./requests/coursesRequest/courseRequest";

import Youradvisor from "./requests/AppointRequest/yourAdvisor/youradvisor";
import RequestManagement from "./requests/requestManagement/requestManagement";
import Ftclearence from "./requests/Ftclearence/ftclearence";
import Attandence from "./Attandence/attendance";
import PeerToturing from "./peerToturing/peerToturing";
import ImportantLink from './importantlinks/importantlinks';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Appointsubpage from './requests/AppointRequest/appointsubpage/appointsubpage';
import About from './About/about';
import CourseList from './backend/firestore.mjs';

function App() {
  return (
    <>

<Router>
        <div className='extras'>
    
          <div className='classy'></div>
          <Home />
          <div className='youyou'>
            <div className='youyoutwo'>
            <Navbar />
            </div>
           

            <Routes>
              <Route path='/' element={<Nav/>} index/>
              
              <Route path='Profile' element={<Profile />}/>
              <Route path="Mycourses"  element={<Mycourses />}/>
              <Route path="Missing"  element={<Missing />}/>
              <Route path="PaymentDetails"  element={<PaymentDetails/>}/>
              <Route path="Transcript"  element={<Transcript/>}/>
              <Route path="Announcements"  element={< Announcements />}/>
              <Route path="Umtstore"  element={<Umtstore />}/>
              <Route path="PrsRequest"  element={<PrsRequest/>}/>
              <Route path="CourseRequest"  element={<CourseRequest/>}/>
             
              
              <Route path="RequestManagement"  element={<RequestManagement />}/>
              <Route path="Ftclearence"  element={<Ftclearence />}/>
              <Route path="Attandence"  element={<Attandence />}/>
              <Route path="PeerToturing"  element={<PeerToturing />}/>
              <Route path="Navbar"  element={<Navbar />}/>
              <Route path="ImportantLink"  element={<ImportantLink />}/>
            
              <Route path="AppointRequest/Youradvisor"  element={<Youradvisor />}/>
              <Route path="AppointRequest"  element={ <AppointRequest/>}/>
            </Routes>

            <About/>

          </div>
       
        </div>
       

       <Routes>  <Route path="AppointRequest/Appointment"  element={<Appointsubpage />}/></Routes>
  </Router>
  



    

    </>

  );
}

export default App;
