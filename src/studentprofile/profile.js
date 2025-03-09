import React from 'react';
import './profile.css';

function Profile() {



    return (
        <>
            <div className='profile'>
                <h1 className='profileheader'>STUDENT BIOGRAPHY</h1>
                <div><input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /><label className='profilecheckbox' > Hide Profile Picture In Batch Information. </label></div>  
                <p>Biography:  <span className='star'>*</span></p>
                <p className='profilelimit1'>(Max 600 characters are allowed) </p>

                <textarea id="w3review" name="w3review" rows="15" cols="100"></textarea>
         
                <p>Interest Areas: <span className='star'>*</span> </p>

                <p className='profilelimit2'>(Max 300 characters are allowed)  </p>
                <textarea id="w3review" name="w3review" rows="6" cols="100"></textarea>
                <button className='profilebutton'>save</button>

            </div>

        </>
    )
}

export default Profile;