import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import store from "./store/script.js";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Wishlist from "./components/Wishlist.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
