import React from 'react'
import Laptop from "../assets/img/Laptop.webp";

export const Export = () => {
  return (
    <div className='max-w-[1500px] my-10 mx-10 md:grid grid-cols-3 p-2'>
       <div className='h-[200px] md:w-[80%]  col-span-1'>
        <img className='w-[110%] h-[100%]' src={Laptop} alt=''/>
       </div>
       <div className='h-[200px] col-span-2 flex flex-col items-center'>
        <h1 className='text-[#00df9a] font-bold mt-2'>LEARN FROM EXPORT </h1>
        <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum distinctio minus nostrum enim obcaecati nulla facilis unde non earum qui cupiditate dolorem incidunt vitae, quo corporis! Laudantium, corporis sunt.</p>
        <button className='bg-black  w-[30%] rounded-lg my-4 p-2 text-white'>Get started</button>
       </div>
         
    </div>
  )
}
