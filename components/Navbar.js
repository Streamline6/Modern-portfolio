import React from 'react';
import {FaInstagram,FaPinterestP,FaFacebookF,FaWhatsapp} from "react-icons/fa"
import {FiTwitter} from "react-icons/fi"

function Navbar() {
  return (
    <div className='flex justify-center items-center'>
    <div className='w-full h-16 border-b-2 border-gray-50 flex justify-start py-10 gap-6 items-center md:px-20 px-4'> 
    <FaInstagram className='w-5 h-5 hover:text-yellow-500 cursor-pointer'/>
    <FiTwitter className='w-5 h-5 hover:text-blue-500 cursor-pointer'/>
    <FaPinterestP className='w-5 h-5 hover:text-red-500 cursor-pointer'/>
    <FaFacebookF className='w-5 h-5 hover:text-blue-500 cursor-pointer'/>
    <FaWhatsapp className='w-5 h-5 hover:text-green-500 cursor-pointer'/>
    </div>
    <div className='w-full h-16 border-b-2 border-gray-50 flex justify-end py-10 gap-6 items-center md:px-20 px-4'> 
    <p className='text-sm hover:text-white font-semibold text-neutral-900 p-4 bg-gray-50 rounded-md hover:bg-black cursor-pointer'>Resume</p>
    </div>
    </div>
  )
  
}

export default Navbar