import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import akib from "../../img/akib.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: akib,
      review:
        "I am a software engineer who loves to solve problems. For one years. I am working in web based applications on frontend and  modern technologies like Html5, Material UI, ReactJs, NextJs Etc.  I believe I would make an excellent addition to any team.",
    },
    {
      img: akib,
      review:
        "I am alos a mobile app developer both on android and ios using technology React Native and javascript. I would request you to above, to see live examples of my work.",
    },
   
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
