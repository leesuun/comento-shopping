import styled from "styled-components";
import Navigation from "../components/Navigation";
import ProductItem from "../components/ProductItem";
import ThemeBtn from "../components/ThemeBtn";

const ThemeSection = styled.div``;
const ProductSection = styled.section``;
const ProductList = styled.ul``;

function Home() {
  return (
    <div>
      <div>
        <Navigation />
        <ThemeSection>
          <ThemeBtn></ThemeBtn>
          <ThemeBtn></ThemeBtn>
        </ThemeSection>
        <ProductSection>
          <ProductList>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </ProductList>
        </ProductSection>
      </div>
    </div>
  );
}

export default Home;
