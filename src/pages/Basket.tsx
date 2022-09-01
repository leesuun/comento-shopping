import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BasketItem from "../components/basket/BasketItem";
import Overlay from "../components/global/Overlay";
import PaymentData from "../components/detail/PaymentData";
import { GrayLine } from "./Home";
import { BasketBtn } from "./ProductDetail";

const Wrapper = styled.div`
  position: relative;
`;

const BasketList = styled.ul``;

const PaymentInfo = styled.div`
  margin-top: 150px;
  padding: 25px;
`;

function Basket() {
  const [isOverlay, setIsOverlay] = useState(false);

  const onClick = () => {
    setIsOverlay((prev) => !prev);
  };

  return (
    <Wrapper>
      {isOverlay ? <Overlay /> : null}
      <BasketList>
        {/* <BasketItem />
        <BasketItem /> */}
      </BasketList>
      <GrayLine style={{ height: "1px" }} />
      <PaymentInfo>
        <PaymentData info="상품 금액(x개)" price="20000원" />
        <PaymentData info="배송비" price="0원" />
        <PaymentData info="총 주문금액" price="20000원" />
      </PaymentInfo>
      <BasketBtn onClick={onClick}>주문하기</BasketBtn>
    </Wrapper>
  );
}

export default Basket;
