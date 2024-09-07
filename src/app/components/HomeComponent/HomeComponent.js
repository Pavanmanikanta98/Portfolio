"use client";
import React from "react";
import { Hind } from "next/font/google";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import TypingAnimation from './TypingAnimation';

import Slider from "react-slick";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <>
      <div id='home' className="relative flex w-full h-screen bg-[url('/1.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-50 flex items-center">
          <div className="container mx-auto flex h-full">
            <div className="w-full grid grid-cols-12 h-full">
              {/* Left Column for Text */}
              <div className="col-span-12 md:col-span-8 flex justify-center bg-transparent px-6 mt-[270px] py-7 md:px-10 md:py-7">
                <div className="text-container text-center md:text-left mt-[-10px]">
                  <p className="text-[#00474F] text-4xl md:text-base lg:text-2xl pt-0">
                    Hi There
                  </p>
                  <h1 className="text-[white] font-recoletaBlack text-7xl md:text-5xl lg:text-8xl xl:text-7xl mt-5 md:mt-3">
                    I&apos;m Pavan Manikanta
                  </h1>
                  <h2 className={`relative text-white font-bold uppercase md:text-xl ${hind.className}`}>
                  {/* <TypingAnimation items={['Wed Developer', 'Programmer']} /> */}
                  Web Developer &amp; Programmer 
                </h2>

                  <a
                    href="/#portfolio"
                    className="inline-block cursor-pointer bg-[#00474f]  transition-all duration-300 ease-in-out rounded-xl text-black py-3 px-5 font-bold mt-8 uppercase  md:py-2 lg:py-3 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:text-[#00474f] hover:bg-[#102224] hover:translate-y-1"
                  >
                    Projects
                  </a>
                  <a
                    href="pavan_resume.pdf"
                    download="pavan_resume.pdf"
                    className="ml-8 cursor-pointer inline-block bg-[#102224] transition-all duration-300 ease-in-out rounded-xl text-[#999] py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:text-black hover:bg-[#00474f] hover:translate-y-1"
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="absolute inset-x-0 bottom-0 container mx-auto px-3">
          <div
            className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl z-20"
            style={{ boxShadow: "#0da4b5 -10px 25px 50px 10px" }}
          >
            <div className="lg:py-10 md:py-6 sm:py-6 cursor-all-scroll">
              <Slider {...settings}>
                <Image  src="/nextjs.png" alt="Nextjs" className="h-12" />
                <Image  src="/reactjs.png" alt="Reactjs" className="h-12" />
                <Image  src="/k8s.png" alt="k8s" className="h-12" />
                <Image  src="/expressjs.png" alt="Expressjs" className="h-12" />
                <Image  src="/docker.png" alt="Docker" className="h-12" />
                <Image  src="/nodejs.png" alt="nodejs" className="h-12" />
                <Image  src="/mongodb.png" alt="Mongodb" className="h-12" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
