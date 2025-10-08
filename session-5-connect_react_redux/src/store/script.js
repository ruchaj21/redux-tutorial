import { combineReducers, legacy_createStore as createStore } from "redux";
import productsReducer from "./productsReducer";
import wishListReducer from "./wishListReducer";
import cartReducer from "./cartReducer";

// let initialState = {
//   productList: products,
//   cartItems: [],
//   wishlist: [],
// };

const reducer = combineReducers({
  productList: productsReducer,
  cartItems: cartReducer,
  wishlist: wishListReducer,
});
//combine reducer returns a reducer function
// it takes object in key value pair
// key => the key we'd generally pass in initial state
// value: reducers
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
// we are exporting store to use it in our app
export default store;

// store.dispatch({ type: "ADD_TO_CART", payload: { productId: 12, qty: 1 } });
// store.dispatch({ type: "ADD_TO_CART", payload: { productId: 1, qty: 1 } });
// store.dispatch({ type: "ADD_TO_CART", payload: { productId: 11, qty: 1 } });
// store.dispatch({ type: "RMV_ITEM_CART", payload: { productId: 12 } });
// store.dispatch({ type: "RMV_ITEM_CART", payload: { productId: 12 } });
// store.dispatch({ type: "INC_QTY", payload: { productId: 1, qty: 4 } });
// store.dispatch({ type: "ADD_TO_WISHLIST", payload: { productId: 9 } });
// store.dispatch({ type: "RMV_FROM_WISHLIST", payload: { productId: 9 } });

// ACTION CREATORS
// if we observe we have similar code from line number 22 to 29.
// Line number 22,23,24 are exact same only diff is payload
// Line number 25,26 are exact same only diff is payload
// so we can create action creators i.e. common functions

export function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
}
// store.dispatch(addToCart(12, 1));
// store.dispatch(addToCart(1, 1));
// store.dispatch(addToCart(11, 1));

export function removeItemFromCart(id) {
  return {
    type: "RMV_ITEM_CART",
    payload: {
      id: id,
    },
  };
}
// store.dispatch(removeItemFromCart(12));

export function increaseQty(id, qty) {
  return {
    type: "INC_QTY",
    payload: {
      id: id,
      qty: qty,
    },
  };
}
export function decreseQty(id, qty) {
  return {
    type: "DEC_QTY",
    payload: {
      id: id,
      qty: qty,
    },
  };
}
// store.dispatch(increaseQty(1, 4));

export function addToWishlist(product) {
  return {
    type: "ADD_TO_WISHLIST",
    payload: product,
  };
}
// store.dispatch(addToWishlist(9));

export function removeFromWishlist(id) {
  return {
    type: "RMV_FROM_WISHLIST",
    payload: {
      id: id,
    },
  };
}
// store.dispatch(removeFromWishlist(12));
