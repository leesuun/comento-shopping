import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import DetailItem from "../components/detail/DetailItem";
import { IProductDetailProps } from "../interface/interface";

const ButtonGroup = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
`;

const Explain = styled.div``;
const CommentGroup = styled.ul``;
const Comment = styled.li``;
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

  const onClickBtn = () => setIsComment((prev) => !prev);

  return (
    <div>
      <DetailItem id={id} />
      <ButtonGroup>
        <Button onClick={onClickBtn}>상품 설명</Button>
        <Button onClick={onClickBtn}>상품 후기</Button>
      </ButtonGroup>
      {isComment ? (
        <CommentGroup>
          <Comment key={1}>코멘트</Comment>
          <Comment key={2}>코멘트</Comment>
          <Comment key={3}>코멘트</Comment>
        </CommentGroup>
      ) : (
        <Explain>상품 설명</Explain>
      )}

      <Link to={{ pathname: "/basket" }}>
        <BasketBtn>장바구니 담기</BasketBtn>
      </Link>
    </div>
  );
}

export default ProductDetail;
