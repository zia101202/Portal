import React from "react";
import './mycourses.css';
import { doc, getDoc } from "firebase/firestore";
import db from "../backend/firebae.mjs";
import { useState } from "react";
import { useEffect } from "react";

const Mycourses = () => {

  const [Data, setdata] = useState({});
const [Loading,setLoading]=useState(false);

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
        setLoading(true);
      }
    };

    fetchData();
  }, []);





  return (

    <>
      <div className="mycourses">
        <div className="coursedetailbox"><h1 className="REGISTEREDCOURSES">REGISTERED COURSES</h1>
          <table className="courseDetails">
            <tr className="courseRow">
              <th className="courseDetails1">ID</th>
              <th className="courseDetails2">Title</th>
              <th className="courseDetails3">Cr.Hr</th>
              <th className="courseDetails3">Type</th>
              <th className="courseDetails4">Faculty</th>
              <th className="courseDetails5">Email</th>
              <th className="courseDetails6">Mode</th>
              <th className="courseDetails7">Section</th>
              <th className="courseDetails8">Semester</th>
              <th className="courseDetails9">Assesment</th>
              <th className="courseDetails10"> Attendance</th>
            </tr>
          </table>

          {Object.keys(Data).length !== 0 ? (Object.keys(Data).map((value, index) => (

            <table id="mapregisterdcourse120" className="courseDetails">
              <tr className="courseRow">
                <th className="courseDetails1">{value}</th>
                <th className="courseDetails2">{Data[value].Title}</th>
                <th className="courseDetails3">{Data[value]['Cr.Hr']}</th>
                <th className="courseDetails3">{Data[value].Type}</th>
                <th className="courseDetails4">{Data[value].Faculty}</th>
                <th className="courseDetails5">{Data[value].Email}</th>
                <th className="courseDetails6">{Data[value].Mode}</th>
                <th className="courseDetails7">{Data[value].Section}</th>
                <th className="courseDetails8">{Data[value].Semester}</th>

                <th className="courseDetails9" ><img src="./images/note2-svgrepo-com.svg"></img></th>
                <th className="courseDetails10"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                </svg></th>


              </tr>
            </table>
          )




          )) : Loading===true ? <div class="spinner-border spinner-border-lg m-5" role="status">
            <span class="sr-only">Loading...</span>
          </div> :null
          }

        </div>


      </div>

    </>
  )
}

export default Mycourses;