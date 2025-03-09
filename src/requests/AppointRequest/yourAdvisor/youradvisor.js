import React from "react";
import './youradvisor.css';

const Youradvisor = () => {



    return (

        <>

            <div className="Youradvisorcontainer">
           
                <div className="Youradvisorheader">

                    <p>MEET WITH YOUR ADVISOR</p>

                </div>
                <div  className="Youradvisorcontaineriam">   <p>I am your advisor</p></div>

                <div className="Youradvisorcontainerone">   <img src="./images/userpic.jpg" /></div>
               <div className="Youradvisorcontainersix"><p>Dr. Muhammad Samiullah</p></div> 
                <div className="Youradvisorcontainertwo"> <img src="./images/phone-flip-solid.svg" />  N/A </div>
                <div className="Youradvisorcontainerthree">  <img src="./images/location-pin-solid.svg" />  N/A </div>
                <div className="Youradvisorcontainerfour">  <img src="./images/envelope-solid.svg" />    Department of Islamic Thought and Civilization</div>
                <div className="Youradvisorcontainerfive">  <img src="./images/building-solid.svg" /> muhammad.samiullah@umt.edu.pk</div>

              <div className="Youradvisorcontainerseven"><button>Need help <span>?</span></button></div>  


            </div>

        </>
    )
}

export default Youradvisor;