import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
  box-shadow: 2px 2px 2px black;
`;
export const Img = styled.img`
  width: 100%;
  height: 250px;
`;
export const Name = styled.h3`
  font-weight: bold;
`;
export const Description = styled.p`
  line-height: 1.3;
  margin-bottom: 5px;
`;

interface ProductItemProps {
  name: string;
  thumbnail: string;
  description?: string;
  price?: number;
}

function ProductItem({
  name,
  description,
  thumbnail,
  price,
}: ProductItemProps) {
  return (
    <Item>
      <Img src={thumbnail} alt={name} />
      <Name>{name}</Name>
      <Description>{description || price + "원"}</Description>
    </Item>
  );
}

export default ProductItem;
