import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push({ ...action.payload, qty: 1 });
      return state;
    },
    removeItemFromCart: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload.id),
        1
      );
      return state;
    },
    increaseQty: (state, action) => {
      const index = state.find((item) => item.id === action.payload.id);
      if (index) {
        index.qty += 1;
      }
    },
    decreseQty: (state, action) => {
      const index = state.find((item) => item.id === action.payload.id);
      if (index) {
        if (index.qty === 1) {
          state.splice(
            state.findIndex((item) => item.id === action.payload.id),
            1
          );
          return state;
        }
        index.qty -= 1;
      }
    },
  },
});
export const { addToCart, removeItemFromCart, increaseQty, decreseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
