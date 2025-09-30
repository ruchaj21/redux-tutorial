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

function addToCart(productId, qty) {
  return {
    type: "ADD_TO_CART",
    payload: { productId: productId, qty: qty },
  };
}
store.dispatch(addToCart(12, 1));
store.dispatch(addToCart(1, 1));
store.dispatch(addToCart(11, 1));

function removeItemFromCart(productId) {
  return {
    type: "RMV_ITEM_CART",
    payload: {
      productId: productId,
    },
  };
}
store.dispatch(removeItemFromCart(12));

function increaseQty(productId, qty) {
  return {
    type: "INC_QTY",
    payload: {
      productId: productId,
      qty: qty,
    },
  };
}
store.dispatch(increaseQty(1, 4));

function addToWishlist(productId) {
  return {
    type: "ADD_TO_WISHLIST",
    payload: {
      productId: productId,
    },
  };
}
store.dispatch(addToWishlist(9));

function removeFromWishlist(productId) {
  return {
    type: "RMV_FROM_WISHLIST",
    payload: {
      productId: productId,
    },
  };
}
store.dispatch(removeFromWishlist(12));
