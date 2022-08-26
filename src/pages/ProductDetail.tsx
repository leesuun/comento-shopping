import { useLocation } from "react-router-dom";
import { ProductDetaileProps } from "../apis/productItem";
import ProductItem from "../components/ProductItem";

function ProductDetail() {
  const location = useLocation();
  const item = location.state as ProductDetaileProps;

  return (
    <div>
      <ProductItem
        name={item.name}
        description={item.description}
        thumbnail={item.thumbnail}
      />
    </div>
  );
}

export default ProductDetail;
