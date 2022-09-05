import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { productItems } from "../mock/productItem";
import ProductItem from "../components/home/ProductItem";
import ThemeBtn from "../components/home/ThemeBtn";
import { Category } from "../interface/interface";

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

function Home() {
  const [category, setCategory] = useState<string>(Category.cup);

  const onClickBtn = (type: string) => setCategory(type);

  fetch("https://30600da0-86d1-44d3-8436-f6d4521eb12c.mock.pstmn.io/test")
    .then((response) => response.json())
    .then((data) => console.log(data));

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
          ))}
        </ProductList>
      </ProductSection>
    </div>
  );
}

export default Home;
