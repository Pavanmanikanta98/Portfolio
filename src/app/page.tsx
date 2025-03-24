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
import Header from "./components/Header/Header";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {

  const router = useRouter();
  return (
    <main className="min-h-screen relative">
      <Header />
      <HomeComponent />
     <div
  id="portfolio"
  className="mt-0 pt-0 -mb-40"
  style={{
    backgroundImage: "linear-gradient(-65deg, #141414 0% 45%, #090909 0% 100%)",
    width: "100%",
    padding: 0,
  }}
>
  <div className="container mx-auto flex flex-col md:flex-row md:items-start gap-8">
    {/* Left Section - Recent Works */}
    <div className="flex-1">
      <p
        className="text-[300px] text-[#141414] md:pl-[50px] px-5 max-w-[750px] w-full overflow-hidden"
        style={{ transform: "translate(0px, -100px)" }}
      >
        portfolio
      </p>
      <div id="place" style={{ transform: "translate(0px, -350px)", margin: 0 }}>
        <div className="flex flex-col md:flex-row md:items-start gap-7 md:gap-[550px]">
          {/* Recent Works Section */}
          <div>
            <p className="text-[#00474F] -pt-5 md:pl-[80px] px-5 font-extrabold text-5xl">
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

          {/* "All Projects" Button - Next to Recent Works on large screens */}
          <div className="flex-none flex flex-col justify-center md:pt-3 items-center md:items-center animate">
            <p className="text-[#00474f] text-3xl mb-4">All Projects</p>
            <div
              className="w-24 h-16 flex cursor-pointer justify-center items-center border-[#29656d] border-[2px] animate-pulse rounded-lg"
              onClick={() => router.push(`/allprojects/`)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-[#1d4e52]"
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
      </div>
    </div>
  </div>

  {/* Adjusting the space for the Portfolio Slider */}
  <div
    className="mt-12 mb-0"
    style={{ transform: "translate(0px, -320px)" }}
  >
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
