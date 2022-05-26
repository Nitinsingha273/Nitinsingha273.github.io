import logo from './transprent-logo.png';
import './Signup.css';

import React, { useState } from "react";
import Login from './Login';
function Signup() {
  const [isClicked,setClicked]=useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {!isClicked&&<React.Fragment>
      <div className='inputBox'>
          <button id="codebtn">+91</button>
        <input type="text" maxLength="10" id="mobile" placeholder="Enter Mobile Number"></input>
      </div>
      <div className="continueButton" onClick={()=>{
        let m=document.getElementById("mobile").value;
        console.log(m.length);
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "token":"717dc2d82d86be210bef206cf512dba9",
            "mobile":m,
            "action": "Signin_or_Signup",
            "timestamp": 1652446231059
            })
      };
      fetch('https://agcare.platform.simplifii.com/api/v1/get_otp', options)
          .then(response => console.log(response.json()))
          .then(data =>{ console.log(data)
          setClicked(true)});
        }}>Continue</div></React.Fragment>}

        {isClicked&&<React.Fragment>
          
          <Login/>
         
          {Login}
        </React.Fragment>}
            
    </header>
  </div>
   
  )
}

export default Signup;

