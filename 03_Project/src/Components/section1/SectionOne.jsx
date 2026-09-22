import React from 'react'
import Navbar from './Navbar'
import PageOne from './PageOne'

const SectionOne = (props) => {
  return (
    <div className=' h-screen w-full '>
      <Navbar/>
      <PageOne users={props.users} />
    </div>
  )
}

export default SectionOne
