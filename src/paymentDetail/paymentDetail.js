import React from "react";
import './paymentDetail.css';
import db from "../backend/firebae.mjs";
import { useState } from "react";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
const PaymentDetails = () => {

    const [Data, setdata] = useState({});



    useEffect(() => {

        async function waite() {
            try {
                const collectionRef = doc(db, "f2020065264", "feeHistory");
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
            <div className="Toppaymentmainheader">
                <div className="Toppaywidth">
                    <div className="paymentmainheader"><h1>PAYMENT DETAIL</h1>
                        <p>University of Management and Technology</p>
                    </div>
                    <p className="historyheader">Payments History</p>
                    <div className="studentDetail1">
                        <span className="studentDetail2">Student ID:</span>
                        <span className="studentDetail3">Name:</span>
                        <div className="studentDetail156"> <span className="studentDetail4">Program:</span>
                            <span className="studentDetail5">Batch:</span>
                            <span className="studentDetail6">Date:</span></div>

                    </div>

                    <table className="tableheader">
                        <tr>
                            <th className="tableheader1">Payment Date</th>
                            <th className="tableheader2">Challan No</th>
                            <th className="tableheader3"> Account</th>
                            <th className="tableheader4"> Ammount</th>
                            <th className="tableheader5">Bank</th>
                        </tr>



                        {Object.keys(Data).forEach(semester => {
                            console.log(`Semester: ${semester}`);

                            Object.entries(Data[semester]).forEach(([courseCode, course]) => {
                                console.log(`  Course Code: ${courseCode}`);

                                Object.entries(course).forEach(([key, value]) => {
                                    <tr >
                                    <th className="tableheader1">{value}</th>
                                    <th className="tableheader2">{value}</th>
                                    <th className="tableheader3">{value} </th>
                                    <th className="tableheader4">{value} </th>
                                    <th className="tableheader5">{value}</th>
                                </tr>
                                });
                            });
                        })}
                      

                    </table>


                </div>


            </div>


        </>
    )
}
export default PaymentDetails;