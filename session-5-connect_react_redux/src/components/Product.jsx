import { useDispatch } from "react-redux";
import { addToCart, addToWishlist, removeFromWishlist } from "../store/script";

function Product({ product }) {
  const dispatch = useDispatch();
  return (
    <div
      key={product.title}
      className="shadow-sm hover:shadow-md flex flex-col items-center justify-center p-4 w-80"
    >
      <div className="flex flex-wrap">
        <h3 className="w-60">{product.title}</h3>
        {product.addedToWishList ? (
          <h1
            className="font-medium"
            onClick={() => dispatch(removeFromWishlist(product.id))}
          >
            &#x2764;
          </h1>
        ) : (
          <h1
            className="font-medium"
            onClick={() => dispatch(addToWishlist(product))}
          >
            &#9825;
          </h1>
        )}
      </div>
      <p>
        <img className="h-40" src={product.image} />
      </p>
      <h4>
        <b>${product.price}</b>
      </h4>
      <h6>{product.rating.rate}</h6>
      <div className="flex flex-wrap mt-5">
        <button
          className="bg-blue-100 shadow-md hover:shadow-lg text-black  py-1 px-2 rounded"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
        <button className="bg-amber-200 shadow-md hover:shadow-lg text-black py-1 px-2 rounded ml-2">
          Buy now
        </button>
      </div>
    </div>
  );
}
export default Product;
