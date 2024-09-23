import React from 'react'
import Navbar from './component/Navbar'
import Login from './Login'

const App = () => {
  return (
    <>
      <div className='w-full h-screen  bg-blue-700'>
      <Navbar/>
      <div className='flex md:justify-around items-center'>

      <div className='md:flex hidden  w-2/4  flex-col ml-10   space-y-8 my-10 text-white'>
      <h1 className='font-extrabold  tracking-wider md:text-6xl text-7xl md:w-1/2 lg:w-1/3 '>Generate Awesome Web Pages</h1>
      <p className='w-2/4 font-semibold tracking-wider'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat odit quam sequi fugit molestias,facilis, quidem fuga eaque perferendis repellat ut possimus a nostrum.</p>
      <button className=' font-bold tracking-wider bg-black rounded-full px-6 py-2 md:px-7 md:py-3 w-1/3 hover:bg-white hover:text-black duration-300'>Learn More</button>
      </div>
      <div>
        <Login/>
      </div>
      </div>
      </div>
    </>
  )
}

export default App