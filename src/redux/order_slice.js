import { createSlice } from "@reduxjs/toolkit";
const initialState = { cart: [], price: 0 };
const order_slice = createSlice({
  name: "order_slice",
  initialState,
  reducers: {
    AddProduct(state, action) {
      const targetProd = state.cart.find(
        (prod) => prod.itemNum === action.payload.itemNum
      );
      if (targetProd) return;
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    DeleteProduct(state, action) {
      const remainingProducts = state.cart.filter(
        (prod) => prod.id !== action.payload.id
      );
      state.cart = remainingProducts;
    },
    IncreaseQuantity(state, action) {
      const remainingProducts = state.cart.filter(
        (prod) => prod.itemNum !== action.payload.id
      );
      const targetProd = state.cart.find(
        (prod) => prod.itemNum === action.payload.id
      );
      targetProd.quantity++;
      state.cart = [...remainingProducts, targetProd];
      state.cart.forEach((prod) => {
        state.price += prod.price * prod.quantity;
      });
    },
    DecreaseQuantity(state, action) {
      const targetProd = state.cart.find(
        (prod) => prod.itemNum === action.payload.id
      );
      const remainingProducts = state.cart.filter(
        (prod) => prod.itemNum !== action.payload.id
      );

      if (targetProd.quantity === 1) {
        state.cart = remainingProducts;
      } else {
        targetProd.quantity--;
        state.cart = [...remainingProducts, targetProd];
      }
      state.cart.forEach((prod) => {
        state.price += prod.price * prod.quantity;
      });
    },
  },
});
export const order_actions = order_slice.actions;
export default order_slice;
