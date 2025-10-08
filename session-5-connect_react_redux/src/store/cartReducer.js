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
      return [...state, { ...action.payload, qty: 1 }];
    case "RMV_ITEM_CART":
      return state.filter((item) => {
        return item.id != action.payload.id;
      });

    case "INC_QTY":
      return state.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, qty: item.qty + action.payload.qty };
        } else {
          return item;
        }
      });
    case "DEC_QTY":
      return state
        .map((item) => {
          if (item.id == action.payload.id) {
            return { ...item, qty: item.qty - action.payload.qty };
          } else {
            return item;
          }
        })
        .filter((item) => item.qty > 0);

    default:
      return state;
  }
}
export default cartReducer;
