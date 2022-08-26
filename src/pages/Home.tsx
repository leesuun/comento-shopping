import { useState } from "react";
import styled from "styled-components";
import { cup, winter } from "../apis/productItem";

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

enum ThemeType {
  "cup" = "cup",
  "winter" = "winter",
}

function Home() {
  const [themeType, setThemeType] = useState(ThemeType.cup);

  const onClickBtn = () => {};

  return (
    <div>
      <ThemeSection>
        <ThemeBtn themeName={"# 겨울방한템"}></ThemeBtn>
        <ThemeBtn themeName={"# 따순머그컵"}></ThemeBtn>
      </ThemeSection>
      <GrayLine />
      <ProductSection>
        <ProductList>
          {cup.items.map((item) => (
            <ProductItem
              name={item.name}
              description={item.description}
              thumbnail={item.thumbnail}
            />
          ))}
        </ProductList>
      </ProductSection>
    </div>
  );
}

export default Home;
