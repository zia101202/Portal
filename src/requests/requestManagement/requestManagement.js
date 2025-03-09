import React from "react";
import './requestManagement.css';
import { useState } from "react";
const RequestManagement = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [subOptions, setSubOptions] = useState([]);



    const controlCross = () => {
        // Add your logic here to add a property to the element with id "cross"
        const crossElement = document.querySelector('.prshelpdeskumt');
        if (crossElement) {
            crossElement.style.display = 'none'; // Example: Change background color
        }
    };

    //sub selection code for slelect

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        // Assuming your sub-options are dynamic and fetched based on the selected option.
        // You can replace this with your own logic to fetch sub-options.
        const fetchedSubOptions = fetchSubOptions(selectedValue);
        setSubOptions(fetchedSubOptions);
    };

    const fetchSubOptions = (selectedValue) => {
        // Replace this with your logic to fetch sub-options based on the selected option.
        // For simplicity, let's assume a static mapping for illustration.
        const subOptionsMap = {

            Option6: ['Normal', 'urgent'],

            Option8: ['personal Email'],
            Option9: ['personal Email'],

        };

        return subOptionsMap[selectedValue] || [];
    };


    return (
        <>

            <div className="RequestManagementcontainer">

                <div className="RequestManagementheader">

                    <p>PRS HELP DESK</p>
                    <p className="prshelpdeskumt"> <img src="./images/envelope-solid.svg" /> For queries:<span>prshelpdesk@umt.edu.pk</span><span onClick={controlCross} id="cross">X</span>    </p>
                </div>

                <div className="RequestManagementheaderRequest" >   <span id="RequestType">Request Type *</span>  <span id="RequestsubType">Request Sub Type *</span></div>

                <div className="RequestManagementstoreandwe">



                    <select className="RequestManagementstoreandweone" value={selectedOption} onChange={handleSelectChange}>
                        <option value="">Select...</option>
                        <option value="Option1">Course withdrawal</option>
                        <option value="Option2">Duplicate Sid Card</option>
                        <option value="Option3">Fee</option>
                        <option value="Option4">Grade Review Cases</option>
                        <option value="Option5">Internel Credit Transfer</option>
                        <option value="Option6">Letter</option>
                        <option value="Option7">Personal Data Change</option>
                        <option value="Option8">Programe Change</option>
                        <option value="Option9">Readmission</option>
                        <option value="Option10">Registration</option>
                        <option value="Option11">Scholarship</option>
                        <option value="Option12">Semester Freeze</option>
                        <option value="Option13">Semester unFreeze</option>
                        <option value="Option14">Tax </option>
                        <option value="Option15">University Leave</option>



                    </select>

                    {subOptions.length > 0 && (
                        <div>
                            <label>Select Sub-Option:</label>
                            <select>
                                {subOptions.map((subOption) => (
                                    <option key={subOption} value={subOption}>
                                        {subOption}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}





                    <select className="RequestManagementstoreandwetwo">
                        <option>no option</option>
                    </select>


                </div>

                <div className="RequestManagementstoreandweinput">

                    <p>Request Description/Reason:<span> *</span></p>
                    <div className="RequestManagementstoreandwetextarea"> <textarea rows='9' cols='100' placeholder="Write message..."></textarea></div>
                    <button className="RequestManagementstoreandweinputbtn">Save</button>

                </div>
              

            </div>
        </>
    )
}

export default RequestManagement;