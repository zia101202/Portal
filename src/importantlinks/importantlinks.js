import React from "react";
import "./importantlink.css"
import { BrowserRouter as Router, Routes,Rouute,Link } from "react-router-dom";
const ImportantLink = () => {

    return (

        <>
            <div className="importantlinkscontainer">
                <h1>Important Links</h1>



                <div className="importantlinkscontainerlinks">

                 <div className="importantlinkscontainerlinks1"><img src="./calendar-days-solid.svg"/>   <Link className="linklinklink" to="https://events.umt.edu.pk/"><p>UMT Events</p></Link> </div>
                    <div className="importantlinkscontainerlinks2"><img src="./newspaper-solid.svg"/>  <Link className="linklinklinks" to="https://www.umt.edu.pk/News/Default.aspx"><p>UMT NEWS</p></Link> </div>
                    <div className="importantlinkscontainerlinks3"><img src="./users-solid.svg"/>  <Link className="linklinklink" to="https://www.umt.edu.pk/Life-at-UMT/Clubs-Societies.aspx"><p>UMT CLUBS AND SOCIETIES</p></Link> </div>
                    <div className="importantlinkscontainerlinks4"><img src="./user-tag-solid.svg"/>  <Link className="linklinklinks" to="https://alumni.umt.edu.pk/CardBenefits.aspx"><p>STUDENT DISCOUNT</p></Link> </div>
                    <div className="importantlinkscontainerlinks5"><img src="./bookmark-solid.svg"/>  <Link className="linklinklink" to="https://placements.umt.edu.pk/corporate-liaison/mous"><p>CORPORATE DISCOUNTS</p></Link> </div>
                    <div className="importantlinkscontainerlinks6"><img src="./book-open-solid.svg"/>  <Link className="linklinklinks" to="https://lrc.umt.edu.pk/"><p>UMT LIBRARY</p></Link> </div>
                </div>

            </div>

        </>
    )
}

export default ImportantLink;