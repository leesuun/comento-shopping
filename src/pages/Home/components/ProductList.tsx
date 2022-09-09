import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { categoryAtom, productItemAtom } from "../../../atom";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

export const List = styled.ul``;

function ProductList() {
  const productItem = useRecoilValue(productItemAtom);
  const category = useRecoilValue(categoryAtom);
  return (
    <List>
      {productItem ? (
        productItem[category].items.map((item) => (
          <Link
            to={{ pathname: `/product/${item.name}` }}
            state={{ id: item.id }}
            key={item.name}
          >
            <ProductItem
              name={item.name}
              description={item.description}
              thumbnail={item.thumbnail}
            />
          </Link>
        ))
      ) : (
        <div>loading...</div>
      )}
    </List>
  );
}

export default ProductList;
