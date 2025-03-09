import React from "react";
import './ftclearence.css';
import Ftclearencedetail from "./ftclearencedetail";
import { useState } from "react";
const Ftclearence = () => {

    const [button, setbutton] = useState(false);


    const handleclickft = () => {
        setbutton(!false);

    }


    return (


        <>
            {button===false ? (<div className="ftclearencecontainer">

                <div className="ftclearenceheader">

                    <p>CLEARANCE REQUIRED FOR?</p>
                </div>
                <div onClick={handleclickft} className="ftclearenceimg"> <div className="ftclearenceimgp"> <p>FT Clearance</p>  <p>Final Transcript</p></div>    <img src="./images/study.svg"></img></div>
            </div>)  : (<Ftclearencedetail />)  
    }

        </>
    )
}

export default Ftclearence;