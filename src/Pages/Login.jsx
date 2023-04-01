import React from 'react';
import "./css/Mainpages.css"
function Login(){
     return(
        <div className="loginbox">
		
          <div className="loginpagediv">
    <div>
    <h1>Welcome Back !</h1>
    <label>Email Address</label><br/>
    <input type="text" placeholder="name@gmail.com"/>
    <br/>
    <label>Password </label><br/>
    <input type="password" placeholder="Password"/>
   
    </div>
    <div className="divforremeberme">
        <label>
           <input type="checkbox" />Remember me
        </label>
           <span className="pan"><a href="#" onClick="showfor()">Forgot password?</a></span>
    </div>
    
   <button className="loginbutton">Login </button>
   <div className="next">
        <p>Don't have a account </p><p><a >Register</a></p>
        <p>or </p><p><a href="#"> </a></p>
   </div>
  </div>
        </div>
        );
		}
export default Login;