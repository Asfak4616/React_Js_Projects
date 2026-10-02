import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import image from "../assets/image1.avif"

const Card2 = () => {
  return (
    <div className="bg-white rounded-md shadow-lg p-2 flex justify-between items-center">
      <div className="flex gap-2 items-center justify-start ">
        <div className="w-40 h-25 rounded-md overflow-hidden">
            <img className="object-cover" src={image} />
        </div>
        <div>
    <h1 className="text-green-500 font-bold">Chicken Soup</h1>
    <div className="flex justify-center items-center border-2 rounded-xl gap-4 text-orange-500 mt-2">
        <button className="text-xl">-</button>
        <span className="bg-gray-200 text-orange-500 w-7 flex justify-center items-center">1</span>
        <button className="text-xl">+</button>
    </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-end items-center">
        <h1 className="text-orange-500 text-lg font-small">Rs 399/-</h1>
        <RiDeleteBin5Line className="text-red-500" />
      </div>
    </div>
  );
};

export default Card2;
