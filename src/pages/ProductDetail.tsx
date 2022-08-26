import { useLocation } from "react-router-dom";
import { ProductInfo } from "../apis/productItem";
import ProductItem from "../components/ProductItem";

interface ProductDetailProps {
  data: ProductInfo;
}

const style: { [stinrg: string]: string } = {
  height: "420px",
  marginLeft: "20px",
  marginTop: "-7px",
};

function ProductDetail() {
  const location = useLocation();
  const {
    data: { name, price, thumbnail },
  } = location.state as ProductDetailProps;

  return (
    <div>
      <ProductItem
        style={style}
        name={name}
        price={price}
        thumbnail={thumbnail}
      />
      <div>
        <button>상품 설명</button>
        <button>상품 후기</button>
      </div>
    </div>
  );
}

export default ProductDetail;
