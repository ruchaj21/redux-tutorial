function cartReducer(state = [], action) {
  // here state is nothing but empty array in initial state object's key cartItems
  //let initialState = {
  //   productList: products,
  //   cartItems: [],
  //   wishlist: [],
  // };
  // so here the state is array, not the key value pair
  switch (action.type) {
    case "ADD_TO_CART":
      //return { ...state, cartItems: [...state.cartItems, action.payload] };
      // The above line is not valid, as here state is not actual state object, instead value of cartItems i.e. an array.
      // So operations will be on array, not on state object
      // also returned will be an array, not state object
      return [...state, action.payload];
    case "RMV_ITEM_CART":
      return state.filter((item) => {
        return item.productId != action.payload.productId;
      });

    case "INC_QTY":
      return state.map((item) => {
        if (item.productId == action.payload.productId) {
          return { ...item, qty: item.qty + action.payload.qty };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
}
export default cartReducer;
