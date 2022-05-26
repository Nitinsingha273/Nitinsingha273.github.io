import React from "react"; 

import { Routes, Route } from 'react-router-dom';


// import './App.css';
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
   <>
    <Routes>

    
    
    <Route path="/" element={<Signup/>}/>
    <Route   path='/login' element={<Login/>} />
    <Route  path='/Login' component={Login} />
   

    </Routes>


    </>
  );
}

export default App;
