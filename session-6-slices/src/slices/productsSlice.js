import { products } from "../store/products";

function productSlice(state = products) {
  // here state is nothing but productList in initial state object
  //let initialState = {
  //   productList: products,
  //   cartItems: [],
  //   wishlist: [],
  // };
  // so here the state is array, not thekey value pair
  return state;
  // returning an array, just like we returned default state i.e. products
}

export default productSlice;
