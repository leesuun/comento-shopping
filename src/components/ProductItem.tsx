import { Description, Img, Item, Name } from "../css/components/productItem";

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
