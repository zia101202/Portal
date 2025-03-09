import React from "react";
import './appointsubpage.css';

const Appointsubpage = () => {

    return (

        <>

            <div className="Appointsubpage">
                
           
 


                    <div className="Appointsubpagesub">
                        <p>Set Appointment</p>

                        <div className="Appointsubpagesubdown" >
                        <h1>Subject<span>*</span></h1>
                      

                        <select size="1">
                            
                            <option>--select Subject--</option>
                             <option>Low Attendance</option>
                             <option>Low CGPA</option>
                             <option>F Grade</option>
                             <option>Mid-Term/Final-Term</option>
                             <option>Less or No Class Participation</option>
                             <option>Academic Requirements/Road Map of Degree</option>
                             <option>Academic Progress Issues</option>
                             <option>personal/phsycological/social/Financial Issues</option>
                             <option>Disciplanary Issues with  Student</option>
                             <option>Class Room Difficulty</option>
                             <option>Difficulty in Meeting Deadline</option>
                             <option>Dissatisfaction with an Instructor or Teacher</option>
                             <option>others</option>
 
                            </select>
                     
                     
                            <h1>Description<span>*</span></h1>
                           <div className="Appointsubpagesubdownflux">
                           <textarea rows="7" cols="101"></textarea>
                           
                           </div>

                      
                           <div className="Appointsubpagesubdownbtn" >

                           <button className="Appointsubpagesubdown1" >Submit</button>  <button className="Appointsubpagesubdown2" >Cancel</button>
                           </div>
                         
                        </div>
                    </div>

                



            </div>
        
        </>
    )
}

export default Appointsubpage;