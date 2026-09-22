import React from "react";
import SectionOne from "./Components/section1/SectionOne";
import SectionTwo from "./Components/section2/SectionTwo";

const App = () => {

  const users =[
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pare:"",
      tag:"Satisfied",
      color:"royalblue"
    },
    {
      image:"https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      pare:"",
      tag:"UnderServed",
      color:"seagreen"
    },
    {
      image:"https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      pare:"",
      tag:"UnderServed",
      color:"gold"
    }
  ]

  return (
    <div>
      <SectionOne users={users} />
      <SectionTwo />
    </div>
  );
};

export default App;
