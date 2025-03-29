'use client';
import React, { useState, useRef } from 'react';
import { DataArray } from '../../data'; 
import './projectSlider.css';
import { useRouter } from 'next/navigation';

const ProjectSlider = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = DataArray.length;
  const sliderRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const nextProject = () => {
    setCurrentIndex((currentIndex + 1) % totalProjects);
  };

  const prevProject = () => {
    setCurrentIndex((currentIndex - 1 + totalProjects) % totalProjects);
  };

  const getVisibleProjects = () => {
    const startIndex = currentIndex;
    return [
      DataArray[(startIndex - 1 + totalProjects) % totalProjects],
      DataArray[startIndex],
      DataArray[(startIndex + 1) % totalProjects],
    ];
  };

  const handleTouchStart = (e:any) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e:any) => {
    if (!isDragging.current) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = startX.current - touchEndX;

    if (deltaX > 50) {
      nextProject();
      isDragging.current = false;
    } else if (deltaX < -50) {
      prevProject();
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleMouseDown = (e:any) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e : any) => {
    if (!isDragging.current) return;

    const mouseEndX = e.clientX;
    const deltaX = startX.current - mouseEndX;

    if (deltaX > 50) {
      nextProject();
      isDragging.current = false;
    } else if (deltaX < -50) {
      prevProject();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <div
      className="project-slider relative w-full"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <button
        className="slider-control absolute bottom-0 flex items-center justify-center mt-[20px] rounded-lg ml-[250px]"
        onClick={prevProject}
        style={{
          width: '60px',
          height: '40px',
          color: '#00474F',
          boxShadow: '0 4px 10px rgba(0, 71, 79, 0.5)',
          border: '2px solid #00474F',
        }}
      >
        &lt;
      </button>
      <div className="projects flex justify-center">
        {visibleProjects.map((project, index) => (
          <div
          onClick={() => router.push(`/portfoliodetails/${project.id}`)}

            className={`project-card ${index === 1 ? 'center' : ''}`}
            key={index}
            style={{ backgroundImage: `url(${project.images[0]})` }}
            // onClick={() =>
            //   setCurrentIndex((currentIndex + index - 1 + totalProjects) % totalProjects)
            // }
          >
            <div className="title-label bg-transparent pl-3">
              {project.title}
             
            </div>
          </div>
        ))}
      </div>
      <button
        className="slider-control absolute bottom-0 flex items-center justify-center mt-[20px] rounded-lg mx-auto mr-[250px] mb-[90px ]"
        onClick={nextProject}
        style={{
          width: '60px',
          height: '40px',
          color: '#00474F',
          boxShadow: '0 4px 10px rgba(0, 71, 79, 0.5)',
          border: '2px solid #00474F',
          right: 0,
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default ProjectSlider;
