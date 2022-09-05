import { useEffect, useState } from "react";
import styled from "styled-components";
import { IProductDetailProps } from "../../interface/interface";
import { getProductDetail, ProductInfo } from "../../mock/productItem";

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

function DetailItem({ id }: IProductDetailProps) {
  const [product, setProduct] = useState<ProductInfo>();

  useEffect(() => {
    const result = getProductDetail(Number(id));
    setProduct(result);
  }, [id]);

  return (
    <Item>
      <Img src={product?.thumbnail} />
      <Info>
        <Name>{product?.name}</Name>
        <Price>{product?.price + "원"}</Price>
      </Info>
    </Item>
  );
}

export default DetailItem;
