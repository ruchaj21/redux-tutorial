//import { createSlice } from "@reduxjs/toolkit";
import { createSlice, current } from "@reduxjs/toolkit";

// let's createSlice from redux toolkit
const wishListSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeFromWishlist: (state, action) => {
      console.log("action", action);
      console.log("state", current(state));
      state.splice(
        state.findIndex((item) => item.id === action.payload),
        1
      );
      return state;
    },
  },
});

// wishListSlice.reducer just exports reducer function which we can import in script.js while configuring store
// we can import by any name as it is default export
export default wishListSlice.reducer;

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;
// slices are combination, reducers, action creators
//instead of switch case we use object like structure that returns function based on action type
// here addToWishlist, removeFromWishlist are action creators
// wishListReducer is reducer
