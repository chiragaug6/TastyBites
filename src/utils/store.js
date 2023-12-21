import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducers,
  },
  preloadedState: {
    cart: { cartItems: JSON.parse(localStorage.getItem("cartItems")) || [] },
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().cart.cartItems)
  );
});

export default store;
