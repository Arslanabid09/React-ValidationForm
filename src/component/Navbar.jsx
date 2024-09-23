import React, { useState } from 'react'
import { FaAngleLeft,FaAngleDown} from 'react-icons/fa'
const Navbar = () => {
    const [active,setActive] =useState(false)
    
  return (
    <header className='flex  justify-between px-10  bg-blue-700 text-white '>
        <h1 className='font-extrabold md:mt-3 tracking-widest lg:text-3xl '>StartUp</h1>
        <div className='flex flex-col items-end  md:py-9 gap-10'>
            {
                !active? 
                <span className='font-bold text-4xl md:hidden cursor-pointer' onClick={ () => setActive(!active)}><FaAngleLeft/> </span>:
                <span className='font-bold text-4xl md:hidden cursor-pointer'
                onClick={()=> setActive(!active)}
                ><FaAngleDown/></span>
            }
        <ul className={' md:flex flex-col md:flex-row absolute top-20 md:top-0 right-0 p-10 bg-blue-700 rounded-s-xl md:bg-transparent  md:items-start items-center gap-10 lg:gap-14 ' + (active ? 'flex' : 'hidden')} >
            <li className='cursor-pointer font-bold lg:text-lg tracking-wider text-white'>Prices</li>
            <li className='cursor-pointer font-bold  tracking-wider text-white'>Blog</li>
            <li className='cursor-pointer font-bold  tracking-wider text-white'>Feedback</li>
            <li className='cursor-pointer hover:bg-white hover:text-black duration-500 font-bold  tracking-wider text-white bg-black rounded-full px-6 py-2 md:px-7 md:py-3'>Purchase</li>
        </ul>
        </div>
    </header>
  )
}

export default Navbar