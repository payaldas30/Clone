import React from 'react'
import { ReactTyped } from "react-typed";

export const Banner = () => {
  return (
    <div className='bg-[#2669fb] w-full py-[100px]'>
        <div className='max-w-[1500px] my-[150px] mx-auto text-center font-bold'>
           <h4 className=' mt-4 md:text-2xl  text-xl'>Learn with us</h4>
           <h1 className=' mt-4 text-white  md:text-5xl text-2xl '>Grow with us</h1>
           <h2 className=' mt-4 md:text-[35px] text-[20px] text-white '>Learn  
           <ReactTyped className='pl-4' strings={[" Web Development"," Digital Marketing"," Ethical Hacking"]} 
           typeSpeed={100} 
           backSpeed={100}
           loop={true}/>
           </h2>

           <button className='bg-black rounded-lg my-4 p-2 text-white'>Get started</button>
        </div>

    </div>
  )
}
