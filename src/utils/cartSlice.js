import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    // removeItem: (state, action) => {
    //   state.items.pop();
    // },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      return (state = []);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
