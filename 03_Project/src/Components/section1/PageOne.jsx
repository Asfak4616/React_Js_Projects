import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const PageOne = () => {
  return (
    <div className='w-full h-[85vh] px-16 py-6 flex justify-between gap-5'>
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default PageOne
