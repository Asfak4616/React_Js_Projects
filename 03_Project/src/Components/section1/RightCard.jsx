import React from "react";

const RightCard = () => {
  return (
    <div className=" relative w-[30%] h-full rounded-4xl overflow-hidden">
      <img
        className="w-full h-full object-cover rounded-3xl"
        src="https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="flex flex-col justify-between p-5 absolute left-0 top-0  w-40 h-40 ">
        <div>
          {" "}
          <h2>1</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo harum
            magnam consequuntur est ipsa iste.
          </p>
          <div>
            <button>Satisfied</button>
            <button>
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
