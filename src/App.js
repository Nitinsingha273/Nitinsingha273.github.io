import logo from './transprent-logo.png';
import './App.css';
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <br></br>
          <br></br> <br></br>
          
         
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
          <br></br>
          <br></br>
          <br></br>
        <div className='inputBox'>
          <button id="codebtn">+91</button>
          <input   type="text" maxLength="10" id="mobile" placeholder="Enter Mobile Number"></input>
        </div>
        <div className="continueButton" onClick={()=>{
          let m=document.getElementById("mobile").value;
          const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "token":"717dc2d82d86be210bef206cf512dba9",
              "mobile":{m},
              "action": "Signin_or_Signup",
              "timestamp": 1652446231059
              })
        };
        fetch('https://agcare.platform.simplifii.com/api/v1/get_otp', options)
            .then(response => console.log(response.json()))
            .then(data => console.log(data));
          }}>Continue</div>


          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div id ="comment">
            <p>By continuing you agree to our</p>
            <p id= "yellow"><b>Terms of Service & Privacy Policy</b></p>
          </div>
      </header>
    </div>
  );
}

export default App;

