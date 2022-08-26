import { useLocation } from "react-router-dom";
import { ProductInfo } from "../apis/productItem";
import ProductItem from "../components/ProductItem";

interface ProductDetailProps {
  data: ProductInfo;
}

function ProductDetail() {
  const location = useLocation();
  const {
    data: { name, price, thumbnail },
  } = location.state as ProductDetailProps;

  return (
    <div>
      <ProductItem name={name} price={price} thumbnail={thumbnail} />
    </div>
  );
}

export default ProductDetail;
