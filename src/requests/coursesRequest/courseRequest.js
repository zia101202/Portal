import React from "react";
import './courseRequest.css';
import { doc, getDoc } from "firebase/firestore";
import db from "../../backend/firebae.mjs";
import { useState } from "react";
import { useEffect } from "react";
const CourseRequest = () => {



    const [Loading, setLoading] = useState(false);
    const [Data, setdata] = useState({});
    const [Dataofpersonal, setDataofpersonal] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = doc(db, "f2020065264", "RegisteredCourses");
                const documentSnapshot = await getDoc(collectionRef);

                // Check if the documentSnapshot exists before accessing its data
                if (documentSnapshot.exists()) {
                    const coursesData = documentSnapshot.data();
                    setdata(coursesData);
                } else {
                    console.log("Document does not exist");
                    // Handle the case where the document does not exist
                }
            } catch (error) {
                console.error("Error fetching data:", error.message);
                // Handle the error gracefully, display a message, or take appropriate action
            }
        };

        const fetchDatas = async () => {
            try {
                const collectionRef = doc(db, "f2020065264", "personaldetails");
                const documentSnapshot = await getDoc(collectionRef);

                // Check if the documentSnapshot exists before accessing its data
                if (documentSnapshot.exists()) {
                    const personal = documentSnapshot.data();
                    setDataofpersonal(personal);
                } else {
                    console.log("Document does not exist");
                    // Handle the case where the document does not exist
                }
            } catch (error) {
                console.error("Error fetching data:", error.message);
                // Handle the error gracefully, display a message, or take appropriate action
                setLoading(true);
            }
        };

        fetchData();
        fetchDatas();
    }, []);




    return (
        <>
            <div className="CourseRequest">
                <h1 className="CourseRequestheader2">STUDENT ACADEMIC DETAIL</h1>


                <div className="doremon">
                    <div className="CourseRequestbox1">
                        <div className="CourseRequestbox1Namestudent">
                            <p id="CourseRequesdark">Name</p>
                            <p className="CourseRequestbox1Namestudentnmnm" >Student Name</p>
                        </div>
                        <div className="CourseRequestbox1Namestudentmyname">
                            <p className="CourseRequestbox1Namestudentmynameqlq CourseRequesdark">{Dataofpersonal.name}</p>
                        </div>
                    </div>



                    <div className="CourseRequestbox2">
                        <div className="CourseRequestbox1Namestudent">
                            <p id="CourseRequesdark">Semester</p>
                            <p className="CourseRequestbox1Namestudentnmnm" >Current</p>
                        </div>
                        <div className="CourseRequestbox1Namestudentmyname">
                            <p id="fall031" className="CourseRequestbox1Namestudentmynameqlq CourseRequesdark">Fall 2023</p>
                        </div>
                    </div>




                    <div className="CourseRequestbox3">
                        <div className="CourseRequestbox1Namestudent">
                            <p id="CourseRequesdark">Program</p>
                            <p className="CourseRequestbox1Namestudentnmnm" >Enrolled</p>
                        </div>
                        <div className="CourseRequestbox1Namestudentmyname">
                            <p id="fall032" className="CourseRequestbox1Namestudentmynameqlq CourseRequesdark">{Dataofpersonal.programme}</p>
                        </div>
                    </div>



                    <div className="CourseRequestbox4">
                        <div className="CourseRequestbox1Namestudent">
                            <p id="CourseRequesdark">Program Level</p>
                            <p className="CourseRequestbox1Namestudentnmnm" >Current</p>
                        </div>
                        <div className="CourseRequestbox1Namestudentmyname">
                            <p id="fall033" className="CourseRequestbox1Namestudentmynameqlq CourseRequesdark">{Dataofpersonal.programme}</p>
                        </div>
                    </div>


                </div>
















                <div className="studentcoursegpadata">




                    <div className="CourseRequestbox1box101">
                        <div className="CourseRequestbox1Namestudent">
                            <p id="CourseRequesdark">Batch</p>
                            <p className="CourseRequestbox1Namestudentnmnm" >Student Batch</p>
                        </div>
                        <div className="CourseRequestbox1Namestudentmyname">
                            <p id="fall034" className="CourseRequestbox1Namestudentmynameqlq CourseRequesdark">{Dataofpersonal.id}</p>
                        </div>
                    </div>






                    <div className="CourseRequestbox1box102">
                        <div className="CourseRequestbox1Namestudent">
                            <p id="CourseRequesdark">Credit Hours</p>
                            <p className="CourseRequestbox1Namestudentnmnm " >Maximum Allowed</p>
                        </div>
                        <div className="CourseRequestbox1Namestudentmyname">
                            <p id="fall035" className="CourseRequestbox1Namestudentmynameqlq CourseRequesdark">16</p>
                        </div>
                    </div>









                    <div className="CourseRequestbox1box103">
                        <div className="CourseRequestbox1Namestudent">
                            <p id="CourseRequesdark">Completed Credit Hours</p>
                            <p className="CourseRequestbox1Namestudentnmnm" >Total Earned</p>
                        </div>
                        <div className="CourseRequestbox1Namestudentmyname">
                            <p id="fall036" className="CourseRequestbox1Namestudentmynameqlq CourseRequesdark">132</p>
                        </div>
                    </div>







                    <div className="CourseRequestbox1box104">
                        <div className="CourseRequestbox1Namestudent">
                            <p id="CourseRequesdark">CGPA</p>
                            <p className="CourseRequestbox1Namestudentnmnm" >Earned</p>
                        </div>
                        <div className="CourseRequestbox1Namestudentmyname">
                            <p id="fall037" className="CourseRequestbox1Namestudentmynameqlq CourseRequesdark">2.79</p>
                        </div>
                    </div>









                    <div className="CourseRequestbox1box105">
                        <div className="CourseRequestbox1Namestudent">
                            <p id="CourseRequesdark">Credit Hours</p>
                            <p className="CourseRequestbox1Namestudentnmnm" >Registered+Requested</p>
                        </div>
                        <div className="CourseRequestbox1Namestudentmyname">
                            <p id="fall038" className="CourseRequestbox1Namestudentmynameqlq CourseRequesdark">16</p>
                        </div>
                    </div>






                    <div className="CourseRequestbox1box106">
                        <div className="CourseRequestbox1Namestudent">
                            <p id="CourseRequesdark">Required Credit Hours</p>
                            <p className="CourseRequestbox1Namestudentnmnm" >For Degree Completion</p>
                        </div>
                        <div className="CourseRequestbox1Namestudentmyname">
                            <p id="fall039" className="CourseRequestbox1Namestudentmynameqlq CourseRequesdark">132</p>
                        </div>
                    </div>




                </div>



                <div className="registrescoursesofmr">
                    <h1 id="CourseRequesdark">REGISTERED COURSES</h1>





                    <div id="registrescoursesofmrcoursecodepo" className="registrescoursesofmrcoursecode">

                        <p id="CourseRequesdark" className="registrescoursesofmrcoursecodeone">Course Code</p>
                        <p id="CourseRequesdark" className="registrescoursesofmrcoursecodetwo">Title</p>
                        <p id="CourseRequesdark" className="registrescoursesofmrcoursecodethree">Credit Hours</p>
                        <p id="CourseRequesdark" className="registrescoursesofmrcoursecodefour">Section</p>
                        <p id="CourseRequesdark" className="registrescoursesofmrcoursecodefive">Course Type</p>

                    </div>
                    {Object.keys(Data).length !== 0 ? (Object.keys(Data).map((value, index) => (

                        <div className="registrescoursesofmrcoursecode">

                            <p className="registrescoursesofmrcoursecodeone">{value}</p>
                            <p className="registrescoursesofmrcoursecodetwo">{Data[value].Title}</p>
                            <p className="registrescoursesofmrcoursecodethree">{Data[value]['Cr.Hr']}</p>
                            <p className="registrescoursesofmrcoursecodefour">{Data[value].Section}</p>
                            <p className="registrescoursesofmrcoursecodefive">{Data[value].Type}</p>

                        </div>)

                    )) : Loading===true ? <div class="spinner-border spinner-border-lg m-5" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>:null
                    }














                </div>









            </div>

        </>
    )
}

export default CourseRequest;