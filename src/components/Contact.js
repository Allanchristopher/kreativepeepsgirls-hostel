import React, { useState,useRef } from "react";
import "./Contact.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../assets/locationmarker.svg";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { Modal } from "antd";
import emailjs from "@emailjs/browser";
import { message } from "antd";
function MapComponent() {
  const locations = [
    { position: [8.72479, 77.74452], name: "Thirunelveli" },
    { position: [8.95729, 77.29232], name: "Thenkasi" },
  ];
  const bounds = L.latLngBounds(locations.map((location) => location.position));
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  return (
    <MapContainer bounds={bounds} className="leaf-let-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={customIcon}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

function Contact() {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xxrcgdm",
        "template_i6mrqnk",
        form.current,
        "MxDFTViY7UvoGCmS3"
      )
      .then(
        (result) => {
          console.log(result.text);
          messageApi.open({
            type: "success",
            content: "Message send",
            style: {
              marginTop: "20vh",
            },
          });
        },
        (error) => {
          console.log(error.text);
          messageApi.open({
            type: "error",
            content: "Message not send please sent again",
            style: {
              marginTop: "20vh",
            },
          });
        }
      );
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="Contact">
      <div className="Contact-res computer-view">
        {" "}
        <div className="contact-black-background" ></div>
        <div className="Contact-container-1">
          <h1 data-aos="fade-up">
            Get in <span>Touch</span>
          </h1>
          <p data-aos="fade-up">
            If you have any questions, comments, or special requests, please
            don't <br />
            hesitate to get in touch with us.
          </p>
          {contextHolder}
          <form className="Contact-inputs"
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          >
            <input
              className="text-input"
              placeholder="Name"
              type="text"
              required="required"
              name="from_name"
            ></input>
            <input
              className="text-input"
              placeholder="Email"
              type="email"
              required="required"
              name="email_id"
            ></input>
            <textarea
              className="input-textarea"
              placeholder="Enter the Message"
              required="required"
              name="message"
            ></textarea>
            <button className="Send-btn" >SEND</button>
          </form>
          <div className="call-get">
            <a href="tel:+91 7010573022">
              <button className="call-get-btn">Call Now!</button>
            </a>
            <a>
              <button className="call-get-btn" onClick={showModal}>
                Get directions
              </button>
              <Modal
                centered
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={760}
              >
                <div  className="direction-controler">   <div className="direction-text">
                  <h1>
                    Choose <span>Branch</span>
                  </h1>
                  <p>Choose the branch to get directions</p>
                </div>
                <div className="direction-btn" data-aos="fade-up">
                  <a href="https://goo.gl/maps/UBYodC6DiYUewMda8?coh=178572&entry=tt"><button className="tenkasi-btn" data-aos="fade-up">Tenkasi</button></a>
                  <a href="https://goo.gl/maps/8sQE3CrV3tbbVHPD7?coh=178572&entry=tt"><button className="tirunelveli-btn" data-aos="fade-up">Tirunelveli</button></a>
                  
                </div></div>
             
              </Modal>
            </a>
          </div>
        </div>
        <div className="Contact-container-2" data-aos="fade-up">
          <div className="map">
            <MapComponent className="leaf-let-map" data-aos="fade-up"/>
          </div>
        </div>
      </div>
      <div className="Contact-res mobile-view">
        {" "}
        <div className="contact-black-background" ></div>
        <div className="Contact-container-2" data-aos="fade-up">
          <div className="map">
            <MapComponent className="leaf-let-map" data-aos="fade-up"/>
          </div>
        </div>
        <div className="Contact-container-1">
          <h1 data-aos="fade-up">
            Get in <span>Touch</span>
          </h1>
          <p data-aos="fade-up">
            If you have any questions, comments, or special requests, please
            don't <br />
            hesitate to get in touch with us.
          </p>
          {contextHolder}
          <form className="Contact-inputs"
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          >
            <input
              className="text-input"
              placeholder="Name"
              type="text"
              required="required"
              name="from_name"
            ></input>
            <input
              className="text-input"
              placeholder="Email"
              type="email"
              required="required"
              name="email_id"
            ></input>
            <textarea
              className="input-textarea"
              placeholder="Enter the Message"
              required="required"
              name="message"
            ></textarea>
            <button className="Send-btn" >SEND</button>
          </form>
          <div className="call-get">
            <a href="tel:+91 7010573022">
              <button className="call-get-btn">Call Now!</button>
            </a>
            <a>
              <button className="call-get-btn" onClick={showModal}>
                Get directions
              </button>
              <Modal
                centered
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={760}
              >
                <div  className="direction-controler">   <div className="direction-text">
                  <h1>
                    Choose <span>Branch</span>
                  </h1>
                  <p>Choose the branch to get directions</p>
                </div>
                <div className="direction-btn" data-aos="fade-up">
                  <a href="https://goo.gl/maps/UBYodC6DiYUewMda8?coh=178572&entry=tt"><button className="tenkasi-btn" data-aos="fade-up">Tenkasi</button></a>
                  <a href="https://goo.gl/maps/8sQE3CrV3tbbVHPD7?coh=178572&entry=tt"><button className="tirunelveli-btn" data-aos="fade-up">Tirunelveli</button></a>
                  
                </div></div>
             
              </Modal>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
