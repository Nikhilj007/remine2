import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { logo, car, scooty,bulb } from "../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./About.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function About() {
  return (
    <div className="min-h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={car} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bulb} alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://namoewaste.com/wp-content/uploads/2022/12/Namo-Nov-2022-5.png' alt="" /></SwiperSlide>
        <SwiperSlide><img src={scooty} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
}

