import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import online from "../../img/online.PNG";
import matri from "../../img/matri.PNG";
import sell from "../../img/sell.PNG";
import kistimath from "../../img/kistiamth.jpeg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://play.google.com/store/apps/details?id=com.kistimath.kistimathapp" target='blank'>
          <img style={{height: '220px',width:'150px'}} src={kistimath} alt="" />
          <p>kistimath App</p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://upa.b2gsoft.xyz/npm start" target='blank'>
          <img src={online} alt="" />
          <p>Online game</p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://matrimony.b2gsoft.xyz/" target='blank'>
          <img src={matri} alt="" />
          <p>Matrimony</p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://sellmart.com.bd/" target='blank'>
          <img style={{height: '200px'}} src={sell} alt="" />
          <p>Sell Mart</p>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
