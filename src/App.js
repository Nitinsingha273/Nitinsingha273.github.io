import React from "react"; 
// import { Component } from 'react';
// import { Routes, Switch } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
// import { Switch } from "react-router-dom";
// import Switch from 'react-router-dom'
// import Login from "./Login";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
