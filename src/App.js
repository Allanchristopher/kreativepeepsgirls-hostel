import React, { useEffect} from "react";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Enquiry from "./components/Enquiry";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() =>{
    window.scrollTo(0,0);
  },[]);
  const handleClick = (button) => {

  };
  
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/Enquiry" element={<Enquiry />} />
    </Routes>
  <Contact />
    <Footer />
    <div className="floating-button-container">
      <a  href="tel:+919486963873">     <button className="floating-button " onClick={() => handleClick(1)}>
        <BiPhoneCall className="Float-btn-size" />
      </button></a>
  <a href='https://wa.me/+919486963873'>   <button
        className="floating-button floating-color"
        onClick={() => handleClick(2)}
      >
        <BsWhatsapp className="Float-btn-size" />
      </button></a>
   
    </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
