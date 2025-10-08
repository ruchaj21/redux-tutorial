import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeFromWishlist } from "../slices/wishListSlice";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">Back to Products</Link>
      {wishlistItems.length === 0 ? (
        <div>Your wishlist is empty</div>
      ) : (
        <div>
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-row shadow-sm hover:shadow-md items-center justify-left p-2 w-auto mb-12"
            >
              <p></p>
              <img className="h-30 mr-6" src={item.image} />
              <h3 className="w-100 text-left ">{item.title}</h3>
              <button onClick={() => dispatch(removeFromWishlist(item.id))}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Wishlist;
