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
store.dispatch({ type: "ADD_TO_CART", payload: { productId: 12, qty: 1 } });
store.dispatch({ type: "ADD_TO_CART", payload: { productId: 1, qty: 1 } });
store.dispatch({ type: "ADD_TO_CART", payload: { productId: 11, qty: 1 } });
store.dispatch({ type: "RMV_ITEM_CART", payload: { productId: 12 } });
store.dispatch({ type: "RMV_ITEM_CART", payload: { productId: 12 } });
store.dispatch({ type: "INC_QTY", payload: { productId: 1, qty: 4 } });
store.dispatch({ type: "ADD_TO_WISHLIST", payload: { productId: 9 } });
store.dispatch({ type: "RMV_FROM_WISHLIST", payload: { productId: 9 } });
