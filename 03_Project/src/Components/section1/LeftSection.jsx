import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroLeft from './HeroLeft'
import Arrow from './Arrow'


const LeftSection = () => {
  return (
    <div className=' h-full w-1/4 flex flex-col justify-between p-6'>
    <HeroLeft/>
    <Arrow/>
      
    </div>
  )
}

export default LeftSection
