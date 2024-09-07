'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function SliderCard({ project, index }:any) {
  const router = useRouter();
  return (
    <>
      <div  className='h-[320px] md:h-[400px] lg:h-[620px]  sm:w-2/3  w-5/6 relative m-auto'>
        <div className="h-full w-full group cursor-all-scroll z-50 relative ">
          <img src={project.images[0]}
            className='w-full h-[220px] md:h-[300px] lg:h-[475px]  max-w-[100%] rounded-lg border-[#00474f] border-[2px]'
          />
          <div
          onClick={() => router.push( `/portfoliodetails/${project.id}`)}
          className='absolute bottom-[120px] md:bottom-[180px] lg:bottom-[200px] left-6 rounded-lg transition duration opacity-0 group-hover:opacity-100 bg-[#47626D] cursor-pointer flex items-center justify-center shadow-accent-color hover:shadow-xl hover:bg-[#47626D] w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 '
                    style={{ boxShadow: "#00474f -10px 5px 10px 5px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-6 h-6 lg:w-10 lg:h-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>

          </div>

        </div>
        <div className='absolute top-14 lg:left-12 rounded-lg bg-[#202020] h-[260px] md:h-[350px]  lg:h-[480px] w-full '
          style={{ boxShadow: "#0da4b5 -10px 8px 14px 8px" }}>
          <div className='relative h-[230px] md:h-[320px] lg:h-[480px] w-[100%] '>
            <p className='absolute bottom-0.5 md:bottom-4 left-4 text-lg font-[300] text-white z-30 '>{project.title}</p>
          </div>

        </div>


      </div>

    </>
  )
}
