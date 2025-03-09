import React from "react";
import './ftclearencedetail.css';

const Ftclearencedetail = () => {
    const controlCross = () => {
        // Add your logic here to add a property to the element with id "cross"
        const crossElement = document.querySelector('.prshelpdeskumt');
        if (crossElement) {
            crossElement.style.display = 'none'; // Example: Change background color
        }
    };


    return (

        <>
            <div className="ftclearencedetailcontainer">
                <div className="RequestManagementheader">
                    <p className="prshelpdeskumt"> <img src="./images/envelope-solid.svg" /> For queries:<span>prshelpdesk@umt.edu.pk</span><span onClick={controlCross} id="cross">X</span>    </p>
                </div>
               

               <div className="fatclearenonevbvbvflux">
                <div className="spaceone"></div>
                <p className="fatclearenonevbvbvOverview">Overview</p>
                <p  className="fatclearenonevbvbvDocument">Upload Document</p>
                <p  className="fatclearenonevbvbvDetail">Personal Detail</p>
                <p className="fatclearenonevbvbvFeedback">Feedback</p>
                <div className="spactwo"></div>
               </div>
                
              
                <div className="runupflux">

                    <div className="fatclearenceoneflux"><p className="fatclearenone">1</p></div>
                    <div className="ftclearencedetailmarginoneflux"></div>
                  <div className="fatclearencetwoflux"><p className="fatclearenone">2</p></div>
                    <div className="ftclearencedetailmargintwoflux"></div>
                  <div className="fatclearencethreeflux"><p className="fatclearenone">3</p></div>
                    <div className="ftclearencedetailmarginthrefluxe"></div>
                   <div className="fatclearencefourflux"><p className="fatclearenone">4</p></div>
                </div>


                <div className="fatclearencparagrap"><span className="fatclearencparagrapone" >Attention Please!</span><p>Dear participant, mobile captured images are not accepted, please use only scanned images or you can use mobile applications like <span className="fatclearencparagraptwo">PhotoScan by Google</span>  or <span className="fatclearencparagraptwo">CamScanner</span> for image scanning. Please also note that original SID (Student ID Card) must be submitted to Office of the Controller Examinations at the time of Final Transcript Issuance.</p></div>
                <div className="fclearencebackpng">   <img src="./images/fclearenceback.png"></img> <button>Start Clearence</button> </div>
            </div> </>
    )
}

export default Ftclearencedetail;