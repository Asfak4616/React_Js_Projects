import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className=" relative w-[30%] h-full rounded-4xl overflow-hidden">
      <img
        className="w-full h-full object-cover rounded-3xl"
        src={props.image}
        alt=""
      />
<div className="bg-black w-full h-full absolute top-0 left-0 opacity-30">

</div>

     <RightCardContent  tag={props.tag} id={props.id} color={props.color}/>
     
    </div>
  );
};

export default RightCard;
