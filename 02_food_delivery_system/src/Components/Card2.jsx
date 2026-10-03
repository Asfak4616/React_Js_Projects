import React, { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { dataContext } from "../Context/UseContextData";


const Card2 = ({name,id,price,quantity,image}) => {

  const { cart,setCart}=useContext(dataContext)

const increaseQuantity= (id)=>{
let newCart= cart.map((item)=>{
return item.id==id ? {...item,quantity:item.quantity+1} :item;
})
setCart(newCart)
}  


const decreaseQuantity= (id)=>{
let newCart= cart.map((item)=>{
return item.id==id ? {...item,quantity:item.quantity-1} :item;
}).filter((item)=>item.quantity>0)
setCart(newCart)
}  

const deleteItem = (id)=>{
 let newCart = cart.filter((item)=>item.id != id)
 setCart(newCart)
}



  return (
    <div className="bg-white  rounded-md shadow-lg p-2 flex justify-between items-center">
      <div className="flex gap-2 items-center justify-start ">
        <div className="w-35 h-25 rounded-md overflow-hidden">
            <img className="object-cover" src={image} />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
    <h1 className="text-green-500 font-bold">{name}</h1>
    <div className="flex justify-center items-center border-2 rounded-xl gap-4 text-orange-500 mt-2">
        <button onClick={()=>decreaseQuantity(id)} className="text-xl flex justify-center items-center w-7">-</button>
        <span className="bg-gray-200 text-orange-500 w-7 flex justify-center items-center">{quantity}</span>
        <button onClick={()=>increaseQuantity(id)} className="text-xl flex justify-center items-center w-7 ">+</button>
    </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-end items-center">
        <h1 className="text-orange-500 text-lg font-small">Rs {price}/-</h1>
        <RiDeleteBin5Line onClick={()=>deleteItem(id)} className="text-red-500" />
      </div>
    </div>
  );
};

export default Card2;
