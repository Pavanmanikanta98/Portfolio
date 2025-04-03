"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import img from 'next/image';

export default function SliderCard({ project, index }: any) {
  const router = useRouter();

  return (
    <>
      <div className='h-[256px] md:h-[336px] lg:h-[532px] sm:w-[calc(57%-4px)] w-[calc(72%-4px)] relative m-auto'>
        <div className="h-full w-full group cursor-all-scroll z-50 relative">
          <img src={project.images[0]} alt={project.name}
            className='w-full h-[171px] md:h-[247px] lg:h-[399px] max-w-[100%] rounded-lg border-[#00474f] border-[2px]'
          />
          <div
            onClick={() => router.push(`/portfoliodetails/${project.id}`)}
            className='absolute bottom-[90px] md:bottom-[142px] lg:bottom-[161px] left-6 rounded-lg transition duration opacity-0 group-hover:opacity-100 bg-[#47626D] cursor-pointer flex items-center justify-center shadow-accent-color hover:shadow-xl hover:bg-[#47626D] w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16'
            style={{ boxShadow: "#0da4b5 -3px 10px 15px 2px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 lg:w-9 lg:h-9 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
        </div>

        <div className='absolute top-9 lg:left-8 rounded-lg bg-[#202020] h-[209px] md:h-[285px] lg:h-[399px] w-full'
          style={{ boxShadow: "#0da4b5 -10px 8px 14px 8px" }}>
          <div className='relative h-[180px] md:h-[266px] lg:h-[399px] w-[100%]'>
            <p className='absolute bottom-0 md:bottom-2 lg:bottom-[8px] left-4 text-lg font-[300] text-white z-30'>
              {project.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
