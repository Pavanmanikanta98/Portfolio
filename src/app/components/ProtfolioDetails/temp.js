// components/ProtfolioDetails/index.js
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Hind } from 'next/font/google';
import Image from 'next/image';

const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function PortfolioDetail({ data, id, relatedProjects }) {
  const router = useRouter();
  const [nextId, setNextId] = useState(null);
  const [prevId, setPrevId] = useState(null);

  useEffect(() => {
    if (!relatedProjects.length) return;

    const firstDigit = id[0];
    const projectNumber = parseInt(id.slice(1), 10);
    const currentIndex = projectNumber - 11;

    const nextIndex = (currentIndex + 1) % relatedProjects.length;
    const prevIndex = (currentIndex - 1 + relatedProjects.length) % relatedProjects.length;

    const formatId = (num) => 
      `${firstDigit}${String(num + 11).padStart(2, '0')}`;

    setNextId(formatId(nextIndex));
    setPrevId(formatId(prevIndex));
  }, [id, relatedProjects]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className='bg-black min-h-screen'>
      {/* Hero Section */}
      <div className='relative'>
        <Image
          src={data.images[0]}
          alt='project hero'
          width={1920}
          height={1080}
          className='h-[400px] object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-4xl text-white font-bold'>{data.title}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='container mx-auto px-4 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Left Column - Images */}
          <div className='space-y-4'>
            {data.images.map((imgSrc, index) => 
              imgSrc && (
                <div key={index} className='rounded-lg overflow-hidden'>
                  <Image
                    src={imgSrc}
                    alt={`project-${index}`}
                    width={800}
                    height={600}
                    className='w-full h-auto'
                  />
                </div>
              )
            )}
          </div>

          {/* Right Column - Details */}
          <div className='space-y-4'>
            <h2 className='text-2xl text-white font-semibold'>{data.name}</h2>
            <p className='text-gray-300'>{data.des}</p>
            <div className='space-y-2'>
              <h3 className='text-lg text-[#9de5ed]'>Project Description:</h3>
              <p className='text-gray-400'>{data.des1}</p>
            </div>
            {data.techStack && (
              <div className='flex flex-wrap gap-2'>
                {data.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className='bg-[#00474F] text-white px-2 py-1 rounded'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Section */}
        <div className='flex justify-between mt-10'>
          <button
            className='bg-[#405B66] text-white px-4 py-2 rounded hover:bg-[#223740]'
            onClick={() => router.push(`/portfoliodetails/${prevId}`)}
            disabled={!prevId}
          >
            ← Previous
          </button>
          <button
            className='bg-[#405B66] text-white px-4 py-2 rounded hover:bg-[#223740]'
            onClick={() => router.push(`/portfoliodetails/${nextId}`)}
            disabled={!nextId}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}