import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Category from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food";
import { dataContext } from "../Context/UseContextData";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2";

const Home = () => {
  const { categories, setCategories, inputData, showCard, setShowCard } =
    useContext(dataContext);
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
      <Navbar />

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
        {categories.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.food_name}
              price={item.price}
              type={item.food_type}
              id={item.id}
              image={item.food_image}
            />
          );
        })}
      </div>

      {/* Shopping Card rendering */}

      <div
        className={
          (showCard ? "translate-x-0" : "translate-x-full") +
          " bg-white w-[35vw] transition-all duration-300  h-screen fixed top-0 right-0 p-6"
        }
      >
        <header className="flex justify-between text-center items-center text-orange-500 font-semibold text-lg">
          <span>Order Item</span>
          <RxCross2
            onClick={() => setShowCard(false)}
            className="h-6 w-6 hover:text-red-700 transition-all duration-300"
          />
        </header>

        <Card2 />
        <div className="mt-4">
          <hr />
        <div className="flex justify-between mt-2 text-orange-500 font-semibold">
          <h1>SubTotal </h1>
          <h1>Rs 399/-</h1>
        </div>
        <div className="flex justify-between mt-2 text-orange-500 font-semibold">
          <h1>Delivery Fees </h1>
          <h1>Rs 20/-</h1>
        </div>
        <div className="flex justify-between mt-2 text-orange-500 font-semibold">
          <h1>Taxes</h1>
          <h1>Rs 1.995/-</h1>
        </div>
        <hr className="mt-2"/>
        <div className="flex justify-between mt-2 text-orange-500 font-semibold">
          <h1>Total</h1>
          <h1>Rs 420/-</h1>
        </div>
        <button className="bg-orange-500 text-white w-full rounded-md mt-2 h-8 font-bold">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
