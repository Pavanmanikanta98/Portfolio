"use client";
import React, { useState } from "react";
import { Hind } from "next/font/google";
import { AboutData } from "@/app/data";
import img from "next/image";
import "./skills.css";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function SkillsComp() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mapData, setMapData] = useState(AboutData[0]);

  const myFunctions = (data: any) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMapData(data);
  };

  const handleCardClick = (data: any, index: any) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunctions(data), 600);
  };

  const HandleNext = () => {
    if (selectedIndex < 5) {
      handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
    } else {
      handleCardClick(AboutData[0], 0);
    }
  };
  const HandlePrev = () => {
    if (selectedIndex !== 0) {
      handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
    } else {
      handleCardClick(AboutData[5], 5);
    }
  };

  return (
    <React.Fragment>
      <div
        id="about-me"
        className="bg-[#090909] pt-[250px] mt-4 pb-[100px] lg:pb-[600px] relative lg:h-[800px]"
      >
        <div className="container m-auto">
          {/* Background large "About Me" text */}
          <h1 className="text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px] text-[#141414]">
            About Me
          </h1>
          {/* Actual content header */}
          <h1 className="relative font-recoletaBlack text-5xl text-[#00474F] mb-5 -mt-40 px-5 lg:px-28">
            About My Self
          </h1>
          <h4 className="relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#3e6d72] text-2xl mb-10 px-5 lg:px-28">
            I craft solutions that push boundaries and unlock new possibilities.
          </h4>
          <section className="relative flex flex-col lg:flex-row px-5 lg:px-28">
            <p
              className={`w-full lg:w-1/3 text-[#3e6d72] mr-0 mb-5 lg:mr-4 font-[200] ${hind.className}`}
            >
              I'm Pavan Manikanta, driven by a deep passion for AI and machine
              learning. I love building intelligent systems that extract meaningful
              insights from complex data, and I relish working on projects involving
              advanced predictive analytics, natural language processing, and deep learning.
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#3e6d72] mr-0 mb-5 lg:mr-4 font-[200] ${hind.className}`}
            >
              Alongside my focus on AI, I bring a broad technical background to the table.
              I'm skilled in web development, database management, containerization with Docker,
              and setting up CI/CD pipelines—enabling me to create cutting-edge AI solutions that
              integrate smoothly into full-scale, production-ready systems.
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#3e6d72] mr-0 mb-5 lg:mr-4 font-[200] ${hind.className}`}
            >
              Whenever I face a new challenge, I dive deep into research to understand it
              thoroughly and discover cutting-edge strategies to address similar issues in the
              future. As a result, I've honed a diverse array of abilities to tackle any problem
              head-on.
            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(45deg, #090909 70%, #141414 30%)",
          width: "100%",
        }}
        className="lg:-mt-60"
      >
        <section className="container flex flex-col m-auto sm:flex-row px-5 lg:px-28 xl:px-32 mt-[40px] transform translate-y-[-100px]">
          <div className="hidden sm:flex w-full sm:w-1/2 lg:w-7/12">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mr-0 lg:mr-10">
              {AboutData.map((item, index) => (
                <a
                  key={index}
                  onClick={() => handleCardClick(item, index)}
                  className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl p-6 lg:p-10 flex flex-col justify-center items-center hover:text-white ${
                    selectedIndex == index
                      ? " -translate-y-2 bg-[#476571]"
                      : "hover:bg-[#476571] hover:shadow-xl hover:-translate-y-2 bg-[#36454F]"
                  }`}
                >
                  <div className="w-16 h-16 sm:w-10 sm:h-10 lg:w-16 lg:h-16 text-[#141414]">
                    <img
                      height={100}
                      width={100}
                      src={item.img}
                      alt="internet issues"
                    />
                  </div>
                  <h4
                    className={`text-center text-sm lg:text-xl font-recoletaBold transition-colors duration-500 group-hover:text-black text-[#202020] mt-3 ${
                      selectedIndex === index ? "text-black" : ""
                    }`}
                  >
                    {item.title}
                  </h4>

                  <div
                    className={`absolute -top-2 -right-2 transform transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-[#476571] flex justify-center items-center font-bold text-[#181818] font-recoletaBold text-xl ${
                      selectedIndex === index
                        ? "opacity-100 rotate-12"
                        : "group-hover:rotate-12"
                    }`}
                  >
                    {item.count}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-5/12 overflow-visible px-0 sm:pl-6 xl:px-10">
            <div className="bg-[#202020] lg:mt-0 mt-10 rounded-xl p-10 xl:p-12 shadow-accent-color relative">
              <section
                className={`fade-left overflow-hidden ${isFaded ? "fade-out" : ""}`}
              >
                <p
                  className={`text-[#3e6d72] ${hind.className} text-lg sm:text-base lg:text-xl transition duration-500 transform opacity-100`}
                >
                  My skills as
                </p>
                <h2 className="font-recoletaBold text-[#3e6d72] text-3xl sm:text-2xl md:text-3xl mb-6 w-44 md:w-56 transition duration-500 transform opacity-100">
                  {mapData?.title}
                </h2>

                <ul
                  className={`${hind.className} font-[300] list-disc text-[#3e6d72] ml-8 lg:ml-10 text-base lg:text-lg transition duration-500 transform opacity-100`}
                >
                  {mapData?.array?.map((obj) => (
                    <li key={obj} className="mb-2">
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>
              <div
                className={`absolute perspective-500 -top-7 sm:top-30 right-0 sm:-right-20 card ${
                  isFlipped ? "flipped" : ""
                }`}
              >
                <div className="card-inner">
                  <div className="rounded-2xl cursor-pointer text-7xl xl:text-9xl font-recoletaBlack text-black bg-[#47626D] p-5 xl:p-8 w-28 h-28 xl:w-48 xl:h-48 transform transition duration-500 -rotate-6">
                    <span className="text-2xl xl:text-6xl mr-2 sm:mr-3 text-[#181818]">*</span>
                    {mapData.count}
                  </div>
                </div>
              </div>

              <div className="absolute right-10 -bottom-5 flex">
                <a
                  onClick={HandlePrev}
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#47626D]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-black"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </a>
                <a
                  onClick={HandleNext}
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#47626D]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-black"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
