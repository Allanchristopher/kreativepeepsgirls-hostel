import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import "./Enquiry.css";
import enquiryimg from "../assets/enquirysvg.svg";
import Navbar1 from "./Navbar1";

function Enquiry() {
  const [Location, setLocation] = useState("");
  const [Cot, setCot] = useState("");
  const [Food, setFood] = useState("");
  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");

  const handleChange1 = (event) => {
    setLocation(event.target.value);
  };

  const handleChange2 = (event) => {
    setCot(event.target.value);
  };

  const handleChange3 = (event) => {
    setFood(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Name: ${Name}\nMobile Number: ${Mobile}\nLocation: ${Location}\nCot Type: ${Cot}\nFood: ${Food}`;

    const whatsappUrl = `https://wa.me/+9486963873/?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Navbar1 />
      <div className="Enquiry-form">
        <div className="Enquiry-res">
          <div className="enquiry-form-container">
            <div className="enquiry-form-text">
              <h1>Enquiry</h1>
              <p>
                We value your interest in our hostel and appreciate the
                opportunity to assist you.
              </p>
            </div>
            <form className="enquiry-input-form" onSubmit={handleSubmit}>
              <input
                className="enquiry-text-input"
                placeholder="Name"
                type="text"
                required="required"
                value={Name}
                onChange={(event) => setName(event.target.value)}
              ></input>
              <input
                className="enquiry-text-input"
                placeholder="Mobile Number"
                type="tel"
                required="required"
                value={Mobile}
                onChange={(event) => setMobile(event.target.value)}
              ></input>

              <Select
                className="location-selector"
                value={Location}
                onChange={handleChange1}
                displayEmpty
                renderValue={(selected) =>
                  selected ? selected : "Choose Location"
                }
                style={{ fontSize: "14px", color: "#828282" }}
              >
                <MenuItem disabled value="">
                  Choose Location
                </MenuItem>
                <MenuItem value={"Tirunelveli"}>Tirunelveli</MenuItem>
                <MenuItem value={"Tenkasi"}>Tenkasi</MenuItem>
              </Select>
              <Select
                className="location-selector"
                value={Cot}
                onChange={handleChange2}
                displayEmpty
                renderValue={(selected) => (selected ? selected : "Cot Type")}
                style={{ fontSize: "14px", color: "#828282" }}
              >
                <MenuItem disabled value="">
                  Cot Type
                </MenuItem>
                <MenuItem value={"Single Cot"}>Single Cot</MenuItem>
                <MenuItem value={"Double Cot"}>Double Cot</MenuItem>
                <MenuItem value={"Triple Cot"}>Triple Cot</MenuItem>
              </Select>
              <Select
                className="location-selector"
                value={Food}
                onChange={handleChange3}
                displayEmpty
                renderValue={(selected) =>
                  selected ? selected : "Choose Food"
                }
                style={{ fontSize: "14px", color: "#828282" }}
              >
                <MenuItem disabled value="">
                  Choose Food
                </MenuItem>
                <MenuItem value={"Veg"}>Veg</MenuItem>
                <MenuItem value={"Non-Veg"}>Non-Veg</MenuItem>
                <MenuItem value={"Without-Food"}>Without-Food</MenuItem>
              </Select>

              <button className="Submit-btn" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
          <div className="enquiry-image-container">
            <img className="enquiry_img" src={enquiryimg} alt="enquiry-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Enquiry;