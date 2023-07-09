import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../assets/images/slider-1.webp";
import slide2 from "../assets/images/slider-2.webp";
import slide3 from "../assets/images/slider-3.webp";

const Slider = () => {
  return (
    <Swiper
      className="mySwiper rounded-lg w-full h-full"
      loop={true}
      centeredSlides={true}
      effect="fade"
      speed={1000}
      translate=""
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation, Pagination]}
    >
      <SwiperSlide className="relative">
        <img className="w-full h-full" src={slide1} alt="" />
        <p className="absolute top-0 px-2 text-center md:text-start md:left-10 flex flex-col justify-center h-full w-full lg:w-1/2 bg-slate-50/50 md:bg-transparent">
          <span className="text-[#222] font-semibold text-xl md:text-3xl mb-1">
            Quality Freshness Guaranteed!
          </span>
          <span>
            Intrinsicly fashion performance based products rather than accurate
            benefits...
          </span>
        </p>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="w-full h-full" src={slide2} alt="" />
        <p className="absolute top-0 px-2 text-center md:text-start md:left-10 flex flex-col justify-center h-full w-full lg:w-1/2 bg-slate-50/50 md:bg-transparent">
          <span className="text-[#222] font-semibold text-xl md:text-3xl mb-1">
            The Best Quality Products Guaranteed!
          </span>
          <span>
            Dramatically facilitate effective total linkage for go forward
            processes...
          </span>
        </p>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img className="w-full h-full" src={slide3} alt="" />

        <p className="absolute top-0 px-2 text-center md:text-start md:left-10 flex flex-col justify-center h-full w-full lg:w-1/2 bg-slate-50/50 md:bg-transparent">
          <span className="text-[#222] font-semibold text-xl md:text-3xl mb-1">
            Best Different Type of Grocery Store
          </span>
          <span>
            Quickly aggregate empowered networks after emerging products...
          </span>
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
