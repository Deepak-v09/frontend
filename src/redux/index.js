import { configureStore } from "@reduxjs/toolkit";
import order_slice from "./order_slice";

const store = configureStore({
  reducer: { order_slice: order_slice.reducer },
});
export default store;
