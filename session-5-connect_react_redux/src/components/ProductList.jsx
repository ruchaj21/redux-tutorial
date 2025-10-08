import { useSelector } from "react-redux";
import Product from "./Product";


function ProductList() {
  const productList = useSelector((state) => state.productList);
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
