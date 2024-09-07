import React from 'react'

import { Hind } from "next/font/google";
import SocialMeida from '../SocialMediaLinks/SocialMeida';



const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
  });

export default function Footer() {
  return (
    <>
      <div className="relative bg-[#0b2529] text-center py-[40px] border-[#777676] border-t-2">
        <div className="container mx-auto">
         
          <h3 className="text-[36px] font-bold mb-[15px] font-recoletaBlack">Pavan Manikanta</h3>

         
           {/* reused Component */}
          <div className="flex justify-center space-x-4 mb-[20px]">
           <SocialMeida />
          </div>

        
          <div className={`pt-[15px] border-t border-[rgba(0,0,0,0.1)] pb-[8px] ${hind.className}`}>
            <span>Copyright</span>
            <strong className="px-1">Pavan Manikanta</strong>
            <span>All Rights Reserved</span>
          </div>

         
        </div>
      </div>
    </>
  )
}
