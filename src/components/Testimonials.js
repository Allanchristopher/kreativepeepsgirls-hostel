import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testimonials() {
  const settings = {
    infinite: true,
    className: "center",
    centerMode: true,
    speed: 1000,
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          centerPadding: "25px",
        },
      },
    ],
  };
  return (
    <div className="Testimonials">
      <div className="Testimonials-res">
        {" "}
        <div className="Testimonials-text" data-aos="fade-up">
          <h1>
            What people say
            <br />
            <span>about Us.</span>
          </h1>
          <p>
            Our Boarders send us bunch of smilies with our services and we love
            them.
          </p>
        </div>
        <div className="Testimonials-container" data-aos="fade-up">
          <div className="test-container">
            <Slider {...settings}>
              <div className="test-1 ">
                <p>“ Nice environment Food is good ”</p>
                <span>
                  <h2>Issai Kutties</h2>
                </span>
              </div>
              <div className="test-1">
                <p>
                 “Rooms are good, nice place to stay ”
                </p>
                <span>
                  <h2> Sambeth R</h2>
                </span>
              </div>
              <div className="test-1">
                <p>
                  “Great environment and good food provided”
                </p>
                <span>
                  <h2> Nanthini M</h2>
                </span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
