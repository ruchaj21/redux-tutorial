import productsReducer from "../slices/productsSlice";
import cartReducer from "../slices/cartSlice";
import wishListReducer from "../slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    productList: productsReducer,
    cartItems: cartReducer,
    wishlist: wishListReducer,
  },
});
export default store;
