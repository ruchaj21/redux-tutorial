import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { setProducts } from "../slices/productsSlice";

function Header() {
  const dispatch = useDispatch();

  dispatch(setProducts());

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
