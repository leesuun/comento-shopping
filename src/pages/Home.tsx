import Navigation from "../components/Navigation";
import ProductItem from "../components/ProductItem";
import ThemeBtn from "../components/ThemeBtn";
import { ProductList, ProductSection, ThemeSection } from "../css/pages/home";

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
