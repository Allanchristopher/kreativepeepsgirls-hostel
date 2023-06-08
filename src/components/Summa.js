import React from 'react';
import "./Summa.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Summa() {
    const settings = {
        dots: true,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false
      };
    
  return (
    <div>
     <Slider {...settings}>
        {/* Add your carousel slides here */}
        <div className="carousel-slide">
          <h3>Slide 1</h3>
        </div>
        <div className="carousel-slide">
          <h3>Slide 2</h3>
        </div>
        <div className="carousel-slide">
          <h3>Slide 3</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Summa
