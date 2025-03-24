"use client";
import React, { useState } from "react";
import { DataArray, WebArray } from "../../data";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";

export default function Page() {
  const [activeTab, setActiveTab] = useState("data");

  return (
    <div>
      {/* Original Fixed Background (Unchanged) */}
      <div
        id="something"
        className="fixed top-0 left-0 w-full h-[1000px] z-0"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #141414 0% 40%, #090909 0% 100%)",
        }}
      >
        <div className="container m-auto flex flex-col md:flex-row">
          <div className="flex-1">
            <p
              className="text-[400px] text-[#141414] md:pl-[40px] px-5 max-w-[750px] w-full"
              style={{ transform: "translate(0px, -20px)" }}
            >
              Projec
            </p>
          </div>
          <div className="flex-1">
            <p
              className="text-[400px] text-[#0b0b0b] md:pl-[278px] px-5 max-w-[750px] w-full"
              style={{ transform: "translate(0px, -20px)" }}
            >
              cts
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Content */}
      <div className="relative z-10 mx-4 md:mx-20 mt-[220px] md:mt-[400px] mb-[200px]">
        {/* Enhanced Toggle with Dual Lines */}
        <div className="mb-12 flex items-center w-full">
          {/* Left Line (15% width) */}
          <div className="w-[17%] border-t-2 border-gray-800"></div>

          {/* Toggle Buttons */}
          <div className="flex items-center mx-4">
          <button
              className="group relative text-left"
              onClick={() => setActiveTab("data")}
            >
              <span
                className={`menu-effect absolute left-0 ml-2 bg-[#00474f] 
                  transition-all duration-300 ease-out 
                  ${
                    activeTab === "data"
                      ? "opacity-100 -rotate-12 -mt-1"
                      : "opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100 group-hover:text-gray-500"
                  }
                `}
              ></span>
              <span
                className={`text-lg md:text-xl font-medium transition-colors duration-200 menu-item ml-1
                  ${
                    activeTab === "data"
                      ? "text-gray-400 hover:text-gray-300"
                      : " text-[#00474f]  hover:text-gray-400"
                  }
                `}
              >
                Data Science
              </span>
            </button>
            <span className="mx-2 text-gray-500">/</span>
            <button
              className="group relative text-left"
              onClick={() => setActiveTab("web")}
            >
              <span
                className={`menu-effect absolute left-0 ml-2 bg-[#00474f] 
                  transition-all duration-300 ease-out 
                  ${
                    activeTab === "web"
                      ? "opacity-100 -rotate-12 -mt-1 "
                      : "opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100 group-hover:text-gray-500"
                  }
                `}
              ></span>
              <span
                className={`text-lg md:text-xl font-medium transition-colors duration-200 menu-item ml-1 
                  ${
                    activeTab === "web"
                      ? "text-gray-400 hover:text-gray-300"
                      : " text-[#00474f]  hover:text-gray-400"
                  }
                `}
              >
                Web Development
              </span>
            </button>
          </div>

          {/* Right Line (Remaining width) */}
          <div className="w-[62%] border-t-2 border-gray-800"></div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 md:gap-10">
          {(activeTab === "data" ? DataArray : WebArray).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
