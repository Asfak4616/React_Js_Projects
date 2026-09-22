import React from 'react'
import RightCard from './RightCard'

const RightSection = (props) => {
  return (
    <div id='right' className=' h-full w-3/4 flex gap-4 overflow-x-auto pb-6'>
      {
        props.users.map((ele,idx)=>{
          return <RightCard id={idx} image={ele.image} tag={ele.tag} color={ele.color}
        />
        })
      }
    </div>
  )
}

export default RightSection
