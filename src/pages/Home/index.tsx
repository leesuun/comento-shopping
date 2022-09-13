import { useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";
import { useSetRecoilState } from "recoil";

import ThemeBtn from "./components/ThemeBtn";
import { Category } from "interface/interface";
import { categoryAtom, productItemAtom } from "atom";
import ProductList from "./components/ProductList";
import { data } from "mock/data";

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

function Home() {
  const setCategory = useSetRecoilState(categoryAtom);
  const setProductItem = useSetRecoilState(productItemAtom);

  const onClickBtn = (type: string) => setCategory(type);

  useEffect(() => {
    // try {
    //   axios({
    //     method: "get",
    //     url: "https://30600da0-86d1-44d3-8436-f6d4521eb12c.mock.pstmn.io/product",
    //     responseType: "json",
    //   }).then((response) => setProductItem(response.data));
    // } catch (err) {
    //   console.log("Error msg is ", err);
    // }
    setProductItem(data);
  }, [setProductItem]);

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
        <ProductList />
      </ProductSection>
    </div>
  );
}

export default Home;
