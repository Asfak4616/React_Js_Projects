import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
const Navbar = () => {
  return (
    <div className=" w-full h-13 flex justify-between ">
      <div className="w-13 h-13 bg-white flex justify-center items-center rounded-md shadow-md">
        <IoFastFoodOutline className="text-3xl text-orange-500 " />
      </div>
      <form className="bg-white h-13 w-[40%] md:w-[70%] rounded flex items-center gap-5 shadow-md pl-4">
        <IoSearch className="text-2xl text-orange-500" />
        <input
          className="outline-none w-full"
          type="text"
          placeholder="Select Your Dish..."
        />
      </form>
      <div className="w-13 h-13 bg-white flex justify-center items-center rounded-md shadow-md  relative">
        <span className="absolute top-0 right-1 font-bold text-orange-500">0</span>
        
        <TiShoppingCart className="text-3xl text-orange-500 " />
      </div>
    </div>
  );
};

export default Navbar;
