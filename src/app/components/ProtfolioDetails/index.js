'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Hind } from 'next/font/google';

const hind = Hind({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
});

export default function Index({ data, id, DataArray }) {
    const router = useRouter();
    const [next, setNext] = useState();
    const [prev, setPrev] = useState();

    useEffect(() => {
        const currentIndex = JSON.parse(id);
        setNext(currentIndex === DataArray.length - 1 ? 0 : currentIndex + 1);
        setPrev(currentIndex === 0 ? DataArray.length - 1 : currentIndex - 1);
    }, [id, DataArray]);

    return (
        <div className='bg-black min-h-screen'>
            <div className='overlay h-[400px] lg:top-[96px] sm:top-0 z-20 '></div>
            <div className='relative'>
                <img src={data?.images[0]}
                    alt='bg photo'
                    className='h-[400px] lg:mt-24 sm:mt-0 object-cover'
                    style={{ width: '100%' }}
                />
            </div>

            <div className='absolute z-30 top-[42px] sm:top-[200px] sm:left-[65px] justify-center items-center w-full px-10 sm:w-3/4 xl:w-1/2 sm:px-0 sm:text-left'>
                <div className='container m-auto'>
                    <div className='max-w-[650px] w-full m-auto'>
                        <p className='opacity-3 sm:text-left text-center font-sans text-[#00474F] mb-3'>
                            Project Sample
                        </p>
                        <h1 className='opacity-3 sm:text-left text-center text-[#00474F] w-full sm:w-3/4 font-recoletaBold text-4xl md:text-4xl lg:text-4xl xl:text-4xl'>
                            {data?.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 relative bg-black'
                style={{
                    background: "linear-gradient(90deg, #090909  58%, #141414 52%)"
                }}
            >
                {/* Images Section */}
                <div className='lg:col-span-2 lg:order-1 order-1 sm:order-1 mb-20 lg:pl-[70px] sm:px-20'>
                    {
                        data?.images.map((item, index) => (
                            <div key={index} className='flex justify-center lg:justify-end items-center'>
                                <img src={item}
                                    alt='project images'
                                    className='mt-20 rounded-lg'
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        ))
                    }
                </div>

                {/* Content Section */}
                <div className='lg:col-span-1 lg:order-2 order-2 sm:order-2 lg:px-0 sm:px-20'>
                    <div className='mt-10 sm:mt-24 w-full lg:max-w-[300px] lg:px-1 px-3 sticky top-36 pb-14'>
                        <h1 className='text-3xl mb-4 text-[#00474F]'>{data?.name}</h1>
                        <p className='text-[14px] font-sans mb-4 text-white text-sm text-balance'>{data?.des}</p>
                        <p id='highlight' className='my-2 text-dark text-[20px] text-[#9de5ed] font-sans'>Project Descriptions</p>
                        <p className='text-[14px] font-sans text-sm mb-4 text-white text-balance '>{data?.des1}</p>
                        {/* Skills Section */}
                        <div className='flex flex-wrap'>
                            <h1 className='mr-5 text-[14px] bg-[#00474F] lg:bg-[#00474F] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-white'>State Management (Recoil)</h1>
                            <h1 className='mr-5 text-[14px] bg-[#00474F] lg:bg-[#00474F] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-white'>React.js</h1>
                            <h1 className='mr-5 text-[14px] bg-[#00474F] lg:bg-[#00474F] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-white'>Next.js</h1>
                            <h1 className='mr-5 text-[14px] bg-[#00474F] lg:bg-[#00474F] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-white'>Express.js</h1>
                            <h1 className='mr-5 text-[14px] bg-[#00474F] lg:bg-[#00474F] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-white'>Node.js</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative flex bg-accent-color h-48 text-white'>
                <div className={`group w-1/2 flex items-center justify-center ${hind.className}`}
                    style={{ backgroundImage: `url(${DataArray[prev]?.images[0]})` }}>
                    <a className='flex justify-center group-hover:bg-[#223740] cursor-pointer transition-colors duration-300 bg-[#405B66] bg-opacity-90 items-center w-full h-full'
                        onClick={() => router.push(`/portfoliodetails/${prev + 511}`)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="transform transition-transform group-hover:-translate-x-3 duration-300 w-5 h-5 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 16l-4-4m0 0l4-4m-4 4h18"
                            ></path>
                        </svg>
                        Previous Project
                    </a>
                </div>
                <div className={`group w-1/2 flex items-center justify-center ${hind.className}`}
                    style={{ backgroundImage: `url(${DataArray[next]?.images[0]})` }}>
                    <a className='flex justify-center group-hover:bg-[#223740] cursor-pointer transition-colors duration-300 bg-[#405B66] bg-opacity-90 items-center w-full h-full'
                        onClick={() => router.push(`/portfoliodetails/${next + 511}`)}
                    >
                        Next Project
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="transform transition-transform group-hover:translate-x-3 duration-300 w-5 h-5 ml-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
