import React, { useState } from "react";
import "./Gallery.css";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function Gallery() {
  let Galleryimg1 =
    "https://drive.google.com/uc?id=1iO-DGPl-rj0oU8mhVqgURlCd58JWMh0Y";
  let Galleryimg2 =
    "https://drive.google.com/uc?id=1nLZKM96E41TdRIBPDKbaalp3pTPmYbB-";
  let Gallerymobileimg1 =
    "https://drive.google.com/uc?id=18qAQ6p741D2WiPmVXyfdJrOB-v7uod7N";
  let Gallerymobileimg2 =
    "https://drive.google.com/uc?id=1gjVSG5TE9pyW9vO53Fkq_gAxyGcL7z-r";
  const images = [Galleryimg1, Galleryimg2];
  const mobileimages = [Gallerymobileimg1, Gallerymobileimg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentmobileImageIndex, setCurrentmobileImageIndex] = useState(0);
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handlemobileNextImage = () => {
    setCurrentmobileImageIndex(
      (prevIndex) => (prevIndex + 1) % mobileimages.length
    );
  };
  const handlemobilePreviousImage = () => {
    setCurrentmobileImageIndex(
      (prevIndex) => (prevIndex - 1 + mobileimages.length) % mobileimages.length
    );
  };
  return (
    <div className="Gallery" data-aos="fade-up">
      <div className="Gallery-res">
        <div className="gallery-text">
          <h1>
            A Photo Gallery of Our <span>Hostel</span>
          </h1>
          <p>
            Here you will find a collection of photos showcasing the vibrant
            atmosphere and unique features of our hostel.
          </p>
          <div className="next-pre-container">
            <button onClick={handlePreviousImage} className="Gallery-pre-btn">
              <BsArrowLeftShort className="Gallery-pre-btn-icon" />
            </button>
            <button onClick={handleNextImage} className="Gallery-next-btn">
              <BsArrowRightShort className="Gallery-next-btn-icon" />
            </button>
          </div>
        </div>
        <div className="img-container">
          <img
            className="gallery-background"
            src={images[currentImageIndex]}
            alt="img"
          />
        </div>
        <div className="mobile-img-container">
          <img
            className="mobile-gallery-background"
            src={mobileimages[currentmobileImageIndex]}
            alt="img"
          />
          <div className="mobile-next-btn">
            <button
              onClick={handlemobilePreviousImage}
              className="Gallery-pre-btn"
            >
              <BsArrowLeftShort className="Gallery-pre-btn-icon" />
            </button>
            <button
              onClick={handlemobileNextImage}
              className="Gallery-next-btn"
            >
              <BsArrowRightShort className="Gallery-next-btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
