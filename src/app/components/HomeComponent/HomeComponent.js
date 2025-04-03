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
      .type("AI Engineer")
      .pause(1000)
      .delete()
      .pause(500)
      .type("Web Developer")
      .pause(1000)
      .delete()
      .pause(500)
      // .type("Programmer")
      // .pause(1000)
      // .delete()
      .go();

    return () => {
      instance.destroy();
    };
  }, []);

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
      <div
        id="home"
        className="relative flex w-full h-screen sm:h-[85vh] md:h-[85vh] lg:h-[85vh] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-[#090909] backdrop-brightness-50 flex items-center justify-center">
          <div className="container mx-auto flex flex-col items-center justify-center text-center">
            <div className="text-container">
              <p className="text-[#00474F] text-lg md:text-xl lg:text-2xl">
                Hi There
              </p>
              <h1 className="text-white font-recoletaBlack text-4xl md:text-4xl lg:text-5xl">
                I'm Pavan Manikanta
              </h1>
              <h2
                className={`relative text-white font-bold uppercase text-md md:text-lg lg:text-xl ${hind.className}`}
              >
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
            className="relative max-w-sm bottom-[70px] md:max-w-xl lg:max-w-4xl xl:max-w-5xl lg:px-14 overflow-auto mx-auto bg-[#e1e1e1] rounded-2xl z-20"
            style={{ boxShadow: "#0da4b5 -3px 10px 15px 2px" }}
          >
            <div className="py-3 md:py-4">
              <Slider {...settings}>
                <img src="/pd.png" alt="pandas" className="h-14" />
                <img src="/np.png" alt="Numpy" className="h-14" />
                <img src="/sk.png" alt="sk-learn" className="h-14" />
                <img src="/mp.png" alt="Nextjs" className="h-14" />
                <img src="/sns.png" alt="seaborn" className="h-14" />
                <img src="/tf.png" alt="tensorflow" className="h-14" />
                <img src="/py.png" alt="pytorch" className="h-14" />
                <img src="/lc1.png" alt="langchain" className="h-14 p-1" />
                <img src="/hf.png" alt="Nextjs" className="h-14" />
                <img src="/nextjs.png" alt="Nextjs" className="h-14" />
                <img src="/reactjs.png" alt="Reactjs" className="h-14" />
                <img src="/expressjs.png" alt="Expressjs" className="h-14" />
                <img src="/docker.png" alt="Docker" className="h-14" />
                <img src="/nodejs.png" alt="Nodejs" className="h-14" />
                <img src="/mongodb.png" alt="MongoDB" className="h-14" />
                <img src="/ps.png" alt="MongoDB" className="h-14" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
