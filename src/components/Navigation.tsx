import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { ProductInfo, productItems } from "../apis/productItem";
import { GrayLine } from "../pages/Home";

const NavWraaper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const Nav = styled.nav`
  position: relative;

  div {
    position: absolute;
    left: 20px;
    font-size: 1.5rem;
    border: none;
    background-color: inherit;
  }
`;

enum Pages {
  "home" = "/",
  "product" = "/product/:id",
  "basket" = "/basket",
}

function Navigation() {
  const productMatch = useMatch(Pages.product);
  const basketMatch = useMatch(Pages.basket);
  const [product, setProduct] = useState<ProductInfo[]>();

  useEffect(() => {
    if (!productMatch?.params.id) return;
    const { id } = productMatch.params;
    const findValues = Object.values(productItems);
    const products = findValues.map((value) =>
      value.items.filter((item) => item.name === id)
    );
    const product = products.filter((v) => v.length !== 0).flat();
    setProduct(product);
  }, [productMatch?.params.id]);

  return (
    <NavWraaper>
      <Nav>
        {productMatch && (
          <Link to={Pages.home}>
            <div>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          </Link>
        )}
        {product
          ? basketMatch && (
              <Link
                to={"/product/" + product[0].name}
                state={{
                  data: {
                    name: product[0].name,
                    description: product[0].description,
                    thumbnail: product[0].thumbnail,
                    price: product[0].price,
                  },
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
              </Link>
            )
          : null}
        코멘토 쇼핑
      </Nav>
      <GrayLine style={{ height: "2px", marginTop: "20px" }} />
    </NavWraaper>
  );
}

export default Navigation;
