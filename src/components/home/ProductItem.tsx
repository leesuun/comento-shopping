import styled from "styled-components";

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
`;
const Img = styled.img`
  width: 100%;
  height: 250px;
`;
const Name = styled.h3`
  font-weight: bold;
`;
const Description = styled.p`
  line-height: 1.3;
  margin-bottom: 5px;
`;

interface ProductItemProps {
  name: string;
  thumbnail: string;
  description: string;
}

function ProductItem({ name, description, thumbnail }: ProductItemProps) {
  return (
    <Item>
      <Img src={thumbnail} alt={name} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Item>
  );
}

export default ProductItem;
