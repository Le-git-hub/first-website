import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const Contant = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='font-preahvihear flex justify-center items-start h-[400px] text-white flex-col text-left w-1/2'>
          <h1 className='text-2xl tracking-wider mb-20'>Contact</h1>
          <p className='text-sm tracking-wider mb-8'>I'm currently looking to join a cross-functional team that values improving people's lives
  through accessible design. or have a project in mind? Let's connect.<br></br><br></br><br></br>ibrhaimmemon930@gmail.com</p>
          <div className='flex justify-between w-32'>
            <FaInstagram size='24'/>
            <FaDribbble size='24'/>
            <FaGoogle size='24'/>
          </div>
      </div>
    </div>
  )
}

export default Contant
