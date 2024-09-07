'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProjectCard = ({ project }: any) => {
  const router = useRouter();

  return (
    <div className="bg-gray-800 text-white flex flex-col justify-center items-center rounded-lg border-[#00474f] border-[2px] w-[520px] h-[400px] relative group">
      <Image  
        src={project.images[0]} 
        alt={project.title} 
        className="w-full h-full rounded-lg " 
      />
      
      <div
        onClick={() => router.push(`/portfoliodetails/${project.id}`)}
        className="absolute bottom-[30px] md:bottom-[50px] lg:bottom-[70px] left-[8%] transform -translate-x-1/2 rounded-md transition duration-300 cursor-pointer flex items-center justify-center shadow-md hover:shadow-xl hover:bg-[#3c545e] w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 opacity-0 group-hover:opacity-100"
        // style={{ boxShadow: "#00474f -6px 4px 10px 3px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-6 h-6 lg:w-14 lg:h-14 bottom-2 text-[#999]"
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
      <p className="mt-4 px-6 text-lg font-semibold">{project.title}</p>
    </div>
  );
};

export default ProjectCard;
