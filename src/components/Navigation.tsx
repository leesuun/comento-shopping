import styled from "styled-components";
import { GrayLine } from "../pages/Home";

export const NavWraaper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;
export const Nav = styled.nav``;

function Navigation() {
  return (
    <NavWraaper>
      <Nav>코멘토 쇼핑</Nav>
      <GrayLine style={{ height: "2px", marginTop: "20px" }} />
    </NavWraaper>
  );
}

export default Navigation;
