import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Category from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food";
import { dataContext } from "../Context/UseContextData";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2";
import { toast } from "react-toastify";

const Home = () => {
  const {
    categories,
    setCategories,
    inputData,
    showCard,
    setShowCard,
    cart,
    setCart,
  } = useContext(dataContext);

  const totalQuantity = cart.reduce((total,item)=>{
item.quantity+total
},0)

const subTotal = cart.reduce((total,item)=>item.quantity * item.price+ total ,0)

const deliveryFees = cart.length>0 ? 20 : 0;

const taxes = subTotal * 0.05;

const total = subTotal+ deliveryFees + taxes;

  const addToCart = (food) => {
    let isExist = cart.find((item) => item.id == food.id);
    if (isExist) {
      const newCart = cart.map((item) => {
        return item.id == food.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, food]);
    }
    setShowCard(true);
  };

  function filter(category) {
    if (category == "All") {
      setCategories(food_items);
    } else {
      let newList = food_items.filter((item) => {
        return item.food_category.toLowerCase() == category.toLowerCase();
      });
      setCategories(newList);
    }
  }
  useEffect(() => {
    let newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(inputData.toLowerCase()),
    );
    setCategories(newList);
  }, [inputData]);
  return (
    <div className="w-full min-h-screen bg-slate-300 py-2 px-4 md:px-6 md:py-4 ">
      <Navbar totalQuantity={totalQuantity}/>

      {inputData ? null : (
        <div className="flex flex-wrap justify-center gap-8 mt-4 ">
          {Category.map((item, index) => {
            return (
              <div
                onClick={() => filter(item.name)}
                className="bg-white w-25 h-25 rounded-md shadow-md flex flex-col justify-center gap-4 pl-2 text-gray-600 cursor-pointer hover:bg-orange-200 transition-all duration-300"
                key={index}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      )}

      <div className="flex flex-wrap  justify-center items-center mt-5  gap-4 mb-4">
        {categories.length == 0 && 
       <div className="text-orange-500 font-semibold text-2xl mt-10">
        No Dish Found
       </div>
        }
        {categories.map((item, index) => {
          return (
            <Card
              key={index}
              addToCart={addToCart}
              name={item.food_name}
              price={item.price}
              type={item.food_type}
              id={item.id}
              image={item.food_image}
              quantity={item.food_quantity}
            />
          );
        })}
      </div>

      {/* Shopping Card rendering */}

      <div
        className={
          (showCard ? "translate-x-0" : "translate-x-full") +
          " bg-white w-[40vw] overflow-auto transition-all duration-300  h-screen fixed top-0 right-0 p-6"
        }
      >
        <header className="flex justify-between text-center items-center text-orange-500 font-semibold text-lg">
          <span>Order Item</span>
          <RxCross2
            onClick={() => setShowCard(false)}
            className="h-6 w-6 hover:text-red-700 transition-all duration-300"
          />
        </header>

        {cart.map((item, index) => {
          return (
            <Card2
              key={index}
              price={item.price}
              id={item.id}
              name={item.name}
              image={item.image}
              quantity={item.quantity}
            />
          );
        })}

        {
          cart.length>0 ? 
    
          <div className="mt-4">
          <hr />
          <div className="flex justify-between mt-2 text-orange-500 font-semibold">
            <h1>SubTotal </h1>
            <h1>Rs {subTotal.toFixed(2)}/-</h1>
          </div>
          <div className="flex justify-between mt-2 text-orange-500 font-semibold">
            <h1>Delivery Fees </h1>
            <h1>Rs {deliveryFees.toFixed(2)}/-</h1>
          </div>
          <div className="flex justify-between mt-2 text-orange-500 font-semibold">
            <h1>Taxes</h1>
            <h1>Rs {taxes.toFixed(2)}/-</h1>
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between mt-2 text-orange-500 font-semibold">
            <h1>Total</h1>
            <h1>Rs {total.toFixed(2)}/-</h1>
          </div>
          <button onClick={()=>toast.success("Order is placed")} className="bg-orange-500 text-white w-full rounded-md mt-2 h-8 font-bold">
            Place Order
          </button>
        </div>
      : <div className="w-full mt-15 flex justify-center text-orange-500 text-2xl font-semibold">
        Cart is Empty
      </div>
        }
      
      </div>
    </div>
  );
};

export default Home;
