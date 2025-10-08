import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const setProducts = createAsyncThunk(
  "products/setProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
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
  extraReducers: (builder) => {
    {
      builder
        .addCase(setProducts.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(setProducts.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
        .addCase(setProducts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.productList = action.payload;
        });
    }
  },
});
export default cartSlice.reducer;
export { setProducts };
