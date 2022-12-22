import { configureStore } from "@reduxjs/toolkit";
import order_slice from "./order_slice";
import prod_slice from "./prod_slice";
import user_slice from "./user_slice";

const store = configureStore({
  reducer: {
    order_slice: order_slice.reducer,
    prod_slice: prod_slice.reducer,
    user_slice: user_slice.reducer,
  },
});
export default store;
