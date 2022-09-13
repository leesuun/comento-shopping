import { ProductInfo } from "interface/interface";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
  cursor: pointer;
`;

function BasketItemList({ setRender, render }: any) {
  const basketItems: ProductInfo[] = JSON.parse(
    localStorage.getItem("basketItems") || ""
  );

  const onClickCancleBtn = (selectedItem: ProductInfo) => {
    console.log(render);
    setRender((prev: any) => prev + 1);
    const newBasketItems = basketItems.filter(
      (item) => item.id !== selectedItem.id
    );
    localStorage.setItem("basketItems", JSON.stringify(newBasketItems));
  };
  return (
    <List>
      {basketItems ? (
        basketItems.map((item) => (
          <Item key={item.id}>
            <Img src={item.thumbnail} alt="" />
            <Info>
              <Name>{item.name}</Name>
              <Price>{item.price + "원"}</Price>
            </Info>
            <CancleBtn onClick={() => onClickCancleBtn(item)}>
              <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
            </CancleBtn>
          </Item>
        ))
      ) : (
        <div>nothing...</div>
      )}
    </List>
  );
}

export default BasketItemList;
