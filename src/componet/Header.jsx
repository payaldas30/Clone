import  React, { useState } from "react";
import { IoMdMenu ,IoMdClose} from "react-icons/io";

export const Header = () => {
    const[toggle ,setToggle]= useState(false);
  return (
    <div className='bg-[#2699fb] p-4'>
     <div className='max-w-[1500px ] py-[13px]  flex items-center justify-between border-black max-auto'>
         <div className='text-3xl font-bold'>
            WsCube Tech
         </div>
         {
          toggle ?
           <IoMdClose onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
         :
          <IoMdMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/> 
        
         }
         <ul className=' hidden md:flex text-white gap-10'>
          <li>
              Home
          </li>
          <li>
              Company
          </li>
          <li>
              Resorces
          </li>
          <li>
              About
          </li>
          <li>
              Contact
          </li>
         </ul>
         <ul className={` duration-500 md:hidden w-full h-screen fixed bg-black ${toggle?'left-0':'left-[-100%]'} text-white  top-[93.5px] `}>
          <li className='p-5'>
              Home
          </li>
          <li className='p-5'>
              Company
          </li>
          <li className='p-5'>
              Resorces
          </li>
          <li className='p-5'>
              About
          </li>
          <li className='p-5'>
              Contact
          </li>
         </ul>
     </div>

      
    </div>
  )
}
