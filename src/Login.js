import React from "react";
import "./Login.css";
import "./Login.js";
import { useLinkClickHandler } from "react-router-dom";


function Login(){
    function clickhandler()
    {
        alert("You are sucessfully logged In")
    }
    return (
        <body id='body1'>
       
           <b><p id="G">   OTP </p></b> 
           <b><p id="H">   Verification </p></b> 
           <p id="I">OTP has been sent to +91 {}</p>
        
        
        <div className="container2">
            <span>
           <input
           maxLength={1}
           type="text"
           id="input-field"
           
           
           />
            <input
           maxLength={1}
           type="text"
           id="input-field"
           />
            <input
           maxLength={1}
           type="text"
           id="input-field"
           />
            <input
           maxLength={1}
           type="text"
           id="input-field"
           />
            <input
           maxLength={1}
           type="text"
           id="input-field"
           />
            <input
           maxLength={1}  
           type="text"
           id="input-field"
           />
           </span>

        </div>
        <div className="continueB " onClick={clickhandler}>Continue</div>

        </body>

    );
}
export default Login;