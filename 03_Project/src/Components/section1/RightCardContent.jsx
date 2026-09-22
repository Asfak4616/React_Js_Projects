import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="h-full w-full absolute left-0 top-0 flex flex-col justify-between p-6">
      <h2 className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-xl font-medium">
        {props.id+1}
      </h2>
      <div>
        <p className="text-white font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus laborum animi id aut vero consequatur.
        </p>

        <div className="flex justify-between">
          <button style={{backgroundColor:props.color}} className="font-medium text-white px-3 py-1 rounded-full ">
           {props.tag}
          </button>
          <button style={{backgroundColor:props.color}} className="bg-blue-500 text-xl rounded-full px-3 py-1 text-white">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
