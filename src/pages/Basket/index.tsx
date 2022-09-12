import { useState } from "react";
import styled from "styled-components";
import Overlay from "components/global/Overlay";
import PaymentData from "pages/Basket/components/PaymentData";
import { GrayLine } from "pages/Home";
import { BasketBtn } from "pages/ProductDetail";
import { ProductInfo } from "interface/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  position: relative;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;
const Item = styled.li`
  display: flex;
  position: relative;
`;
const Img = styled.img`
  width: 120px;
`;
const Info = styled.div`
  display: flex;
  padding: 7px;
  flex-direction: column;
  justify-content: space-between;
`;
const Name = styled.span`
  width: 200px;
`;
const Price = styled.span``;

const CancleBtn = styled.div`
  position: absolute;
  right: 3px;
  top: 3px;
`;

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
            <Item key={item.id}>
              <Img src={item.thumbnail} alt="" />
              <Info>
                <Name>{item.name}</Name>
                <Price>{item.price + "원"}</Price>
              </Info>
              <CancleBtn>
                <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
              </CancleBtn>
            </Item>
          ))
        ) : (
          <div>nothing...</div>
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
