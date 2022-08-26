import styled from "styled-components";

export const Item = styled.li``;
export const Img = styled.img``;
export const Name = styled.h3``;
export const Description = styled.p``;

interface ProductItemProps {
  name: string;
  description: string;
  thumbnail: string;
}

function ProductItem({ name, description, thumbnail }: ProductItemProps) {
  return (
    <Item>
      <Img width="200" src={thumbnail} alt={name} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Item>
  );
}

export default ProductItem;
