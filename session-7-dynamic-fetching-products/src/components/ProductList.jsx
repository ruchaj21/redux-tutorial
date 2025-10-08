import { useSelector } from "react-redux";
import Product from "./Product";

function ProductList() {
  const productList = useSelector((state) => state.productList.productList);
  const isLoading = useSelector((state) => state.productList.isLoading);
  const error = useSelector((state) => state.productList.error);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
