"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";

import { useRouter } from "next/navigation";
import { DataArray } from "../../data";

import { Hind } from "next/font/google";
import PortfolioCard from "./PortfolioCard";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const PortfolioSlider = () => {
  const router = useRouter();
  // console.log(DataArray);

  return (
    <div className="container m-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={999}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mx-4"
      >
        {DataArray.map((project, index) => (
          <SwiperSlide key={index}>

            <PortfolioCard project={project} index={index} />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioSlider;
