import React,{ useState, useEffect } from 'react'

export default function CallToAction() {
    const [isScrolled,setIsScrolled] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }; 
    
    },[]);
  return (
    <div>
        {
            isScrolled ? ( 
            <div className='bg-red-500 p-4 w-fit rounded-xl fixed bottom-8 right-8 cursor-pointer z-50 animate-bounce'
            onClick={()=> window.scrollTo(0,0) }
            >
                <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={5}
             stroke="currentColor"
             className="w-6 h-6 text-white"
           >
           <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M4.5 15.75l7.5-7.5 7.5 7.5"
             />
            </svg>
            </div>
             ) : ""
        }
      
    </div>
  )
}
