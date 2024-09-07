// pages/Home.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";

// import { Location, Projects, Skills } from "./icons/Icons";

import { Hind } from "next/font/google";
// import ProjectSlider from "./components/projectSlider/ProjectSlider";

import SkillsComp from "./components/Skills/SkillsComp";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactMe from "./components/contactMe/ContactMe";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import PortfolioSlider from "./components/PortfolioSlider/PortfolioSlider";
import CallToAction from "./components/CallToAction/CallToAction";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {

  const router = useRouter();
  return (
    <main className="min-h-screen relative">
      <HomeComponent />
    
      <div
        id="portfolio"
        className="mt-0 pt-5 -mb-40 "
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #141414 0% 40%, #090909 0% 100%)",
          width: "100%",
        }}
      >
        <div className="container m-auto flex flex-col md:flex-row">
  <div className="flex-1">
    <p
      className="text-[300px] text-[#141414] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
      style={{ transform: "translate(0px, -20px)" }}
    >
      portfolio
    </p>
    <div id="place" style={{ transform: "translate(0px, -250px)" }}>
      <p className="text-[#00474F] md:pl-[80px] px-5 font-extrabold text-5xl">
        Recent Works
      </p>
      <p
        className={`max-w-2xl md:pl-[80px] px-5 text-[16px] text-[#95b4b8] leading-8 mt-5 ${hind.className}`}
      >
        Here are a few of my most recent work. As a full-stack web developer, I
        always enjoy working on my projects, so each one is a new adventure for
        me. While working on each new project, I attempt to learn new things.
        As a result, my paintings are always current and one-of-a-kind.
      </p>
    </div>
  </div>
  <div className="flex-none flex flex-col justify-center items-center md:ml-8">
    <p className="text-[#00474f] text-3xl mb-4">More Projects</p>
    <div className="w-24 h-16 flex justify-center items-center border-[#00474f] border-[2px] rounded-lg"
    onClick={() => router.push( `/allprojects/`)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-[#00474f]"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
      </svg>
    </div>
  </div>
</div>

        <div
          className="mt-[100px] mb-[69px]"
          style={{ transform: "translate(0px,-230px)" }}
        >
          {/* <ProjectSlider/> */}
          <PortfolioSlider />
        </div>
      </div>
      <SkillsComp />
      <Testimonials />

      <ContactMe />
      {/* <Footer /> */}

      <CallToAction />
    </main>
  );
}
