import { createSlice } from "@reduxjs/toolkit";

import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import burger3 from "../assets/burger3.png";
const initialState = {
  products: [
    {
      itemNum: 1,
      burgerSrc: burger1,
      price: 200,
      title: "Veg Cheese Burger",
    },
    { itemNum: 2, burgerSrc: burger2, price: 500, title: "Chicken Burger" },
    {
      itemNum: 3,
      burgerSrc: burger3,
      price: 800,
      title: "Cheese Burger with French Fries",
    },
  ],
};

const prod_slice = createSlice({
  name: "prod_slice",
  initialState,
  reducers: {
    AddNewProduct(state, action) {
      console.log(action.payload);
      state.products.push(action.payload);
    },
  },
});

export const prod_actions = prod_slice.actions;
export default prod_slice;
