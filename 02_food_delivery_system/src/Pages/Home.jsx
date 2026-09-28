import React from 'react'
import Navbar from '../Components/Navbar'
import Category from '../Category'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-slate-300 py-2 px-4 md:px-6 md:py-4 '>
      <Navbar/>
    <div className='flex flex-wrap justify-center gap-8 mt-4 '>
      {
        Category.map((item,index)=>{
       return(
        <div className='bg-white w-25 h-25 rounded-md shadow-md flex flex-col justify-center gap-4 pl-2 text-gray-600 cursor-pointer hover:bg-orange-20 transition-all duration-300' key={index}>
          {item.icon}
          {item.name}
        </div>
       )
        })
      }
    </div>
    </div>
  )
}

export default Home
