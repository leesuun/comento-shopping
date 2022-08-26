import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
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
  style?: { height?: string; marginLeft?: string; marginTop?: string };
}

function ProductItem({
  name,
  description,
  thumbnail,
  price,
  style,
}: ProductItemProps) {
  return (
    <Item>
      <Img style={{ height: style?.height }} src={thumbnail} alt={name} />
      <Name style={{ marginLeft: style?.marginLeft }}>{name}</Name>
      <Description
        style={{ marginLeft: style?.marginLeft, marginTop: style?.marginTop }}
      >
        {description || price + "원"}
      </Description>
    </Item>
  );
}

export default ProductItem;
