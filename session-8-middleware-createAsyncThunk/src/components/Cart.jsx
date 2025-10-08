import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import {
  decreseQty,
  increaseQty,
  removeItemFromCart,
} from "../slices/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">Back to Products</Link>
      {cartItems.length === 0 ? (
        <h1 className="text-3xl font-bold text-center">Cart is empty</h1>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-row shadow-sm hover:shadow-md items-center justify-left p-2 w-auto mb-12"
          >
            <p>
              <img className="h-30 mr-6" src={item.image} />
            </p>
            <h3 className="w-100 text-left ">{item.title}</h3>
            <h4 className="mr-12">
              <b>${item.price}</b>
            </h4>
            <h6 className="mr-12">Rating: {item.rating.rate}</h6>

            <button
              className="bg-green-400 shadow-md hover:shadow-lg text-white  py-1 px-2 rounded"
              onClick={() => dispatch(increaseQty({ id: item.id }))}
            >
              +
            </button>
            <span className="mx-4">{item.qty}</span>
            <button
              className="bg-yellow-400 shadow-md hover:shadow-lg text-white  py-1 px-2 rounded ml-2"
              onClick={() => dispatch(decreseQty({ id: item.id }))}
            >
              -
            </button>
            <button
              className="bg-red-400 shadow-md hover:shadow-lg text-white  py-1 px-2 rounded ml-12"
              onClick={() => dispatch(removeItemFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Cart;
