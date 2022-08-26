import { useState } from "react";
import styled from "styled-components";
import { productItems } from "../apis/productItem";

import ProductItem from "../components/ProductItem";
import ThemeBtn from "../components/ThemeBtn";

export const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 12px;
`;

export const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

export const ProductSection = styled.div`
  padding: 40px;
`;

export const ProductList = styled.ul``;

enum Category {
  "cup" = "cup",
  "winter" = "winter",
}

function Home() {
  const [category, setCategory] = useState<string>(Category.cup);

  const onClickBtn = (type: string) => setCategory(type);

  return (
    <div>
      <ThemeSection>
        <ThemeBtn
          onClick={onClickBtn}
          themeName={"# 겨울방한템"}
          type={Category.cup}
        ></ThemeBtn>
        <ThemeBtn
          onClick={onClickBtn}
          themeName={"# 따순머그컵"}
          type={Category.winter}
        ></ThemeBtn>
      </ThemeSection>
      <GrayLine />
      <ProductSection>
        <ProductList>
          {productItems[category].items.map((item) => (
            <ProductItem
              name={item.name}
              description={item.description}
              thumbnail={item.thumbnail}
              key={item.name}
            />
          ))}
        </ProductList>
      </ProductSection>
    </div>
  );
}

export default Home;