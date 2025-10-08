import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productList: [],
    isLoading: false,
    error: null,
  },
  // eariler state = []
  // now state = {productList: [], isLoading: false, error: null}
  // so instead of returning state, we have to return state.productList
  // also operations should be done on state.productList
  reducers: {
    setProducts: (state, action) => {
      state.productList = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export default cartSlice.reducer;
export const { setProducts, setIsLoading, setError } = cartSlice.actions;
