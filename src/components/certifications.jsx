// Certifications.js
import React, { useState } from 'react';


import "../css/certifications.css"

import gitLogo from "../images/skillsLogo/git.png";
import cpp from "../images/skillsLogo/cpp.png";
import cssLogo from "../images/skillsLogo/css.png";
import java from "../images/skillsLogo/java.png";
import javascript from "../images/skillsLogo/javascript.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';

function Certifications() {
    
  
    return (
      <div className="certification-carousel">
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
    );
}

export default Certifications;
