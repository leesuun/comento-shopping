import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ProductInfo } from "../apis/productItem";
import ProductItem from "../components/home/ProductItem";

const ButtonGroup = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
`;

const ProductExplain = styled.img``;
const ProductComment = styled.div``;
export const BasketBtn = styled.button`
  width: 100%;
  height: 70px;
  border: none;
  background-color: #24dbaf;
  cursor: pointer;
`;

export interface ProductDetailProps {
  data: ProductInfo;
}

function ProductDetail() {
  return (
    <div>
      <ButtonGroup>
        <Button>상품 설명</Button>
        <Button>상품 후기</Button>
      </ButtonGroup>
      <ProductExplain />
      <ProductComment>코멘트</ProductComment>
      <Link to={{ pathname: "/basket" }}>
        <BasketBtn>장바구니 담기</BasketBtn>
      </Link>
    </div>
  );
}

export default ProductDetail;
