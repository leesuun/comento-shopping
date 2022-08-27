import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { GrayLine } from "./Home";
import { BasketBtn, ProductDetailProps } from "./ProductDetail";

const BasketList = styled.ul``;
const BasketItem = styled.li``;
const PaymentInfo = styled.div``;
const Price = styled.div``;
const DeliveryFee = styled.div``;
const TotalPrice = styled.div``;
const Info = styled.span``;
const Data = styled.span``;

function Basket() {
  const location = useLocation();
  const {
    data: { thumbnail, name, price },
  } = location.state as ProductDetailProps;
  console.log(thumbnail);
  return (
    <div>
      <BasketList>
        <BasketItem>
          <img src={thumbnail} alt="" />
          <div>
            <span>{name}</span>
            <span>{price}</span>
          </div>
        </BasketItem>
      </BasketList>

      <GrayLine style={{ height: "2px" }} />

      <PaymentInfo>
        <Price>
          <Info>상품 금액(x개)</Info>
          <Data>20000원</Data>
        </Price>
        <DeliveryFee>
          <Info>배송비</Info>
          <Data>0월</Data>
        </DeliveryFee>
        <TotalPrice>
          <Info>총 주문금액</Info>
          <Data>20000월</Data>
        </TotalPrice>
      </PaymentInfo>
      <Link to={{ pathname: "/basket" }}>
        <BasketBtn>장바구니 담기</BasketBtn>
      </Link>
    </div>
  );
}

export default Basket;
