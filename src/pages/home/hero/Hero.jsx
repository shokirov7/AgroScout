import React, { useRef } from "react";
import "./Hero.scss";
import drone from "../../../assets/img/drone.svg";
import layout from "../../../assets/img/layout1.png";
import bgg from "../../../assets/img/bgg.png";
import bg2 from "../../../assets/img/bg2.png";
import bg6 from "../../../assets/img/bg6.jpg";
import bg5 from "../../../assets/img/bg5.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

function Hero() {
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };
  

  return (
    <section className="home_hero">
      <div className="home_hero_content">
        <h1 className="home_hero_title">
          AgroScout - беспилотные технологии для сельского хозяйства и
          промышлености
        </h1>
        <div className="pagination">
          <svg
            className="plash"
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="98"
            viewBox="0 0 160 98"
            fill="none"
          >
            <path
              d="M5.98662 16.2634L5.96472 16.1881L5.92081 16.1231C5.75892 15.8835 5.58018 15.4707 5.38995 14.8875C5.20301 14.3144 5.0167 13.6145 4.82725 12.8269C4.60197 11.8904 4.37761 10.8536 4.14454 9.77659C3.9833 9.0315 3.8179 8.26717 3.64515 7.50349C3.2269 5.65453 2.76912 3.82688 2.24042 2.40356C2.0473 1.88365 1.84047 1.40581 1.6165 0.99487C14.6629 4.74736 28.6734 7.21514 42.787 9.70107C49.3995 10.8658 56.0346 12.0345 62.6038 13.3411C83.8626 17.5697 104.482 23.2487 121.694 34.8918L121.694 34.892C142.294 48.8053 158.88 71.6699 159.487 97.2853C151.282 94.3809 142.555 92.501 133.781 90.8482C131.412 90.402 129.041 89.9725 126.675 89.5441C120.023 88.3391 113.415 87.1422 107.027 85.6037C64.0615 75.1422 19.7126 63.4836 5.98662 16.2634Z"
              fill="#1B1C1D"
              stroke="#02E602"
            />
          </svg>
          <div className="handle_slider">
            <AiOutlineArrowLeft onClick={handlePrev} />
            <AiOutlineArrowRight onClick={handleNext} />
          </div>
        </div>
        <div className="hero_drone">
          <svg
            className="hero_rope"
            xmlns="http://www.w3.org/2000/svg"
            width="833"
            height="104"
            viewBox="0 0 833 104"
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
              d="M0 35.3005C46.0413 24.6991 93.5424 20.0751 140.707 21.4284C176.641 22.4435 236.495 20.8645 265.243 46.5787C280.178 59.9996 288.376 86.7288 267.264 98.9092C236.495 116.616 213.25 72.18 245.816 54.4734C255.361 49.2854 266.478 47.8193 277.258 46.8042C329.364 41.8419 379.897 47.932 431.89 51.3155C510.722 56.5034 588.992 57.5185 667.374 46.3531C725.207 38.0073 781.916 33.2705 832 0"
              stroke="#02E602"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-dasharray="12 12"
            />
          </svg>
          <img src={drone} alt="" />
        </div>
        <div className="home_hero_blocks">
          <div className="home_hero_block">
            <h3 className="home_hero_block_title">50 000 Га</h3>
            <span className="home_hero_block_desc">ежегодной обработки</span>
          </div>
          <div className="home_hero_block">
            <h3 className="home_hero_block_title">30%</h3>
            <span className="home_hero_block_desc">экономии средств</span>
          </div>
          <div className="home_hero_block">
            <h3 className="home_hero_block_title">10 команд</h3>
            <span className="home_hero_block_desc">специалистов</span>
          </div>
        </div>
      </div>
      <div className="layout">
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          ref={SlideRef}
          loop={true}
          allowTouchMove={false}
          navigation={false}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={bgg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg5} alt="" />
          </SwiperSlide>
        </Swiper>
        <img src={layout} alt="" />
      </div>
    </section>
  );
}

export default Hero;
