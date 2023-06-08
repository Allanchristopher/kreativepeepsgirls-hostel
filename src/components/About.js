import React from "react";
import "./About.css";
// import About_img from "../assets/Aboutimg.svg";
function About() {
  return (
    <div className="About">
      <div className="About-res">
        <div className="about-text">
          <h1 data-aos="fade-up">
            About<span>Us</span>
          </h1>
          <div className="about-photo extra-about-img" >
          <img className="About_img" src= "https://drive.google.com/uc?id=1oIaKsu1gnntk7OZ3MlOBQ0mJZhyuiZgV" alt="Home-img" data-aos="fade-up"/>
        </div>
          <p data-aos="fade-up">
            We are a vibrant and affordable hostel located in Tenkasi and
            Tirunelveli. With a passion for hospitality and creating memorable
            experiences, we strive to provide a comfortable and welcoming
            atmosphere for womans.
            <br />
            <br />
            <br />
            Our hostel offers a range of accommodation options to suit your
            needs, Each room is designed with your comfort in mind, featuring
            well furnished rooms, storage lockers, and modern amenities.
          </p>
        </div>
        <div className="about-photo about-img1" >
          <img className="About_img" src= "https://drive.google.com/uc?id=1oIaKsu1gnntk7OZ3MlOBQ0mJZhyuiZgV" alt="Home-img" data-aos="fade-up"/>
        </div>
      </div>
    </div>
  );
}

export default About;
