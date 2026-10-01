import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();

const UseContextData = ({ children }) => {
  const [categories, setCategories] = useState(food_items);
  const [inputData,setInputData] = useState("")

   const [showCard,setShowCard] = useState(false)

  const data = {
    categories,
    setCategories,
    inputData,
    setInputData,
    showCard,
    setShowCard
  };

  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UseContextData;
