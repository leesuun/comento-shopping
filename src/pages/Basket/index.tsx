import { useState, useEffect } from "react";
import styled from "styled-components";
import Overlay from "components/global/Overlay";
import PaymentData from "pages/Basket/components/PaymentData";
import { GrayLine } from "pages/Home";
import { BasketBtn } from "pages/ProductDetail";
import { ProductInfo } from "interface/interface";

import { getTotalProductAmount } from "utils/utils";
import BasketItemList from "./components/BasketItemList";
import { useRecoilState } from "recoil";
import { productCountAtom } from "atom";

const Wrapper = styled.div`
  position: relative;
`;

const PaymentInfo = styled.div`
  margin-top: 150px;
  padding: 25px;
`;

function Basket() {
  const [isOverlay, setIsOverlay] = useState(false);
  const [render, setRender] = useState(1);
  const [productCount, setProductCount] = useRecoilState(productCountAtom);

  const basketItems: ProductInfo[] = JSON.parse(
    localStorage.getItem("basketItems") || ""
  );

  useEffect(() => {
    setProductCount(() => {
      const arr = basketItems.map((item) => {
        return { count: 1, id: item.id };
      });
      return arr;
    });
  }, [basketItems.length]);

  const onClick = () => {
    setIsOverlay((prev) => !prev);
  };

  return (
    <Wrapper>
      {isOverlay ? <Overlay /> : null}
      <BasketItemList setRender={setRender} render={render} />
      <GrayLine style={{ height: "1px" }} />
      <PaymentInfo>
        <PaymentData
          info="총 상품금액"
          price={getTotalProductAmount(basketItems, productCount)}
        />
        <PaymentData info="배송비" price="0원" />
        <PaymentData
          info="총 주문금액"
          price={getTotalProductAmount(basketItems, productCount)}
        />
      </PaymentInfo>
      <BasketBtn
        disabled={basketItems.length === 0 ? true : false}
        onClick={onClick}
      >
        주문하기
      </BasketBtn>
    </Wrapper>
  );
}

export default Basket;
