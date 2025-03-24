'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProjectCard = ({ project }: any) => {
  const router = useRouter();

  return (
    <div 
      className="bg-gray-800 text-white flex flex-col justify-center items-center rounded-lg border-[#00474f] border-[2px] 
                  w-full max-w-[520px] h-[280px] md:h-[380px] relative group overflow-hidden"
    >
      {/* Project Image */}
      <img  
        src={project.images[0]} 
        alt={project.title} 
        width={520}
        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* View Details Button */}
      <div
        onClick={() => router.push(`/portfoliodetails/${project.id}`)}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-md transition duration-300 cursor-pointer 
                   flex items-center justify-center shadow-md hover:shadow-xl hover:bg-[#3c545e] 
                   w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-0 group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#999]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </div>

      {/* Project Title */}
      <p className="mt-4 px-4 text-lg font-semibold text-center">
        {project.title}
      </p>
    </div>
  );
};

export default ProjectCard;