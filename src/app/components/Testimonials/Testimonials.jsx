// components/Testimonials.js
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import { Autoplay, Pagination } from 'swiper/modules';
import './testimonials.css'
// import 'swiper/modules/autoplay.css'


import { Hind } from "next/font/google";
import img from 'next/image';

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const testimonials = [
  {
    name: 'Ganesh Manoharan',
    role: 'Senior Data Scientist At ICONDF',
    content: 'Appreciated my Machine learning abilities and offered valuable guidance on expanding my data visualization skillset with Tableau/Power BI',
    image: '/pass.jpeg', 
  },
  {
    name: 'Dr. Jagadeesh Panda',
    role: 'Principal of Raghu College of Pharmacy',
    content: 'Emphasized my enegry and willingness to learn, While advising the importance of developing a clear Plan of Action( PACE ) to navigate real-world constraints.',
    image: '/pharmacy.jpeg', 
  },
  // {
  //   name: 'KA Paul',
  //   role: 'Designer',
  //   content: 'Quickly adapting to changing demands, always maintaining high standards. Skilled in balancing multiple tasks, ensuring everything is completed with precision and care',
  //   image: '/assets/img/testimonials/testimonials-2.jpg', 
  // },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-[#090909] py-[120px]">
      <div className="container mx-auto text-center mb-12">
        <h2 className={`text-5xl font-extrabold  mb-4 text-[#00474F] ${hind.className}`}>Endorsements</h2>
        <p className={`text-[#487479] font-[200] font-recoletaBold ${hind.className} `}>I'm grateful for the positive feedback I've received from Others.</p>
      </div>

      <div className="container mx-auto">
        <Swiper
         modules={[Autoplay, Pagination]}
          loop={true}
          speed={999}
          
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          className="mySwiper mx-4 rounded-md sm:rounded-full "
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#202020] md:bg-[#171717] p-8 rounded-md mx-5 sm:rounded-full shadow-lg">
                <div className="flex items-center mb-4 pl-5">
                  <img src={testimonial.image} alt={`${testimonial.name} photo`} className="w-24 h-24 rounded-full border-1 mr-4 text-[#487479]" />
                  <div className=''>
                    <h3 className={`"text-xl font-bold text-[#1b3e42] ${hind.className}"`}>{testimonial.name}</h3>
                    <h4 className={`' text-[#284042] text-sm'`}>{testimonial.role}</h4>
                  </div>
                </div>
                <p className="text-[#2b7179] font-[200] text-lg font-recoletaMeduim mb-3 text-center">

                  <i className="text-[#146d77] text-2xl pr-1">&#8220; </i>
                  {testimonial.content}
                  <i className="text-[#125e66] text-2xl">&#8221;</i>
                </p>
                
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
        <div className="swiper-pagination mt-4"></div>
      </div>
    </div>
  );
};

export default Testimonials;
