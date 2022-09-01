import styled from "styled-components";

const Item = styled.div``;
const Img = styled.img`
  width: 390px;
  height: 420px;
`;
const Info = styled.div`
  padding: 20px;
`;
const Name = styled.div`
  margin-bottom: 7px;
  font-weight: bold;
`;
const Price = styled.div``;

function DetailItem() {
  return (
    <Item>
      <Img src="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg" />
      <Info>
        <Name>해피데이 따뜻해 포켓용 핫팩 100g</Name>
        <Price>10000원</Price>
      </Info>
    </Item>
  );
}

export default DetailItem;
