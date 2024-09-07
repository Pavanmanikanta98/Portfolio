import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SocialMeida from "../SocialMediaLinks/SocialMeida";

export default function DiagonalDrawer({
  isOpen,
  setIsOpen,
  selectIndex1,
  setSelectedIndex1,
}: any) {
  const route = useRouter();
  const pathname = usePathname();
  // console.log(setIsOpen);
  return (
    <>
      <div className="relative">
        <div
          className={`z-50 ${
            pathname === "/" ? "top-[0px]" : "top-[100px]"
          } cursor-pointer fixed w-14 h-14 lg:w-24 lg:h-24 bg-red-500 flex justify-center items-center rounded-br-3xl`}
        >
          <div
            onClick={() => setIsOpen(false)}
            className={
              "relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center"
            }
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-[#999] cursor-pointer  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-[#999]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <header
        className={`fixed w-full transition-all duration-500 z-40 ${
          pathname === "/" ? "top-0" : "top-[-98px]"
        }`}
      >
        <div className="z-20 absolute transform-gpu ease-in-out duration-500 transition-all scale-100 -translate-x-none -translate-y-none opacity-100 bg-[#223740] bg-opacity-95 w-full h-screen flex flex-col sm:flex-row lg:flex-col items-center justify-center">
          <nav className="text-[#999] font-recoletaBold text-center text-4xl lg:text-4xl 2xl:text-6xl uppercase">
            <ul className="flex flex-col">
              <li className="group my-4 xl:my-4 2xl:my-6 relative">
                <div className="inline-block relative">
                  <a
                    href="/#home"
                    onClick={() => {
                      setSelectedIndex1(0);
                      setIsOpen(false);
                    }}
                  >
                    home
                  </a>
                  {selectIndex1 === 0 ? (
                    <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6 opacity-100 group-hover:rotate-6 group-hover:opacity-100 bg-[#00474f] rounded-xl -z-10"></div>
                  ) : (
                    ""
                  )}
                  <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#00474f] rounded-xl -z-10">
                    {" "}
                  </div>
                </div>
              </li>
              <li className="group my-4 xl:my-4 2xl:my-6 relative">
                <div className="inline-block relative">
                  <a
                    href="/#portfolio"
                    onClick={() => {
                      setSelectedIndex1(1);
                      setIsOpen(false);
                    }}
                  >
                    Portfolio
                  </a>
                  {selectIndex1 === 1 ? (
                    <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#00474f] rounded-xl -z-10"></div>
                  ) : (
                    ""
                  )}
                  <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#00474f] rounded-xl -z-10">
                    {" "}
                  </div>
                </div>
              </li>
              <li className="group my-4 xl:my-4 2xl:my-6 relative">
                <div className="inline-block relative">
                  <a
                    href="/#about-me"
                    onClick={() => {
                      setSelectedIndex1(2);
                      setIsOpen(false);
                    }}
                  >
                    About Me
                  </a>
                  {selectIndex1 === 2 ? (
                    <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#00474f] rounded-xl -z-10"></div>
                  ) : (
                    ""
                  )}
                  <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#00474f] rounded-xl -z-10">
                    {" "}
                  </div>
                </div>
              </li>
              <li className="group my-4 xl:my-4 2xl:my-6 relative">
                <div className="inline-block relative">
                  <a
                    href="/#hire-me"
                    onClick={() => {
                      setSelectedIndex1(3);
                      setIsOpen(false);
                    }}
                  >
                    Hire Me
                  </a>
                  {selectIndex1 === 3 ? (
                    <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#00474f] rounded-xl -z-10"></div>
                  ) : (
                    ""
                  )}
                  <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#00474f] rounded-xl -z-10">
                    {" "}
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <section className="mt-14 sm:mt-12 lg:mt-14 text-center relative sm:absolute lg:relative sm:right-0 lg:right-0 h-auto sm:h-full lg:h-auto">
            <h3 className="block sm:hidden lg:block font-bold text-[#266972] text-2xl uppercase mb-5">
              {" "}
              Follow me Around
            </h3>
            <SocialMeida />
          </section>
        </div>
      </header>
    </>
  );
}
