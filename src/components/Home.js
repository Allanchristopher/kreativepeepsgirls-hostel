import React,{useState,useEffect} from "react";
import "./Home.css";
import Home_img from "../assets/home-img.svg";
import Navbar from "./Navbar";
import About from "./About";
import { Modal } from "antd";
import enquiryimg from "../assets/enquirysvg.svg";
import Testimonials from '../components/Testimonials'
import Gallery from "./Gallery";
function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line no-undef
      setIsModalOpen(true);
    }, 10000); // Delay in milliseconds (20 seconds)

    return () => clearTimeout(timer);
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
     <Modal
          centered
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={1000}
        >
          <div className="modal-container">
            <div className="modal-text" >
              <h1 >
                We are here to<br/>
                <span>Help </span>you!
              </h1>
              <p >
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
              <a href="/Enquiry">
              <button className="Enquiry" > ENQUIRY</button>
            </a>
            </div>
            <div >
            <img className="popup_img " src={enquiryimg} alt="enquiry-img"/>
            </div>
          </div>
        </Modal>
        <Navbar />
      <div className="Home">
        <div className="Home-res">
          <div className="Home-content">
            <h1 data-aos="fade-right">
              Gracelin <span>Ladies Hostel</span>
              <br />
              The perfect blend of <span>comfort </span> and <span>affordability</span>.
            </h1>
            <p data-aos="fade-right">
              Are you looking for an affordable, comfortable, and welcoming
              place to stay? look no further than our hostel
            </p>
            <a href="/Enquiry">
              <button className="Enquiry" data-aos="fade-right"> ENQUIRY</button>
            </a>
          </div>
          <div className="Home-picture">
            <img className="Home_img" src={Home_img} alt="Home-img" data-aos="fade-left" />
          </div>
        </div>
      </div>

    <About/>
    <Gallery/>
      <Testimonials />
    </>
  );
}

export default Home;
