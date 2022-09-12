import { useState } from "react";
import styled from "styled-components";
import Overlay from "components/global/Overlay";
import PaymentData from "pages/Basket/components/PaymentData";
import { GrayLine } from "pages/Home";
import { BasketBtn } from "pages/ProductDetail";
import { ProductInfo } from "interface/interface";

const Wrapper = styled.div`
  position: relative;
`;

const List = styled.ul``;
const Item = styled.li``;
const Img = styled.img``;
const Info = styled.div``;
const Name = styled.span``;
const Price = styled.span``;

const PaymentInfo = styled.div`
  margin-top: 150px;
  padding: 25px;
`;

function Basket() {
  const [isOverlay, setIsOverlay] = useState(false);
  const basketItems: ProductInfo[] = JSON.parse(
    localStorage.getItem("basketItems") || ""
  );

  const onClick = () => {
    setIsOverlay((prev) => !prev);
  };

  return (
    <Wrapper>
      {isOverlay ? <Overlay /> : null}
      <List>
        {basketItems ? (
          basketItems.map((item) => (
            <Item>
              <Img src={item.thumbnail} style={{ width: "100px" }} alt="" />
              <Info>
                <Name>{item.name}</Name>
                <Price>{item.price}</Price>
              </Info>
            </Item>
          ))
        ) : (
          <div>anything...</div>
        )}
      </List>
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
