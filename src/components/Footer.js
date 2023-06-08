import React from "react";
import "./Footer.css";
import Footerimg from "../assets/footerlogo.svg";
import callicon from "../assets/callicon.svg";
import mailicon from "../assets/mailicon.svg";
import locationicon from "../assets/locationicon.svg";
import fb from "../assets/fbicon.svg";
import twitter from "../assets/twittericon.svg";
import linkedin from "../assets/linkedin.svg";
import insta from "../assets/instaicon.svg";
import { Link } from "react-scroll";
function Footer() {
  return (
    <div className="Total-footer">
      <div className="Footer-res" data-aos="fade-up">
        <div className="Footer">
          <div className="Footer-logo-text">
          <Link
          activeClass="nothing"
          to="Home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        ><img className="Footer_img" src={Footerimg} alt="Logo" /></Link>
            
            <p>
              We look forward to welcoming you to our hostel. Come and
              experience the perfect blend of comfort, affordability, and
              friendly hospitality. Book your stay with us today and create
              unforgettable memories that will last a lifetime!
            </p>

            <div className="social-icon-container">
            <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/">
              <img className="social-icon" src={fb} alt="Icon" />
            </a>
            <a href="https://www.instagram.com/gracelin_ladies_hostel/?igshid=MzNlNGNkZWQ4Mg==">
              <img className="social-icon" src={insta} alt="Icon" />
            </a>
          </div>
          </div>
          <div className="Footer-page">
            <h2>Pages</h2>
            <div className="pages-container">
              <a>
                <Link
                  activeClass="nav-a-active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}

                >
                  Home
                </Link>
              </a>
              <a>
                <Link
                  activeClass="nav-a-active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  About
                </Link>
              </a>
              <a>
                <Link
                  activeClass="nav-a-active"
                  to="Gallery"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Gallery
                </Link>
              </a>
              <a>
                <Link
                  activeClass="nav-a-active"
                  to="Testimonials"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Testimonials
                </Link>
              </a>
              <a>
                <Link
                  activeClass="nav-a-active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  Contact
                </Link>
              </a>
            </div>
          </div>
          <div className="Footer-contact">
            <h2>Contact</h2>
            <div className="Contact-footer-container">
              <a href="tel:9486963873">
                <span>
                  <img className="Footer-icon" src={callicon} alt="Icon" />
                </span>
                +91 9486963873   ,<a href="tel:+91 7010573022">+91 7010573022</a>
              </a>
              <a href="mailto:gracelinhomeforladies@gmail.com">
                <span>
                  <img className="Footer-icon" src={mailicon} alt="Icon" />
                </span>
                gracelinhomeforladies@gmail.com
              </a>
              <a href="https://goo.gl/maps/UBYodC6DiYUewMda8?coh=178572&entry=tt">
                <span>
                  <img className="Footer-icon" src={locationicon} alt="Icon" />
                </span>
                6, Ezhil Nagar, Melagaram,Tenkasi 627 818
              </a>
              <a href="https://goo.gl/maps/8sQE3CrV3tbbVHPD7?coh=178572&entry=tt">
              <span>
                <img className="Footer-icon" src={locationicon} alt="Icon" />
              </span>
              13, Kamaraj Colony, Samathanapuram,<br/> Palayamkottai, Tirunelveli 627 002
            </a>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
}

export default Footer;
