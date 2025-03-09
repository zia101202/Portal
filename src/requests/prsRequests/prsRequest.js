import React from "react";
import './prsRequest.css';

const PrsRequest=()=>{

    return(

        <>
       <div className="PrsRequestcontainer">

        <div className="PrsRequestheader">

            <p>REQUESTS</p>
        </div>
        <div className="RecievePrsRequestheaderrow">


            <th  className="prsrequestName">Name</th>
            <th className="prsrequestStatus">Status</th>
            <th className="prsrequestRequestCategory">Request Category</th>
            <th className="prsrequestRequestType">Request Type</th>
            <th className="prsrequestDescription">Description</th>
        </div>




        <div className="RecievePrsRequestheaderrowuser">


<th  className="prsrequestNameuser">Name</th>
<th className="prsrequestStatususer"><span>Status</span></th>
<th className="prsrequestRequestCategoryuser">Request Category</th>
<th className="prsrequestRequestTypeuser">Request Type</th>
<th className="prsrequestDescriptionuser">Description</th>
</div>
        </div> 
        </>
    )
}

export default PrsRequest;





