import logo from './logo.svg';
import './App.css';
import React from "react";
//import 'bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import  Contact  from "./pages/Contact";
import  About  from "./pages/About";
import Gallery from "./pages/Gallery";
import NavBar from "./components/navbar"



function App() {
  return (
    <>
    <div className="App">
      <Router>
        <NavBar />
      </Router>
    </div>
    </>
  );
}

export default App;
