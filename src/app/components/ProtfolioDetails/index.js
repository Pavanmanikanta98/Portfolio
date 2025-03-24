"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hind } from "next/font/google";
import Image from "next/image";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Index({ data, id, relatedProjects }) {
  const router = useRouter();
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [nextIndex, setnextIndex] = useState();
  const [prevIndex, setprevIndex] = useState();

  useEffect(() => {
    if (!relatedProjects.length) return;

    const firstDigit = id[0];
    const projectNumber = parseInt(id.slice(1), 10);
    const currentIndex = projectNumber - 11;

    const nextIndex = (currentIndex + 1) % relatedProjects.length;

    const prevIndex =
      (currentIndex - 1 + relatedProjects.length) % relatedProjects.length;

    const formatId = (num) =>
      `${firstDigit}${String(num + 11).padStart(2, "0")}`;

    setnextIndex(nextIndex);
    setprevIndex(prevIndex);
    setNext(formatId(nextIndex));
    setPrev(formatId(prevIndex));
    // console.log("hhhhhhhhhh",next)
  }, [id, relatedProjects]);

  //look at the next project and previous buttons

  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-black min-h-screen">
      <div
        className="overlay absolute top-0 left-0 w-full h-[400px] z-20"
        style={{ background: "rgba(0,0,0,0.4)" }}
      />

      {/* Image Container */}
      <div className="relative h-[400px]">
        <Image
          src={data?.images[0]}
          alt="bg photo"
          layout="fill"
          objectFit="cover"
          className="lg:mt-24 sm:mt-0"
          placeholder="blur"
          blurDataURL={data?.images[0]}
          quality={50}
        />
      </div>

      <div className="absolute z-30 top-[42px] sm:top-[150px] sm:left-[65px] justify-center items-center w-full px-10 sm:w-3/4 xl:w-1/2 sm:px-0 sm:text-left">
        <div className="container m-auto">

          <div className="max-w-[650px] w-full m-auto">
            <div className="space-y-4"> 
           
              <h1 className="text-4xl font-recoletaBold text-[#00474F]">
                {data?.title}
              </h1>

              {/* Links Container */}
              <div className="flex items-center space-x-6 ">
                {/* GitHub Link */}
                {data?.githubLink && (
                  <a
                    href={data.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#353434] hover:text-[#00474f]  transition-colors duration-300"
                  >
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {/* GitHub Cat Icon */}
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}

                {/* Website Link */}
                {data?.websiteLink && (
                  <a
                    href={data.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#353434] hover:text-[#00474f] transition-colors duration-300"
                  >
                   <svg
  className="w-12 h-12"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  {/* Live Browser Icon */}
  <path d="M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20 M4 7h16v2H4z M6 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>

                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative bg-black"
        style={{
          background: "linear-gradient(90deg, #090909  58%, #141414 52%)",
        }}
      >
        {/* Images Section */}
        <div className="lg:col-span-2 lg:order-1 order-1 sm:order-1 mb-20 lg:pl-[70px] sm:px-20">
          {data?.images
            ?.filter((src) => src)
            .map((item, index) => (
              <div
                key={index}
                className="flex justify-center lg:justify-end items-center"
              >
                <Image
                  src={item}
                  alt="project images"
                  loading="lazy"
                  className="mt-20 rounded-lg w-full h-auto"
                  width={1200} // Increased from 800
                  height={800} // Increased from 600
                  quality={100} // Better compression
                  placeholder="blur"
                  blurDataURL={item}
                />
              </div>
            ))}
        </div>

        {/* Content Section */}
        <div className="lg:col-span-1 lg:order-2 order-2 sm:order-2 lg:px-0 sm:px-20">
          <div className="mt-10 sm:mt-24 w-full lg:max-w-[300px] lg:px-1 px-3 sticky top-36 pb-14">
            <h1 className="text-3xl mb-4 text-[#00474F]">{data?.name}</h1>
            <p className="text-[14px] font-sans mb-4 text-white text-sm text-balance">
              {data?.des}
            </p>
            <p
              id="highlight"
              className="my-2 text-dark text-[20px] text-[#9de5ed] font-sans"
            >
              Project Descriptions
            </p>
            <p className="text-[14px] font-sans text-sm mb-4 text-white text-balance ">
              {data?.des1}
            </p>
            {/* Skills Section */}

            <div className="flex flex-wrap">
              {/* Dynamic Tech Stack Rendering */}
              {data?.techStack
                ? data.techStack.map((tech, index) => (
                    <h1
                      key={index}
                      className="mr-5 text-[14px] bg-[#00474F] px-2 py-1 rounded-xl font-sans mb-4 text-white"
                    >
                      {tech}
                    </h1>
                  ))
                : // Static Fallback (from your original code)
                  [
                    "State Management (Recoil)",
                    "React.js",
                    "Next.js",
                    "Express.js",
                    "Node.js",
                  ].map((tech, index) => (
                    <h1
                      key={index}
                      className="mr-5 text-[14px] bg-[#00474F] px-2 py-1 rounded-xl font-sans mb-4 text-white"
                    >
                      {tech}
                    </h1>
                  ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex bg-accent-color h-48 text-white">
        <div
          className={`group w-1/2 flex items-center justify-center ${hind.className}`}
          style={{
            backgroundImage: `url(${relatedProjects[prevIndex]?.images[0]})`,
          }}
        >
          <a
            className="flex justify-center group-hover:bg-[#223740] cursor-pointer transition-colors duration-300 bg-[#405B66] bg-opacity-90 items-center w-full h-full"
            onClick={() => router.push(`/portfoliodetails/${prev}`)}
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
        <div
          className={`group w-1/2 flex items-center justify-center ${hind.className}`}
          style={{
            backgroundImage: `url(${relatedProjects[nextIndex]?.images[0]})`,
          }}
        >
          <a
            className="flex justify-center group-hover:bg-[#223740] cursor-pointer transition-colors duration-300 bg-[#405B66] bg-opacity-90 items-center w-full h-full"
            onClick={() => router.push(`/portfoliodetails/${next}`)}
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
  );
}
