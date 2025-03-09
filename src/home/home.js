import React from "react";
import './home.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Accordian from "../Accordian/accordia";
import Accordian101 from "../accordian101/accordian101";
const Home = () => {

    return (
        <>
     
        

        
    

         <div className="homebody">
            
            <div class='navzia101'>
                
               <div><div className="logodiv"><img className='navlogo' src="./home/navlogo.png"></img></div></div> 
                <div> <div className="c"><Link  to="/"> <img src="./home/1.png"></img>Dashboard</Link></div></div>
                <div><div  className="c"> <Link  to="Profile"> <img src="./home/2.png"></img>Profile</Link></div> </div>
                <div> <div className="c"> <Link  to="Mycourses"> <img src="./home/3.png"></img>My Courses</Link></div></div>
                <div><div className="c"><Link  to="Transcript"> <img src="./home/4.png"></img>Transcript</Link></div></div>
                <div> <div className="c"><Link  to="Missing"> <img src="./home/5.png"></img>Feedback</Link> </div>
             <div></div>
               <Accordian101/>   
               <Accordian/>             
                <div>  <div className="c"> <Link  to="nn"><img src="./home/8.png"></img> Road Map</Link></div></div>
                <div>  <div className="c"> <Link  to="Announcements"> <img src="./home/9.png"></img>Announcements</Link></div> </div>
                <div><div className="c"> <Link to="Umtstore"><img src="./home/10.png"></img>UMT Store</Link></div></div>
                <div> <div className="c"> <Link  to="https://www.umt.edu.pk/org/Academic-Calendar/Academic-Calendar-2019-2020.aspx"><img src="./home/11.png"></img>Academic Calander</Link></div> </div>
                <div><div className="c"><Link  href="PeerToturing"><img src="./home/12.png"></img> Need a Peer Tutor ?</Link></div>  </div>
             </div>

             </div>
            
             
         </div>

     
        
        
        
      
       
      
         
            

        </>
    )

}
export default Home;