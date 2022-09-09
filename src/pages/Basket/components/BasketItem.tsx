import styled from "styled-components";
import { ProductInfo } from "interface/interface";

const Item = styled.li`
  display: flex;
  gap: 10px;
  padding: 25px;
`;
const Img = styled.img`
  width: 130px;
`;
const Info = styled.div`
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.span``;
const Price = styled.span``;

function BasketItem({ thumbnail, name, price }: ProductInfo) {
  return (
    <Item>
      <Img src={thumbnail} alt="" />
      <Info>
        <Name>{name}</Name>
        <Price>{price + "원"}</Price>
      </Info>
    </Item>
  );
}

export default BasketItem;
