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
      state.price += action.payload.price * 1;
    },
    DeleteProduct(state, action) {
      const targetProd = state.cart.find(
        (prod) => prod.itemNum === action.payload.id
      );
      const remainingProducts = state.cart.filter(
        (prod) => prod.id !== action.payload.id
      );
      state.cart = remainingProducts;
      state.price -= targetProd.price * targetProd.quantity;
    },
    IncreaseQuantity(state, action) {
      const targetProd = state.cart.find(
        (prod) => prod.itemNum === action.payload.id
      );
      state.cart.forEach((prod) => {
        if (prod.itemNum === action.payload.id) prod.quantity++;
      });
      state.price += targetProd.price;
    },
    DecreaseQuantity(state, action) {
      const targetProd = state.cart.find(
        (prod) => prod.itemNum === action.payload.id
      );
      if (targetProd.quantity === 1) {
        const remainingProducts = state.cart.filter(
          (prod) => prod.itemNum !== action.payload.id
        );
        state.cart = remainingProducts;
      } else {
        state.cart.forEach((prod) => {
          if (prod.itemNum === action.payload.id) prod.quantity--;
        });
      }
      state.price -= targetProd.price;
    },
  },
});
export const order_actions = order_slice.actions;
export default order_slice;
