import React from "react";
import './login.css';

const Login=()=>{


return(
    <>

<body className="loginbody">

<div class='login'>

<div class='logo'><img src="./images/logo.png"></img></div>
<p1 class='title'>Participant Sign in</p1>
<div class='input'> <label><input  id="transistion" type="text"  className="id" placeholder="UMT Student ID/Email"/></label>
 <label><input   id="transistion" type="text" className="password" placeholder="Password"/></label></div>

<label> <input id="transistion" placeholder="Code"  type="text" className="code"/> <input   id="transistion" placeholder="captcha" className="captcha"/> </label> 

<p class='p'>Create New Account...</p>
<p class='p'>Forgot Password ?</p>
<p class='p'>Click Here For alumni Access</p>
<button id="logbtn">SIGN IN</button>

</div>
</body>



  
   

    
    
    </>
)

}

export default Login;