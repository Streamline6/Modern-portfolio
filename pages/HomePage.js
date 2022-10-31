import React from 'react';
import Image from "next/image";
import Hero from "../public/1.jpg";


function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center pt-20 pb-24 md:px-0 px-20'>
      <Image src={Hero} width={120} height={120} className="rounded-full "/>
      <h1 className='text-xl md:text-6xl font-bold from-neutral-800 pt-8 text-center'>Hello, Everyone <span className='text-red-600'>Nik </span>from <span className='text-red-600'>Webstreamline </span></h1>
      <p className='text-sm md:text-2xl font-semibold text-red-600 py-6 text-center'>UI/UX Designer/Developer || Product Developer || Graphic Designer</p>
      <button className='text-xl text-red-600 border rounded-md py-4 px-6 hover:bg-black hover:text-white '>Join Now</button>
      </div>
  )
}

export default HomePage