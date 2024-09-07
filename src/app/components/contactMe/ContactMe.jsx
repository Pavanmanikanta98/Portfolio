'use client'
import React, { useState } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";

import { FaArrowRight } from 'react-icons/fa'

import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';


import { Hind } from 'next/font/google';

const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});


export default function Page() {

  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setloading] = useState(false);

 
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [key]: value,
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setState({ ...state, phoneNumber: numericValue });
  };

  const clearState = () => {
    setState({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
  
    let data = { ...state };
  
    try {
      const res = await fetch("/api/contactme/", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const response = await res.json();
      console.log(response);
  
      if (res.ok) {
        clearState();
        toast(response.message);
      } else {
        toast(response.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast("Something went wrong! Please try again later.");
    } finally {
      setloading(false);
    }
  };
  

  return (
    <div
    id="contact-me"
     className=" bg-[#090909] ">
    
      <div className="flex flex-col items-center justify-center pt-[40px]  w-full mb-[80px]">
      <ToastContainer />
        <div className='flex flex-col items-center justify-center  bg-cover w-full h-[380px] bg-center rounded-xl'>
          <div className="flex flex-col items-center justify-center w-full h-fullbackdrop-brightness-50 ">
            <div className="text-center bg-[#00474f] py-[1px] px-[8px] tracking-wide uppercase font-semibold text-[20px] text-[#0c0c0c] rounded-lg ">
              <a href="#contact" className="cursor-pointer">
                
                Contact Form
              </a>
            </div>
            <div className="mt-[10px]">
              <h1 className="recoletaBold text-5xl text-[#00474f] p-2 text-center tracking-wide ">
                
                Hire Me
              </h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[700px] ">
              <p className="text-[#4b939b] font-[300] text-center text-xl ">
                Are you looking for a responsible, professinal full-stack
                developer and designer for your website or your web application
                projects? Just leave me a message and tell me how I can help.
              </p>
            </div>
          </div>
        </div>
        <div className="px-[20px]">
          <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full">
            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all tansform duration-500 hover:bg-[#476571] hover:text-black hover:-translate-y-4 bg-[#36454F]"
                style={{ boxShadow: "#0da4b5 -5px  10px 20px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <FaLocationDot size={40} color="#166069" />
                  </div>

                  <div className="flex flex-col">
                    <div className="transition-colors duration-500 text-[#999999] group-hover:text-black text-[17px]">
                      <p>Location...</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide text-[#999999]">
                      <p> visit us At: </p>
                    </div>
                  </div>
                </div>
                <div className="text-[#171717] hover:text-black">
                <div>
                  <p className=""> Nth street, somewhere </p>
                </div>
                <div className="">
                  <p className=""> Nth street, somewhere </p>
                </div>
                </div>
              </div>
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all tansform duration-500 hover:bg-[#476571] hover:text-black hover:-translate-y-4 bg-[#36454F]"
                style={{ boxShadow: "#0da4b5 -5px  10px 20px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <FiPhoneCall size={40} color="#166069" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#999999] text-[14px]">
                      <p>24*7 service</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide text-[#999999]">
                      <p> Call Us On:</p>
                    </div>
                  </div>
                </div>
                <div className="text-[#171717] hover:text-black">

               
                <div className="">
                  <p className=" text-sm">Mob:+919849XXXX</p>
                </div>
                <div className="">
                  <p className="text-sm ">Tel:+09XXXXXXXX</p>
                </div>
              </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                 className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all tansform duration-500 hover:bg-[#476571] hover:text-black hover:-translate-y-4 bg-[#36454F]"
                 style={{ boxShadow: "#0da4b5 -5px  10px 20px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <AiFillMail size={40} color="#166069" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#999999] text-[14px]">
                      <p> Drop A Line </p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide text-[#999999]">
                      <p> Mail Address</p>
                    </div>
                  </div>
                </div>
                <div className=" text-[#171717] hover:text-black ">
                <div className="pt-2">
                  <p className=" text-sm"> pavanmanikanta98@gmail.com</p>
                </div>
                <div className="">
                  <p className="text-sm"> cme04408@gmail.com </p>
                </div>
                </div>
              </div>
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all tansform duration-500 hover:bg-[#476571] hover:text-black hover:-translate-y-4 bg-[#36454F]"
                style={{ boxShadow: "#0da4b5 -5px  10px 20px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <AiOutlineFieldTime size={40} color="#166069" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#999999] text-[14px]">
                      <p>office Hours</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide text-[#999999]">
                      <p> Opening Time </p>
                    </div>
                  </div>
                </div>
                <div className="text-[#171717] hover:text-black ">

                
                <div className="">
                  <p className=""> Mon - Fri: 9am - 6pm</p>
                </div>
                <div className="">
                  <p className=""> Sat - Sun (Closed) </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact"
      
    
      className='flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] mx-auto pb-28 p-10 '>
        <div className='hidden md:block relative w-[50%] xl:w-[50%] h-[600px] rounded-xl md:w-full lg:w-[50%] bg-center bg-cover'
        style={{backgroundImage: `url('/Masterfile.jpg')`}}
        >
          <div className='absolute h-full w-full bg-gradient-to-t from-[#2d545a] via-[#2d565a] shadow-inner opacity-70'>
          </div>
           <div className='absolute inset-0 flex flex-col gap-[20px] items-center justify-center shadow-lg text-white p-6 '>
            {/* <div className='text-4xl xl:mt-[250px] mt-0 rounded-full px-[15px] py-[15px] bg-[#202020] text-white'>
              <FaHeadphones />
            </div> */}
            <div className='font-semibold text-[24px] xl:mt-[260px] -mb-7 text-[#00474f]'>Chat With Live! </div>
            <div >
              <p className='text-center pt-5 font-[200] text-xl text-[#030303]'>Looking for a talented web developer with a knack for crafting exceptional websites? I also have a solid understanding of LLMs and fine-tuning. Let&apos;s bring your vision to life!
                </p>
            </div>
            <div>
              {/* <button className={`bg-[#00474f] text-white mb-[30px] px-4 py-2 hover:bg-[#223740] transition-color rounded-xl `}>Let's Chat </button> */}
              <FaArrowRight size={40} color="#c0d2d4" />
            </div>
           </div>
        </div>
        <div className='flex flex-col gap-[20px] border-[2px] border-[#00474f] p-5 rounded-lg'>
          <div className='text-center w-[100px] bg-red-500 py-[1px] tracking-wide uppercase font-300 font-sans text-[14px] text-white rounded-lg  '>
             Contact Us
          </div>
          <div>
            <p className={'text-[30px] text-[#004f4f] recoletaBold'}> Request A Call  Back Free To Reach &  Contact Us </p>
          </div>
          <form className='flex flex-col gap-[20px]'
          onSubmit={handleSubmit}
          >
            <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
            <input
                type="text"
                name="name"
                placeholder="Your Name.."
                required
                onChange={handleChange}
                value={state.name}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200 text-black"
              />
              <input
              type='email'
              name='email'
              placeholder='Your email..'
              onChange={handleChange}
              value={state.email}
              required
              className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200 text-black '
              />
            </div>
            <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
              <input
              type='text'
              name='phoneNumber'
              placeholder='Your phoneNumber..'
              onChange={handlePhoneChange}
              value={state.phoneNumber}
              required
              className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200 text-black'
              />
              <input
              type='text'
              name='subject'
              placeholder='Your subject..'
              onChange={handleChange}
              value={state.subject}
              required
              className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200 text-black '
              />
            </div>
            <div className={`${hind.className} gap-[]`}>
              <textarea
              name='message'
              placeholder='Your message..'
              onChange={handleChange}
              value={state.message}
              required
              className='px-[12px] outline-none rounded-md py-[12px] h-[190px] flex-1 w-full bg-gray-200 text-black'
              />
            </div>
            <div>
              <button className='bg-[#074747] w-full sm:w-auto px-[30px] py-[12px] hover:bg-[#00474f] transition-colors duration-300 font-semibold text-black rounded-lg'>   {loading ? "Dropping..." : "Drop Me a Message"} </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
