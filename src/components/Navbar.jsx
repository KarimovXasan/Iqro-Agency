import React from 'react'
import { logo } from '../assets/data'

const Navbar = () => {
  return (
    <header className='bg-black'>
        <div className='container flex justify-between items-center'>
                <img src={logo} alt="" />
                <div className='flex space-x-2'>
                <a href='#' className='font-normal text-xl text-white'>Home</a>
                <a href='#' className='font-normal text-xl text-white'>About</a>
                <a href='#' className='font-normal text-xl text-white'>Contact Us</a>
                </div>
            <button className='navBtn'>Get in touch</button>
        </div>
    </header>
  )
}

export default Navbar