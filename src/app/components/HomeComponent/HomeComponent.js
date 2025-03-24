import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hind } from "next/font/google";
import Header from "../Header/Header";
import TypeIt from "typeit";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {
  const typeItRef = useRef(null); 

  useEffect(() => {
    const instance = new TypeIt(typeItRef.current, {
      speed: 120, 
      deleteSpeed: 60, 
      cursor: true,
      loop: true, 
    })
      .type("Web Developer") // Type the first string
      .pause(1000) // Pause before deletion
      .delete() // Delete the typed string
      .pause(500) // Pause before typing the next word
      .type("Programmer") // Type the second string
      .pause(1000) // Pause again
      .delete() // Delete the second string
      .go(); // Start the animation

    // Cleanup on unmount
    return () => {
      instance.destroy(); // Destroy the TypeIt instance on unmount
    };
  }, []); // Empty dependency array means this runs only once when the component is mounted

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1290, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <>
      {/* <Header /> */}
      <div id="home" className="relative flex w-full h-screen md:h-[85vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#090909] backdrop-brightness-50 flex items-center justify-center">
          <div className="container mx-auto flex flex-col items-center justify-center text-center">
            <div className="text-container">
              <p className="text-[#00474F] text-4xl md:text-base lg:text-2xl">Hi There</p>
              <h1 className="text-white font-recoletaBlack text-7xl mt-5">I&apos;m Pavan Manikanta</h1>
              <h2 className={`relative text-white font-bold text-center uppercase md:text-xl ${hind.className}`} style={{ color: "#999" }}>
                <span ref={typeItRef}></span>
              </h2>
              <div className="flex flex-col md:flex-row justify-center gap-6 mt-8 items-center">
                <a
                  href="/#portfolio"
                  className="bg-[#00474f] text-black py-2 px-5 rounded-xl hover:bg-[#102224] hover:text-[#00474f]"
                >
                  Projects
                </a>
                <a
                  href="pavan_resume.pdf"
                  download
                  className="bg-[#102224] text-[#999] py-2 px-5 rounded-xl hover:bg-[#00474f] hover:text-black"
                >
                  My Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="absolute inset-x-0 bottom-0 container mx-auto px-3">
          <div
            className="relative max-w-sm bottom-[70px] h-[65px] md:h-[120px]  md:max-w-5xl overflow-auto mx-auto bg-[#e1e1e1] rounded-2xl z-20"
            style={{ boxShadow: "#0da4b5 -5px 15px 30px 4px" }}
          >
            <div className="lg:py-10 md:py-6 sm:py-6 ">
              <Slider {...settings}>
                <img src="/nextjs.png" alt="Nextjs" className="h-14" />
                <img src="/reactjs.png" alt="Reactjs" className="h-14" />
                <img src="/k8s.png" alt="k8s" className="h-14" />
                <img src="/expressjs.png" alt="Expressjs" className="h-14" />
                <img src="/docker.png" alt="Docker" className="h-14" />
                <img src="/nodejs.png" alt="Nodejs" className="h-14" />
                <img src="/mongodb.png" alt="MongoDB" className="h-14" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
