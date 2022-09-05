import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { GrayLine } from "../../pages/Home";
import { Pages } from "../../interface/interface";

const NavWraaper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Title = styled.h3``;

const Nav = styled.nav`
  position: relative;

  div {
    position: absolute;
    left: 20px;
    font-size: 1.5rem;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
`;

function Navigation() {
  const productMatch = useMatch(Pages.product);
  const basketMatch = useMatch(Pages.basket);
  const navigate = useNavigate();

  return (
    <NavWraaper>
      <Nav>
        {productMatch && (
          <div onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        )}
        {basketMatch && (
          <div onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        )}
        <Title onClick={() => navigate("/")}>코멘토 쇼핑</Title>
      </Nav>
      <GrayLine style={{ height: "2px", marginTop: "20px" }} />
    </NavWraaper>
  );
}

export default Navigation;
