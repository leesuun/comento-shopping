import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";
import PaymentData from "../components/PaymentData";
import { GrayLine } from "./Home";
import { BasketBtn, ProductDetailProps } from "./ProductDetail";

const BasketList = styled.ul``;

const PaymentInfo = styled.div`
  margin-top: 150px;
  padding: 25px;
`;

function Basket() {
  const location = useLocation();
  const {
    data: { thumbnail, name, price },
  } = location.state as ProductDetailProps;

  const onClick = () => alert("ss");

  return (
    <div>
      <BasketList>
        <BasketItem thumbnail={thumbnail} name={name} price={price} />
        <BasketItem thumbnail={thumbnail} name={name} price={price} />
      </BasketList>
      <GrayLine style={{ height: "1px" }} />
      <PaymentInfo>
        <PaymentData info="상품 금액(x개)" price="20000원" />
        <PaymentData info="배송비" price="0원" />
        <PaymentData info="총 주문금액" price="20000원" />
      </PaymentInfo>
      <Link to="/">
        <BasketBtn onClick={onClick}>주문하기</BasketBtn>
      </Link>
    </div>
  );
}

export default Basket;
