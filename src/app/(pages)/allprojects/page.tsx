import React from 'react';

import  { DataArray } from '../../data';
import ProjectCard from '@/app/components/ProjectCard/ProjectCard';

export default function Page() {
  return (
    <div>
      {/* Fixed background section */}
      <div
        id="something"
        className="fixed top-0 left-0 w-full h-[1000px] z-0"
        style={{
          backgroundImage: "linear-gradient(-62deg, #141414 0% 40%, #090909 0% 100%)",
        }}
      >
        <div className="container m-auto flex flex-col md:flex-row">
          <div className="flex-1">
            <p
              className="text-[400px] text-[#141414] md:pl-[40px] px-5 max-w-[750px] w-full "
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

      {/* Scrollable content */}
      <div
        className="relative z-10 my-[420px] mx-20  grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 w-auto  text-9xl p-8"
      >

           { DataArray.map((project, index) =>(
            <ProjectCard key={index} project={project} />
           ))}
      
        
      </div>
    </div>
  );
}
