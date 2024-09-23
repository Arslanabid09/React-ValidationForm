import React from 'react'
import Navbar from './component/Navbar'
import Login from './Login'

const App = () => {
  return (
    <>
      <div className='w-full h-screen bg-blue-700'>
      <Navbar/>
      <div className='flex  lg:justify-around justify-center  mt-20  md:my-10 md:justify-between items-center'>

      <div className='md:flex hidden  md:items-start   w-2/4  flex-col ml-10   space-y-8 my-10 text-white'>
      <h1 className='font-extrabold  tracking-wider text-5xl  w-auto max-w-80 '>Generate Awesome Web Pages</h1>
      <p className='w-auto max-w-96 px-2 font-semibold tracking-wider'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat odit quam sequi fugit molestias,facilis, quidem fuga eaque perferendis repellat ut possimus a nostrum.</p>
      <button className=' font-bold tracking-wider bg-black rounded-full px-6 py-2 md:px-7 md:py-3 md:max-w-96 lg:w-full  hover:bg-white hover:text-black duration-300'>Learn More</button>
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