import React from "react";

import { LuVegan } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";  

const Card = ({ name, id, price, type, image }) => {
  return (
    <div className="hover:border hover:border-orange-500 w-50 h-70 p-4 bg-white rounded-md shadow-md flex flex-col gap-3">
      <div className="h-40 overflow-hidden rounded-md">
        <img src={image} />
      </div>
      <div className="font-bold ">{name}</div>
      <div className="flex justify-between">
        <div className="font-medium text-orange-500 ">Rs {price}-</div>
        <div className={(type==='veg'?"text-orange-500":"text-red-600")+" font-medium flex items-center gap-2"}>
         {type==="veg"?<LuVegan /> :<GiChickenOven />} <span>{type}</span>
        </div>
      </div>
      <button className="bg-orange-400 cursor-pointer rounded-md text-white font-medium hover:bg-orange-300 py-1 transition-all duration-300">
        Add to Dish
      </button>
    </div>
  );
};

export default Card;
