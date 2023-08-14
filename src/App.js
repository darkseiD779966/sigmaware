import React,{useState} from "react";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Page1 from "./Page1";
import About from "./About";
import Projects from "./pages/Projects";
import Maintainance from './pages/Maintainance';
import Management from "./pages/Management";
import Navigation from "./Navigation";
import Contact from "./Contact";


function App() {
  
  return (
<Router>
  <Navigation />
  <Routes>
    <Route path="/" element={<Page1 />} />
    <Route path="/About" element={<About/>} />
    <Route path ="/contact" element={<Contact />} />
    <Route path="/Services/Projects" element={<Projects/>} />
    <Route path="/Services/Maintainance" element={<Maintainance />} />
    <Route path="/Services/ITmanagement" element={<Management />} />

  </Routes>
</Router>
  );
}

export default App;
