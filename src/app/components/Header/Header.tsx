'use client'
import React,{useState, useEffect} from 'react'
import Drawer from './DiagonalDrawer'
import '../Header/DiagonalDrawer.css'

export default function Header() {
    const [selectIndex1,setSelectedIndex1] = useState(-1);
    const [isOpen, setIsOpen] = useState(false);
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
              
    const openDrawer = ()=>{
        setIsOpen(true);
    }

    // console.log(isScrolled)
  return (
    
    <>
    <div className={`diagonal-drawer ${isOpen ? "open":''}`}>
        <Drawer 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectIndex1={selectIndex1}
        setSelectedIndex1={setSelectedIndex1} />
    </div>
    <header className={`${isScrolled ? "headerShow" : ""} w-full fixed top-0 z-50 transition-all duration-500 xl:bg-[#090909] `}
    >
        <div className={'relative'}>
            <div 
            onClick={openDrawer}
            className='z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#00474f]  flex justify-center items-center rounded-br-3xl'>
            <div className={'relative w-10 lg:w-[70px] h-10 lg:h-[70px] flex justify-center items-center'}>
                <img src='/menu.png' alt='drawer item' className={'w-[200px] h-15'}/>
            </div>

            </div>
        </div>
        {/* <h1 className="text-7xl">Testing the header</h1> */}
        <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto ">
            <ul className="flex font-recoletaBlack flex-row items-center h-24">

                <li className="group text-2xl relative font-bold mr-20">
                    {selectIndex1 === 0 ? (
                        <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                    ):( <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                    )}
                    <a className={`menu-item ${selectIndex1 === 0 ? "text-[#999999]":""} text-[#00474f] group-hover:text-[#999]`}
                     href="/#home"
                     onClick={()=>setSelectedIndex1(0)}>
                        Home</a> 
                    </li>
                    <li className="group text-2xl relative font-bold mr-20">
                    {selectIndex1 === 1 ? (
                        <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                    ):( <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                    )}
                    <a className={`menu-item ${selectIndex1 === 1 ? "text-[#999999]":""} text-[#00474f] group-hover:text-[#999999]`}
                     href="/#portfolio"
                     onClick={()=>setSelectedIndex1(1)}>
                        Portfolio</a> 
                    </li>
                    <li className="group text-2xl relative font-bold mr-20">
                    {selectIndex1 === 2 ? (
                        <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                    ):( <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                    )}
                    <a className={`menu-item ${selectIndex1 === 2 ? "text-[#999999]":""} text-[#00474f] group-hover:text-[#999999]`}
                     href="/#about-me"
                     onClick={()=>setSelectedIndex1(2)}>
                        AboutMe</a> 
                    </li>
                    <li className="group text-2xl relative font-bold mr-20">
                    {selectIndex1 === 3 ? (
                        <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                    ):( <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                    )}
                    <a className={`menu-item ${selectIndex1 === 3 ? "text-[#999999]":""} text-[#00474f] group-hover:text-[#999999]`}
                     href="/#contact-me"
                     onClick={()=>setSelectedIndex1(3)}>
                        Hire Me</a> 
                    </li>

            </ul>

        </nav>
        </header> 
    </>
  )
}
