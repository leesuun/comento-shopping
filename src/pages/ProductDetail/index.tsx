import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import DetailItem from "./components/DetailItem";
import { IProductDetailProps, ProductInfo } from "interface/interface";
import productDetailImg from "assets/img/상품설명.png";
import productCommentImg from "assets/img/상품후기.png";
import { useRecoilValue } from "recoil";
import { productItemAtom } from "atom";
import { getProductDetail } from "utils/utils";

const ButtonGroup = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const Explain = styled.div`
  background-image: url(${productDetailImg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 390px;
  height: 1000px;
`;
const CommentGroup = styled.ul`
  display: flex;
  padding: 15px;
  gap: 10px;
  flex-direction: column;
`;
const Comment = styled.li`
  background-image: url(${productCommentImg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 84px;
`;
export const BasketBtn = styled.button`
  width: 100%;
  height: 70px;
  border: none;
  background-color: #24dbaf;
  cursor: pointer;
`;

function ProductDetail() {
  const location = useLocation();
  const { id } = location.state as IProductDetailProps;
  const [isComment, setIsComment] = useState(false);
  const productItem = useRecoilValue(productItemAtom);

  const onClickCategoryBtn = () => setIsComment((prev) => !prev);

  const onClickBasketBtn = () => {
    const result = getProductDetail(Number(id), productItem);
    const localBasketItems = localStorage.getItem("basketItems");
    const basketItems: ProductInfo[] = [];
    if (localBasketItems !== null) {
      basketItems.push(...JSON.parse(localBasketItems));
    }
    if (basketItems.find((item) => item.id === result?.id)) {
    } else {
      localStorage.setItem(
        "basketItems",
        JSON.stringify([...basketItems, result])
      );
    }
  };

  return (
    <div>
      <DetailItem id={id} />
      <ButtonGroup>
        <Button
          style={{ backgroundColor: isComment ? "white" : "gray" }}
          onClick={onClickCategoryBtn}
        >
          상품 설명
        </Button>
        <Button
          style={{ backgroundColor: isComment ? "gray" : "white" }}
          onClick={onClickCategoryBtn}
        >
          상품 후기
        </Button>
      </ButtonGroup>
      {isComment ? (
        <CommentGroup>
          <Comment key={1}></Comment>
          <Comment key={2}></Comment>
          <Comment key={3}></Comment>
        </CommentGroup>
      ) : (
        <Explain />
      )}

      <Link to={{ pathname: "/basket" }}>
        <BasketBtn onClick={onClickBasketBtn}>장바구니 담기</BasketBtn>
      </Link>
    </div>
  );
}

export default ProductDetail;
