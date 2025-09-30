import { legacy_createStore as createStore } from "redux";
import { products } from "./products";

let initialState = {
  productList: products,
  cartItems: [],
  wishlist: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "RMV_ITEM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.productId != action.payload.productId;
        }),
      };
    case "INC_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.productId == action.payload.productId) {
            return { ...item, qty: item.qty + action.payload.qty };
          } else {
            return item;
          }
        }),
      };
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "RMV_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.productId != action.payload.productId
        ),
      };
    default:
      return state;
  }
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
store.dispatch({ type: "ADD_TO_CART", payload: { productId: 12, qty: 1 } });
store.dispatch({ type: "ADD_TO_CART", payload: { productId: 1, qty: 1 } });
store.dispatch({ type: "ADD_TO_CART", payload: { productId: 11, qty: 1 } });
store.dispatch({ type: "RMV_ITEM_CART", payload: { productId: 12 } });
store.dispatch({ type: "RMV_ITEM_CART", payload: { productId: 12 } });
store.dispatch({ type: "INC_QTY", payload: { productId: 1, qty: 4 } });
store.dispatch({ type: "ADD_TO_WISHLIST", payload: { productId: 9 } });
store.dispatch({ type: "RMV_FROM_WISHLIST", payload: { productId: 9 } });
store.dispatch({ type: "RMV_FROM_WISHLIST", payload: { productId: 12 } });
