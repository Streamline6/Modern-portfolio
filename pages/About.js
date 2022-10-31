import React from 'react';
import Image from "next/image";
import Hero from "../public/1.jpg";

function About() {
  return (
    <div className="flex flex-col py-40 ">
      <h1 className='md:text-5xl text-2xl text-center font-bold py-6'>About Us</h1>
      <div className='md:flex-row flex flex-col justify-around items-center gap-6 py-10 px-20'>
      <Image src={Hero} width={3500} height={3500} className="rounded-lg shadow-lg "/>
      <div className='pl-10'><h1 className='md:text-5xl text-xl font-semibold text-red-600 py-4'>My Journey</h1><p className='md:text-xl text-sm text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p></div>
      
      </div>
      
    </div>
  )
}

export default About