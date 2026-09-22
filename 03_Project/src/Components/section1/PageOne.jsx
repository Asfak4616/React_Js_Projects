import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const PageOne = (props) => {
  return (
    <div className='w-full h-[85vh] px-16 py-6 flex justify-between gap-5'>
      <LeftSection/>
      <RightSection users={props.users}/>
    </div>
  )
}

export default PageOne
