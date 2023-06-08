import React, { useState } from "react";

import logo from "../assets/gracelinhomelogo.svg";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
function Navbar1() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const [activenavbar, setactivenavbar] = useState(false);
  const changebackground = () => {
    // console.log(window.screenY);
    if (window.scrollY >= 10) {
      setactivenavbar(true);
    } else {
      setactivenavbar(false);
    }
  };

  window.addEventListener("scroll", changebackground);
  return (
    <>
      <header className={activenavbar ? "header active-navbar" : "header"} >
     
          <a href="https://gracelinladieshostel.in">  <img className="navlogo" src={logo} alt="Logo" /></a>
        
        <nav className={`nav-elements  ${showNavbar && "responsive_nav"}`}>
          {/* <a >
            <Link
              activeClass="nav-active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleShowNavbar}
            >
              Home
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-active"
              to="About"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleShowNavbar}  
            >
              About
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-active"
              to="Gallery"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleShowNavbar}
            >
              Gallery
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-active"
              to="Testimonials"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleShowNavbar}
            >
              Testimonials
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={handleShowNavbar}
            >
              Contact
            </Link>
          </a> */}
          <button className="nav-res-close-btn" onClick={handleShowNavbar}>
            <FaTimes />
          </button>
        </nav>
        <a href="tel:+91 7010573022">
          {" "}
          <button className="call-button"> CALL US NOW!</button>
        </a>

        {/* <button className="nav-res-btn" onClick={handleShowNavbar}><FaBars/></button> */}
      </header>
    </>
  );
}

export default Navbar1;
