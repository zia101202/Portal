import React from "react";
import './transcript.css';
import db from "../backend/firebae.mjs";
import { useState } from "react";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
const Transcript = () => {


    const [Data, setdata] = useState({});



    useEffect(() => {

        async function waite() {
            try {
                const collectionRef = doc(db, "f2020065264", "completed Courses");
                const documentSnapshot = await getDoc(collectionRef);
                const coursesData = documentSnapshot.data();
                if (coursesData !== null) {
                    setdata(coursesData);

                } else {

                    console.log("data not recieve")
                }
            } catch (error) {

                console.log(error.massage);
            }
        }

        waite();

    }, [])

    return (

        <>
            <div className="TranscriptTop">
                <div className="TranscriptContainer">
                    <h1>TRANSCRIPT</h1>
                    <span className="DisclaimerTranscript">Disclaimer:</span>
                    <p>This is for student record only. Printout from this Online Transcript will not be accepted for any official purpose. Official Transcript will be issued by Office of the Controller of Examinations with signature and official seal...</p>
                    <h2>School of Social Sciences and Humanities</h2>
                    <div><span className="TranscriptId">Id No:</span></div>
                    <div className="TranscriptNameDegree"> <span className="TranscriptName">Name:</span> <span className="TranscriptDegree">Degree:</span></div>
                    <div className="TranscriptFathersName"><span >Fathers Name:</span></div>
                </div>

                <div className="tablesTrancrip">


                    <div className="Transcriptbox1"> 
                    <table className="lefttable">
                        <tr >
                            <th className="CourseCode">Course Code</th>
                            <th className="CourseTitle">Course Title</th>
                            <th className="CrHrs">Cr. Hrs</th>
                            <th className="Grade">Grade</th>
                            <th className="GP">G.P.</th>
                        </tr>
                  </table>
                  </div>

                    <div className="Transcriptbox2"> 
                    <table className="righttable">
                        <th className="CourseCode">Course Code</th>
                        <th className="CourseTitle">Course Title</th>
                        <th className="CrHrs">Cr. Hrs</th>
                        <th className="Grade">Grade</th>
                        <th className="GP">G.P.</th>
                    </table>
                    
                    </div>

                    <div className="coursesdetail">
                        <div className="courseyear"><p>Fall 2021</p></div>
                        <div className="coursedetail">
                            <th className="corsecode">GAT501</th>
                            <th className="corseName">UMT GAT/HAT (General)</th >
                            <th className="corsehours">0</th >
                            <th className="corseGrade">p</th >
                            <th className="corseGp">0</th >
                        </div>
                    </div>
                    
                    {Object.keys(Data).map((challan, index) => ( 
                        
                        Object.keys(challan).map((simple, index)=>(
                            <div className="coursesdetail">
                            <div className="courseyear"><p>Fall 2021</p></div>
                            <div className="coursedetail">
                                <th className="corsecode">{Data[challan][simple]}</th>
                                <th className="corseName">{Data[challan][simple]['Course Title']}</th >
                                <th className="corsehours">{Data[challan][simple]['Cr. Hrs.']}</th >
                                <th className="corseGrade">{Data[challan][simple]['G.p']}</th >
                                <th className="corseGp">{Data[challan][simple].Grade}</th >
                            </div>
                        </div>

                        ))
                    
))

}
                       





                </div>


                <div className="result">
                    <span className="earnedhour">Credit Hours Earned :</span >
                    <span className="totalhour">Credit Hours for GPA :</span >
                    <span className="totalpoint">Total Grade Points :</span>
                    <span className="totalgpa">CGPA :</span >
                </div>
               <div className="Note">
                     <div className="noteheader">Note</div>
                       <div className="notedtext">

                        <p className="notedtext1">1.          This progress report shows the courses student has registered so far. This does not indicate that all requisites for the degree have been fulfilled.</p>
                        <p className="notedtext2">2.         Student shall apply for official Progress Report to Office of the Controller of Examinations for sending his/her academic performance officially to the Institutes / Universities / Employers.</p>
                       </div>

               </div>

            </div>

        </>
    )
}

export default Transcript;