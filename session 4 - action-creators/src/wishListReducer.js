function wishListReducer(state = [], action) {
  // here state is nothing but empty array in initial state object's key wishlist
  //let initialState = {
  //   productList: products,
  //   cartItems: [],
  //   wishlist: [],
  // };
  // so here the state is array, not the key value pair
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state, action.payload];
    // case "RMV_FROM_WISHLIST":
    //   return [
    //     ...state,
    //     state.filter((item) => item.productId != action.payload.productId),
    //   ];

    // this is wrong, because ...state spreads all existing items.

    //Then you add the whole filtered array as a single new element.
    //So instead of getting a flat array of items, you end up with an array that contains another array inside (nested).
    // below is the correct way
    case "RMV_FROM_WISHLIST":
      return state.filter((item) => item.productId != action.payload.productId);

    default:
      return state;
  }
}
export default wishListReducer;
