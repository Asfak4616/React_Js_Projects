import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-16 py-5 pb-2">
      <h4 className="uppercase text-sm bg-black text-white rounded-full px-3 py-1">
        Target Audience
      </h4>
      <h4 className=" uppercase text-sm bg-gray-200 rounded-full px-2 py-1">
        Digital Banking Platform
      </h4>
    </div>
  );
};

export default Navbar;
