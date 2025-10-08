import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { setError, setIsLoading, setProducts } from "../slices/productsSlice";

function Header() {
  const dispatch = useDispatch();
  async function fetchProducts() {
    const API_URL = "https://fakestoreapi.com/products";
    dispatch(setIsLoading(true));
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch(setProducts(data));
      dispatch(setIsLoading(false));
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch(setError("Failed to fetch products"));
      dispatch(setIsLoading(false));
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-row items-center justify-end w-100% mb-10">
      <Link to="/cart">
        <h3 className="mr-10">Go to cart</h3>
      </Link>
      <Link to="/wishlist">
        <h3>&#x2764;</h3>
      </Link>
      <hr />
    </div>
  );
}
export default Header;
